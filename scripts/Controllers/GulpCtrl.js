(function (angular, undefined) {
    'use strict';

    var app;
    try {
        app = angular.module('Controllers');
    } catch (e) {
        app = angular.module('Controllers', []);
    }

    app.controller('GulpCtrl', ['$scope', GulpCtrl]);


    function GulpCtrl($scope) {
        console.debug('GulpCtrl initialized');

    }

})(angular);