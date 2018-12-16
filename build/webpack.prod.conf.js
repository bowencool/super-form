const { assetsPath, resolve } = require('./utils');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: '/',
    filename: assetsPath('js/[name].[chunkhash].js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  devtool: '#source-map',
  stats: {
    entrypoints: false,
    children: false,
    modules: false,
    warnings: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      favicon: resolve('favicon.ico'),
      // todo https://github.com/jantimon/html-webpack-plugin/issues/1081
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: assetsPath('css/[name].[chunkhash].css'),
    }),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css(\?.*)?$/,
      }),
      new TerserPlugin({
        sourceMap: true,
        cache: true,
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
});
