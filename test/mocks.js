
var EZAB_DEV	= angular.module('EZAB_DEV', ['EZAB_APP', 'ngMockE2E']).run(function($httpBackend){
		$httpBackend.whenPOST('/tokens').respond(function(method){
			return [201, {token: 'abc123secure'}];
		})

		$httpBackend.whenGET('/webproperties').respond(function(method){
			return [200, [{id: 1, name: 'Amazon Web Services', url: 'http://aws.amazon.com'}, {id:2, name: 'Amazon', url: 'http://amazon.com'}]];
		})

		$httpBackend.whenPUT(/webproperties\/\d+$/).respond(function(method, url, data, headers){
			return [200, data];
		})

		$httpBackend.whenPOST('/webproperties').respond(function(method, url, data, headers){
			return [201, data];
		})
		$httpBackend.whenGET(/\/public\/components\/.*\/.*html/).passThrough();
	});
