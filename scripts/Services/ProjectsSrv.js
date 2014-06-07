angular.module('Projects', ['Store']).factory('ProjectsSrv', ['StoreSrv', function (Store) {
    'use strict';

    this.getAllProjects = function () {
        return Store.get(CONFIG.PROJECTS, []);
    };

    this.addProject = function (path) {
        var projects = this.getAllProjects(),
            proj = {
                id: '' + new Date().getTime(),
                name: getNameFromPath(path),
                path: path,
                isSelected: false
            };

        projects.push(proj);
        return saveProjects(projects);
    };

    this.selectProject = function (proj) {
        var projects = this.getAllProjects(),
            i, len = projects.length;

        for (i = 0; i < len; i++) {
            projects[i].isSelected = (projects[i].id == proj.id);
        }

        return saveProjects(projects);
    };

    this.removeProject = function (proj) {
        var newProjects = [],
            projects = this.getAllProjects(),
            selectedProjIndex = 0,
            i, len = projects.length;

        // If there is only one project, and its gonna get deleted anyway... then return an empty array.
        if (len === 1) {
            this.removeAllProjects();
            return [];
        }

        for (i = 0; i < len; i++) {
            if (projects[i].isSelected) {
                selectedProjIndex = i;
            } else {
                newProjects.push(projects[i]);
            }
        }

        if (newProjects.length <= selectedProjIndex) {
            selectedProjIndex--;
        }
        newProjects[selectedProjIndex].isSelected = true;

        return saveProjects(newProjects);
    };

    this.removeAllProjects = function () {
        Store.remove(CONFIG.PROJECTS);
    };

    this.getCurrentProject = function () {
        var projects = this.getAllProjects(),
            i, len = projects.length;

        for (i = 0; i < len; i++) {
            if (projects[i].isSelected) {
                return projects[i];
            }
        }
    };

    function saveProjects(projects) {
        Store.set(CONFIG.PROJECTS, projects);
        return projects;
    }

    function getNameFromPath(path) {
        var delim = (CONFIG.PLATFORM === 'MAC') ? '/' : '\\';
        var pathArr = path.split(delim);
        return pathArr[pathArr.length - 1];
    }

    return this;
}]);