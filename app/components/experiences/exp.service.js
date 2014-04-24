'use-strict';
EZAB_APP.service('ExperienceService', ['$rootScope', '$http', '$state', '$stateParams', function($rootScope, $http, $state, $stateParams){
	var that = this;
	this.experiences = [];

	this.getExperiences = function(propid, cid){
		return $http.get('/webproperties/' + propid + '/campaigns/' + cid + '/experiences').then(function(res){
			if(res.status = 200){
				angular.copy(res.data, that.experiences);
			}
		})
	};

	this.getExperience = function(eid){
		return $http.get('/webproperties/' + $stateParams.propid + "/campaigns/" + $stateParams.cid + '/experiences/' + eid);
	}
}]);