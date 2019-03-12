<template>
  <div class="footer">
    <ul class="foot_wrap">
      <li @click="toPages('msite')" :class="{active:$route.path.includes('msite')}">
        <span class="iconfont icon-552cd5641bbec"></span>
        <span>首页</span>
      </li>
      <li @click="toPages('category')" :class="{active:$route.path.includes('category')}">
        <span class="iconfont icon-classifi"></span>
        <span>分类</span>
      </li>
      <li @click="toPages('identify')" :class="{active:$route.path.includes('identify')}">
        <span class="iconfont icon-tupian"></span>
        <span>识物</span>
      </li>
      <li @click="toPages('shopCart')" :class="{active:$route.path==='/shopCart'}">
        <span class="iconfont icon-caigou-xianxing"></span>
        <span>购物车</span>
      </li>
      <li @click="toPages('personal')" :class="{active:$route.path==='/personal'}">
        <span class="iconfont icon-jingjirenjinglikehuxianxingcopy"></span>
        <span>个人</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods:{
      toPages(url){
        this.$router.replace('/'+url)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .footer
    position: fixed;
    left: 0;
    bottom 0
    width: 100%;
    height: 1.30667rem;
    background-color: #fafafa;
    border-top: 0.01rem solid #d9d9d9;
    z-index 10
    .foot_wrap
      display: flex
      justify-content space-around
      width: 100%
      height: 100%
      li
        display: flex
        flex-direction: column
        justify-content center
        font-size: 0.32rem;
        margin-top: -0.2rem;
        text-align center
        &.active
          color:#b4282d

        .iconfont
          font-size:0.7rem
</style>
