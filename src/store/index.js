import Vue from 'vue'
import Vuex from 'vuex'

import msite from './modules/msite'
import category from './modules/category'
import identify from './modules/identify'
import search from './modules/search'
import regist from './modules/regist'

Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    msite,
    category,
    identify,
    search,
    regist
  }
})
