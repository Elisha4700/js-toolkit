(function (window, undefined) {
    'use strict';

    window.CONFIG = {
        // Configuration here....

        PLATFORM: (/^win/.test(process.platform) ? 'WIN' : 'MAC'),

        APPS: [
            { name: 'Yeoman', isSelected: true  },
            { name: 'Bower', isSelected: false },
            { name: 'Grunt', isSelected: false },
            { name: 'Gulp', isSelected: false },
            { name: 'Karma', isSelected: false }
        ]

    };

})(window);
