EZAB_APP.controller('webpropertiesListCtrl', ['$scope', 'WebPropertiesService', '$state', function($scope, WebPropertiesService, $state){
	$scope.WebPropertiesService = WebPropertiesService;
	$scope.WebPropertiesService.fetchWebproperties();
	
	$scope.editWebproperty = function($index){
		WebPropertiesService.currentWebproperty = $scope.WebPropertiesService.webproperties[$index];
		$state.go('webprops.edit', {propid: $scope.WebPropertiesService.currentWebproperty.id}, {reload: true})
	}
}]);