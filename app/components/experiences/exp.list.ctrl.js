EZAB_APP.controller('experiencesListCtrl', ['$scope', '$state', '$stateParams', 'ExperienceService', function($scope, $state, $stateParams, ExperienceService){
	$scope.ExperienceService = ExperienceService;
	$scope.ExperienceService.getExperiences($stateParams.propid, $stateParams.cid);
}]);