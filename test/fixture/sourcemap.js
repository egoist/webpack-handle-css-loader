module.exports = {
  test: /\.css$/,
  use: [{
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
