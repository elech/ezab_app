EZAB_APP.controller('experiencesEditCtrl',
	['$scope', '$stateParams', 'ExperienceService', '$modalInstance', 'tmp', function($scope, $stateParams,ExperienceService, $modalInstance, tmp){
		

		$scope.tmp = tmp;
		$scope.editExperience = function(){
			ExperienceService.putExperience($stateParams.propid, $stateParams.cid, $scope.tmp).then(function(res){
				if(res.status === 200){
					$modalInstance.close();
				}
			})
		}

		$scope.delExperience = function(){
			ExperienceService.deleteExperience($stateParams.propid, $stateParams.cid, tmp.id).then(function(){
				$modalInstance.close();
			})
		}

		$scope.$modalInstance = $modalInstance;
	}])