'use-strict';
EZAB_APP.service('CampaignService', ['$rootScope', '$http', 'WebPropertiesService', '$state', '$stateParams', '$q', function($rootScope, $http, WebPropertiesService, $state, $stateParams, $q){
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
			if(res.status === 200){
				angular.copy(res.data, that.campaigns);
			}
		})
	};

	this.editCampaign = function(propid, campaign){
		return $http.put('/webproperties/' + propid + '/campaigns/' + campaign.id, {name: campaign.name, start: campaign.start, success: campaign.success}).then(function(res){
			if(res.status === 200){
				that.getCampaigns(propid);
				angular.copy(res.data, that.currentCampaign);
			}
		})
	}

	this.createCampaign = function(propid, campaign){
		var deferred = $q.defer();
		$http.post('/webproperties/' + propid + '/campaigns', campaign).then(function(res){
			if(res.status === 201){
				that.getCampaigns(propid);
				deferred.resolve(res);
			}else{
				deferred.reject(res);
			}
		})
		return deferred.promise;
	}

	this.getCampaign = function(cid){
		return $http.get('/webproperties/' + $stateParams.propid + "/campaigns/" + cid);
	}

	this.deleteCampaign = function(propid, campaign){
		var deferred = $q.defer();
		$http.delete('/webproperties/'+propid+'/campaigns/' + campaign.id).then(function(res){
			if(res.status === 200){
				that.getCampaigns(propid);
				deferred.resolve(res);
			}else{
				deferred.reject(res);
			}
		})
		return deferred.promise;
	}

	this.selectCampaign = function($index){
		$state.go('dash', {propid: $stateParams.propid, cid: that.campaigns[$index].id})
	}
}]);