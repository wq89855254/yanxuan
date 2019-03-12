import {reqSearchInfo} from '../../ajax'
import {GETSEARCHINFO} from '../mutation-types'

const state = {
  searchInfo:{}
}
const getters = {}

const actions = {
  async getSearchInfo({commit}){
    const result = await reqSearchInfo()
    if(result.code==200){
      commit(GETSEARCHINFO,result.data)
    }
  }
}

const mutations = {
  [GETSEARCHINFO](state,info){
    state.searchInfo = info

  }

}

export default{
  state,
  getters,
  actions,
  mutations
}
