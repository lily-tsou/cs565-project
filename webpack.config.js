const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const serverConfig = {
  entry: './src/server/server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    filename: 'server.js',
    port: 3000,
  }

};

const clientConfig = {
  entry: './src/client/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/index.html"
    })
  ]
};

module.exports = [serverConfig, clientConfig];