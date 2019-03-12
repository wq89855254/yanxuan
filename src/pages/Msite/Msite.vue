<template>
  <div>
    <Header>
      <div class="title" slot="title"></div>
      <!--头部导航-->
      <nav class="head_nav " slot="bottom">
        <div class="wrapper">
          <ul class="nav_wrap content">
            <li class="active">推荐</li>
            <li>居家</li>
            <li>鞋包配饰</li>
            <li>服装</li>
            <li>电器</li>
            <li>婴童</li>
            <li>饮食</li>
            <li>洗护</li>
            <li>餐厨</li>
            <li>文体</li>
            <li>特色区</li>
          </ul>
        </div>
        <div class="toggle_channel">
          <span class="iconfont icon-arrow"></span>
        </div>
      </nav>
      <!--登录-->
      <div class="login" slot="login">登录</div>
    </Header>
    <routerView/>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    mounted () {
      const scroll = new BScroll('.wrapper',{
        scrollX:true,
      })
    }
  }
</script>

<style lang="stylus" scoped>
  $rem = 67.5rem
  p2r(w)
    w/$rem

  .head_nav
    /*position: fixed;
    left: 0
    top:43px*/
    width: 100%;
    height: 1rem;
    line-height: 0.8rem;
    .wrapper
      position: relative;
      width: 88%
      height 100%
      float: left
      overflow hidden
      .content
        position: absolute;
        left: 0
        top: -3px
        white-space nowrap
        li
          position: relative;
          display: inline-block
          text-align: center;
          color: #333;
          font-size: 0.37333rem;
          padding 0 10px
          margin-left 5px
          &.active
            color #b4282d
            &::before
              content:''
              position: absolute;
              left: 0
              bottom 2px
              width: 100%
              height: 0.04rem
              background: #b4282d
    .toggle_channel
      width: 10%
      height: 100%
      float right
      text-align: center
      .icon-arrow
        color #333
        font-size 30px

    .banner_container
      width: 100%
      .swiper_wraper
        display: flex
</style>
