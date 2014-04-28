EZAB_APP.controller('webpropertiesEditCtrl', ['$scope', 'WebPropertiesService', '$state', '$stateParams', function($scope, WebPropertiesService, $state, $stateParams){
	$scope.WebPropertiesService = WebPropertiesService;

	$scope.propid = $stateParams.propid;
	$scope.tmpWebproperty = {
		name: angular.copy($scope.WebPropertiesService.currentWebproperty.name),
		url: angular.copy($scope.WebPropertiesService.currentWebproperty.url),
		id: angular.copy($scope.WebPropertiesService.currentWebproperty.id)
	}

	$scope.editSubmit = function(){
		$scope.WebPropertiesService.putWebproperty($scope.tmpWebproperty);
	}

	$scope.delProp = function(){
		$scope.WebPropertiesService.deleteWebproperty($scope.tmpWebproperty.id);
	}

	$scope.publishWebproperty = function(){
		WebPropertiesService.publishWebproperty($stateParams.propid).then(function(res){			
			console.log(res);
			var hiddenElement = document.createElement('a');
    	hiddenElement.href = 'data:text/javascript,' + encodeURI(res.data);
    	hiddenElement.target = '_blank';
    	hiddenElement.download = 'ezab.js';
    	hiddenElement.click();
		})
	}

}]);