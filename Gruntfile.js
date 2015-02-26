'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      files: ['*.js', 'tasks/**/*.js', 'test/**/*.js']
    }
  });
  
  grunt.loadTasks('tasks');
  grunt.loadTasks('test/tasks');
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
};