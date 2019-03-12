import {reqTabs,reqRecommendData} from '../../ajax'
import {GETTABS,GETRECOMMENDDATA} from '../mutation-types'

const state = {
  tabs:{},
  recommendData:{}
}
const getters = {}

const actions = {
  async getTabs ({commit}) {
    const result = await reqTabs()
    if(result.code==200){
      commit(GETTABS,result.data)
    }
  },
  async getRecommendData ({commit}) {
    const result = await reqRecommendData()
    if(result.code==200){
      commit(GETRECOMMENDDATA,result.data)

    }

  }

}

const mutations = {

  [GETTABS](state,tab){
    state.tabs = tab
  },
  [GETRECOMMENDDATA](state,data){
    state.recommendData = data
    console.log(state.recommendData)
  },

}
export default {
  state,
  getters,
  actions,
  mutations
}

