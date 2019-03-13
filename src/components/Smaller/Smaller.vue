<template>
  <div class="contain">
    <div class="textWrap">
      <div class="title">
        <i></i>
        <span>{{topic.nickname}}</span>
      </div>
      <p class="text">{{topic.title}}</p>
      <p class="greyText">{{topic.subTitle}}</p>

    </div>

    <div class="imgWrap">
      <img v-lazy="topic.picUrl" alt="">
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
  .contain
    width: 100%
    padding: 0.36rem 0.34rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: flex
    justify-content: space-between
    .textWrap
      width: 400px

      .title
        font-size: 0.48rem;
        color: #333;
        line-height: 0.58rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        padding-top: 0.32rem;
        margin-bottom: 20px
        span
          font-size 30px
      .text
        font-size:25px
        line-height 38px
        margin-bottom:20px
      .greyText
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.38rem;
        line-height: 0.4rem;
        padding-top: 0.18rem;
        color: #7f7f7f;

    .imgWrap
      width: 500px
      height: 278px
      img
        width: 100%
        height: 100%
</style>
