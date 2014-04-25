EZAB_APP.controller('experiencesListCtrl', ['$scope', '$state', '$stateParams', 'ExperienceService', function($scope, $state, $stateParams, ExperienceService){
	$scope.ExperienceService = ExperienceService
	ExperienceService.getExperiences($stateParams.propid, $stateParams.cid);

	$scope.editExperience = function($index){
		ExperienceService.showModalControl = true;
		$state.go('dash.edit');
		ExperienceService.setCurrentExperience(ExperienceService.experiences[$index]);
	}

	$scope.addExperience = function($index){
		ExperienceService.showModalControl = true;
		$state.go('dash');
	}
}]);