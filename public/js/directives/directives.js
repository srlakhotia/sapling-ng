/* Directives */
(function() {
    'use strict';

    angular.module('myApp.directives', [])
        .directive('appVersion', function (version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        })

        .directive('pageTitle', function (version) {
            return function(scope, elm, attrs) {
                elm.text(scope.pageTitle);
            };
        })

        .directive('pageLayover', [function() {
            return {
                restrict: 'EA',
                transclude: true,
                templateUrl: '/partials/layover_model',
                replce: true,
                controller: ['$scope', function($scope){
                    // $scope.layoverVisible = $scope.layoverVisible || false;
                    // $scope.closeLayover = typeof $scope.closeLayover === 'function' ? $scope.closeLayover : function() {
                    //     $scope.layoverVisible = false;
                    // } 
                }]
            };
        }]);
}());