<template>
  <div class="contain">
    <div class="header">
      <span class="title">购物车</span>
      <span class="vouchers">领券</span>
    </div>
    <div class="cartBody">
      <div class="navText">
        <span>30天无忧退货</span>
        <span>48小时快速退款</span>
        <span>满88元免邮费</span>
      </div>
     <div class="centerContain">
       <div class="cartImg"></div>
       <div class="cartText">去添加点什么吧</div>
       <div class="login">登录</div>
     </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShopCart'
  }
</script>

<style lang="stylus" scoped>
  .contain
    width: 100%
    height: 100%
    background: #f4f4f4
    overflow: hidden;
    .header
      position: fixed;
      left: 0
      top: 0
      box-sizing border-box
      width: 100%
      height: 88px
      text-align center
      background: #fff
      font-size: 35px
      line-height 88px
      padding: 0 35px
      .title
        margin-left:50px

      .vouchers
        float: right
        color:#b4282d
        font-size:30px
    .cartBody
      padding-top 88px
      .navText
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        display: flex
        justify-content: space-around
        font-size:25px
        color #666
        padding: 20px 35px

      .centerContain
        position: absolute;
        left: 0
        top: 0
        right: 0
        bottom: 0
        margin auto
        width: 480px
        height: 400px
        text-align center
        .cartImg
          display: inline-block
          width: 248px
          height: 248px
          background-position: center center;
          background-repeat: no-repeat;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
        .cartText
          margin 20px 0 30px
          color #999
          font-size 28px
        .login
          width: 100%
          height: 92px
          line-height:92px
          color: #fff;
          background-color: #b4282d;
          border-radius: 0.04rem;
          font-size 30px

</style>
