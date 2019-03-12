<template>
  <div class="contain">
    <div class="idenHeader">
      <div class="head_wrap">
        <div class="icon_shouye" @click="toMsite"><i class="iconfont icon-552cd5641bbec"></i></div>
        <div class="title">
          <span class="active">发现</span>
          <span>甄选家</span>
        </div>
        <div class="search">
          <span @click="toSearch" class="iconfont icon-fangdajing"></span>
          <span class="iconfont icon-caigou-xianxing"></span>
        </div>
      </div>

      <ul class="idenNav">
        <li v-for="(tab,index) in tabs" :key="index"
            :class="{active:$route.params.id*1===index}">
          <routerLink :to="`/identify/show/${index}`">
            <a href="javascript:;" >{{tab.tabName}}</a>
          </routerLink>
        </li>
      </ul>
    </div>
    <div class="viewWrap">
      <Split/>
      <routerView/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {

    mounted(){
      this.$store.dispatch('getTabs')
      this.$store.dispatch('getRecommendData')
    },
    methods:{
      toMsite(){
        this.$router.replace('/msite')
      },
      toSearch(){
        this.$router.push('/search')
      }
    },
    computed:{
      ...mapState({
        tabs:state=>state.identify.tabs,
        recommendData:state=>state.identify.recommendData
      })
    }
  }
</script>

<style lang="stylus" scoped>

  .contain
    width: 100%
    .idenHeader
      width: 100%
      position fixed
      left: 0
      top: 0
      z-index 2
      border: 0.01rem solid #d9d9d9
      background: #fafafa
      .head_wrap
        width: 100%
        height: 75px
        line-height 75px
        display: flex
        justify-content: space-around
        .iconfont
          font-size 0.68rem
          vertical-align middle
          &.icon-caigou-xianxing
            margin-left:20px
        .title
          font-size:30px
          font-weight: bold
          .active
              color #b4282d
      .idenNav
        width: 100%
        display: flex
        justify-content: space-between
        border-top 0.01rem solid #d9d9d9
        li
          width: 135px
          text-align: center
          height 75px
          line-height 75px
          overflow: hidden;
          &.active
            color: #b4282d
            border-bottom 0.04rem solid #b4282d
            a
              color inherit
          a
            width: 100%
            font-size 25px
            color #7e8c8d

</style>
