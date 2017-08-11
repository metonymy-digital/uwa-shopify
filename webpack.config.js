const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
};

module.exports = {
  entry: path.resolve(PATHS.src, 'js/index.js'),
  output: {
    path: PATHS.dist,
    filename: 'index.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: loaders => [require('autoprefixer')()],
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded'
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(otf|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
        options: '[path][name].[ext]'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: '[path][name].[ext]'
      },
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'public/img/logo.svg'),
        to: `${PATHS.dist}/img`
      }
    ]),
    new HtmlWebpackPlugin({
      template: './views/layouts/authorized.hbs',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
};
