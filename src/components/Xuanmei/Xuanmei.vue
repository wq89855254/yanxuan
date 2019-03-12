<template>
  <div class="container">
    <div class="title">
      <i></i>
      <span>{{topic.nickname}}</span>
    </div>
    <p class="text">{{topic.title}}</p>
    <div class="imgWrap">
      <img :src="topic.picUrl" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      topic:Object
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width: 100%
    padding: 0.36rem 0.34rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff
    .title
      margin-bottom: 0.54rem;
      font-size: 0.38rem;
      color: #333;
      height: 0.38rem;
      line-height: 0.38rem
    .text
      font-size: 0.48rem;
      color: #333;
      line-height: 0.62rem;
      margin: -0.08rem 0 0.16rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    .imgWrap
      width: 100%
      height: 400px
      img
        width: 100%
        height: 100%

</style>
