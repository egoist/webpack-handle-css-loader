import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default function ({
  loader,
  cssLoader = 'css-loader?-autoprefixer&sourceMap',
  test = /\.css$/,
  env
} = {}) {
  const prod = (process.env.NODE_ENV === 'production') || (env === 'production')

  const loaders = [cssLoader]
  if (loader) loaders.push(loader)

  if (prod) {
    return {
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: loaders
      }),
      test
    }
  }
  return {
    loaders: ['style-loader', ...loaders],
    test
  }
}
