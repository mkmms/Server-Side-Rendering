module.exports = {
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