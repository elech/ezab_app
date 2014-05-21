'use-strict';
EZAB_APP.service('WebPropertiesService', ['$rootScope', '$http', '$state', '$stateParams', '$q', function($rootScope, $http, $state, $stateParams, $q){
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
		var deferred = $q.defer();
		$http.put('/webproperties/' + prop.id, {name: prop.name, url: prop.url}).then(function(res){
			if(res.status === 200){
				that.fetchWebproperties();
				deferred.resolve(res);
				angular.copy(res.data, that.currentWebproperty);
			}else{
				deferred.reject(res);
			}
		})
		return deferred.promise;
	}

	this.fetchWebproperties = function(){
		return $http.get('/webproperties').then(function(res){
			if(res.status === 200){
				angular.copy(res.data, that.webproperties);
			}
			return 
		})
	}

	this.createWebproperty = function(prop){
		var deferred = $q.defer();
		$http.post('/webproperties', {name: prop.name, url: prop.url} ).then(function(res){
			if(res.status === 201){
				deferred.resolve(res);
				that.fetchWebproperties();
			}else{
				deferred.reject(res);
			}

		})
		return deferred.promise;
	}

	this.deleteWebproperty = function(id){
		var deferred = $q.defer();
		$http.delete('/webproperties/' + id).then(function(res){
			if(res.status === 200){
				deferred.resolve(res);
				that.fetchWebproperties();
			}
		}, function(res){
			deferred.reject(res);
		})
		return deferred.promise;
	}

	this.selectWebproperty = function($index){
		$state.go('campaigns', {propid: that.webproperties[$index].id})
	}

	this.publishWebproperty = function(propid){
		return $http.get('/webproperties/' + propid + '/publish');
	}
}]);