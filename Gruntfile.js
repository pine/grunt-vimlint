'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    vimlint: {
      succeeded: {
        src: ['test/succeeded.vim']
      },
      failed: {
        src: ['test/failed.vim']
      }
    }
  });
  
  grunt.loadTasks('tasks');
};