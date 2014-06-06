(function (angular, undefined) {
    'use strict';

    var app;
    try {
        app = angular.module('Controllers');
    } catch (e) {
        app = angular.module('Controllers', []);
    }

    app.controller('NpmCtrl', ['$scope', NpmCtrl]);


    function NpmCtrl($scope) {
        console.debug('NpmCtrl initialized');

    }

})(angular);