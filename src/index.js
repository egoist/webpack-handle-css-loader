import ExtractTextPlugin from 'extract-text-webpack-plugin'

function handle({
  loader,
  cssLoader = 'css-loader?-autoprefixer',
  fallbackLoader = 'style-loader',
  test = /\.css$/,
  env
} = {}) {
  const prod = (process.env.NODE_ENV === 'production') || (env === 'production')

  let loaders = [cssLoader]

  if (Array.isArray(loader)) {
    loaders = [...loaders, ...loader]
  } else if (loader) {
    loaders = [...loaders, loader]
  }

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

handle.vue = options => {
  options = Object.assign({
    fallbackLoader: 'vue-style-loader'
  }, options)
  const {loader, loaders} = handle(options)
  if (loader) {
    return loader
  }
  return loaders.join('!')
}

export default handle
