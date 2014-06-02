(function (angular, undefined) {
    'use strict';

    var app = angular.module('Controllers', []);
    app.controller('MainCtrl', ['$scope', MainCtrl]);
    app.controller('ProjectCtrl', ['$scope', ProjectCtrl]);


    function MainCtrl($scope) {
        $scope.apps = CONFIG.APPS;

        console.debug('Main Controller initialized');
    }


    function ProjectCtrl($scope) {
        $scope.projects = [
            "ODA",
            "Sidebar"
        ];

        $scope.onAdd = function () {
            console.debug('Add');
        };

        $scope.onRemove = function () {
            console.debug('Remove');
        };
    }

})(angular);

