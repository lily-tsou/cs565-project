const path = require('path');
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// const backend = {
//   entry: './src/backend/server.js',
//   target: 'node',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'server.js'
//   },
//   optimization: {
//     minimize: false
//   },
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'),
//     filename: 'server.js',
//     port: 3000,
//   }

// };

const frontend = {
  entry: './src/frontend/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js'
  },
  optimization: {
    minimize: true
  },
  devtool: "eval-cheap-module-source-map", 
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader'
      }
    ]
  }//,
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/frontend/index.html"
  //   })
  // ]
};

module.exports = frontend;
// module.exports = [frontend, backend];
