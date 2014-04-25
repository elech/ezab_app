EZAB_APP.controller('webpropertiesAddCtrl', ['$scope', 'WebPropertiesService', '$state', function($scope, WebPropertiesService, $state){
	$scope.WebPropertiesService = WebPropertiesService;

	$scope.prop = {};
	$scope.createWebproperty = function(){
		$scope.WebPropertiesService.createWebproperty($scope.prop).then(function(res){
			if(res.status === 201){
				$scope.prop = {};
				$scope.propAddForm.$setPristine();
			}
		})
	}
}]);