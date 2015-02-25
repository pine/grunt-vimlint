'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    vimlint: {
      succeeded: {
        src: ['test/succeeded.vim']
      }
    }
  });
  
  grunt.registerTask('test', ['vimlint']);
  grunt.loadTasks('tasks');
};