import {reqHome} from '../../ajax'
import {GETHOMEINFO} from '../mutation-types'

const state = {
  homeInfo:{}
}
const getters = {

}
const actions = {
  async getHomeInfo({commit}){
    const result = await reqHome('/home')
    if(result.code===0){
      commit(GETHOMEINFO,result.data)
    }
  }
}
const mutations = {
  [GETHOMEINFO](state,info){
    state.homeInfo = info
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
