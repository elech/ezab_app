describe('Experiences service', function(){
	var ExpService, $httpBackend
	beforeEach(angular.mock.module('EZAB_APP'));
	beforeEach(inject(function(_$httpBackend_, ExperienceService){
		$httpBackend = _$httpBackend_;
		ExpService = ExperienceService;
		$httpBackend.when('GET', new RegExp(".*\.html")).respond(200);
	}))

	it('should exist', function(){
		expect(ExpService).toBeDefined();
	})


	describe('Editing', function(){
		it('Editing', function(){
			var exp = {name: "My prop name", code: 'jQuery.doStuff()', id: 2};
			$httpBackend.expectPUT('/webproperties/2/campaigns/1/experiences/2', {name: exp.name, code: exp.code}).respond(200);			
			$httpBackend.expectGET('/webproperties/2/campaigns/1/experiences').respond(200);
			ExpService.putExperience(2, 1, exp);
			$httpBackend.flush();
		});
	})



	describe('Creating', function(){
		it('should create an experience', function(){
			var exp = {name: "My prop name", code: 'jQuery.doStuff()', id: 2};
			$httpBackend.expectPOST('/webproperties/2/campaigns/1/experiences', {name: exp.name, code: exp.code}).respond(201);
			$httpBackend.expectGET('/webproperties/2/campaigns/1/experiences').respond(200);
			ExpService.createExperience(2, 1, exp);
			$httpBackend.flush();
		})
	})

	describe('Deleting', function(){
		it('should delete', function(){
			$httpBackend.expectDELETE('/webproperties/2/campaigns/1/experiences/1').respond(200);
			$httpBackend.expectGET('/webproperties/2/campaigns/1/experiences').respond(200);
			ExpService.deleteExperience(2,1,1);
			$httpBackend.flush();
		})
	})
})