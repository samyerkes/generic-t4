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
        files: 'app/**/*.html',
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
      }
    },

    sass: {
      options: {
        style: 'compressed'
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
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'dist/imgs/'
        }]
      }
    },

    wiredep: {
      dest: {
        src: [
          'app/*.html'
        ],
        exclude: [
            'app/bower_components/modernizr/modernizr.js',
            'bower_components/jquery/dist/jquery.js'
        ]
      }
    },

    useminPrepare: {
        html: 'app/*.html',
        options: {
            dest: 'dist'
        }
    },
    usemin: {
        html: [
            'dist/*.html'
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
        appHTML: {
          cwd: 'app/',
          src: '*.html',
          dest: 'dist/',
          expand: true
        },
        t4HTML: {
          cwd: 'dist/',
          src: '**/*',
          dest: 't4/',
          expand: true
        }
    },

    includereplace: {
      dist: {
        options: {
          prefix: '<!-- @',
          suffix: ' -->',
          includesDir: 'app/components/'
        },
        src: '*.html',
        dest: 'dist/',
        cwd: 'dist/',
        expand: 'true'
      }
    },

    replace: {
      t4css: {
        src: ['t4/css/*.css'],
        overwrite: true,
        replacements: []
      },
      t4html: {
        src: ['t4/*.html'],
        overwrite: true,
        replacements: []
      },
      t4path: {
        src: ['t4/*.html'],
        overwrite: true,
        replacements: []
      }
    }

  });
  // load plugins
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
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-include-replace');
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

//Build the initial directories
grunt.registerTask('build', ['wiredep', 'copy:appHTML', 'sass', 'autoprefixer', 'imagemin', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'usemin', 'copy:t4HTML', 'includereplace', 't4', 'watch']);

//Build T4 directory
grunt.registerTask('t4', ['replace-t4']);

// Default task.
grunt.registerTask('default', ['watch']);

};