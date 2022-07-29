const path = require('path')
const { EntryOptionPlugin } = require('webpack')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: '/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    watchFiles: './',
},
}