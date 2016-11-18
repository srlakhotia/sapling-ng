'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'GET',
        url: '/api/pageTitle'
    })
    .success(function (data, status, headers, config) {
        for(var pageTitle in data) {
            $scope[pageTitle] = data[pageTitle];
        }
    }).
    error(function (data, status, headers, config) {
        $scope.name = 'Error!';
    });

    $scope.layoverVisible = false;

    $scope.addContact = function addContact() {
        $scope.layoverVisible = true;
    };

    $scope.closeLayover = function closeLayover() {
        $scope.layoverVisible = false;
    };
}])

.controller('AddContactCtrl', ['$scope', 'ContentService', function($scope, ContentService) {
    $scope.pageTitle = $scope.addContacts;

    $scope.addContact = function addContact() {
        ContentService.addContact({name: $scope.name, des: $scope.designation}).then(function(){
            $scope.name = '';
            $scope.designation = '';
        }, function(error){
            alert(error.toString())
        });
    }
}])

.controller('ViewContactCtrl', ['$scope', 'ContentService', function($scope, ContentService) {
    $scope.pageTitle = $scope.viewContacts;

    ContentService.getAllContacts().then(function(response) {
        $scope.contactArray = response;
    }, function(error) {
        alert(error.message)
    });
}])

.controller('RemoveContactCtrl', ['$scope', 'ContentService', function($scope, ContentService) {
    $scope.pageTitle = $scope.removeContacts;
    $scope.selectedArray = [];

    function getAllContacts() {
        ContentService.getAllContacts().then(function(response) {
            $scope.contactArray = response;
        }, function(error) {
            alert(error.message)
        });
    }
    getAllContacts();

    $scope.toggleSelection = function toggleSelection(id) {
        if($scope.selectedArray.indexOf(id) < 0) {
            $scope.selectedArray.push(id);
        } else {
            $scope.selectedArray.splice($scope.selectedArray.indexOf(id), 1);
        }
    };

    $scope.removeContacts = function removeContacts() {
        if(!$scope.selectedArray.length) {
            return
        };
        ContentService.removeContacts({idArray: $scope.selectedArray}).then(function() {
            $scope.selectedArray = [];
            getAllContacts();
        }, function(error){
            alert(error)
        });
    }
}]);