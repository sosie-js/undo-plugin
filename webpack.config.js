const path = require('path');

module.exports = {
  entry: {
    editor: ['@babel/polyfill/noConflict','./src/index.js', './src/sample.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [ '@babel/preset-env' ],
            },
          },
          /*'eslint-loader'*/
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-nested-ancestors'),
                require('postcss-nested')
              ]
            }
          }
        ]
      }
    ]
  },
  externals: [
    'Undo'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
    library: 'UndoPlugin',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
};
