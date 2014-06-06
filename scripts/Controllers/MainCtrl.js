(function (window, document, angular, undefined) {
    'use strict';

    var app;
    try {
        app = angular.module('Controllers');
    } catch (e) {
        app = angular.module('Controllers', []);
    }

    app.controller('MainCtrl', ['$scope', MainCtrl]);

    function MainCtrl($scope) {
        $scope.apps = angular.copy(CONFIG.APPS);
        $scope.showDropZone = false;

        $scope.switchApp = function (app) {
            for (var key in $scope.apps) {
                $scope.apps[key].isSelected = false;
            }
            app.isSelected = true;
        };
    }

})(window, document, angular);
