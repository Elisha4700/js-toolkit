(function (angular, undefined) {
    'use strict';

    var app;
    try {
        app = angular.module('Controllers');
    } catch (e) {
        app = angular.module('Controllers', []);
    }

    app.controller('BowerCtrl', ['$scope', 'BowerSrv', BowerCtrl]);


    function BowerCtrl($scope, BowerSrv) {
        console.debug('BowerCtrl initialized');

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
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }
    }

})(angular);

