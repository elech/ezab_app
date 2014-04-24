EZAB_APP.controller('webpropertiesEditCtrl', ['$scope', 'WebPropertiesService', '$state', function($scope, WebPropertiesService, $state){
	$scope.WebPropertiesService = WebPropertiesService;

	$scope.tmpWebproperty = {
		name: angular.copy($scope.WebPropertiesService.currentWebproperty.name),
		url: angular.copy($scope.WebPropertiesService.currentWebproperty.url),
	}
	$scope.editSubmit = function(){

	}
}]);