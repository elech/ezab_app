describe('login homepage', function(){
	it('should move to /webproperties on login', function(){
		browser.get('http://localhost:3000');
		element(by.model('email')).sendKeys('exp@gmail.com');
		element(by.model('password')).sendKeys('password');
		element(by.id('submit_btn')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/webproperties');
	});

	it('should display a flash message on login failure', function(){
		browser.get('http://localhost:3000');
		element(by.model('email')).sendKeys('exp@gmail.com');
		element(by.model('password')).sendKeys('password1');
		element(by.id('submit_btn')).click();
		
		expect(element(by.binding('flash.message')).getText()).toBe('Invalid email / password');
	})
})