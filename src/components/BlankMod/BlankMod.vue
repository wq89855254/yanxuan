<template>
  <div class="container">
    <div class="nav">
      <h2 class="title">标题</h2>
      <span class="more">更多</span>
    </div>
    <div class="content">
      <slot name="cont"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlankMod'
  }
</script>

<style lang="stylus" scoped>
  .container
    box-sizing border-box
    width: 100%
    .nav
      box-sizing border-box
      width: 100%
      height: 1.33333rem;
      line-height: 1.33333rem;
      padding: 0 30px;
      background: #fff;
      overflow: hidden;

      .title
        float: left;
        font-size: .42667rem;
        font-family: PingFangSC-Regular;
      .more
        display: block;
        font-size: .37333rem;
        float: right;
        color: #333;
        line-height: 1.33333rem;
    .content
      background: #fff;
      padding: 0 .4rem .4rem;
      overflow: hidden;
      .puzContain
        position: relative;
        overflow: hidden;
        background: #fff;
        margin-bottom: .26667rem;
        padding: 0 .34667rem .34667rem .4rem;
        .puzItem
          display: inline-block;
          position: relative;
          margin: 0 .05333rem .05333rem 0;
          width: 4.57333rem;
          height: 3.46667rem;
          overflow: hidden;
          background-color: #f4f4f4;
          border-radius: .05333rem;
</style>
