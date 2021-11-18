/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');
/* eslint-enable @typescript-eslint/no-var-requires */

let mode = 'development';
let target = 'web';
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name]/css/main.css',
  }),
  new EnvironmentPlugin({
    NODE_ENV: 'development',
    DEBUG: false,
    PUBLIC_URL: '',
  }),
];

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { options: {} },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          // Do not defer to .babelrc because that will look into the target
          // project.
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },

  plugins,
  target,

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
