/**
 * Simple service that takes Bower helper and returns an instance.
 * Simple an angular wrapper around a function.
 */
angular.module('Bower', []).factory('BowerSrv', [function () {
    'use strict';
    return new BowerHelper();
}]);