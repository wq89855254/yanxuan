<template>
  <div class="contain">
    <div class="header">
      <input v-model="inputInfo" v-if="rand"  type="text" :placeholder="rand.keyword">
      <span @click="toBack">取消</span>
    </div>
    <ul v-show="inputInfo" class="search_res">
      <li v-if="showItem.keyword.includes(inputInfo)" v-for="(showItem,index) in searchInfo.defaultKeywords" :key="index">{{showItem.keyword}}</li>
    </ul>

    <div class="hotSearch" :class="{blur:inputInfo}">
      <div class="title">热门搜索</div>
      <ul class="search_wrap">
        <li class="search_item" :class="{highLight:metaItem.highlight}" v-for="(metaItem,index) in searchInfo.hotKeywordVOList" :key="index">{{metaItem.keyword}}</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        inputInfo:''
      }
    },
    mounted(){
      this.$store.dispatch('getSearchInfo')
    },
    computed:{
      ...mapState({
        searchInfo:state=>state.search.searchInfo
      }),
      rand(){
        if(this.searchInfo.hotKeywordVOList){
          let {length} = this.searchInfo.hotKeywordVOList
          let init = Math.floor(Math.random()*(length-1))
          return this.searchInfo.hotKeywordVOList[init]
        }
      }
    },

    methods:{
      toBack(){
        this.$router.back()
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .contain
    position: relative;
    box-sizing border-box
    padding 0 0.4rem
    .header
      height: 56px
      margin-top: 25px
      input
        width: 85%
        height: 60px
        padding-left 30px
        background: #f4f4f4
        outline none
      span
        margin-left 10px
        font-size 25px
    .search_res
      position: absolute;
      top: 80px
      left:0.4rem
      width: 85%
      background: rgba(0,0,0,.4)
      border-radius 15px
      z-index: 2
      box-shadow 0 0 35px dimgrey
      overflow: hidden;
      li
        width: 100%
        height: 60px
        line-height 60px
        padding 20px 30px
        font-size:28px
        color #fff
    .hotSearch
      margin-top 20px
      width: 100%
      &.blur
        filter blur(10px)

      .title
        color #999
        font-size:28px
        margin 30px 0
      .search_wrap
        overflow: hidden;
        .search_item
          float: left
          padding 10px 20px
          border:1px solid #999
          border-radius 4px
          margin-right 20px
          margin-bottom 30px
          &.highLight
            border-color: #b4282d;
            color: #b4282d;
</style>
