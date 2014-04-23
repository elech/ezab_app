EZAB_APP.controller('webPropertiesMainCtrl', ['$scope', 'WebPropertiesService', function($scope, WebPropertiesService){
	$scope.web_properties = WebPropertiesService.getWebproperties();
	WebPropertiesService.fetchWebproperties();

	$scope.current_prop = WebPropertiesService.getCurrentProperty();

	$scope.editProperty = WebPropertiesService.editWebproperty;
}]);