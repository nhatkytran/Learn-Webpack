const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");

const config = merge(common, {
  mode: "production",
});

module.exports = config;
