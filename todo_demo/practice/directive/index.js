import Vue from 'vue'

/**
 * v-if v-show  控制隐藏用v-show性能更好
 * v-text v-html
 * v-for  重点  :key 最好用item  不用 index
 * v-model     .number  .trim .lazy
 * v-pre  写什么显示什么
 * v-clock
 * v-once
 **/

/* eslint-disable no-new */
new Vue({
  el: '#root',
  template: `<div>
  <div v-text="text"></div>
  <input type="checkbox" :value="1" v-model="array"/>
  <input type="checkbox" :value="2" v-model="array"/>
  <input type="checkbox" :value="3" v-model="array"/>
  <div>
    <input type="radio" value="one" v-model="pick"/>
    <input type="radio" value="two" v-model="pick"/>
    <br/>
    <input  text="text" v-model.trim="text"/>
  </div>
  </div>`,
  data: {
    array: [1, 2, 3],
    text: 0,
    pick: ''
  }
})
