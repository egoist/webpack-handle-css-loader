# webpack-handle-css-loader

[![NPM version](https://img.shields.io/npm/v/webpack-handle-css-loader.svg?style=flat-square)](https://npmjs.com/package/webpack-handle-css-loader) [![NPM downloads](https://img.shields.io/npm/dm/webpack-handle-css-loader.svg?style=flat-square)](https://npmjs.com/package/webpack-handle-css-loader) [![Build Status](https://img.shields.io/circleci/project/egoist/webpack-handle-css-loader/master.svg?style=flat-square)](https://circleci.com/gh/egoist/webpack-handle-css-loader) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat-square)](https://github.com/egoist/donate)

This is a short-hand module for adding css and extracting css support.

## Install

```bash
$ npm install --save webpack-handle-css-loader
```

## Usage

```js
const cssLoader = require('webpack-handle-css-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  module: {
    rules: [
      // css-loader support
      // when process.env.NODE_ENV === 'production' css will be extracted into a single file
      cssLoader(),
      // similar to above but add sass-loader too
      cssLoader({loader: 'sass-loader', test: /\.scss$/})
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash:8].css')
  ]
}
```

## API

### cssLoader([options])

#### options

##### loader

Type: `string`<br>
Default: `undefined`

The loader you wanna use, eg: `sass-loader` `postcss-loader`, when it's undefined only `style-loader` and `css-loader` will be applied.

##### cssLoader

Type: `string`<br>
Default: `css-loader?-autoprefixer&sourceMap`

- `-autoprefixer`: you should handle this by yourself, otherwise letting webpack handle it leads to mismatch between development build and production build.
- `sourceMap`: only have effect when your set `devtool` option in your webpack config.

##### fallbackLoader

Type: `string`<br>
Default: `style-loader`

##### test

Type: `RegExp`<br>
Default: `/\.css$/`

The regular expression for matching files.

##### env

Type: `string`

Optionally use `env` option if you don't want to set `process.env.NODE_ENV`

### cssLoader.vue([options])

Get loader for `vue-loader` 's `loaders` options, eg:

```js
{
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    loaders: {
      css: cssLoader.vue(),
      stylus: cssLoader.vue({loader: 'stylus-loader'})
    }
  }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**webpack-handle-css-loader** © [EGOIST](https://github.com/egoist), Released under the [MIT](https://egoist.mit-license.org/) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/webpack-handle-css-loader/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
