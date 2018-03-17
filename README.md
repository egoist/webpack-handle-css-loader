# webpack-handle-css-loader

[![NPM version](https://img.shields.io/npm/v/webpack-handle-css-loader.svg?style=flat-square)](https://npmjs.com/package/webpack-handle-css-loader) [![NPM downloads](https://img.shields.io/npm/dm/webpack-handle-css-loader.svg?style=flat-square)](https://npmjs.com/package/webpack-handle-css-loader) [![Build Status](https://img.shields.io/circleci/project/egoist/webpack-handle-css-loader/master.svg?style=flat-square)](https://circleci.com/gh/egoist/webpack-handle-css-loader) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat-square)](https://github.com/egoist/donate)

This is a short-hand module for adding css and extracting css support.

## Install

```bash
yarn add webpack-handle-css-loader

# If you want to extract CSS
# Install this plugin as well
yarn add mini-css-extract-plugin
```

## Usage

```js
const HandleCSSLoader = require('webpack-handle-css-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    isProd && new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ].filter(Boolean)
}
```

> **Note:**
>
> We add `postcss-loader` to each rule, which means in `handleLoader.css()` you got something like `['style-loader', 'css-loader', 'postcss-loader']`, see [here](#constructor) for how to disable it or set options for it.

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### constructor

**Parameters**

-   `options` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**  (optional, default `{}`)
    -   `options.styleLoader` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** style-loader name or path. (optional, default `'style-loader'`)
    -   `options.cacheLoader` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** cache-loader name or path. (optional, default `'cache-loader'`)
    -   `options.cssLoader` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** css-loader name or path. (optional, default `'css-loader'`)
    -   `options.postcss` **([Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean))** Disable or set options for  postcss-loader. (optional, default `undefined`)
    -   `options.sourceMap` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Enable sourcemaps. (optional, default `undefined`)
    -   `options.extract` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Enable CSS extraction. (optional, default `undefined`)
    -   `options.minimize` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Enable CSS minimization. (optional, default `undefined`)
    -   `options.cssModules` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Enable CSS modules. (optional, default `undefined`)
    -   `options.extractLoader` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** loader path of mini-css-extract-plugin. (optional, default `'mini-css-extract-plugin/dist/loader'`)

### set

Set value of instance option

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `value` **any** 

### getLoader

Get the rule for specific loader

**Parameters**

-   `test` **[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)** File matcher (optional, default `undefined`)
-   `loader` **[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)** Loader name or path to it (optional, default `undefined`)
-   `options` **any** Options for relevant loader (optional, default `undefined`)

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** [webpack Rule](https://webpack.js.org/configuration/module/#rule)

### css

Get the rule for css files

**Parameters**

-   `test` **[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)** File matcher (optional, default `/\.css$/`)
-   `options` **any** Options for css-loader (optional, default `undefined`)

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** [webpack Rule](https://webpack.js.org/configuration/module/#rule)

### sass

Get the rule for sass files

**Parameters**

-   `test` **[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)** File matcher (optional, default `/\.sass$/`)
-   `options` **any** Options for sass-loader, `indentedSyntax` for sass-loader is `true` here (optional, default `undefined`)

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** [webpack Rule](https://webpack.js.org/configuration/module/#rule)

### scss

Get the rule for scss files

**Parameters**

-   `test` **[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)** File matcher (optional, default `/\.scss$/`)
-   `options` **any** Options for sass-loader (optional, default `undefined`)

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** [webpack Rule](https://webpack.js.org/configuration/module/#rule)

### less

Get the rule for less files

**Parameters**

-   `test` **[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)** File matcher (optional, default `/\.less$/`)
-   `options` **any** Options for less-loader (optional, default `undefined`)

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** [Rule] [webpack Rule](https://webpack.js.org/configuration/module/#rule)

### stylus

Get the rule for stylus files

**Parameters**

-   `test` **[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)** File matcher (optional, default `/\.stylus$/`)
-   `options` **any** Options for stylus-loader (optional, default `undefined`)

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** [webpack Rule](https://webpack.js.org/configuration/module/#rule)

### styl

Get the rule for styl files

**Parameters**

-   `test` **[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)** File matcher (optional, default `/\.styl$/`)
-   `options` **any** Options for stylus-loader (optional, default `undefined`)

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** [webpack Rule](https://webpack.js.org/configuration/module/#rule)

### vue

Get the `loaders` options for vue-loader

**Parameters**

-   `options` **any** Options for relevant loaders (optional, default `{}`)

**Examples**

```javascript
handleLoader.vue({
 scss: {},
 less: {}
})
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

**webpack-handle-css-loader** © [EGOIST](https://github.com/egoist), Released under the [MIT](https://egoist.mit-license.org/) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/webpack-handle-css-loader/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@egoist](https://github.com/egoist) · Twitter [@\_egoistlily](https://twitter.com/_egoistlily)
