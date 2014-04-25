EZAB_APP.controller('webpropertiesEditCtrl', ['$scope', 'WebPropertiesService', '$state', function($scope, WebPropertiesService, $state){
	$scope.WebPropertiesService = WebPropertiesService;

	$scope.tmpWebproperty = {
		name: angular.copy($scope.WebPropertiesService.currentWebproperty.name),
		url: angular.copy($scope.WebPropertiesService.currentWebproperty.url),
		id: angular.copy($scope.WebPropertiesService.currentWebproperty.id)
	}

	$scope.editSubmit = function(){
		$scope.WebPropertiesService.putWebproperty($scope.tmpWebproperty);
	}

	$scope.delProp = function(){
		$scope.WebPropertiesService.deleteWebproperty($scope.tmpWebproperty.id);
	}
}]);