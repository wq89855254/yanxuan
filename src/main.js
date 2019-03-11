import Vue from 'vue'
import App from './App'

// 全局组件
import Header from './components/Header/Header'
import Split from './components/Split/Split'
// 插件
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import './Mock/mockServer'

Vue.component( 'Header',Header)
Vue.component( 'Split',Split)

new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
