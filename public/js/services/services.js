/* Services */
(function(){
    'use strict';

    // Demonstrate how to register services
    // In this case it is a simple value service.
    angular.module('myApp.services', [])
        .value('version', '0.2')
        .factory('ContentService',['$q', '$http', function($q, $http){
            var serviceObject = {};

            serviceObject.getAllContacts = function getAllContacts() {
                var defer = $q.defer();

                $http({
                    method: 'GET',
                    url: '/data/contactList'
                })
                .success(function (data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function(err) {
                    defer.reject({message: err});
                });

                return defer.promise;
            };

            serviceObject.addContact = function addContact(contactObj) {
                var date = Date.now(),
                    defer = $q.defer(),
                    data = JSON.stringify({
                        name: contactObj.name,
                        des: contactObj.des || '',
                        id: date
                    })

                $http.post('/data/contactList/add', data)
                    .success(function(){
                        defer.resolve();
                    })
                    .error(function(error){
                        defer.reject(error);
                    });

                return defer.promise;
            };

            serviceObject.removeContacts = function removeContacts(contactIdArray) {
                var data = JSON.stringify(contactIdArray),
                    defer = $q.defer();

                $http.put('/data/contactList/remove', data)
                    .success(function(data){
                        defer.resolve();
                    })
                    .error(function() {
                        console.log('in fail')
                        defer.reject();
                    });

                return defer.promise;
            };

            return serviceObject;
        }]);
}());
