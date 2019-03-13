<template>
  <div class="bs_wrapper">
    <div class="rec_main">
      <!--轮播-->
      <div class="some_show">
        <div class="swiper-container home-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(list,index) in homeInfo.focusList" :key="index">
              <img :src="list.picUrl" alt="">
            </div>
          </div>
          <!--自定义分页器-->
          <div class="swiper-pagination home-pagination"></div>

        </div>
        <div class="return_goods">
          <ul class="group">
            <li v-for="(policy,index) in homeInfo.policyDescList" :key="index">
              <img :src="policy.icon" alt="">
              <span class="text">{{policy.desc}}</span></li>
          </ul>
        </div>
        <div class="food_show">
          <ul class="food_wrap"  v-if="homeInfo.kingKongModule">
            <li class="food_item"  v-for="(cate,index) in homeInfo.kingKongModule.kingKongList">
              <img :src="cate.picUrl" alt="">
              <span>{{cate.text}}</span>
              <!--<span>{{cate.extra.operationResource.categoryName}}</span>-->
            </li>

          </ul>
        </div>
        <!--dont-->
        <div class="girlsDay">
          <div class="img_top">
            <img src="./images/nw01.gif" alt="">
          </div>
          <div class="img_bottom_group">
            <div class="img_lf"><img src="./images/nw02.jpg" alt=""></div>
            <div class="img_rt"><img src="./images/nv03.jpg" alt=""></div>
          </div>
          <div class="img_foot">
            <img src="./images/wyyg.png" alt="">
          </div>
        </div>
        <div class="shopping_guide">
          <ul class="guide_wrap" v-if="homeInfo.sceneLightShoppingGuideModule">
            <li v-for="(scene,index) in homeInfo.sceneLightShoppingGuideModule" :key="index">
              <span class="title">{{scene.styleItem.title}}</span>
              <span class="info">{{scene.styleItem.desc}}</span>
              <div class="img_wrap">
                <img :src="scene.styleItem.picUrlList[0]" alt="">
                <img :src="scene.styleItem.picUrlList[1]" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Split/>
      <!--私人订制-->
      <div class="order">
        <h2 class="title">私人订制</h2>
        <!--轮播-->
        <div class="swiper-container person-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(person,index) in homeInfo.personalShop" :key="index">
              <div>
                <img :src="person.primaryPicUrl" alt="">
                <p>
                  <span>{{person.name}}</span>
                  <span class="price">{{person.retailPrice}}</span>
                </p>
              </div>


            </div>


          </div>
        </div>
      </div>
      <Split/>
      <!--限时购-->
      <Bought v-if="homeInfo.flashSaleModule">
        <div slot="title" class="title">限时购</div>

        <div class="list_wrap" slot="list_wrap"  v-for="(flashItem,index) in homeInfo.flashSaleModule.itemList" :key="index">
          <img :src="flashItem.picUrl" alt="">
          <div class="good_detail">
            <span class="now_price">￥{{flashItem.activityPrice}}</span>
            <span class="old_price">￥{{flashItem.originPrice}}</span>
          </div>
        </div>
      </Bought>
      <Split/>

      <!--新品首发-->
      <Bought>
        <div slot="title" class="title">新品首发</div>
        <div class="list_wrap" slot="list_wrap" v-for="(item,index) in newItemList" :key="index">
          <img :src="item.primaryPicUrl" alt="">
          <div class="good_detail">
            <span class="text">{{item.name}}</span>
            <span class="now_price">￥{{item.counterPrice}}</span>
          </div>
        </div>
      </Bought>
      <Split/>

      <!--人气推荐-->
      <Bought>
        <div slot="title" class="title">人气推荐</div>

        <div slot="recommend" class="recommend" v-if="homeInfo.popularItemList">
          <div class="rec_left">
            <img :src="homeInfo.popularItemList[0].scenePicUrl" alt="">
          </div>
          <div class="rec_right">
            <span class="blockText">{{homeInfo.popularItemList[0].name}}</span>
            <!--<span >{{homeInfo.popularItemList[0].simpleDesc}}</span>-->
            <p class="greyText">{{homeInfo.popularItemList[0].simpleDesc}}</p>
            <span class="price">￥{{homeInfo.popularItemList[0].counterPrice}}</span>
          </div>
        </div>
        <div class="list_wrap" slot="list_wrap" v-for="(popItem,index) in popularItemList" :key="index">
          <img :src="popItem.primaryPicUrl" alt="">
          <div class="good_detail">
            <span class="text">{{popItem.name}}</span>
            <span class="now_price">￥{{popItem.counterPrice}}</span>
          </div>
        </div>
      </Bought>
      <Split/>

      <!--类目热销榜-->
      <div class="category">
        <div class="nav">
          <span class="title">类目热销榜</span>
        </div>
        <div class="content">
          <!--<div class="top_contain">
            <div class="hot" v-for="(head,index) in categoryHotSell" :key="index">
              <span class="cat_text">{{head.categoryName}}</span>
              <img :src="head.picUrl" alt="">
            </div>
          </div>-->
          <div class="bottom_contain">
            <div class="cat_item" v-for="(hotItem,index) in categoryHotSellList" :key="index">
              <span class="cat_text">{{hotItem.categoryName}}</span>
              <img :src="hotItem.picUrl" alt="">
            </div>

          </div>
        </div>
      </div>
      <Split/>

      <!--福利社四方格拼图-->
      <div class="puzzle">
        <div class="puzzle_item" v-for="(active,index) in homeInfo.indexActivityModule" :key="index">
          <div class="text_wrap">
            <span class="title">{{active.title}}</span>
            <span class="greyText">{{active.subTitle}}</span>
            <span class="prefer">{{active.originPrice}}</span>
          </div>
          <div class="img_wrap">
            <img :src="active.picUrl"  alt="">
          </div>
        </div>

      </div>
      <Split/>

      <!--品牌拼图-->
      <div class="brand">
        <div class="nav">
          <h2 class="title">品牌制造商直供</h2>
          <span class="more">更多</span>
        </div>
        <ul class="puzContain">
          <li class="puzItem" v-for="(tag,index) in homeInfo.tagList" :key="index"
              :style="{backgroundImage: 'url(' + tag.picUrl + ')', backgroundSize:'contain'}">
            <h4 class="brand_name">{{tag.name}}</h4>
            <span class="brand_price">{{tag.floorPrice}}元起</span>
          </li>
        </ul>
      </div>
      <Split/>

      <!--专题精选-->
      <div class="project">
        <div class="nav">
          <h2 class="title">专题精选</h2>
          <span class="more">更多</span>
        </div>
        <!--轮播-->
        <div class="swiper-container half_swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide good_tem" v-for="(topic,index) in homeInfo.topicList" :key="index">
              <div class="item_img">
                <img :src="topic.itemPicUrl" alt="">
              </div>
              <div class="text_wrap">
                <div class="item_title">{{topic.title}}</div>
                <div class="item_quality">{{topic.subtitle}}</div>
              </div>

            </div>


          </div>
        </div>
      </div>
      <Split/>

      <!--众筹-->
      <div class="raise">
        <div class="nav">
          <h2 class="title">众筹</h2>
          <span class="more">更多</span>
        </div>
        <ul class="raise_content">
          <li class="raise_item" v-for="(zcItem,index) in homeInfo.zhongChouList" :key="index">
            <div class="img_wrap">
              <img :src="zcItem.picUrl" alt="">
            </div>
            <div class="info_wrap">
              <div class="title">{{zcItem.name}}</div>
              <div class="price">{{zcItem.showRetailPrice}}</div>
              <div class="line_wrap">
                <div class="progress">
                  <div class="hight_light"></div>
                </div>
                <div class="progressTxt">19%</div>
              </div>

              <div class="support">{{zcItem.supportNum}}</div>
            </div>
          </li>
        </ul>
      </div>
      <Split/>

      <!--狂购-->
      <div class="crazyBuy"
           v-for="(catgItem,index) in homeInfo.categoryModule" :key="index"
      >
        <div class="img_wrap" :style="{backgroundImage: 'url(' + catgItem.titlePicUrl + ')'}"></div>
        <!--轮播-->
        <div class="swiper-container goods_container">
          <div class="swiper-wrapper goods_wrapper">
            <div class="swiper-slide goods_slide"  v-for="(goodItem,index) in catgItem.itemList" :key="index">
              <img :src="goodItem.primaryPicUrl" alt="">
              <p>
                <span>{{goodItem.name}}</span>
                <span class="price">${{goodItem.counterPrice}}</span>
              </p>
            </div>

          </div>
        </div>
        <Split/>
      </div>

    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  //组件
  import Bought from '../../../components/Bought/Bought'
  import BlankMod from '../../../components/BlankMod/BlankMod'

  export default {

    components:{
      Bought,
      BlankMod
    },
    mounted () {
      this.$store.dispatch('getHomeInfo')

    },
    computed:{
      ...mapState({
        homeInfo:state=>state.msite.homeInfo

      }),
      newItemList(){
        if(this.homeInfo.newItemList){
          const {newItemList} = this.homeInfo
          let arr = newItemList.splice(0,6)
          return arr
        }

      },
      popularItemList(){
        const {popularItemList} = this.homeInfo
        if(popularItemList){
          let arr = popularItemList.splice(1,3)
          return arr
        }

      },
      categoryHotSellList(){
        if(this.homeInfo.categoryHotSellModule){
          const categoryHotSellList = this.homeInfo.categoryHotSellModule.categoryList
          let arr = categoryHotSellList.splice(2,8)
          return arr
        }

      },
      categoryHotSell(){
        if(this.homeInfo.categoryHotSellModule){
          const categoryHotSell = this.homeInfo.categoryHotSellModule.categoryList
          let arr = categoryHotSell.splice(0,2)
          return arr
        }
      },

    },
    watch:{
      homeInfo(){
        this.$nextTick(()=>{
          new BScroll('.bs_wrapper',{
            scrollY:true,

          })

          new Swiper('.home-container',{
            loop:true,
            pagination: {
              el: '.home-pagination',
              type: 'custom',
              renderCustom: function (swiper, current, total) {
                var customPaginationHtml = "";
                for (var i = 0; i < total; i++) {
                  //判断哪个分页器此刻应该被激活
                  if (i === (current - 1)) {
                    customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                  } else {
                    customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
                  }
                }
                return customPaginationHtml;
              }
            },
          })

          new Swiper('.person-container',{
            loop:true,
            slidesPerView : 3,
            slidesPerGroup : 3,
          })

          const  halfSwiper = new Swiper('.half_swiper',{
            // slidesPerView:"1.5",
            // width: 500,
            spaceBetween : 20,
            slidesPerView:1.5
          })

          const goodsSwiper = new Swiper('.goods_container',{
            spaceBetween : 20,
            slidesPerView:3.2

          })
        })
      }
    }


  }
