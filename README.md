grunt-vimlint
-------------

[![npm version](https://badge.fury.io/js/grunt-vimlint.svg)](http://badge.fury.io/js/grunt-vimlint)
[![Build Status](https://travis-ci.org/pine/grunt-vimlint.svg?branch=master)](https://travis-ci.org/pine/grunt-vimlint)
[![Code Climate](https://codeclimate.com/github/pine/grunt-vimlint/badges/gpa.svg)](https://codeclimate.com/github/pine/grunt-vimlint)
[![Dependency Status](https://david-dm.org/pine/grunt-vimlint.svg)](https://david-dm.org/pine/grunt-vimlint)
[![devDependency Status](https://david-dm.org/pine/grunt-vimlint/dev-status.svg)](https://david-dm.org/pine/grunt-vimlint#info=devDependencies)

English | [日本語](README-ja.md)

Validate `.vimrc`, `.vim` files with [vimlint](https://github.com/syngan/vim-vimlint).

## Getting Started

This plugin requires [Grunt](http://gruntjs.com) >=0.4.5 and Vim.

```sh
$ npm install grunt-vimlint --save-dev
```

## Usage examples

```js
grunt.initConfig({
  vimlint: {
   files: ['**/*.vim']
  }
});

grunt.loadNpmTasks('grunt-vimlint');
```

## Options
### force

Type: `Boolean` Default value: `false`

Set force to true to report errors but not fail the task.

## Additional Notes
This plugin **doesn't work** on Windows. It works on Linux, Mac OS X, or other *nix OSs.

## Acknowledgement
This plugin uses following software to validate `.vim` files. Thank you.

 - [syngan](https://github.com/syngan) / [vim-vimlint](https://github.com/syngan/vim-vimlint)
 - [ynkdir](https://github.com/ynkdir) / [vim-vimlparser](https://github.com/ynkdir/vim-vimlparser)

## See also

 -  [node-vimlint](https://github.com/pine/node-vimlint)
 -  [gulp-vimlint](https://github.com/pine/gulp-vimlint)
 -  [fly-vimlint](https://github.com/pine/fly-vimlint)

## License
MIT License<br />
Copyright (c) 2015 Pine Mizune
