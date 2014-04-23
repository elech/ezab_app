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
			url: '/dash',
			views: {
				'header': {templateUrl: '/public/components/header/header.html'},
				'main': {template: 'asdf'}
			}
		})
		.state('webprops', {
			url: '/webproperties',
			views: {
				'header': {templateUrl: '/public/components/header/header.html'},
				'main': {templateUrl: '/public/components/web_properties/main.html'},
				'proplist@webprops': {templateUrl: '/public/components/web_properties/list.html'},
				'propcontrol@webprops': {templateUrl: '/public/components/web_properties/add.html'}
			}
		})
		.state('webprops.edit', {
			url: '/webproperties',
			views: {
				'header': {templateUrl: '/public/components/header/header.html'},
				'main': {templateUrl: '/public/components/web_properties/main.html'},
				'proplist@webprops': {templateUrl: '/public/components/web_properties/list.html'},
				'propcontrol@webprops': {templateUrl: '/public/components/web_properties/edit.html'}
			}
		})
}])