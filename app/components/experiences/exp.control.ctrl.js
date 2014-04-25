EZAB_APP.controller('experiencesControlCtrl', ['$scope', '$state', '$stateParams', 'ExperienceService', function($scope, $state, $stateParams, ExperienceService){
	$scope.modalShown = ExperienceService.showModalControl;
	
	$scope.$watch(function(){
		return ExperienceService.showModalControl
	}, function(newVal, oldVal){
		$scope.modalShown = ExperienceService.showModalControl
		$scope.tmp = ExperienceService.currentExperience;
	})

	$scope.editExperience = function(){
		ExperienceService.putExperience($stateParams.propid, $stateParams.cid, $scope.tmp).then(function(res){
			if(res.status === 200){
				ExperienceService.showModalControl = false;
			}
		})
	}

	$scope.delExperience = function(){
		ExperienceService.deleteExperience($stateParams.propid, $stateParams.cid, $scope.tmp.id).then(function(res){
			if(res.status === 200){
				ExperienceService.showModalControl = false;
			}
		})
	}

	$scope.createExperience = function(){
		ExperienceService.createExperience($stateParams.propid, $stateParams.cid, {name: $scope.tmp.name, code: $scope.tmp.code}).then(function(res){
			if(res.status === 201){
				ExperienceService.showModalControl = false;
			}
		})
	}

}]);