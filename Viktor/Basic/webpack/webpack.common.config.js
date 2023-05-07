const path = require("path");

const common = {
  entry: path.resolve(__dirname, "..", "src", "js", "index.js"),
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "main.js",
  },
};

module.exports = common;
