grunt-vimlint
-------------

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

## License
MIT License<br />
Copyright (c) 2015 Pine Mizune