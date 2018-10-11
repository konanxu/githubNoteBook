const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const config = {
  target: 'web',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.jsx$/,
      loader: 'babel-loader'
    }, {
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
            name: '[name].[ext]'
          }
        }
      ]
    }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({   //编译以及js代码中使用该参数
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new htmlWebpackPlugin()   //生成入口
  ]
}

if (isDev) {
  config.module.rules.push(
    {
      test: /\.styl/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true  //sass-loader会生成source 这里设置是直接使用提高效率   
          }
        },
        'stylus-loader'
      ]
    }
  )
  config.devtool = '#cheap-module-eval-source-map'  //方便调试
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),  //hot 模式所需
    new webpack.NoEmitOnErrorsPlugin()    //过滤错误
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'src/main.js'),
    vender: ['vue']
  }
  config.output.filename = '[name].[chunkHash:8].js'

  config.module.rules.push(
    {
      test: /\.styl$/,
      use: ExtractPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true  //sass-loader会生成source 这里设置是直接使用提高效率   
            }
          },
          'stylus-loader'
        ]
      })
    }
  )
  config.plugins.push(
    new ExtractPlugin('styles.[contenthash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vender'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  )
}

module.exports = config