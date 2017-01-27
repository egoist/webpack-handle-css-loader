import cssLoader from '../src'

test('main', () => {
  const loader = cssLoader()
  expect(loader).toEqual({
    loaders: ['style-loader', 'css-loader?-autoprefixer'],
    test: /\.css$/
  })

  const sassLoader = cssLoader({loader: 'sass-loader', test: /\.scss$/})
  expect(sassLoader).toEqual({
    loaders: ['style-loader', 'css-loader?-autoprefixer', 'sass-loader'],
    test: /\.scss$/
  })

  const postcssLoader = cssLoader({loader: 'postcss-loader', env: 'production'})
  expect(typeof postcssLoader.loader).toBe('string')
})
