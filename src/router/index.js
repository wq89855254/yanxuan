import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//引用插件
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history', //去掉#
  routes
})
