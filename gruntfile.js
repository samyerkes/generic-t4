'use strict';

module.exports = function(grunt) {
    // configure tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['app/**/**/*.hbs', 'app/**/**/*.yml', 'app/**/**/*.html'],
                tasks: ['build']
            },
            js: {
                files: ['app/js/*.js'],
                tasks: ['useminPrepare', 'concat', 'cssmin', 'uglify', 'usemin', 'watch']
            },
            css: {
                files: ['app/sass/**/*.sass', 'app/sass/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'build']
            },
            images: {
                files: ['app/imgs/*'],
                tasks: ['imagemin']
            },
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            grunt: {
                files: ['gruntfile.js'],
                tasks: ['build']
            }
        },

        sass: {
            options: {
                style: 'compact'
            },
            dist: {
                files: {
                    'app/css/global.css': 'app/sass/global.sass'
                }
            }
        },
        autoprefixer: {
            files: {
                expand: true,
                flatten: true,
                src: 'app/css/*.css',
                dest: 'app/css/'
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    cache: false,
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'app/imgs/',
                    src: ['**/*.{png,jpg,gif,svg,ico}'],
                    dest: 'dist/imgs/'
                }]
            }
        },

        wiredep: {
            dest: {
                src: [
                    'app/layouts/*.hbs'
                ],
                exclude: [
                    'app/bower_components/modernizr/modernizr.js',
                    'bower_components/jquery/dist/jquery.js'
                ]
            }
        },

        useminPrepare: {
            html: 'app/layouts/*.hbs',
            options: {
                dest: 'dist'
            }
        },
        usemin: {
            html: [
                'dist/*.html',
                't4/*.hbs'
            ],
            css: ['dist/css/*.css'],
            options: {
                dirs: ['dist']
            }
        },
        copy: {
            jquery: {
                expand: true,
                cwd: 'app/bower_components/jquery/dist/',
                src: 'jquery.js',
                dest: 'dist/bower_components/jquery/dist/'
            },
            modernizr: {
                expand: true,
                cwd: 'app/bower_components/modernizr/',
                src: 'modernizr.js',
                dest: 'dist/bower_components/modernizr/'
            },
            t4Layouts: {
                expand: true,
                cwd: 'app/layouts/',
                src: 'home.hbs',
                dest: 't4/'
            },
            t4CSS: {
                expand: true,
                cwd: 'dist/css/',
                src: 'global.min.css',
                dest: 't4/css/'
            },
            t4JS: {
                expand: true,
                cwd: 'dist/js/',
                src: 'global.min.js',
                dest: 't4/js/'
            }
            
        },
        assemble: {
            options: {
                expand: true,
                flatten: true,
                layoutdir: 'app/layouts/',
                partials: 'app/components/**/*.hbs'
            },
            pages: {
                files: {
                    'dist/': ['app/pages/**/*.hbs'],
                }
            }
        },
        
        replace: {
            t4css: {
                src: ['t4/css/*.css'],
                overwrite: true,
                replacements: []
            },
            t4html: {
                src: ['t4/*.hbs'],
                overwrite: true,
                replacements: []
            },
            t4path: {
                src: ['t4/*.hbs'],
                overwrite: true,
                replacements: []
            },
            components: {
                src: ['app/components/**/*.hbs'],
                dest: 't4/components/',
                replacements: [{
                    from: '{{ ',
                    to: '<t4 type="content" name="'
                }, {
                    from: ' }}',
                    to: '" output="normal" modifiers="" />'
                }, {
                    from: /---(.|\n)*---/,
                    to: ''
                }, {
                    from: /[^"]*\./gm,
                    to: ''
                }]
            }
        } 
        
                

    });
    // load plugins
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-combine-media-queries');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');  
    grunt.loadNpmTasks('grunt-text-replace'); 
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('replace-t4', function() {
        var cssReplacements = grunt.file.readJSON('replacements-imgs.json');
        grunt.config('replace.t4css.replacements', cssReplacements);

        var htmlReplacements = grunt.file.readJSON('replacements-layout.json');
        grunt.config('replace.t4html.replacements', htmlReplacements);

        var pathReplacements = grunt.file.readJSON('replacements-paths.json');
        grunt.config('replace.t4path.replacements', pathReplacements);

        grunt.task.run('replace');
    });

    //Build T4 directory
    grunt.registerTask('t4', ['replace-t4']); 
    

    //Build the initial directories
    grunt.registerTask('build', ['wiredep', 'sass', 'autoprefixer', 'imagemin', 'assemble', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'copy', 'usemin', 't4',  'watch'
    ]);

    // Default task.
    grunt.registerTask('default', ['watch']);

};
