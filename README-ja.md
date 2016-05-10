grunt-vimlint
-------------

[![npm version](https://img.shields.io/npm/v/grunt-vimlint.svg?style=flat-square)](https://www.npmjs.com/package/grunt-vimlint)
[![Build Status](https://img.shields.io/travis/pine/grunt-vimlint/master.svg?style=flat-square)](https://travis-ci.org/pine/grunt-vimlint)
[![Code Climate](https://img.shields.io/codeclimate/github/pine/grunt-vimlint.svg?style=flat-square)](https://codeclimate.com/github/pine/grunt-vimlint)
[![Dependency Status](https://img.shields.io/david/pine/grunt-vimlint.svg?style=flat-square)](https://david-dm.org/pine/grunt-vimlint)
[![devDependency Status](https://img.shields.io/david/dev/pine/grunt-vimlint.svg?style=flat-square)](https://david-dm.org/pine/grunt-vimlint#info=devDependencies)

[English](README.md) | 日本語

`.vimrc`, `.vim` ファイルを [vimlint](https://github.com/syngan/vim-vimlint) を使って検証します。

## 使い方

このプラグインを使うには [Grunt](http://gruntjs.com) (>= 0.4.5) と Vim が必要です。

```sh
$ npm install grunt-vimlint --save-dev
```

## 設定例

```js
grunt.initConfig({
  vimlint: {
   files: ['**/*.vim']
  }
});

grunt.loadNpmTasks('grunt-vimlint');
```

## オプション
### force

型: `Boolean`、初期値: `false`

`true` を設定した場合、エラーが発生した場合でもタスクを途中で終了しません。

## 補足
このプラグインは Windows では **動作しません**。Linux, Mac OS X などの UNIX 系 OS で利用してください。

## 関連するリポジトリ

 -  [node-vimlint](https://github.com/pine/node-vimlint)
 -  [gulp-vimlint](https://github.com/pine/gulp-vimlint)

## 謝辞
このプラグインは `.vim` ファイルを検証する際に下記のソフトウェアを利用しています。この場を借りてお礼申し上げます。

 - [syngan](https://github.com/syngan) / [vim-vimlint](https://github.com/syngan/vim-vimlint)
 - [ynkdir](https://github.com/ynkdir) / [vim-vimlparser](https://github.com/ynkdir/vim-vimlparser)

## ライセンス
MIT ライセンス
