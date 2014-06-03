(function (angular, undefined) {
    'use strict';

    var app = angular.module('Controllers', []);
    app.controller('MainCtrl', ['$scope', MainCtrl]);
    app.controller('ProjectCtrl', ['$scope', ProjectCtrl]);
    app.controller('BowerCtrl', ['$scope', 'BowerSrv', BowerCtrl]);

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

    function BowerCtrl($scope, BowerSrv) {
        $scope.bowerResults = [];
        $scope.bowerSearch = function () {
            console.debug('Searching bower for: ', $scope.searchText);
            BowerSrv.search($scope.searchText, function (resutls) {
                console.debug('Results: ', resutls);
                $scope.bowerResults = resutls;
                apply();
            });
        };

        function apply() {
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        }
    }

})(angular);
