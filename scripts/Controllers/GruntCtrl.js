(function (angular, undefined) {
    'use strict';

    var app;
    try {
        app = angular.module('Controllers');
    } catch (e) {
        app = angular.module('Controllers', []);
    }

    app.controller('GruntCtrl', ['$scope', GruntCtrl]);


    function GruntCtrl($scope) {
        console.debug('GruntCtrl initialized');

    }

})(angular);