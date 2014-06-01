(function (angular, undefined) {
    'use strict';

    var app = angular.module('Controllers', []);
    app.controller('MainCtrl', ['$scope', MainCtrl]);


    function MainCtrl($scope) {
        $scope.apps = CONFIG.APPS;

        console.debug('Main Controller initialized');
    }

})(angular);

