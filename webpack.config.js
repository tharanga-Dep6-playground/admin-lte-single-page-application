const copyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

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
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        // {
        //   test: /\.min\.js$/,
        //   use: ['script-loader']
        // },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new webpack.ProvidePlugin({
        $: 'admin-lte/plugins/jquery/jquery.min.js',
        jQuery: 'admin-lte/plugins/jquery/jquery.min.js'
      }),
    ],
  };