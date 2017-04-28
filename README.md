# webpack-handle-css-loader

[![NPM version](https://img.shields.io/npm/v/webpack-handle-css-loader.svg?style=flat-square)](https://npmjs.com/package/webpack-handle-css-loader) [![NPM downloads](https://img.shields.io/npm/dm/webpack-handle-css-loader.svg?style=flat-square)](https://npmjs.com/package/webpack-handle-css-loader) [![Build Status](https://img.shields.io/circleci/project/egoist/webpack-handle-css-loader/master.svg?style=flat-square)](https://circleci.com/gh/egoist/webpack-handle-css-loader) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat-square)](https://github.com/egoist/donate)

This is a short-hand module for adding css and extracting css support.

## Install

```bash
$ npm install --save webpack-handle-css-loader
```

## Usage

```js
const HandleCSSLoader = require('webpack-handle-css-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const handleLoader = new HandleCSSLoader({
  minimize: isProd,
  extract: isProd,
  sourceMap: false,
  cssModules: false
})

module.exports = {
  module: {
    rules: [
      // Handle .css files with css-loader & postcss-loader
      handleLoader.css(),
      // Handle .sass files
      // Similar to above but add sass-loader too
      handleLoader.sass()
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
      disable: !isProd
    })
  ]
}
```

> **Note:**
>
> We add `postcss-loader` to each rule, which means in `handleLoader.css()` you got something like `['style-loader', 'css-loader', 'postcss-loader']`, see [here](#postcss) for how to disable it or set options for it.

## API

```js
const handleLoader = new HandlerCSSLoader()
```

### new HandleCSSLoader([options])

#### options

##### minimize

Type: `boolean`<br>
Default: `undefined`

Minimize CSS.

##### extract

Type: `boolean`<br>
Default: `undefined`

Extract CSS.

##### sourceMap

Type: `boolean` `string`<br>
Default: `undefined`

Enable sourcemaps.

##### fallbackLoader

Type: `string`<br>
Default: `style-loader`

##### cssLoader

Type: `string`<br>
Default: `css-loader`

##### cssModules

Type: `boolean`<br>
Default: `undefined`

Enable CSS modules.

##### postcss

Type: `object` `Array` `boolean`

PostCSS options, set it to `false` to disable adding `postcss-loader` for every rule.

### handleLoader.getLoader(test, loader, options)

#### test

Type: `RegExp`

#### loader

Type: `string`

Loader name or the path to it.

#### options

Type: `any`

Loader options.

### handleLoader.css()

Alias to `handleLoader.getLoader(/\.css$/, 'css-loader')`

### handleLoader.sass()

### handleLoader.scss()

### handleLoader.stylus()

### handleLoader.styl()

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
