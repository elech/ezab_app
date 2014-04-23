
var EZAB_DEV	= angular.module('EZAB_DEV', ['EZAB_APP', 'ngMockE2E']).run(function($httpBackend){
		$httpBackend.whenPOST('/tokens').respond(function(method){
			return [201, {token: 'abc123secure'}];
		})
		$httpBackend.whenGET(/\/public\/components\/.*\/.*html/).passThrough();
	});
