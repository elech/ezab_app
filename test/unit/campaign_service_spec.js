describe('Campaign service', function(){
	var CampService, $httpBackend
	beforeEach(angular.mock.module('EZAB_APP'));
	beforeEach(inject(function(_$httpBackend_, CampaignService){
		$httpBackend = _$httpBackend_;
		CampService = CampaignService;
		$httpBackend.when('GET', new RegExp(".*\.html")).respond(200);
	}))

	it('should exist', function(){
		expect(CampService).toBeDefined();
	})


	describe('Getting', function(){
		it('should get all campaigns', function(){
			$httpBackend.expectGET('/webproperties/1/campaigns').respond(200);
			CampService.getCampaigns(1);
			$httpBackend.flush()
		})
	})

	describe('Editing', function(){
		it('Editing', function(){
			var camp = {id: 1, name: 'datCamp', start: 'function', success: 'otherfunc'};
			$httpBackend.expectPUT('/webproperties/1/campaigns/1', {name: camp.name, start: camp.start, success: camp.success}).respond(200);
			$httpBackend.expectGET('/webproperties/1/campaigns').respond(200);
			CampService.editCampaign(1, camp);
			$httpBackend.flush()
		})
	})

	describe('Creating', function(){
		it('should create a campaign', function(){
			var camp = {name: 'datCamp', start: 'function', success: 'otherfunc'};
			$httpBackend.expectPOST('/webproperties/1/campaigns', camp).respond(201);
			$httpBackend.expectGET('/webproperties/1/campaigns').respond(200);
			CampService.createCampaign(1, camp);
			$httpBackend.flush();
		})
	})

	describe('Deleting', function(){
		it('should delete', function(){
			var camp = {id: 1, name: 'datCamp', start: 'function', success: 'otherfunc'};
			$httpBackend.expectDELETE('/webproperties/1/campaigns/1').respond(200);
			$httpBackend.expectGET('/webproperties/1/campaigns').respond(200);
			CampService.deleteCampaign(1, camp);
			$httpBackend.flush();
		})
	})
})