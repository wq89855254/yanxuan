<template>
  <div ref="wrap" class="BSwrapper">
    <div class="contain">
      <div class="list_wrapper" >
        <div class="img_wrap">
          <img :src="detail.wapBannerUrl" alt="">
        </div>
        <div v-for="(cateList,index) in detail.subCateList" :key="index">
          <img :src="cateList.wapBannerUrl" alt="">
          <div class="text">{{cateList.name}}</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        detail:{}

      }
    },
    mounted(){
     /* this.$nextTick(()=>{
      //不生效
        if(this.cateInfo){
          var result = this.cateInfo.categoryL1List.find(item => item.id === this.$route.params.id * 1)
          if (!result) {
            this.detail = this.cateInfo.categoryL1List[1]
          } else {
            this.detail = result
          }
        }
      })*/
    },
    computed:{
      ...mapState({
        cateInfo:state=>state.category.cateInfo
      }),
      /*categoryL2List(){
        if(this.cateInfo.categoryL1List){
          var result = this.cateInfo.categoryL1List.find(item => item.id === this.$route.params.id * 1)
          if (!result) {
            return this.cateInfo.categoryL1List[0]
          } else {
            return result
          }
        }
      }*/
    },
    watch:{
      cateInfo(){
        this.$nextTick(()=>{
          var result = this.cateInfo.categoryL1List.find(item => item.id === this.$route.params.id * 1)
          if (!result) {
            this.detail = this.cateInfo.categoryL1List[0]
          } else {
            this.detail = result
          }

          console.log(this)
          this.bs = new BScroll(this.$refs.wrap,{
            scrollY:true

          })
        })
      },
      $route(value){
        const id = value.params.id * 1
        var result = this.cateInfo.categoryL1List.find(item => item.id === id)
        if (!result) {
          this.detail = this.cateInfo.categoryL1List[0]
        } else {
          this.detail = result
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .BSwrapper
    height: 1100px
    overflow: hidden;
    .contain
      width: 528px

      .list_wrapper
        overflow: hidden;
        .img_wrap
          width: 528px
          height: 192px
          img
            width: 100%
            height: 100%
        div
          width: 144px
          height: 216px
          float: left;
          margin-right:30px
          margin-top 20px
          img
            width: 144px
            height: 144px

</style>
