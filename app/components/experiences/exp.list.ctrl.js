EZAB_APP.controller('experiencesListCtrl', 
	['$scope', '$state', '$stateParams', 'ExperienceService', '$modal',
	function($scope, $state, $stateParams, ExperienceService, $modal){
	$scope.ExperienceService = ExperienceService;
	ExperienceService.getExperiences($stateParams.propid, $stateParams.cid);

	$scope.editExperience = function($index){
		var modalInstance = $modal.open({
			templateUrl: '/public/components/experiences/exp.edit.html',
			backdrop: false,
			windowTemplateUrl: '/public/components/bootstrap/window.html',
			size: 'lg',
			controller: 'experiencesEditCtrl',
			resolve: {
				tmp: function(){
					return ExperienceService.experiences[$index];
				}
			}
		});
	}

	$scope.addExperience = function($index){
		var modalInstance = $modal.open({
			templateUrl: '/public/components/experiences/exp.add.html',
			backdrop: false,
			windowTemplateUrl: '/public/components/bootstrap/window.html',
			controller: 'experiencesAddCtrl'
		});
	}
}]);