'use-strict';
EZAB_APP.service('CampaignService', ['$rootScope', '$http', 'WebPropertiesService', '$state', function($rootScope, $http, WebPropertiesService, $state){
	var that = this;
	this.campaigns = [];
	$rootScope.$watch(function(){return WebPropertiesService.currentWebpropertyIndex;}, function(newVal, oldVal){
		if(newVal !== null){
			that.getCampaigns(newVal).then(function(){
				$state.go('dash');
			})
		}
	});

	this.getCampaigns = function(propid){
		return $http.get('/webproperties/' + propid + '/campaigns').then(function(res){
			if(res.status = 200){
				that.campaigns = res.data;
			}
		})
	};
}]);