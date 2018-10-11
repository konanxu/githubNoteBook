//根据环境参数isDev返回不同结果
module.exports = (isDev) => {
  return {
    preserveWhitepace: true,   //帮助去除文本换行空格
    extractCSS: !isDev,          //vue里的css单独打包css文件  正式环境css打包一起
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:$]' : '[hash:base64:$]',
      camelCase: true               //style 标签 里添加module的使用 cssModules配置 提升保密性
    },
    // hotReload:       //根据环境变量生成
    // loaders: {
    //   'docs': docsLoader,      //编写组件库时可用到
    //   js: 'coffe-loader'
    // }
    // preLoader: {},  
    // postLoader:{}
  }
}