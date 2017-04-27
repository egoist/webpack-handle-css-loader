module.exports = {
  test: /\.css$/,
  use: [{
    loader: 'style-loader',
    options: {
      sourceMap: undefined
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
