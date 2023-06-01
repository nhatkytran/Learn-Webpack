const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const common = {
  entry: path.resolve(__dirname, "..", "src", "js", "index.js"),
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [{ loader: "html-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};

module.exports = common;
