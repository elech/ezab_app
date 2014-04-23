'use strict';
var EZAB_APP = angular.module('EZAB_APP', ['ui.router']).config(['$stateProvider', function($stateProvider){
	$stateProvider
		.state('login', {
			url: '',
			views: {
				'header': { template: ''},
				'main': {templateUrl: '/public/components/login/login.html'}
			}
		})
		.state('dash', {
			url: 'dash',
			views: {
				'header': {templateUrl: '/public/components/header/header.html'},
				'main': {template: ''}
			}
		})
}])