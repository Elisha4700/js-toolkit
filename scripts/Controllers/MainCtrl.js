(function (angular, undefined) {
    'use strict';

    var app = angular.module('Controllers', []);
    app.controller('MainCtrl', ['$scope', MainCtrl]);
    app.controller('ProjectCtrl', ['$scope', ProjectCtrl]);

    function MainCtrl($scope) {
        $scope.apps = angular.copy(CONFIG.APPS);

        $scope.switchApp = function (app) {
            for (var key in $scope.apps) {
                $scope.apps[key].isSelected = false;
            }
            app.isSelected = true;
        };

    }


    function ProjectCtrl($scope) {
        $scope.projects = [
            "ODA",
            "Sidebar"
        ];

        $scope.onAdd = function () {
            console.debug('Add');
        };

        $scope.onRemove = function () {
            console.debug('Remove');
        };
    }

})(angular);
