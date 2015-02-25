'use strict';

var exec = require('child_process').exec;
var path = require('path');

module.exports = function (grunt) {
  var vimlint = path.join(__dirname, '../vim-vimlint');
  var vimlint_bin = path.join(vimlint, 'bin/vimlint.sh');
  var vimlparser = path.join(__dirname, '../vim-vimlparser');
  
  grunt.registerMultiTask('vimlint', 'Lint vim files', function () {
    var self = this;
    
    var done = self.async();
    var files = self.filesSrc;
    var options = self.options({ force: false });
    var runs = 0;
    
    files.forEach(function (file) {
      var cmd = 'sh ' + vimlint_bin+ ' -l ' +
        vimlint + ' -p ' + vimlparser + ' -v ' + file;
      console.log(cmd);
      
      exec(cmd, function (err, stdout, stderr) {
        if (err) { grunt.log.error(err); }
        if (++runs === files.length) {
          if (self.errorCount) { return done(options.force); }
          grunt.log.ok(files.length + ' file' + (files.length === 1 ? '' : 's') + ' lint free.');
          done();
        }
      });
    });
  });
};