<template>
  <div class="contain">
    <div class="telCheck">
      <input v-model="tel"  type="text" placeholder="请填写您的手机号">
      <p v-if="this.tel" :class="{realTel:isRealTel}">{{isRealTel?'可以使用':'请输入正确的手机号'}}</p>
    </div>
    <div class="verification_wrap">
      <input v-model="pwd" type="password" placeholder="请输入密码">
      <p v-if="this.pwd" :class="{realPwd:isRealPwd}">{{isRealPwd?'可以使用':'密码有点low'}}</p>
      <!--<div class="verification" >获取验证码</div>-->
    </div>
    <div class="otherInfo">
      <span class="question">遇到问题?</span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        tel:'',
        pwd:''
      }
    },
    computed:{
      isRealTel(){
        const reg = /^1\d{10}$/
        return reg.test(this.tel)
      },
      isRealPwd(){
        const reg = /^\w{4,}$/
        return reg.test(this.pwd)
      }
    },
    watch:{
      tel(){
        this.$store.dispatch('collect',this.tel)
      }

    }
  }
</script>

<style lang="stylus" scoped>
  .contain
    width: 100%
    text-align center
    input
      width: 90%;
      height: 1.2rem;
      font-size: 0.4rem;
      line-height: 0.6rem;
      margin: 0.39rem 0;
      padding-left: 0;
      -webkit-tap-highlight-color: transparent;
      outline: none;
      border-bottom: 1px solid #bdbdbd;
    .telCheck
      p
        text-align right
        margin-right: 30px
        color orangered
        &.realTel
          color:limegreen
    .verification_wrap
      position: relative;
      p
        text-align right
        margin-right: 30px
        color orangered
        &.realPwd
          color:limegreen

      .verification
        position: absolute;
        right: 50px;
        top: 45px;
        font-size: 0.36rem;
        width: 2.3rem;
        height: 0.75rem;
        text-align: center;
        color: #333;
        background: #fff;
        line-height: 0.75rem;
        border: 1px solid #333;
        border-radius: 10px;
    .otherInfo
      margin 0 auto
      width: 90%
      display: flex
      justify-content: space-between
      font-size:28px
      .question
        color #7f7f7f
</style>
