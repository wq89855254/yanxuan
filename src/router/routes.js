//路径
import Msite from '../pages/Msite/Msite.vue'
import Recommend from '../pages/Msite/Recommend/Recommend'

import Category from '../pages/Category/Category.vue'
import Catelist from '../pages/Category/categoryList/categoryList'

import Identify from '../pages/Identify/Identify.vue'
import Show from '../pages/Identify/Show/Show'

import ShopCart from '../pages/ShopCart/ShopCart.vue'

import Personal from '../pages/Personal/Personal.vue'
import PhoneLogin from '../pages/Personal/Phone/PhoneLogin'
import EmailLogin from '../pages/Personal/Email/EmailLogin'
import Regist from '../pages/Personal/Regist/Regist'

import Search from '../pages/Search/Search'

export default [
  {
    path:'/msite',
    component:Msite,
    children:[
      {
        path:'/msite/recommend',
        component:Recommend
      }
    ],
    redirect:'/msite/recommend'

  },
  {
    path:'/search',
    component:Search,
    meta:{
      hide:true
    }
  },
  {
    path:'/category',
    component:Category,
    children:[
      {
        path:'/category/cateList/:id',
        component:Catelist,
      }
    ],
    redirect:'/category/cateList/1031001',

  },
  {
    path:'/identify',
    component:Identify,
    redirect:'/identify/show/0',
    //本组件巍然不动
    children:[
      {
        path:'/identify/show/:id',
        component:Show
      },
    ]
  },
  {
    path:'/shopCart',
    component:ShopCart
  },
  {
    path:'/personal',
    component:Personal,
    meta:{
      hide:true
    },
    children:[
      {
        path:'/personal/phone',
        component:PhoneLogin,
        meta:{
          hide:true
        }
      },
      {
        path:'/personal/email',
        component:EmailLogin,
        meta:{
          hide:true
        }
      },
      {
        path:'/personal/regist',
        component:Regist,
        meta:{
          hide:true
        }
      },
    ]
  },

  {
    path:'/',
    redirect:'/msite/recommend'
  }
]
