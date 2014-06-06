(function (angular, undefined) {
    'use strict';

    var app;
    try {
        app = angular.module('Controllers');
    } catch (e) {
        app = angular.module('Controllers', []);
    }

    app.controller('YeomanCtrl', ['$scope', YeomanCtrl]);


    function YeomanCtrl($scope) {
        console.debug('YeomanCtrl initialized');

    }

})(angular);