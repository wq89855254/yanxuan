import {reqCate} from '../../ajax'
import {GETCATEINFO} from '../mutation-types'

const state = {
  cateInfo:{}
}
const getters = {}

const actions = {
  async getCateInfo({commit}){
    const result = await reqCate()
    if(result.code===0){
      commit(GETCATEINFO,result.data)
    }
  }
}

const mutations = {
  [GETCATEINFO](state,cate){
    state.cateInfo = cate
    console.log(state.cateInfo)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
