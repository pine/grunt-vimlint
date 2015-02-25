'use strict';

var exec = require('child_process').exec;

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
  
  grunt.registerTask('test', function() {
    var done = this.async();
    
    console.log('> grunt vimlint:succeeded');
    exec('grunt vimlint:succeeded', function (err, stdout, stderr) {
      if (err) {
        grunt.log.error(stdout || stderr);
        return done(err);
      }
      
      console.log('> grunt vimlint:failed');
      exec('grunt vimlint:failed', function (err, stdout, stderr) {
        if (!err) {
          grunt.log.error('vimlint succeeded');
          return done(true);
        }
        
        done();
      });
    });
  });
  
  grunt.loadTasks('tasks');
};