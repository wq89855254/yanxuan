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
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScorll from 'better-scroll'
  export default {
    computed:{
      ...mapState({
        recommendData:state=>state.identify.recommendData
      })
    },
    watch:{
      recommendData(){
        this.$nextTick(()=>{
          new BScorll('.bs_wrapper',{
            scrollY:true
          })
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
