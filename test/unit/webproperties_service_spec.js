describe('Webproperties service', function(){
	var PropService, $httpBackend
	beforeEach(angular.mock.module('EZAB_APP'));
	beforeEach(inject(function(_$httpBackend_, WebPropertiesService){
		$httpBackend = _$httpBackend_;
		PropService = WebPropertiesService;
		$httpBackend.when('GET', new RegExp(".*\.html")).respond(200);
	}))

	it('should exist', function(){
		expect(PropService).toBeDefined();
	})


	describe('Editing', function(){
		it('Editing', function(){
			var prop = {name: "My prop name", url: 'http://www.google.com', id: 2};
			$httpBackend.expectPUT('/webproperties/2').respond(200);
			$httpBackend.expectGET('/webproperties').respond(200);
			
			PropService.putWebproperty(prop);
			$httpBackend.flush();
		})
	})

	describe('Creating', function(){
		it('should create a webprop', function(){
			var prop = {name: "My prop name", url: 'http://www.google.com', id: 2};
			$httpBackend.expectPOST('/webproperties', {name: prop.name, url: prop.url}).respond(201);
			$httpBackend.expectGET('/webproperties').respond(200);
			PropService.createWebproperty({name: prop.name, url: prop.url})
			$httpBackend.flush();
		})
	})

	describe('Deleting', function(){
		it('should delete', function(){
			
			$httpBackend.expectDELETE('/webproperties/1').respond(200);
			$httpBackend.expectGET('/webproperties').respond(200)
			PropService.deleteWebproperty(1);
			$httpBackend.flush();
		})
	})
})