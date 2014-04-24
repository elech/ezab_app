EZAB_APP.controller('campaignsListCtrl', ['$scope', 'CampaignService', '$state', '$stateParams', function($scope, CampaignService, $state, $stateParams){
	$scope.CampaignService = CampaignService;

	$scope.selectCampaign = $scope.CampaignService.selectCampaign;

	$scope.editCampaign = function($index){
		$scope.CampaignService.currentCampaign = $scope.CampaignService.campaigns[$index];
		$state.go('campaigns.edit', {propid: $stateParams.propid, cid: $scope.CampaignService.currentCampaign.id})
	}
}]);