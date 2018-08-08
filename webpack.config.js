const webpack = require('webpack');
var path = require('path');

let config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'output.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
  ]
  }
}

module.exports = config;