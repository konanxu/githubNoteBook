const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const createVueLoaderOptins = require('./vue-loader.config')
const config = {
  mode: process.env.NODE_ENV || 'production', //添加默认值
  target: 'web',
  entry: path.join(__dirname, '../src/main.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'      //预处理
      },
      {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: createVueLoaderOptins(isDev)
    }, {
      test: /\.jsx$/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      use: [
        {
          loader: 'url-loader',  //图片转为base64
          options: {
            limit: 1024,        //小于1024 就转为base64
            name: 'resource/[path][name].[hash:8].[ext]'
          }
        }
      ]
    }
    ]
  }
}

module.exports = config
