<template>
  <div class="contain" >
    <Header/>
    <div class="main">
      <div class="wrapper nav_wrapper">
        <ul class="cateNav">
          <li v-for="(cateNavItem,index) in cateInfo.categoryL1List" :key="index">
            <router-link :class="{active:cateNavItem.id==$route.params.id}" :to="`/category/cateList/${cateNavItem.id}`">
              <span  class="navTitle">{{cateNavItem.name}}</span>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="cateList">
        <routerView/>

      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$store.dispatch('getCateInfo')

    },
    computed:{
      ...mapState({
        cateInfo:state=>state.category.cateInfo
      })
    },
    watch:{
      cateInfo(){
        this.$nextTick(()=>{
          new BScroll('.wrapper',{
            scrollY:true,
            click:true
          })
        })
      },

    }
  }
</script>

<style lang="stylus" scoped>
  .contain
    .main
      margin-top 87px
      display: flex
      .nav_wrapper
        height: 1244px
        .cateNav
          width: 162px
          overflow: hidden;
          a
            float: left
            width: 100%
            color: #7e8c8d
            text-align center
            margin 40px 0
            font-size 28px
            &.active
              color darkorange
      .cateList
        width: 528px
        padding: 0.4rem 0.4rem 0.28rem;
        /*background: darksalmon*/

</style>
