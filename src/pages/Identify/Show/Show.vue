<template>
  <div class="bs_wrapper">
    <div class="contain">
      <!--推荐-->
      <ul v-for="(recom,index) in recommendData" :key="index">
        <li v-for="(topic,index) in recom.topics" :key="index">
          <Xuanmei v-if="topic.style==1" :topic="topic"/>
          <Smaller v-if="topic.style==2" :topic="topic"/>
          <Split/>
        </li>
      </ul>

      <ul v-for="(autoItem,index) in pullUpData" :key="'0'+index">
        <li v-for="(topic,index) in autoItem.topics" :key="'0'+index">
          <Xuanmei v-if="topic.style==1" :topic="topic"/>
          <Smaller v-if="topic.style==2" :topic="topic"/>
          <PhotoWall v-if="topic.style==4" :topic="topic"/>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScorll from 'better-scroll'
  export default {
    data(){
      return {
        pageNum:1
      }
    },
    computed:{
      ...mapState({
        recommendData:state=>state.identify.recommendData,
        pullUpData:state=>state.identify.pullUpData
      })
    },
    watch:  {
      recommendData(){
        this.$nextTick(()=>{
          let wrap = new BScorll('.bs_wrapper',{
            scrollY:true,
            probeType:2,
            bounce:false,  //不触发回弹动画
            pullDownRefresh:true,
            pullUpLoad:true,
            threshold:50,
            click:true

          })
          wrap.on('pullingUp',()=>{
            console.log('上拉加载')
            this.$store.dispatch('getAutoData', {page: this.pageNum, size: 5})

            this.pageNum++
            console.log(this.pageNum)
            wrap.finishPullUp();//可以多次执行上拉刷新

          })
          wrap.refresh();

        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .bs_wrapper
    width: 100%
    height: 1066px
    margin-top 151px
    overflow: hidden;

</style>
