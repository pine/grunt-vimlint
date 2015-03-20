'use strict';

var exec = require('child_process').exec;
var async = require('async');

function test_succeeded(done) {
  console.log('> grunt vimlint:succeeded');
  exec('grunt vimlint:succeeded', function (err, stdout, stderr) {
    if (stdout) { process.stdout.write(stdout); }
    if (stderr) { process.stderr.write(stderr); }
    
    done(err);
  });
}

function test_failed(done) {
  console.log('> grunt vimlint:failed');
  exec('grunt vimlint:failed', function (err, stdout, stderr) {
    if (stdout) { process.stdout.write(stdout); }
    if (stderr) { process.stderr.write(stderr); }
    
    if (!err) {
      return done('grunt succeeded');
    }
    
    done();
  });
}

module.exports = function (grunt) {
  grunt.registerTask('vimlint-test', function() {
    var done = this.async();
    
    async.parallel(
      [test_succeeded, test_failed],
      function (err) {
        if (err) { grunt.log.error(err); }
        done(err);
      });
  });
};