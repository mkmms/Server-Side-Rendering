const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  
  // Inform webpack that we are building a bundle for node js
  target: "node",

  // Tell webpack root file
  entry: "./src/index.js",

  // output directory
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "build")
  },

  externals: [ webpackNodeExternals() ]

}


module.exports = merge(baseConfig, config);