(function (angular, undefined) {
    'use strict';

    var app;
    try {
        app = angular.module('Controllers');
    } catch (e) {
        app = angular.module('Controllers', []);
    }
    app.controller('ProjectCtrl', ['$scope', 'ProjectsSrv', ProjectCtrl]);



    function ProjectCtrl($scope, ProjectsSrv) {
        $scope.projects = [];

        $scope.onAddProject = function () {
            var chooser = document.querySelector('#fileDialog');
            chooser.addEventListener('change', function (evt) {
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

})(angular);

