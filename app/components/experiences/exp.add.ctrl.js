EZAB_APP.controller('experiencesAddCtrl',
	['$scope', 'ExperienceService', '$stateParams', '$modalInstance', 'flash', function($scope, ExperienceService, $stateParams, $modalInstance, flash){
		$scope.tmp = {};
		$scope.$modalInstance = $modalInstance;
		$scope.createExperience = function(){
			ExperienceService.createExperience($stateParams.propid, $stateParams.cid, $scope.tmp).then(function(res){
				if(res.status === 201){
					$modalInstance.close();
					flash.success = "Created. Data will be available as it comes in"
				}
			})
		}
	}])