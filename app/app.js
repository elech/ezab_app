'use strict';
angular.module('ezab_app', ['ui.router']).config(['$stateProvider', function($stateProvider){
	$stateProvider
		.state('login', {
			url: '',
			views: {
				'header': { template: ''},
				'main': {templateUrl: '/public/components/login/login.html'}
			}
		});
}]);