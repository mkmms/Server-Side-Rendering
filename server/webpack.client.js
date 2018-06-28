const path = require('path');

module.exports = {

  // Tell webpack root file
  entry: "./src/client/client.js",

  // output directory
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "public")
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