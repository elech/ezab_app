describe('Session service', function(){
	var storage = {}, token;
	beforeEach(angular.mock.module('EZAB_APP'));
	beforeEach(inject(function(Session){
		token = 'abc123';
		//fake storage object
		var storage = {};
		//in newer versions, its  .and.callFake()
		spyOn(Session, "setToken").andCallFake(function(tk){
			storage["token"] = tk;
		})
		spyOn(Session, "getToken").andCallFake(function(){
			return storage["token"];
		})
	}));

	afterEach(function(){
		storage = {};
	})

	it('should exist', inject(function(Session){
		expect(Session).toBeDefined();
	}))

	it('should save a token to session storage', inject(function(Session){
		Session.setToken(token);
		expect(Session.getToken()).toEqual(token);
	}))

	it('should save the token on fetch', inject(function(Session, $httpBackend){
		var username = "username";
		var password = "password";
		$httpBackend.when('POST', '/tokens').respond(201, {token: token});
		$httpBackend.expectPOST('/tokens', {username: username, password: password});
		Session.createToken(username, password)
		$httpBackend.flush();
		expect(Session.getToken()).toEqual(token);
	}))

	it('should remove token on logout', inject(function(Session, $window, $httpBackend){
		$window.sessionStorage.setItem('token', 'abcaaa');
		$httpBackend.when('DELETE', '/tokens').respond(200);
		$httpBackend.expectDELETE('/tokens');
		Session.logout();
		$httpBackend.flush();
		expect(Session.getToken()).toBeUndefined();
	}))
})