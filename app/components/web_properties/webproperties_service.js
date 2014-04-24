'use-strict';
EZAB_APP.service('WebPropertiesService', ['$rootScope', '$http', '$state', '$stateParams', function($rootScope, $http, $state, $stateParams){
	var that = this
	this.webproperties = [];
	this.currentWebproperty = {}

	$http.get('/webproperties').success(function(data, status, headers){
		angular.copy(data, that.webproperties);
	});

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

	this.putWebproperty = function(data){
		return $http.put('/webproperties/' + $stateParams.propid, data).then(function(res){
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

/*	this.createWebproperty = function(propForm){
		return $http.post('/webproperties', {name: propForm.name.$modelValue, url: propForm.url.$modelValue} ).then(function(res){
			if(res.status === 201){
				var tmpProps = angular.copy(that.webproperties);
				tmpProps.push(res.data);
				angular.copy(tmpProps, that.webproperties);
			}
		})
	}*/

	this.selectWebproperty = function($index){
		$state.go('campaigns', {propid: that.webproperties[$index].id})
	}
}]);