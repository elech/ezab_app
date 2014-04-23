EZAB_APP.controller('webPropertiesMainCtrl', ['$scope', 'WebPropertiesService', '$state', function($scope, WebPropertiesService, $state){
	WebPropertiesService.fetchWebproperties();
	$scope.WebPropertiesService = WebPropertiesService;
	$scope.editWebproperty = function($index){
		$state.go('webprops.edit');
		$scope.WebPropertiesService.tmpWebproperty = angular.copy($scope.WebPropertiesService.webproperties[$index]);	
	}

	$scope.selectWebproperty = function($index){
		$scope.WebPropertiesService.currentWebpropertyIndex = $index;
	}
}]);