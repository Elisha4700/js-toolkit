(function (window, undefined) {
    'use strict';

    window.CONFIG = {
        DEBUG: true,

        PROJECTS: 'projects',

        APPS: [
            { name: 'Yeoman', isSelected: true  },
            { name: 'Bower', isSelected: false },
            { name: 'Grunt', isSelected: false },
            { name: 'Gulp', isSelected: false },
            { name: 'Karma', isSelected: false }
        ]

    };

})(window);
