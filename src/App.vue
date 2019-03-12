<template>
  <div class="app">
    <routerView/>
    <Footer v-if="!$route.meta.hide"/>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer'
  export default {
    components:{
      Footer
    },
    mounted(){
      (function () {
        var width = document.documentElement.clientWidth
        var style = document.createElement('style')
        style.innerHTML = 'html{font-size:'+width/10+'px !important}'
        document.head.appendChild(style)
        console.log(style)
      })();
    }
  }
</script>

<style lang="stylus">
  @import "../static/css/reset.css"
  html,body
    width: 100%
    height: 100%
    overflow: hidden;
    .app
      width: 100%
      height: 100%
</style>
