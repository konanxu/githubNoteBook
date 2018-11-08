import Router from 'vue-router'
import routes from './routes'

// 直接导出会导致 使用一份Router对象，渲染后内存不释放
// const router = new Router({
//   routes
// })

export default () => {
  return new Router({
    routes
  })
}
