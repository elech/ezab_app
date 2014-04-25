EZAB_APP.controller('campaignsEditCtrl', ['$scope', 'CampaignService', '$stateParams', function($scope, CampaignService, $stateParams){
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
}]);