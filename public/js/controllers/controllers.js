'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

    $http({
        method: 'GET',
        url: '/api/name'
    })
    .success(function (data, status, headers, config) {
        $scope.myName = data.myName;
    }).
    error(function (data, status, headers, config) {
        $scope.name = 'Error!';
    });
}])

.controller('MyCtrl1', ['$scope', function($scope) {
    // controller code
}])

.controller('MyCtrl2', ['$scope', function ($scope) {
    // controller code
}]);