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
            .otherwise({
                redirectTo: '/yeoman'
            });
    });

})(angular);
