/* global require, module */

'use strict';

module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var dirs = {
    src: 'src',
    dist: 'dist',
    demo: 'demo',
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    dirs: dirs,

    meta: {
      banner: '/**\n' +
        ' * <%= pkg.description %>\n' +
        ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * @link <%= pkg.homepage %>\n' +
        ' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
        ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
        ' */\n'
    },

    //
    // Configuring grunt helpers
    //

    clean: ['<%= dirs.dist %>'],

    concat: { // grunt-contrib-concat
      options: {
        banner: '<%= meta.banner %>'
      },
      js: {
        src: ['<%= dirs.src %>/module.js', '<%= dirs.src %>/**/*.js'],
        dest: '<%= dirs.dist %>/<%= pkg.name %>.js'
      },
      jsCoreOnly: {
        src: ['<%= dirs.src %>/module.js', '<%= dirs.src %>/*.js'],
        dest: '<%= dirs.dist %>/<%= pkg.name %>-core.js'
      }
    },

    connect: { // grunt-contrib-connect
      options: {
        port: 9999,
        hostname: '0.0.0.0',
        keepalive: true,
        middleware: function(connect) {
          var middlewares = [];
          var serveStatic = require('serve-static');
          middlewares.push(serveStatic(dirs.demo));
          middlewares.push(connect().use('/bower_components', serveStatic('./bower_components')));
          middlewares.push(connect().use('/dist', serveStatic(dirs.dist)));
          return middlewares;
        }
      },
      dev: {
        options: {
          keepalive: true
        }
      },
      e2e: {
        options: {
          keepalive: false
        }
      }
    },

    jshint: { // grunt-contrib-jshint
      all: [
        'Gruntfile.js',
        '<%= dirs.src %>/**/*.js',
        'test/unit/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    karma: { // grunt-karma
      single: {
        configFile: 'karma-unit.conf.js',
        singleRun: true
      }
    },

    ngAnnotate: { // grunt-ng-annotate
      dist: {
        files: [{
          expand: true,
          cwd: '<%= dirs.dist %>',
          src: '*.js',
          dest: '<%= dirs.dist %>'
        }]
      }
    },

    open: { // grunt-open
      demo: {
        path: 'http://localhost:9999/'
      }
    },

    protractor: {
      options: {
        configFile: 'node_modules/protractor/example/conf.js', // Default config file
        keepAlive: true,
        noColor: false,
        args: {

        }
      },
      demoApp: { // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
        options: {
          configFile: 'protractor-e2e.conf.js', // Target-specific config file
          args: {} // Target-specific arguments
        }
      }
    },

    release: { // grunt-release
      options: {
        additionalFiles: ['bower.json'],
        npm: false
      }
    },

    uglify: { // grunt-contrib-uglify
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= dirs.dist %>',
          src: '*.js',
          dest: '<%= dirs.dist %>',
          ext: '.min.js'
        }],
      }
    },

    watch: { // grunt-contrib-watch
      src: {
        files: [
          '<%= dirs.src %>/*.js'
        ],
        tasks: ['test'],
      }
    },

    jsbeautifier: {
      options: {
        config: '.jsbeautifyrc'
      },
      dev: ['Gruntfile.js', '<%= dirs.src %>/**/*.js']
    }
  });


  //
  // Grunt tasks.
  //

  // Default task.
  grunt.registerTask('default', [
    'clean',
    'build',
    'run'
  ]);

  // Test task.
  grunt.registerTask('test', [
    'jshint:all',
    'karma:single',
    'connect:e2e',
    'protractor'
  ]);

  // Build task.
  grunt.registerTask('build', [
    // 'test',
    'clean',
    'jsbeautifier',
    'concat',
    'ngAnnotate',
    'uglify'
  ]);

  // Run dev server.
  grunt.registerTask('run', [
    'open',
    'connect'
  ]);

  // Shortcuts
  grunt.registerTask('b', 'build');
  grunt.registerTask('c', 'clean');
  grunt.registerTask('s', 'run');
  grunt.registerTask('t', 'test');
};
