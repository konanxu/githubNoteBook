import Router from 'vue-router'
import routes from './routes'

// 直接导出会导致 使用一份Router对象，渲染后内存不释放
// const router = new Router({
//   routes
// })

export default () => {
  return new Router({
    routes,
    mode: 'history',
    linkActiveClass: 'active-link', // 默认值router-link-active
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPosition) { // 滚动记录
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    // parseQuery(query) { // 字符串 => JSON Obj

    // },
    // stringifyQuery(obj) {

    // }
    fallback: false
  })
}
