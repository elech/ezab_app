'use-strict';
EZAB_APP.service('CampaignService', ['$rootScope', '$http', 'WebPropertiesService', '$state', '$stateParams', function($rootScope, $http, WebPropertiesService, $state, $stateParams){
	var that = this;
	this.campaigns = [];
	this.currentCampaign = {};


	$rootScope.$watch(function(){return $stateParams.propid}, function(newVal, oldVal){
		if(newVal != null){
			that.getCampaigns(newVal);
		}
	});

	$rootScope.$watch(function(){
		return $stateParams.cid;
	}, function(newVal, oldVal){
		if(newVal != null){
			that.getCampaign(newVal).success(function(data, status, headers){
				angular.copy(data, that.currentCampaign);
			})
		}
	})

	this.getCampaigns = function(propid){
		return $http.get('/webproperties/' + propid + '/campaigns').then(function(res){
			if(res.status = 200){
				angular.copy(res.data, that.campaigns);
			}
		})
	};

	this.getCampaign = function(cid){
		return $http.get('/webproperties/' + $stateParams.propid + "/campaigns/" + cid);
	}

	this.selectCampaign = function($index){
		$state.go('dash', {propid: $stateParams.propid, cid: that.campaigns[$index].id})
	}
}]);