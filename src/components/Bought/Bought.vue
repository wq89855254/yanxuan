<template>
  <div class="container">
    <div class="nav">
      <slot name="title"></slot>
      <slot name="time_limit"></slot>
      <span class="more">更多></span>
    </div>
    <slot name="recommend" class="recommend"></slot>
    <div class="show_list" >
      <slot name="list_wrap"></slot>

    </div>
  </div>
</template>

<script>
  export default {
    props:{
      title:String
    }

  }
</script>

<style lang="stylus" scoped>
  .container
    width: 100%
    .nav
      box-sizing border-box
      width: 100%;
      height: 1.33333rem;
      line-height: 1.33333rem;
      padding: 0 .4rem;
      background: #fff;
      overflow: hidden;
      .title
        font-size: .42667rem;
        font-family: PingFangSC-Regular;
        float: left
      .more
        display: block;
        font-size: .37333rem;
        float: right;
        color: #333;
        line-height: 1.33333rem;
    .recommend
      color: #333;
      width: 9.2rem;
      height: 280px
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      background: #fef0df;
      border-radius: 0.05333rem;
      margin: 0 0.38rem 0.26667rem;
      overflow: hidden;
      .rec_left
        float: left
        width: 280px
        height: 280px
        img
          width: 280px
          height: 280px
      .rec_right
        float: right
        display: flex
        flex-direction:column
        padding 50px
        .blockText
          padding 10px
          width: 45%
          margin-bottom: 15px
          font-size 22px
          color: #b4282d
        .greyText
          color:#7F7F7F
          margin 15px 0
        .price
          color #b4282d


    .show_list
      overflow: hidden;
      padding: 0 .13333rem 0 .4rem;
      .list_wrap
        text-align: center;
        color: #333;
        float: left;
        margin-right: 0.22rem;
        img
          display: inline-block
          width: 216px
          height: 216px

        .good_detail
          /*padding-left:.26rem*/
          margin 20px 0
          overflow hidden
          width: 214px
          text-align left
          .now_price
            font-size: 0.37333rem;
            color #b4282d
          .text
            color: #333;
            margin-top: 0;
            margin-bottom: 0.13333rem;
            font-size: 0.32rem;
            overflow: hidden
            line-height: 0.48rem;
            white-space: normal;

            text-overflow: ellipsis;
            display:-webkit-box;
            -webkit-line-clamp:2;
            -webkit-box-orient:vertical;
          .old_price
            font-size: 0.32rem;
            color: #7f7f7f;
            text-decoration: line-through;
</style>
