//根据环境参数isDev返回不同结果
module.exports = (isDev) => {
  return {
    preserveWhitepace: true,   //帮助去除文本换行空格
    extractcss: true,          //vue里的css单独打包css文件
  }
}