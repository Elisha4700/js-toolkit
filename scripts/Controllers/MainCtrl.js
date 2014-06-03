(function (window, document, angular, undefined) {
    'use strict';

    var app = angular.module('Controllers', []);
    app.controller('MainCtrl', ['$scope', MainCtrl]);
    app.controller('ProjectCtrl', ['$scope', 'ProjectsSrv', ProjectCtrl]);
    app.controller('BowerCtrl', ['$scope', 'BowerSrv', BowerCtrl]);

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

    function ProjectCtrl($scope, ProjectsSrv) {
        $scope.projects = [];

        $scope.onAddProject = function () {
            var chooser = document.querySelector('#fileDialog');
            chooser.addEventListener("change", function (evt) {
                $scope.projects = ProjectsSrv.addProject(this.value);
                apply();
            }, false);
            chooser.click();
        };

        $scope.onRemove = function () {
            console.debug('Remove');
        };

        $scope.onProjectClick = function (proj) {
            $scope.projects = ProjectsSrv.selectProject(proj);
            apply();
        };

        function apply() {
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }

        // Initialization
        (function () {
            $scope.projects = ProjectsSrv.getAllProjects();
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
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }
    }

})(window, document, angular);
