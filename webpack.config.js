const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "./client/src", "./index.js"),
  output: {
    publicPath: '/dist/',
    path:path.resolve(__dirname, "static/dist"),
    filename: 'index.bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./client/src", "./index.html"),
      inject: 'body'
    }),
  ],
}