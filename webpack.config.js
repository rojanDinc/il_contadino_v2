const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
}