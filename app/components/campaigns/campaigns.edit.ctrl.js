EZAB_APP.controller('campaignsEditCtrl', ['$scope', 'CampaignService', '$state', function($scope, CampaignService, $state){
	$scope.CampaignService = CampaignService;
	
	$scope.tmp = {
		name: angular.copy($scope.CampaignService.currentCampaign.name),
		start: angular.copy($scope.CampaignService.currentCampaign.start),
		success: angular.copy($scope.CampaignService.currentCampaign.success)
	}
	
	$scope.editSubmit = function(){

	}
}]);