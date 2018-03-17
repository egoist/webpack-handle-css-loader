module.exports = {
  test: /\.css$/,
  use: [{
    loader: 'style-loader',
    options: {
      sourceMap: true
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
      sourceMap: true
    }
  }, {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }]
}
