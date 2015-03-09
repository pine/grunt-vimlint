'use strict';

var exec = require('child_process').exec;
var path = require('path');
var vimlint = require('vimlint');

module.exports = function (grunt) {

  grunt.registerMultiTask('vimlint', 'Lint vim files', function () {
    var self = this;
    
    var done = self.async();
    var files = self.filesSrc;
    var options = self.options({ force: false });
    var runs = 0;
    
    files.forEach(function (file) {
      vimlint(file, function (err, stdout, stderr) {
        if (err) { grunt.log.error(stdout || stderr); }
        if (++runs === files.length) {
          if (self.errorCount) { return done(options.force); }
          grunt.log.ok(files.length + ' file' + (files.length === 1 ? '' : 's') + ' lint free.');
          done();
        }
      });
    });
  });
};