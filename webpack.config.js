var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: {
    'app': './app/main.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  output: {
    path: './build',
    filename: '[name].bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  plugins:[
      // Cleaning generated .js and .map files 
      new CleanWebpackPlugin(['app/**/*.js','app/**/*.js.map','app/*.js','app/*.js.map'],
        {
            root: path.resolve('.'),
            verbose: true,
            dry: false
        })
    ] 
};