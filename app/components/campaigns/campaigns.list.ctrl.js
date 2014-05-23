EZAB_APP.controller('campaignsListCtrl', ['$scope', 'CampaignService', '$state', '$stateParams', 'WebPropertiesService', function($scope, CampaignService, $state, $stateParams, WebPropertiesService){
	$scope.WebPropertiesService = WebPropertiesService;
	$scope.CampaignService = CampaignService;

	$scope.editCampaign = function($index){
		$scope.CampaignService.currentCampaign = $scope.CampaignService.campaigns[$index];
		$state.go('campaigns.edit', {propid: $scope.WebPropertiesService.currentWebproperty.id, cid: $scope.CampaignService.currentCampaign.id})
	}

	$scope.addRoute = function(){
		$state.go('campaigns');
	}
}]);