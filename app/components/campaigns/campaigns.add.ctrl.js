EZAB_APP.controller('campaignsAddCtrl', ['$scope', 'CampaignService', '$stateParams', function($scope, CampaignService, $stateParams){
	$scope.CampaignService = CampaignService;

	$scope.camp = {};
	
	$scope.createCampaign = function(){
		$scope.CampaignService.createCampaign($stateParams.propid, $scope.camp).then(function(res){
			if(res.status === 201){
				$scope.camp = {};
				$scope.campaignAddForm.$setPristine();
			}
		})
	}
}]);