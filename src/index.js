import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default function ({
  loader,
  cssLoader = 'css-loader?-autoprefixer&sourceMap',
  fallbackLoader = 'style-loader',
  test = /\.css$/,
  env
} = {}) {
  const prod = (process.env.NODE_ENV === 'production') || (env === 'production')

  const loaders = [cssLoader]
  if (loader) loaders.push(loader)

  if (prod) {
    return {
      loader: ExtractTextPlugin.extract({
        fallbackLoader,
        loader: loaders
      }),
      test
    }
  }
  return {
    loaders: [fallbackLoader, ...loaders],
    test
  }
}
