grunt-vimlint
-------------

[![npm version](https://img.shields.io/npm/v/grunt-vimlint.svg?style=flat-square)](https://www.npmjs.com/package/grunt-vimlint)
[![Build Status](https://img.shields.io/travis/pine/grunt-vimlint/master.svg?style=flat-square)](https://travis-ci.org/pine/grunt-vimlint)
[![Code Climate](https://img.shields.io/codeclimate/github/pine/grunt-vimlint.svg?style=flat-square)](https://codeclimate.com/github/pine/grunt-vimlint)
[![Dependency Status](https://img.shields.io/david/pine/grunt-vimlint.svg?style=flat-square)](https://david-dm.org/pine/grunt-vimlint)
[![devDependency Status](https://img.shields.io/david/dev/pine/grunt-vimlint.svg?style=flat-square)](https://david-dm.org/pine/grunt-vimlint#info=devDependencies) [![Greenkeeper badge](https://badges.greenkeeper.io/pine/grunt-vimlint.svg)](https://greenkeeper.io/)

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
MIT License
