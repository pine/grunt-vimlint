'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      files: ['*.js', 'tasks/**/*.js', 'test/**/*.js']
    },
    jsonlint: {
      files: ['.jshintrc', '*.json']
    }
  });
  
  grunt.registerTask('test', ['jshint', 'jsonlint', 'vimlint-test']);
  
  grunt.loadTasks('tasks');
  grunt.loadTasks('test/tasks');
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsonlint');
};