</script>

<style lang="stylus" scoped>

  .split
    width: 100%
    height: 16px
    border-top: 1px solid rgba(7,17,27,0.1);
    border-bottom: 1px solid rgba(7,17,27,0.1);
    background: #f3f5f7;
  .bs_wrapper

    width: 100%
    height: 1334px
    overflow hidden
    .rec_main
      padding-top 163px
      padding-bottom:100px
      width: 100%
      .some_show
        margin-bottom:15px
        .swiper-container
          .swiper-wrapper
            .swiper-slide
              img
                width: 100%
                height: 400px
          .swiper-pagination
            &.swiper-pagination-custom
              left: 0;
              width: 100%;
              height: 100px
        .return_goods
          padding:0 30px
          .group
            display: flex
            align-items center
            justify-content space-around
            width: 100%
            height:72px
            color: #B4282D
            img
              width: 32px
              height: 32px
              vertical-align middle
            .text
              font-size: .32rem;
              margin-left: .10667rem;
              line-height: .42667rem;
              display: inline-block;
              vertical-align: middle;


        .food_show
          width: 100%
          height: 340px
          padding-bottom:.693rem

          .food_wrap
            width: 100%
            display: flex
            justify-content: space-around
            align-content space-around
            flex-wrap wrap
            .food_item
              width: 110px
              height: 156px
              margin: 0.13333rem 0.26667rem 0;
              display: flex
              flex-direction column
              align-items: center
              justify-content:space-around
              img
                width: 110px
                height: 110px
              span
                text-align: center;
                color: #333;
                margin-top: 0.13333rem;
                font-size: 0.32rem;
                line-height: 0.48rem;
                white-space: nowrap;
        .girlsDay
          width: 100%
          .img_top
            width: 100%
            img
              width: 100%
          .img_bottom_group
            display: flex
            img
              width: 375px
          .img_foot
            width: 100%
            margin-top 20px
            img
              width: 100%
              height:160px
        .shopping_guide
          overflow: hidden;
          padding: .13333rem .4rem .4rem .34667rem;
          background: #fff;
          margin-bottom: .26667rem;
          .guide_wrap
            display: flex
            flex-wrap: wrap
            li
              width: 322px;
              height: 244px;
              float: left;
              margin: .05333rem 0 0 .05333rem;
              padding: .26667rem 0 0 .26667rem;
              background: #f5f5f5
              border-radius: .05333rem;
              display: flex
              flex-direction:column
              align-items center
              .title
                padding-left: .13333rem;
                font-size: .42667rem;
                font-family: PingFangSC-Medium;
                color: #333
              .info
                padding-left: .13333rem;
                font-size: .32rem;
                margin-top:10px
                color:#7f7f7f
              .img_wrap
                width: 322px
                height: 150px
                img
                  float: left;
                  width: 150px
                  height: 150px
      .order
        width: 100%
        .title
          box-sizing border-box
          font-size: .42667rem;
          font-family: PingFangSC-Regular;
          width: 100%;
          height: 1.33333rem;
          line-height: 1.33333rem;
          padding: 0 .4rem;
          background: #fff;
        .swiper-slide
          display: flex
          justify-content: space-around
          align-content space-around
          div
            display: flex
            flex-direction:column
            align-items center
            width: 207px
            height: 304px
            img
              width: 216px
              height: 216px
            p
              width: 100%
              margin-top: 0;
              margin-bottom: .13333rem;
              padding: 0 .13333rem;
              font-size: .32rem;
              overflow: visible;
              white-space: normal;
              line-height: .48rem;
              &.price
                color: #b4282d

      .category
        width: 100%
        .nav
          -webkit-box-sizing: border-box
          -moz-box-sizing: border-box
          box-sizing: border-box
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
        .content
          padding: 0 .26667rem .26667rem .4rem;
          overflow: hidden;
          .top_contain
            width: 100%
            overflow: hidden;
            .hot
              width: 340px
              height: 200px
              float: left
              .cat_text
                width: 2.2rem;
                height: 2.4rem;
                background: #F5F5F5;
                border-radius: .05333rem;
              img
                float: right
                width: 200px
                height: 200px
          .bottom_contain
            width: 100%
            margin-top 15px
            overflow hidden
            .cat_item
              width: 2.2rem;
              height: 2.4rem;
              background: #F5F5F5;
              border-radius: .05333rem;
              float: left;
              margin: 0 .13333rem .13333rem 0;
              text-align: center
              padding-top 15px
              .cat_text
                text-align: center;
                font-size: .32rem;
                margin-top 15px
                color: #333;
                font-family: PingFangSC-Medium;
              img
                display: inline-block
                width: 120px
                height: 120px


      .puzzle
        padding: .4rem .34667rem .34667rem .4rem;
        background: #fff;
        overflow: hidden;
        margin-bottom: .26667rem;
        .puzzle_item
          position: relative;
          color: #333;
          width: 312px;
          height: 199px;
          float: left;
          border-radius: .05333rem;
          margin: 0 .05333rem .05333rem 0;
          font-size: .32rem;
          padding: .26667rem 0 0 .4rem;
          background: #EBEFF6
          .text_wrap
            float: left
            span
              display: block
              margin-bottom:12px

              &.title
                font-family: PingFangSC-Medium;
                font-size: 30px;
              &.greyText
                color #7F7F7F
              &.prefer
                color:#b4282d
          .img_wrap
            position: absolute;
            top: 0
            right: 0
            width: 200px
            height: 200px
            img
              width: 100%
              height: 100%

      .brand
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
            .brand_name
              text-align center
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              color: #333;
              font-family: PingFangSC-Medium;
              font-size: .37333rem;
              line-height: .45333rem;
              margin 20px 0
            .brand_price
              display: block
              text-align center
              font-size:18px
              color: #7f7f7f
      .project
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
        .swiper-wrapper
          margin-bottom: .26667rem;
          padding: 0 .34667rem .34667rem .4rem;
          .swiper-slide
            padding-bottom: .32rem;
            border-radius: .10667rem;
            overflow: hidden;
            img
              width: 480px
              height: 268px
            .text_wrap
              background: #F5F5F5
              padding 20px 0
              .item_title
                margin-bottom 20px
                white-space: nowrap;
                overflow: hidden;
                -ms-text-overflow: ellipsis;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                width: 5.46667rem;
                float: left;
                font-family: PingFangSC-Medium;
                font-size: .37333rem;
              .item_quality
                white-space: nowrap;
                overflow: hidden;
                -ms-text-overflow: ellipsis;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                width: 5.86667rem;
                font-size: .32rem;
                color: #7F7F7F;
                padding: 0 .26667rem;
      .raise
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
        .raise_content
          border-top 1px solid #D8D8D8
          margin-bottom: .26667rem;
          padding: 30px 30px 30px .4rem;
          .raise_item
            display: flex
            justify-content: space-between
            .img_wrap
              width: 210px
              height: 210px
              img
                width: 100%
                height: 100%
            .info_wrap
              .title
                font-size: .37333rem;
                width: 6rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-top 20px
                overflow: hidden;
              .price
                margin: 15px 0 5px;
                font-size: 0.42667rem;
                color: #b4282d;
              .line_wrap
                display: flex
                justify-content: space-between
                .progress
                  position: relative;
                  width: 4.8rem;
                  height: 0.08rem;
                  background: #d8d8d8;
                  border-radius: 0.04rem;
                  overflow: hidden;
                  margin-top: 0.29333rem;
                  .hight_light
                    position: absolute;
                    top: 0
                    left: 0
                    width: 80px
                    height: 6px
                    border-radius: 0.04rem;
                    background: #fea438
                    z-index 2
                .pregressTxt
                  font-size: .32rem;
                  color: #7F7F7F;
              .support
                margin-top: .2rem;
                font-size: .32rem;
                color: #7F7F7F;
      .crazyBuy
        .img_wrap
          display: block;
          width: 100%;
          height: 370px;
          margin-bottom: .26667rem;
          background-size: 100% 100%;
          background-repeat:no-repeat
        .goods_container
         .goods_wrapper
          .goods_slide
            img
              display: block
              width: 216px
              height: 216px

            p
              width: 100%
              margin-top: 0;
              margin-bottom: .13333rem;
              font-size: .32rem;
              overflow: visible;
              white-space: normal;
              line-height: .48rem;
              padding 0 20px
              span
                display: block
                width: 216px
                text-overflow:ellipsis;//显示为省略号
                display:-webkit-box;//对象作为伸缩盒子模型显示
                -webkit-box-orient:vertical;//设置或检索伸缩盒对象的子元素的排列方式
                -webkit-line-clamp:2;//显示行数## 标题文字 ##
                overflow:hidden;

                &.price
                  color: #b4282d
</style>
<style>
.swiper-pagination-customs {
  width: 40px;
  height: 4px;
  display: inline-block;
  background: #fff;
  opacity: .4;
  border-radius: 0;
  margin: 80px 15px 0 0;
}

/*自定义分页器激活时的样式表现*/
.swiper-pagination-customs-active {
  opacity: 1;
  background: #fff;
  border-radius: 0;
}

</style>
