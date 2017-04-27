module.exports = {
  test: /\.sass$/,
  use: [{
    loader: 'style-loader',
    options: {
      sourceMap: undefined
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
