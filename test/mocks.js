
var EZAB_DEV	= angular.module('EZAB_DEV', ['EZAB_APP', 'ngMockE2E']).run(function($httpBackend){
		$httpBackend.whenPOST(/.*/).passThrough();
		$httpBackend.whenDELETE(/tokens.*/).passThrough();
		$httpBackend.whenGET(/webproperties.*/).passThrough();
		$httpBackend.whenPOST(/webproperties.*/).passThrough();
		$httpBackend.whenPUT(/webproperties.*/).passThrough();
		$httpBackend.whenDELETE(/webproperties.*/).passThrough();
		$httpBackend.whenGET(/campaigns.*/).passThrough();
/*		$httpBackend.whenGET(/webproperties\/\d+\/campaigns\/\d+\/experiences/).respond(function(){
			return [200, [{id:1, name: 'Red header', code: '$("#header").css({"background-color": "red"});'}, {id:1, name: 'Red button', code: '$("#header").css({"background-color": "red"});'}]]	
		})

		$httpBackend.whenGET('/webproperties').respond(function(method){
			return [200, [{id: 1, name: 'Amazon Web Services', url: 'http://aws.amazon.com'}, {id:2, name: 'Amazon', url: 'http://amazon.com'}]];
		})

		$httpBackend.whenGET('/webproperties/1').respond(function(method){
			return [200, {id: 1, name: 'Amazon Web Services', url: 'http://aws.amazon.com'}];
		})

		$httpBackend.whenGET('/webproperties/2').respond(function(method){
			return [200, {id:2, name: 'Amazon', url: 'http://amazon.com'}];
		})

		$httpBackend.whenPUT(/webproperties\/\d+$/).respond(function(method, url, data, headers){
			return [200, data];
		})

		$httpBackend.whenPOST('/webproperties').respond(function(method, url, data, headers){
			return [201, data];
		})
		
		$httpBackend.whenGET(/webproperties\/\d+\/campaigns$/).respond(function(method, url, data, headers){
			return [200, [{id:1, name: 'HomePage', start: 'return window.location.pathname === "/"', success: 'return window.location.pathname === "/thankyou"'}, {id: 2, name: 'Other page', start: 'return window.location.pathname === "/wat"', success: 'return window.location.pathname === "/thankyou2"'}]]
		})

		$httpBackend.whenGET(/webproperties\/\d+\/campaigns\/1/).respond(function(method){
			return [200, {id:1, name: 'HomePage', start: 'return window.location.pathname === "/"', success: 'return window.location.pathname === "/thankyou"'}];
		})

		$httpBackend.whenGET(/webproperties\/\d+\/campaigns\/2/).respond(function(method){
			return [200, {id: 2, name: 'Other page', start: 'return window.location.pathname === "/wat"', success: 'return window.location.pathname === "/thankyou2"'}];
		});*/

		
		$httpBackend.whenGET(/\/public\/components\/.*\/.*html/).passThrough();
	});
