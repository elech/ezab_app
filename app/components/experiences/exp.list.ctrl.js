EZAB_APP.controller('experiencesListCtrl', ['$scope', '$state', '$stateParams', 'ExperienceService', function($scope, $state, $stateParams, ExperienceService){
	$scope.experiences = ExperienceService.experiences;
	ExperienceService.getExperiences($stateParams.propid, $stateParams.cid);

	$scope.editExperience = function($index){
		ExperienceService.showModalControl = true;
		$state.go('dash.edit');
		ExperienceService.setCurrentExperience($scope.experiences[$index]);
		console.log(ExperienceService.currentExperience);
	}
}]);