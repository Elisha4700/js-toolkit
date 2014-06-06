(function (angular, undefined) {
    'use strict';

    var app;
    try {
        app = angular.module('Controllers');
    } catch (e) {
        app = angular.module('Controllers', []);
    }

    app.controller('KarmaCtrl', ['$scope', KarmaCtrl]);


    function KarmaCtrl($scope) {
        console.debug('KarmaCtrl initialized');

    }

})(angular);