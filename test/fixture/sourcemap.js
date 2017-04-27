module.exports = {
  test: /\.css$/,
  use: [{
    loader: 'style-loader',
    options: {
      sourceMap: true
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
