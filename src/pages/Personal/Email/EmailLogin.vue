<template>
  <div class="contain">
    <div class="telCheck">
      <input v-model="email"  type="text" placeholder="请输入邮箱账号">
      <p v-if="this.email" :class="{email:isemail}">{{isemail?'可以使用':'请输入正确的邮箱账号'}}</p>
    </div>
    <div class="verification_wrap">
      <input name="" type="text" placeholder="请输入密码">
    </div>
    <div class="otherInfo">
      <span class="question">遇到问题?</span>
      <span>使用密码验证登录</span>

    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        email:''
      }
    },
    computed:{
      isemail(){
        const reg = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/
        return reg.test(this.email)
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
        &.email
          color:limegreen
    .verification_wrap
      position: relative;
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
