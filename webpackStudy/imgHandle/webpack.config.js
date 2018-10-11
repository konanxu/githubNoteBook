const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: {
            loader: 'style-loader',
            // options: {
            //   // insertInto: '#app',
            //   singleton: true,
            //   // transform: './css.transform.js'
            // }
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                // minimize: true,
                // sourceMap: true,
                modules: true,
                // localIdentName: '[path][name]_[local]_[hash:base64:5]'
                localIdentName: '[local]'
              }
            },
            {
              loader:'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|jepg|gif)$/,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     // outputPath: 'dist/',
          //     publicPath: '',
          //     useRelativePath: true
          //   }
          // }
          {
            loader: 'url-loader',
            options: {
              limit: 10000,  //limit值小则为路径 , 超过base64大小设置则 转换 base64
              // outputPath: 'asset/img/',
              publicPath: './assets/imgs/',
              useRelativePath: true
            }
          },
          {
            loader: 'img-loader',
            options: {
              // gifsicle: {
              //   interlaced: false
              // },
              // mozjpeg: {
              //   progressive: true,
              //   arithmetic: false
              // },
              // optipng: false, // disabled
              pngquant: {
                floyd: 0.5,
                speed: 2
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css',
      allChunks: true
    })
  ]
}