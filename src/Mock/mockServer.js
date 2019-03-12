import Mock from 'mockjs'
import shouye from './shouye_data'
import fenlei from './fenlei_zhuanqu'
import cate from './cateList'

Mock.mock('/home',{code:0,data:shouye})
Mock.mock('/cate',{code:0,data:fenlei})

