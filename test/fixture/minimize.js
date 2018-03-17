module.exports = {
  test: /\.css$/,
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
      minimize: true,
      sourceMap: undefined
    }
  }, {
    loader: 'postcss-loader',
    options: {
      sourceMap: undefined
    }
  }]
}
