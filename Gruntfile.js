/*jshint camelcase: false*/
// Generated on 2014-05-01 using generator-u-app 0.0.0
'use strict';
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks

    grunt.loadNpmTasks('grunt-crx');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-browser-sync');

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    if(grunt.option('folders') == "remote"){
        grunt.loadTasks('../../global_modules/tasks');
    }

    var type = grunt.option('type') || 'nightly';


    grunt.initConfig({
        yeoman: yeomanConfig,
        pkg: grunt.file.readJSON('package.json'),
        manifest: grunt.file.readJSON('app/manifest.json'),
        env: ((grunt.option('folders') == "remote") ? grunt.file.readJSON("../../global_modules/env.json") : null),
        crx: {
            sidebar: {
                "src": "<%= grunt.option('env') && env.appFolder[grunt.option('env')] ||  env.appFolder.debug %>",
                "dest": "<%= env.envPath + env.buildPath[grunt.option('type') || 'nightly'] %><%= pkg.name %>/<%= manifest.version %>/<%= pkg.name %>.crx",
                "exclude": [
                    "*.coffee",
                    "*.less",
                    "*.sass-cache",
                    "*.scss",
                    ".dev",
                    ".git",
                    ".gitignore",
                    ".idea",
                    ".sass-cache",
                    "less",
                    "node_modules",
                    "README.md",
                    "sass",
                    "scss",
                    "test",
                    "tmp"
                ],
                "privateKey": "<%= env.envPath %>/Apps/pems/<%= pkg.name %>.pem"
            }
        },
        watch: {
            compass: {
                files: ['<%= yeoman.app %>/scss/{,*/}*.{scss,sass}'],
                tasks: ['sass:dist', "copy:stylesBack"]
            },
            gruntfile: {
                files: ['Gruntfile.js']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '<%= yeoman.app %>/{,*/}*.html',
                        '<%= yeoman.app %>/styles/{,*/}*.css',
                        '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                    ]
                },
                options: {
                    watchTask: true
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp',
            build: ['.tmp', 'dist', 'tmp']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                'test/spec/{,*/}*.js'
            ]
        },
        jasmine: {
            all: {
                options: {
                    specs: 'test/spec/{,*/}*.js'
                }
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/scss',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                relativeAssets: false
            },
            dist: {
                options: {
                    debugInfo: false
                }
            },
            server: {
                options: {
                    debugInfo: false
                }
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
            },
            html: [
                '<%= yeoman.app %>/popup.html',
                '<%= yeoman.app %>/options.html'
            ]
        },
        usemin: {
            options: {
                dirs: ['<%= yeoman.dist %>']
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        'images/{,*/}*.{webp,gif}',
                        '_locales/{,*/}*.json'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: [
                        'generated/*'
                    ]
                }]
            },
            stylesBack: {
                expand: true,
                cwd: '.tmp/styles',
                dest: '<%= yeoman.app %>/styles/',
                src: ['{,*/}*.css','{,*/}*.map']
            }
        },
        concurrent: {
            server: [
                'compass:server'
            ],
            test: [
                'compass'
            ],
            dist: [
                'compass:dist',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },
        chromeManifest: {
            dist: {
                options: {
                    buildnumber: true,
                    background: {
                        target:'scripts/background.js'
                    }
                },
                src: '<%= yeoman.app %>',
                dest: '<%= yeoman.dist %>'
            }
        },
        compress: {
            dist: {
                options: {
                    archive: 'package/Elishs<%= manifest.version %>.zip'
                },
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: ['**'],
                    dest: ''
                }]
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: "<%= yeoman.app %>/scripts/lib",
                    cleanBowerDir: true
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/scss',
                    src: ['**/*.scss',
                        '!**/_*.scss'],
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            },
            remote : {
                browsers: ['PhantomJS'],
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test',
        'jasmine'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'chromeManifest:dist',
        'useminPrepare',
        'concurrent:dist',
        'cssmin',
        'concat',
        'uglify',
        'copy',
        'usemin',
        'compress'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);

    var _bump  = 'bump-version:' + type +':app';
    grunt.registerTask('bump'  , [_bump]);
    grunt.registerTask('package',[
        'compass:dist',
        'copy:stylesBack',
        'crx',
        _bump]);

    grunt.registerTask('update-framework', ['bower:install']);
    grunt.registerTask('w', ["browserSync", "watch"]);
};
