(function (angular, undefined) {
    'use strict';

    var app = angular.module('App', [
        'ngRoute',
        'Controllers',
        'Bower',
        'Store',
        'Projects'
    ]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/yeoman',
            {
                templateUrl: 'yeoman/yeoman.html'
            })
            .when('/bower',
            {
                templateUrl: 'bower/bower.html'
            })
            .when('/grunt',
            {
                templateUrl: 'grunt/grunt.html'
            })
            .when('/gulp',
            {
                templateUrl: 'gulp/gulp.html'
            })
            .when('/karma',
            {
                templateUrl: 'karma/karma.html'
            })
            .when('/npm',
            {
                templateUrl: 'npm/npm.html'
            })
            .when('/settings',
            {
                templateUrl: 'settings/settings.html'
            })
            .otherwise({
                redirectTo: '/yeoman'
            });
    });

    window.App = app;

})(angular);
