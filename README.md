grunt-vimlint
-------------

[![npm version](https://badge.fury.io/js/grunt-vimlint.svg)](http://badge.fury.io/js/grunt-vimlint)
[![Build Status](https://travis-ci.org/pine613/grunt-vimlint.svg?branch=master)](https://travis-ci.org/pine613/grunt-vimlint)
[![devDependency Status](https://david-dm.org/pine613/grunt-vimlint/dev-status.svg)](https://david-dm.org/pine613/grunt-vimlint#info=devDependencies)

Validate `.vimrc`, `.vim` files with [vimlint](https://github.com/syngan/vim-vimlint).

## Getting Started

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

## Additional Notes
This plugin **doesn't work** on Windows. It works on Linux, Mac OS X, or other *nix OSs.

## License
MIT License<br />
Copyright (c) 2015 Pine Mizune