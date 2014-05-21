EZAB_APP.controller('webpropertiesEditCtrl', ['$scope', 'WebPropertiesService', '$state', '$stateParams', 'flash', function($scope, WebPropertiesService, $state, $stateParams, flash){
	$scope.WebPropertiesService = WebPropertiesService;

	$scope.propid = $stateParams.propid;
	$scope.tmpWebproperty = {
		name: angular.copy($scope.WebPropertiesService.currentWebproperty.name),
		url: angular.copy($scope.WebPropertiesService.currentWebproperty.url),
		id: angular.copy($scope.WebPropertiesService.currentWebproperty.id)
	}

	$scope.editSubmit = function(){
		$scope.WebPropertiesService.putWebproperty($scope.tmpWebproperty).then(function(res){
			if(res.status === 200){
				flash.success = "Updated";
			}
		})
	}

	$scope.delProp = function(){
		$scope.WebPropertiesService.deleteWebproperty($scope.tmpWebproperty.id).then(function(res){
			if(res.status === 200){
				flash.success = "Deleted";
			}
		})
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