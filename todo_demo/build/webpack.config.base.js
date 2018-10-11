const path = require('path')
// const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.join(__dirname, '../src/main.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
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