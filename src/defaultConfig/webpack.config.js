/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');
/* eslint-enable @typescript-eslint/no-var-requires */

let mode = 'development';
let devtool = 'inline-source-map';
let target = 'web';

let isEnvProduction = false;
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  isEnvProduction = true;
  devtool = 'source-map';
}

module.exports = {
  // mode defaults to 'production' if not set
  mode,
  profile: true,
  entry: {},

  output: {},

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          isEnvProduction && {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
          'sass-loader',
        ].filter(Boolean),
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          // Do not defer to .babelrc because that will look into the target
          // project.
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    isEnvProduction &&
      new MiniCssExtractPlugin({
        filename: '[name]/css/main.[contenthash:8].css',
        chunkFilename: '[name]/css/[contenthash:8].chunk.css',
      }),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false,
      PUBLIC_URL: '',
      PUBLIC_ASSETS_URL: '',
    }),
  ].filter(Boolean),
  target,
  devtool,

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
