'use strict';

var util = require('util');
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
      if (stdout) { util.print(stdout); }
      if (stderr) { util.print(stderr); }
      
      if (err) { return done(err); }
      
      console.log('> grunt vimlint:failed');
      exec('grunt vimlint:failed', function (err, stdout, stderr) {
        if (stdout) { util.print(stdout); }
        if (stderr) { util.print(stderr); }
        
        if (!err) { return done(true); }
        
        done();
      });
    });
  });
  
  grunt.loadTasks('tasks');
};