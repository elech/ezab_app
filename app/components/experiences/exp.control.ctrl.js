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

}]);