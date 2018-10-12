const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'template.html')
  })
]
config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
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
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer,
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
