import {reqTabs,reqRecommendData,reqAutoRecommendData} from '../../ajax'
import {GETTABS,GETRECOMMENDDATA,GETAUTORECOMMENDDATA} from '../mutation-types'


const state = {
  tabs:{},
  recommendData:{},
  pullUpData:[]
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

  },

  async getAutoData({commit},{page, size}){
    const result = await reqAutoRecommendData(page,size)
    if(result.code==200){
      commit(GETAUTORECOMMENDDATA,result.data)
    }
  }
}


const mutations = {

  [GETTABS](state,tab){
    state.tabs = tab
  },
  [GETRECOMMENDDATA](state,data){
    state.recommendData = data
  },
  [GETAUTORECOMMENDDATA](state,pullUpData){
    state.pullUpData.push(...pullUpData.result)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

