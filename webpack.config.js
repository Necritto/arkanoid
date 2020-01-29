/* eslint-disable no-undef */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
            options: { config: { path: './postcss.config.js' } }
          }, {
            loader: 'sass-loader',
          }]
        }
        )
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },

    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new CleanWebpackPlugin(),
  ],
};