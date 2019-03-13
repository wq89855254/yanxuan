import ajax from './ajax'
const api = '/api'
// http://m.you.163.com/topic/v1/find/recAuto.json
export const reqHome = () => ajax('/home')
export const reqCate = () => ajax('/cate')
// 请求识物组件内Tab懒数据
export const reqTabs = () => ajax(`${api}/topic/v1/find/getTabs.json`)
// 请求识物下推荐数据
export const reqRecommendData = () => ajax(`${api}/topic/v1/find/recManual.json`)
// 推荐数据上拉加载
export const reqAutoRecommendData = (page, size, exceptIds = '6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383') => ajax(`${api}/topic/v1/find/recAuto.json`, {page, size, exceptIds})

// 获取搜索组件初始化数据
export const reqSearchInfo = () => ajax(`${api}/xhr/search/init.json`)
