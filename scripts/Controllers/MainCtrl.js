(function (angular, undefined) {
    'use strict';

    var app = angular.module('Controllers', []);
    app.controller('MainCtrl', ['$scope', MainCtrl]);
    app.controller('ProjectCtrl', ['$scope', 'StoreSrv', ProjectCtrl]);
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

    function ProjectCtrl($scope, StoreSrv) {
        $scope.projects = [];

        $scope.onAddProject = function () {
            console.debug('Open directory dialog:');
            var chooser = document.querySelector('#fileDialog');
            chooser.addEventListener("change", function(evt) {
                saveProject(this.value);
            }, false);

            chooser.click();
        };

        $scope.onRemove = function () {
            console.debug('Remove');
        };

        function saveProject(path) {
            // TODO: Move this logic to a new service: Project service!
            console.log('Path: ', path);
            var projects = StoreSrv.get('projects', []);

            projects.push({
                name: getNameFromPath(path),
                path: path
            });

            StoreSrv.set('projects', projects);
        }

        function getNameFromPath(path) {
            var pathArr = path.split('/');
            return pathArr[ pathArr.length -1 ];
        }

        // Initialization
        (function () {
            $scope.projects = StoreSrv.get('projects', []);
        })();

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
