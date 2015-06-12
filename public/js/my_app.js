'use strict';

var myApp = angular.module('myApp', [
	'ngResource',
	'ngRoute',
	'ngCookies',
	'ngSanitize',
	'ngTouch',
	'pasvaz.bindonce'
])
.config([
	'$routeProvider',
	'$locationProvider',
	'$httpProvider',
	function($routeProvider, $locationProvider, $httpProvider) {
		'use strict';
		$routeProvider
			.when('/login', {
				template: '<div></div>',
				isStaticPage: true,
				staticPage: '/login',
				reloadOnSearch: false,
			})
			.when('/', { 
				redirectTo: '/login/success'
			});
])
.run([
	'$route',
	'$rootScope',
	function($route, $rootScope) {
		
	}
]);