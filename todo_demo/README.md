# Study Line

## eslint 安装依赖项

```
npm i eslint eslint-config-standard eslint-plugin-standard eslint-plugin-prose eslint-plugin-import eslint-plugin-node eslint-plugin-html -D
```

```
npm i eslint-loader babel-eslint -D
```


component: () => import('') 异步加载 加快首屏加载


### 导航守卫
```js
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```

组件内部beforeRouteLeave在表单更改离开页面场景使用
不支持要安装babel-plugin-dynamic-import-node

```js
export default () => {
  return new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      updateCount(state, num) {
        state.count = num
      }
    }
  })
}
```

import createStore from './store/store.js'

const store = createStore()

默认导出createStore  好配置 SSR准备

