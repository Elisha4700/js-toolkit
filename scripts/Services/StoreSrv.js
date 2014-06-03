angular.module('Store', []).factory('StoreSrv', [function () {
    'use strict';
    return new StoreHelper();
}]);