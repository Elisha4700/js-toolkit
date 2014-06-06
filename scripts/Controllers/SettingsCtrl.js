(function (angular, undefined) {
    'use strict';

    var app;
    try {
        app = angular.module('Controllers');
    } catch (e) {
        app = angular.module('Controllers', []);
    }

    app.controller('SettingsCtrl', ['$scope', SettingsCtrl]);


    function SettingsCtrl($scope) {
        console.debug('SettingsCtrl initialized');

    }

})(angular);