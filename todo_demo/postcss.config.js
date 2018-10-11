//postcss 后处理css文件 添加兼容前缀

const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    autoprefixer()
  ]
}