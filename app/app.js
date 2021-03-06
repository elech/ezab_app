'use strict';
var EZAB_APP = angular.module('EZAB_APP', ['ui.router', 'angular-flash.service', 'angular-flash.flash-alert-directive', 'ui.bootstrap']).config(['$stateProvider', 'flashProvider', function($stateProvider, flashProvider){
	$stateProvider
		.state('login', {
			url: '',
			views: {
				'header': { template: ''},
				'main': {templateUrl: '/public/components/login/login.html'}
			}
		})
		.state('dash', {
			url: '/webproperties/:propid/campaigns/:cid/dashboard',
			views: {
				'header': {templateUrl: '/public/components/header/header.html'},
				'main': {templateUrl: '/public/components/dash/main.html'},
				'explist@dash': {templateUrl: '/public/components/experiences/exp.list.html'},
				'expcontrol@dash': {templateUrl: '/public/components/experiences/exp.add.html'},
				'graph@dash': {templateUrl: '/public/components/dash/graph.html'}
			}
		})
				
		.state('dash.edit', {
			views: {
				'expcontrol@dash': {templateUrl: '/public/components/experiences/exp.edit.html'},
			}
		})

		.state('webprops', {
			url: '/webproperties',
			views: {
				'header': {templateUrl: '/public/components/header/header.html'},
				'main': {templateUrl: '/public/components/web_properties/main.html'},
				'proplist@webprops': {
					templateUrl: '/public/components/web_properties/list.html'
				},
				'propcontrol@webprops': {templateUrl: '/public/components/web_properties/add.html'}
			}
		})

		.state('webprops.edit', {
			url: '/:propid/edit',
			views: {
				'header': {templateUrl: '/public/components/header/header.html'},
				'main': {templateUrl: '/public/components/web_properties/main.html'},
				'proplist@webprops': {templateUrl: '/public/components/web_properties/list.html'},
				'propcontrol@webprops': {templateUrl: '/public/components/web_properties/edit.html'}
			}
		})

		.state('campaigns', {
			url: '/webproperties/:propid/campaigns',
			views: {
				'header': {templateUrl: '/public/components/header/header.html'},
				'main': {templateUrl: '/public/components/campaigns/main.html'},
				'campaignlist@campaigns': {templateUrl: '/public/components/campaigns/campaigns.list.html'},
				'campaigncontrol@campaigns': {templateUrl: '/public/components/campaigns/campaigns.add.html'}
			}
		})
		.state('campaigns.edit', {
			url: '/:cid/edit',
			views: {
				'header': {templateUrl: '/public/components/header/header.html'},
				'main': {templateUrl: '/public/components/campaigns/main.html'},
				'campaignlist@campaigns': {templateUrl: '/public/components/campaigns/campaigns.list.html'},
				'campaigncontrol@campaigns': {templateUrl: '/public/components/campaigns/campaigns.edit.html'}
			}
		})

		flashProvider.errorClassnames.push('alert-danger');
}])