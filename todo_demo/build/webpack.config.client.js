const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

let config

const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  hot: true
}

// 放在client 为了后续服务端渲染
const defaultPlugins = [
  new webpack.DefinePlugin({   //编译以及js代码中使用该参数
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new htmlWebpackPlugin()   //生成入口
]

if (isDev) {
  config = merge(baseConfig, {
    devtool: '#@cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            'css-loader',
            // { css文件也可使用module方式加载
            //   loader: 'css-loader',
            //   module: true,
            //   ocalIdentName: isDev ? '[path]-[name]-[hash:base64:$]' : '[hash:base64:$]'
            // }
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true  //sass-loader会生成source 这里设置是直接使用提高效率   
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devServer,
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),  //hot 模式所需
      new webpack.NoEmitOnErrorsPlugin()    //过滤错误
    ])
  })
} else {

  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../src/main.js'),
      vender: ['vue']
    },
    output: {
      filename: '[name].[chunkHash:8].js'
    },
    module: {
      rules: [{
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
      }]
    },
    plugins: defaultPlugins.concat([
      new ExtractPlugin('styles.[contenthash].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vender'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      })
    ])
  })
}
module.exports = config