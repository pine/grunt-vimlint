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
    var self = this;
    
    var done = self.async();
    exec('grunt vimlint:succeeded', function (err, stdout, stderr) {
      if (err) {
        grunt.log.error(stdout || stderr);
        return done(err);
      }
      
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