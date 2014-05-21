EZAB_APP.controller('experiencesAddCtrl',
	['$scope', 'ExperienceService', '$stateParams', '$modalInstance', function($scope, ExperienceService, $stateParams, $modalInstance){
		$scope.tmp = {};

		$scope.createExperience = function(){
			ExperienceService.createExperience($stateParams.propid, $stateParams.cid, $scope.tmp).then(function(res){
				if(res.status === 201){
					$modalInstance.close();
				}
			})
		}
	}])