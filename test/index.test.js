import HandleCSSLoader from '../src'

test('simple', () => {
  const getLoader = new HandleCSSLoader()
  expect(getLoader.css()).toEqual(require('./fixture/empty-options'))
})

test('sourcemap', () => {
  const getLoader = new HandleCSSLoader({
    sourceMap: true
  })
  expect(getLoader.css()).toEqual(require('./fixture/sourcemap'))
})

test('minimize', () => {
  const getLoader = new HandleCSSLoader({
    minimize: true
  })
  expect(getLoader.css()).toEqual(require('./fixture/minimize'))
})

test('built-in sass loader', () => {
  const getLoader = new HandleCSSLoader()
  expect(getLoader.sass()).toEqual(require('./fixture/sass'))
})

test('extract', () => {
  const getLoader = new HandleCSSLoader({ extract: true, sourceMap: true })
  const { use } = getLoader.css()
  expect(use[0].loader).toMatch(/extract-text-webpack-plugin/)
})
