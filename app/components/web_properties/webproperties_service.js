'use-strict';
EZAB_APP.service('WebPropertiesService', ['$rootScope', '$http', '$state', function($rootScope, $http, $state){
	var that = this

	this.webproperties = [];

	this.currentWebpropertyIndex = null;

	this.tmpWebproperty;

	this.putWebproperty = function(){
		return $http.put('/webproperties/' + this.tmpWebproperty.id, this.tmpWebproperty).then(function(res){
			if(res.status === 200){
				angular.copy(res.data, that.webproperties[that.currentWebpropertyIndex]);
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

	this.createWebproperty = function(propForm){
		return $http.post('/webproperties', {name: propForm.name.$modelValue, url: propForm.url.$modelValue} ).then(function(res){
			console.log(res);
			if(res.status === 201){
				var tmpProps = angular.copy(that.webproperties);
				tmpProps.push(res.data);
				angular.copy(tmpProps, that.webproperties);
			}
		})
	}
}]);