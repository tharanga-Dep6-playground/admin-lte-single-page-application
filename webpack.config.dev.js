const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { default: merge } = require("webpack-merge")
const superConfig = require("./webpack.config")

module.exports = merge(superConfig,{
    devServer: {
      port: 3000
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'main.css'
      }),
    ],
    mode: 'development',
    devtool: false
  });