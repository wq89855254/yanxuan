<template>
  <div class="header">
    <div class="main">
      <span class="title"></span>
      <div class="head_search">
        <span></span>
        <span>搜索商品，共19966款好物</span>
      </div>
      <div class="login">登录</div>
    </div>

    <slot name="bottom"></slot>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="stylus" scoped>
  .header
    position: fixed;
    top: 0
    left: 0
    width: 100%
    z-index 10
    background: #fff;
    .main
      width: 100%
      box-sizing border-box
      display: flex
      padding: 0.21333rem 0.4rem;
      align-items: center;
      .title
        width: 1.84rem;
        height: 0.53333rem;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display: inline-block;
        margin-right: 0.26667rem;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      .head_search
        width: 60%;
        justify-content: center;
        height: 0.74667rem;
        font-size: 0.37333rem;
        background-color: #ededed;
        border-radius: 0.10667rem;
        text-align: center;
        display: flex;
        align-items: center;
      .login
        width: 0.98667rem;
        height: 0.53333rem;
        line-height: 0.53333rem;
        text-align: center;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: 0.10667rem;
        margin-left: 0.21333rem;
        font-size: 0.32rem;
</style>
