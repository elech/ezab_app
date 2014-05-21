EZAB_APP.controller('webpropertiesAddCtrl', ['$scope', 'WebPropertiesService', '$state', 'flash', function($scope, WebPropertiesService, $state, flash){
	$scope.WebPropertiesService = WebPropertiesService;

	$scope.prop = {};
	$scope.createWebproperty = function(){
		$scope.WebPropertiesService.createWebproperty($scope.prop).then(function(res){
			if(res.status === 201){
				$scope.prop = {};
				$scope.propAddForm.$setPristine();
				flash.success = "Created";
			}
		})
	}
}]);