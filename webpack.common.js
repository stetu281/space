const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackPrettierPlugin = require("webpack-prettier-plugin");

module.exports = {
  entry: "./src/js/app.js",
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/html/index.html",
    }),
    new CleanWebpackPlugin(),
    new WebpackPrettierPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "assets/resource",
      },
    ],
  },
};
