const copyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: 'main.bundle.js',
      path: __dirname+ '/docs/',
      publicPath: '',
      assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
      rules: [
        {
          test: /[.]scss$/,
          use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
        },
        {
          test: /\.(png|jpeg|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource'
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new copyWebpackPlugin({
          patterns: [
              {
                from: "./src/img/", to: "./img/"
              },
              {
                from: "./node_modules/admin-lte/plugins/", to: "./node_modules/admin-lte/plugins/"
              },
              {
                from: "./node_modules/admin-lte/dist/", to: "./node_modules/admin-lte/dist/"
              },
          ]
      })
    ],
  };