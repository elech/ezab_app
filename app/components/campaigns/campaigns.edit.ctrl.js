EZAB_APP.controller('campaignsEditCtrl', ['$scope', 'CampaignService', '$stateParams', '$state', function($scope, CampaignService, $stateParams, $state){
	$scope.CampaignService = CampaignService;
	
	$scope.tmp = {
		name: angular.copy($scope.CampaignService.currentCampaign.name),
		start: angular.copy($scope.CampaignService.currentCampaign.start),
		success: angular.copy($scope.CampaignService.currentCampaign.success),
		id: angular.copy($scope.CampaignService.currentCampaign.id)
	}
	
	$scope.editCampaign = function(){
		$scope.CampaignService.editCampaign($stateParams.propid, $scope.tmp);
	}

	$scope.delCampaign = function(){
		$scope.CampaignService.deleteCampaign($stateParams.propid, $scope.tmp).then(function(res){
			if(res.status === 200){
				$state.go('campaigns', {cid: null});
			}
		})
	}
}]);