import {COLLECTINFO} from '../mutation-types'
const state = {
  tel:'',
  pwd:''
}
const getters = {}
const actions = {
  collect({commit},tel){
    commit(COLLECTINFO,tel)
  }
}
const mutations = {
  [COLLECTINFO](state,tel){
    state.tel = tel
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
