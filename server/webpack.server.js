const path = require('path');

module.exports = {
  
  // Inform webpack that we are building a bundle for node js
  target: "node",

  // Tell webpack root file
  entry: "./src/index.js",

  // output directory
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "build")
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', {
              targets: {
                browsers: [
                  'last 2 versions'
                ]
              }
            }]
          ]
        }
      }
    ]
  },

}