var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'SessionList': './components/SessionList',
    vendor: [
      'react',
      'react-dom',
      'isomorphic-fetch'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js',
        minChunks: Infinity
    })
  ]
}
