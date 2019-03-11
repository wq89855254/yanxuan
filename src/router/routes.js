//路径
import Msite from '../pages/Msite/Msite.vue'
import Recommend from '../pages/Msite/Recommend/Recommend'

import Category from '../pages/Category/Category.vue'
import Identify from '../pages/Identify/Identify.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'

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
    path:'/category',
    component:Category
  },
  {
    path:'/identify',
    component:Identify
  },
  {
    path:'/shopCart',
    component:ShopCart
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/',
    redirect:'/msite/recommend'
  }
]
