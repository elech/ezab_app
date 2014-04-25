'use-strict';
EZAB_APP.service('ExperienceService', ['$rootScope', '$http', '$state', '$stateParams', '$q', function($rootScope, $http, $state, $stateParams, $q){
	var that = this;
	this.experiences = [];
	this.showModalControl = false;
	this.currentExperience = {}

	this.getModalValue = function(){
		return that.showModalControl;
	}

	this.getExperiences = function(propid, cid){
		return $http.get('/webproperties/' + propid + '/campaigns/' + cid + '/experiences').then(function(res){
			if(res.status === 200){
				angular.copy(res.data, that.experiences);
				console.log(res.data);
			}
		})
	};

	this.getExperience = function(eid){
		return $http.get('/webproperties/' + $stateParams.propid + "/campaigns/" + $stateParams.cid + '/experiences/' + eid);
	}


	this.putExperience = function(propid, cid, exp){
		var deferred = $q.defer();
		$http.put('/webproperties/' + propid + '/campaigns/' + cid + '/experiences/' + exp.id, {name: exp.name, code: exp.code}).then(function(res){
			if(res.status === 200){
				that.getExperiences(propid, cid);
				console.log(res.data);
				deferred.resolve(res);
			}else{
				deferred.reject(res);
			}
		})
		return deferred.promise;
	}

	this.createExperience = function(propid, cid, exp){
		return $http.post('/webproperties/' + propid + '/campaigns/' + cid + '/experiences', {name: exp.name, code: exp.code}).then(function(res){
			if(res.status === 201){
				that.getExperiences(propid, cid);
			}
		})
	}

	this.deleteExperience = function(propid, cid, eid){
		return $http.delete('/webproperties/' + propid + '/campaigns/' + cid + '/experiences/' + eid).then(function(res){
			if(res.status === 200){
				that.getExperiences(propid, cid);
			}
		})
	}

	this.editExperience = function($index){
		that.currentExperience = angular.copy(that.experiences[$index]);	
	}

	this.setCurrentExperience = function(exp){
		that.currentExperience = angular.copy(exp)
	}
}]);