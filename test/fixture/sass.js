module.exports = {
  test: /\.sass$/,
  use: [{
    loader: 'style-loader',
    options: {
      sourceMap: undefined
    }
  }, {
    loader: 'cache-loader',
    options: {
      cacheDirectory: 'node_modules/cache-loader/.cache',
    }
  }, {
    loader: 'css-loader',
    options: {
      autoprefixer: false,
      minimize: undefined,
      sourceMap: undefined
    }
  }, {
    loader: 'postcss-loader',
    options: {
      sourceMap: undefined
    }
  }, {
    loader: 'sass-loader',
    options: {
      indentedSyntax: true,
      sourceMap: undefined
    }
  }]
}
