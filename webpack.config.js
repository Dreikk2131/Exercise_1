const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
var webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const common = merge([{
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery/dist/jquery.min.js",
      jQuery: "jquery/dist/jquery.min.js"
    }),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      title: 'Output Management',
      fixAssets: true
    }),
    
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            {loader: 'style-loader'},
            {loader:'css-loader'},
            {loader:'sass-loader'}
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff)$/,
        use: [
          {
            loader: 'file-loader',
            options:{
              name:'./fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
},
pug()
]);

module.exports = function(env){
  if(env==='production'){
    return common;
  }
  if(env==='development'){
    return merge([
      common,
      devserver()
    ])
  }
}