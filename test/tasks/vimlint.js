'use strict';

module.exports = function (grunt) {
  grunt.config.set('vimlint', {
    succeeded: {
      src: ['test/succeeded.vim']
    },
    failed: {
      src: ['test/failed.vim']
    }
  });
};