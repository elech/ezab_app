'use-strict';
EZAB_APP.service('WebPropertiesService', ['$rootScope', '$http', '$state', function($rootScope, $http, $state){
	var web_properties = [],
		current_prop = {},
		that = this;

	this.getCurrentProperty = function(){
		return current_prop;
	}

	this.setCurrentProperty = function(webprop){
		angular.copy(webprop, current_prop);
	}

	this.getWebproperties = function(){
		return web_properties;
	}
	
	this.editWebproperty = function(webprop){
		that.setCurrentProperty(webprop);
		$state.go('webprops.edit');
	}

	this.fetchWebproperties = function(){
		return $http.get('/webproperties').then(function(res){
			if(res.status === 200){
				angular.copy(res.data, web_properties);
			}
		})
	}
}]);