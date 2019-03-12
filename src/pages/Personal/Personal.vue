<template>
  <div class="contain">
    <div class="perHeader">
      <div class="icon_shouye" @click="goto('/msite')"><i class="iconfont icon-552cd5641bbec"></i></div>
      <div class="logo"></div>
      <div class="search">
        <span class="iconfont icon-fangdajing" @click="goto('/search')"></span>
        <span class="iconfont icon-caigou-xianxing"></span>
      </div>
    </div>
    <div class="perMain" :class="{bgWhite:this.$route.path.includes('/personal/')}">
      <div class="yanxuan_logo" :class="{toPhone:this.$route.path.includes('/personal/')}">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>

      <routerView/>

      <div class="login_wrap">
        <button v-if="$route.path.includes('/personal/')" class="toLogin"
        @click="letRegestOrReg">{{loginOrReg}}</button>
        <button v-show="!$route.path.includes('/phone')&&loginOrReg!=='注册'" class="phone_login" @click="goto('/personal/phone')"><i></i>手机号码登录</button>
        <button v-show="!$route.path.includes('/email')&&loginOrReg!=='注册'" class="email_login" @click="goto('/personal/email')"><i></i>邮箱账号登录</button>
        <div v-show="loginOrReg!=='注册'" class="regist" @click="goto('/personal/regist')">手机号快捷注册></div>
      </div>
    </div>
    <div class="login_another">
      <div class="wechat">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="qq">
        <i class="iconfont icon-qq-link"></i>
        <span>QQ</span>
      </div>
      <div class="weibo">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        loginOrReg:'登录',
      }
    },
    mounted(){
      this.loginOrReg = (this.$route.path==='/personal/regist')?'注册': '登录'

    },
    computed:{
      ...mapState({
        tel:state=>state.regist.tel,
        // pwd:state=>state.regist.pwd
      })
    },
    methods:{
      goto(path){
       /* if(path==='personal/regist'){
          this.loginOrReg = '注册'
        }else {
          this.loginOrReg = '登录'

        }*/
        this.loginOrReg = (path==='/personal/regist')?'注册': '登录'
        this.$router.push(path)
      },
      letRegestOrReg(){
        if(this.loginOrReg==='登录'){
          alert(1)
        }else{
          console.log(this.tel)
        }
      }


    },

  }
</script>

<style lang="stylus" scoped>
  .contain
    width: 100%
    .perHeader
      position fixed
      left: 0
      top: 0
      width: 100%
      height: 82.5px
      line-height 82.5px
      background: #fff
      display: flex
      justify-content: space-around
      .iconfont
        font-size 0.68rem
        vertical-align middle
        &.icon-caigou-xianxing
          margin-left:20px

      .logo
        width: 2.29333rem;
        height: 0.72rem;
        margin-left: 0.8rem;
        background-position: 0 -1.70667rem;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
        background-repeat: no-repeat;
        background-size: 2.29333rem 5.6rem;
        margin-top 15px


    .perMain
      position: fixed;
      top: 88px
      bottom: 0
      width: 100%
      background: #f2f5f4
      &.bgWhite
        background: #fff
      .yanxuan_logo
        position: relative;
        height: 418px
        &.toPhone
          height:318px
        img
          position: absolute;
          left: 50%
          top: 50%
          width: 267px
          height: 90px
          transform translate(-50%,-50%)
      .login_wrap
        padding 0 80px
        margin-top 60px
        button
          width: 100%
          display: block
          outline none
          border 0
          background: #fff
          &.toLogin
            margin 20px 0
            height: 96px
            line-height 96px
            text-align center
            font-size 28px
            color: #fff;
            border: 1px solid darkseagreen;
            background-color: darkseagreen;
            border-radius: 4px;
          &.phone_login
            margin 20px 0
            height: 96px
            line-height 96px
            text-align center
            font-size 28px
            color: #fff;
            border: 1px solid #b4282d;
            background-color: #b4282d;
            border-radius: 4px;
          &.email_login
            margin 20px 0
            color: #b4282d;
            height: 96px
            line-height 96px
            text-align center
            font-size 28px
            border: 1px solid #b4282d;
            border-radius: 4px;
        .regist
          margin-top 30px
          color: #333;
          font-size: 0.37333rem;
          text-align: center;
    .login_another
      position: absolute;
      bottom:190px
      width: 100%
      color #7f7f7f
      display: flex
      justify-content: center
      div
        font-size:30px
        width: 176px
        text-align center
        &:nth-of-type(2)
          border-left:2px solid
          border-right:2px solid
        .iconfont
          font-size:30px

</style>
