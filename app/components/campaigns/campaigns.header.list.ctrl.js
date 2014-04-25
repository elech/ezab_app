EZAB_APP.controller('campaignsHeaderListCtrl', ['$scope', 'CampaignService', '$state', 'WebPropertiesService', function($scope, CampaignService, $state, WebPropertiesService){
	$scope.CampaignService = CampaignService;
	$scope.WebPropertiesService = WebPropertiesService;
}]);