// 入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

/*eslint-disable*/

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
