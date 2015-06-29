'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
    'myApp.controllers',
    'myApp.filters',
    'myApp.services',
    'myApp.directives'
])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainCtrl'
        })
        .when('/add_contacts', {
            templateUrl: 'partials/add_contacts',
            controller: 'AddContactCtrl'
        })
        .when('/view_contacts', {
            templateUrl: 'partials/view_contacts',
            controller: 'ViewContactCtrl'
        })
        .when('/remove_contacts', {
            templateUrl: 'partials/remove_contacts',
            controller: 'RemoveContactCtrl'
        })
        .otherwise({
            redirectTo: '/view_contacts'
        });
    $locationProvider.html5Mode(true);
});
