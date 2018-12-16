const { resolve } = require('./utils');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const apiMocker = require('mocker-api');

module.exports = merge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          // emitWarning: true,
          cache: true,
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  devtool: '#cheap-eval-source-map',
  devServer: {
    port: 9527,
    hot: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    before(app) {
      apiMocker(app, resolve('mock/index.js'))
    },
    stats: {
      entrypoints: false,
      children: false,
      modules: false,
      assets: false,
      version: false,
      builtAt: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      favicon: resolve('favicon.ico'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      configFile: resolve('.stylelintrc'),
      files: '**/*.{less,vue}',
    }),
  ],
});
