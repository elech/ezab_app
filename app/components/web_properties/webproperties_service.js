'use-strict';
EZAB_APP.service('WebPropertiesService', ['$rootScope', '$http', '$state', '$stateParams', function($rootScope, $http, $state, $stateParams){
	var that = this
	this.webproperties = [];
	this.currentWebproperty = {}

	$rootScope.$watch(function(){
		return $stateParams.propid;
	}, function(newVal, oldVal){
		if(newVal != null){
			that.getWebproperty(newVal).success(function(data, status, headers){
				angular.copy(data, that.currentWebproperty);
			})
		}
	})

	this.getWebproperty = function(propid){
		return $http.get('/webproperties/' + propid);
	}

	this.putWebproperty = function(prop){
		return $http.put('/webproperties/' + prop.id, {name: prop.name, url: prop.url}).then(function(res){
			if(res.status === 200){
				that.fetchWebproperties();
			}
		})
	}

	this.fetchWebproperties = function(){
		return $http.get('/webproperties').then(function(res){
			if(res.status === 200){
				angular.copy(res.data, that.webproperties);
			}
		})
	}

	this.createWebproperty = function(prop){
		return $http.post('/webproperties', {name: prop.name, url: prop.url} ).then(function(res){
			if(res.status === 201){
				that.fetchWebproperties();
			}
		})
	}

	this.deleteWebproperty = function(id){
		return $http.delete('/webproperties/' + id).then(function(res){
			if(res.status === 200){
				that.fetchWebproperties();
			}
		})
	}

	this.selectWebproperty = function($index){
		$state.go('campaigns', {propid: that.webproperties[$index].id})
	}
}]);