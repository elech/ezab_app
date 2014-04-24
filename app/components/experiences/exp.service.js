'use-strict';
EZAB_APP.service('ExperienceService', ['$rootScope', '$http', '$state', '$stateParams', function($rootScope, $http, $state, $stateParams){
	var that = this;
	this.experiences = [];
	this.showModalControl = false;
	this.currentExperience = {}

	this.getModalValue = function(){
		return that.showModalControl;
	}

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

	this.editExperience = function($index){
		that.currentExperience = angular.copy(that.experiences[$index]);	
	}

	this.setCurrentExperience = function(exp){
		that.currentExperience = angular.copy(exp)
	}
}]);