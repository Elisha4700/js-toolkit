angular.module('Projects', ['Store']).factory('ProjectsSrv', ['StoreSrv', function (Store) {
    'use strict';

    var service = {};

    service.getAllProjects = function () {
        return Store.get(CONFIG.PROJECTS, []);
    };

    service.addProject = function (path) {
        var projects = service.getAllProjects(),
            proj = {
                id: '' + new Date().getTime(),
                name: getNameFromPath(path),
                path: path,
                isCurrent: false
            };

        projects.push(proj);
        Store.set(CONFIG.PROJECTS, projects);
        return projects;
    };

    service.selectProject = function (proj) {
        var projects = service.getAllProjects(),
            i, len = projects.length;

        for (i = 0; i < len; i++) {
            projects[i].isCurrent = (projects[i].id == proj.id);
        }

        Store.set(CONFIG.PROJECTS, projects);
        return projects;
    };

    service.removeProject = function (proj) {
        // TODO: implement removal of project from the array.
    };

    service.removeAllProjects = function () {
        Store.remove(CONFIG.PROJECTS);
    };

    service.getCurrentProject = function () {
        var projects = service.getAllProjects(),
            i, len = projects.length;

        for (i = 0; i < len; i++) {
            if(projects[i].isCurrent) {
                return projects[i];
            }
        }
    };

    function getNameFromPath(path) {
        var pathArr = path.split('/');
        return pathArr[pathArr.length - 1];
    }

    return service;
}]);