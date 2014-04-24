describe('Webproperties service', function(){
	it('should exist', inject(function(WebPropertiesSession){
		expect(Session).toBeDefined();
	}))


	it('should save the token on fetch', inject(function(Session, $httpBackend){
		var username = "username";
		var password = "password";
		$httpBackend.when('POST', '/tokens').respond(201, {token: token});
		$httpBackend.expectPOST('/tokens', {username: username, password: password});
		Session.createToken(username, password)
		$httpBackend.flush();
	}))
})