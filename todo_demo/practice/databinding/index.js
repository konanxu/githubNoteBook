import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  template: `
      <div :style="[styles, styles2]">
      {{isActive ? 'active' : 'not active'}}
      {{Date.now()}}
      <p v-html='html'></p>
    </div>
  `,
  // template: `
  //   <div :class={ active: !isActived }>class动态绑定</div>
  // `,
  // template: `
  //   <div :class=[ isActived ? 'active' : '' ]>class动态绑定</div>
  // [{ active: !isActived }, { active2: !isActived2 }]  多个绑定
  // `,
  data: {
    isActive: false,
    html: '<span>vue默认转义html文本 防止注入</span>',
    styles: {
      color: 'red'
    },
    styles2: {
      color: 'green'
    }
  }
})
