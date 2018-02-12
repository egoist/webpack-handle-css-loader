export default class HandleCSSLoader {
  /**
   * @param {Object} options
   * @param {string} [options.fallbackLoader='style-loader'] fallback loader.
   * @param {string} [options.cssLoader='css-loader'] css-loader name or path.
   * @param {Object|boolean} [options.postcss=undefined] Options for  postcss-loader.
   * @param {boolean} [options.sourceMap=undefined] Enable sourcemaps.
   * @param {boolean} [options.extract=undefined] Extract CSS.
   * @param {boolean} [options.minimize=undefined] Minimize CSS.
   * @param {boolean} [options.cssModules=undefined]  Enable CSS modules.
   */
  constructor({
    fallbackLoader = 'style-loader',
    cssLoader = 'css-loader',
    postcss,
    sourceMap,
    extract,
    minimize,
    cssModules,
    ExtractTextPlugin
  } = {}) {
    this.fallbackLoader = fallbackLoader
    this.cssLoader = cssLoader
    this.postcssOptions = postcss
    this.sourceMap = sourceMap
    this.extract = extract
    this.minimize = minimize
    this.cssModules = cssModules
    this.ExtractTextPlugin = ExtractTextPlugin
    if (extract && !this.ExtractTextPlugin) {
      this.ExtractTextPlugin = require('extract-text-webpack-plugin')
    }
  }

  /**
   * Set value of instance option
   * @param {string} key
   * @param {any} value
   */
  set(key, value) {
    this[key] = value
  }

  /**
   * Get the rule for specific loader
   * @param  {RegExp} [test=undefined] File matcher
   * @param  {RegExp} [loader=undefined] Loader name or path to it
   * @param  {any} [options=undefined] Options for relevant loader
   * @return {Object} {@link https://webpack.js.org/configuration/module/#rule webpack Rule}
   */
  getLoader(test, loader, options = {}) {
    const cssLoaderOptions = {
      autoprefixer: false,
      sourceMap: this.sourceMap,
      minimize: this.minimize
    }

    if (this.cssModules) {
      cssLoaderOptions.modules = true
      cssLoaderOptions.importLoaders = 1
      cssLoaderOptions.localIdentName = '[name]_[local]__[hash:base64:5]'
    }

    if (loader === 'css-loader') {
      Object.assign(cssLoaderOptions, options)
    }

    const use = [{
      loader: this.cssLoader,
      options: cssLoaderOptions
    }]

    if (loader !== 'postcss-loader' && this.postcssOptions !== false) {
      const postcssOptions = {
        sourceMap: this.sourceMap
      }

      if (Array.isArray(this.postcssOptions)) {
        postcssOptions.plugins = this.postcssOptions
      } else if (typeof this.postcssOptions === 'object') {
        Object.assign(postcssOptions, this.postcssOptions)
      }

      use.push({
        loader: 'postcss-loader',
        options: postcssOptions
      })
    }

    if (loader && loader !== 'css-loader') {
      use.push({
        loader,
        options: {
          ...options,
          sourceMap: this.sourceMap
        }
      })
    }

    return {
      test,
      use: this.extract ? this.ExtractTextPlugin.extract({
        use,
        fallback: this.fallbackLoader
      }) : [{
        loader: this.fallbackLoader,
        options: {
          sourceMap: this.sourceMap
        }
      }, ...use]
    }
  }

  /**
   * Get the rule for css files
   * @param  {RegExp} [test=/\.css$/]    File matcher
   * @param  {any} [options=undefined] Options for css-loader
   * @return {Object} {@link https://webpack.js.org/configuration/module/#rule webpack Rule}
   */
  css(test, options) {
    test = test || /\.css$/
    return this.getLoader(test, 'css-loader', options)
  }

  /**
   * Get the rule for sass files
   * @param  {RegExp} [test=/\.sass$/] File matcher
   * @param  {any} [options=undefined] Options for sass-loader, `indentedSyntax` for sass-loader is `true` here
   * @return {Object} {@link https://webpack.js.org/configuration/module/#rule webpack Rule}
   */
  sass(test, options = {}) {
    test = test || /\.sass$/
    return this.getLoader(test, 'sass-loader', {
      indentedSyntax: true,
      ...options
    })
  }

  /**
   * Get the rule for scss files
   * @param  {RegExp} [test=/\.scss$/]    File matcher
   * @param  {any} [options=undefined] Options for sass-loader
   * @return {Object} {@link https://webpack.js.org/configuration/module/#rule webpack Rule}
   */
  scss(test, options) {
    test = test || /\.scss$/
    return this.getLoader(test, 'sass-loader', options)
  }

  /**
   * Get the rule for less files
   * @param  {RegExp} [test=/\.less$/] File matcher
   * @param  {any} [options=undefined] Options for less-loader
   * @return {Object} [Rule] {@link https://webpack.js.org/configuration/module/#rule webpack Rule}
   */
  less(test, options) {
    test = test || /\.less$/
    return this.getLoader(test, 'less-loader', options)
  }

  /**
   * Get the rule for stylus files
   * @param  {RegExp} [test=/\.stylus$/] File matcher
   * @param  {any} [options=undefined] Options for stylus-loader
   * @return {Object} {@link https://webpack.js.org/configuration/module/#rule webpack Rule}
   */
  stylus(test, options) {
    test = test || /\.stylus$/
    return this.getLoader(test, 'stylus-loader', options)
  }

  /**
   * Get the rule for styl files
   * @param  {RegExp} [test=/\.styl$/] File matcher
   * @param  {any} [options=undefined] Options for stylus-loader
   * @return {Object} {@link https://webpack.js.org/configuration/module/#rule webpack Rule}
   */
  styl(test, options) {
    test = test || /\.styl$/
    return this.getLoader(test, 'stylus-loader', options)
  }

  /**
   * Get the `loaders` options for vue-loader
   * @param  {any} [options={}] Options for relevant loaders
   * @return {Object}
   * @example
   * handleLoader.vue({
   *  scss: {},
   *  less: {}
   * })
   */
  vue(options = {}) {
    this.postcssOptions = false
    this.cssModules = false
    const loaders = {}
    for (const lang of ['css', 'sass', 'scss', 'less', 'stylus', 'styl']) {
      loaders[lang] = this[lang](null, options[lang]).use
    }
    return loaders
  }
}
