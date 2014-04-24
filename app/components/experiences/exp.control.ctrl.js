EZAB_APP.controller('experiencesControlCtrl', ['$scope', '$state', '$stateParams', 'ExperienceService', function($scope, $state, $stateParams, ExperienceService){
	$scope.modalShown = ExperienceService.showModalControl;
	
	
	
	$scope.$watch(function(){
		return ExperienceService.showModalControl
	}, function(newVal, oldVal){
		$scope.modalShown = ExperienceService.showModalControl
		$scope.tmp = ExperienceService.currentExperience;
	})

}]);