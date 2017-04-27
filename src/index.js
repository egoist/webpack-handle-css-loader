import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default class HandleCSSLoader {
  constructor({
    fallbackLoader = 'style-loader',
    cssLoader = 'css-loader',
    postcss,
    sourceMap,
    extract,
    minimize
  } = {}) {
    this.fallbackLoader = fallbackLoader
    this.cssLoader = cssLoader
    this.postcssOptions = postcss
    this.sourceMap = sourceMap
    this.extract = extract
    this.minimize = minimize
  }

  getLoader(test, loader, options) {
    const use = [{
      loader: this.cssLoader,
      options: {
        autoprefixer: false,
        sourceMap: this.sourceMap,
        minimize: this.minimize
      }
    }]
    if (loader !== 'postcss-loader' && this.postcssOptions !== false) {
      use.push({
        loader: 'postcss-loader',
        options: {
          ...this.postcssOptions,
          sourceMap: this.sourceMap
        }
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
      use: this.extract ? ExtractTextPlugin.extract({
        use,
        fallback: this.fallbackLoader
      }) : use
    }
  }

  css() {
    return this.getLoader(/\.css$/, 'css-loader')
  }

  sass() {
    return this.getLoader(/\.sass$/, 'sass-loader', {
      indentedSyntax: true
    })
  }

  scss() {
    return this.getLoader(/\.scss$/, 'sass-loader')
  }

  less() {
    return this.getLoader(/\.less$/, 'less-loader')
  }

  stylus() {
    return this.getLoader(/\.(stylus|styl)$/, 'stylue-loader')
  }

  styl() {
    return this.getLoader(/\.(stylus|styl)$/, 'stylue-loader')
  }
}
