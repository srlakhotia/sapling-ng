'use strict';

/* Directives */

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
});
