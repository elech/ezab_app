(function(){
	angular.module('mocks', ['EZAB_APP', 'ngMockE2E']).run(function($httpBackend){
		console.log('dat mocks');
		$httpBackend.whenPOST('/tokens').respond(function(method){
			console.log(method)
			return [201];
		})
	});
})()