const path = require('path')

module.exports = {
  mode: 'development',
  entry: ['./main'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /url\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: { svgo: true, dimensions: false },
          },
          { loader: 'file-loader', options: { name: '[name].[ext]' } },
        ],
      },
    ],
  },
}
