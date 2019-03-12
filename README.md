##day01
  - 基础环境搭建
    - 创建脚手架：vue init webpack vue_demo
    -	cd vue_demo 安装依赖 npm i
    -	开启项目：npm run dev my_pro
  - 修改配置文件
    - eslint配置
    - gitignone配置
  - git管理
  - 关于适配
    - 可以使用插件
    - 手动添加style标签（需要mounted中写）
  - 关于BScroll无法拖动
    - content没有加定位，
    - 不能出现同级元素
  - 关于添加固定定位就会超出页面高度
    - 禁止用户缩放
  - 关于页面宽度超出100%
    - 子元素宽度继承100%后，还有padding
      - 解决：给盒子设置怪异盒
  - 关于首页默认展示二级路由
    - 重定向，并且保证一级路由中也要重定向

##day02
  - 封装ajax
  - 引入mock数据
  - 运用vuex管理数据
  - 关于无法从store中获取数据
    - 在mutation中，给应该是state.xxx，而不是this.state.xxx
  - 关于无法swiper无法滑动
    - 数据是异步获取的，而swiper是同步创建的，需要监视数据获取后在创建
        用this.$nextTick(callback),因为watch中的函数是立即调用的
    - 解决二： swiper写配置，observer:true,//修改swiper自己或子元素时，自动初始化swiper
                             observeParents:true,//修改swiper的父元素时，自动初始化swiper
                             但是有一个问题，在loop后滑动至最后一张不好滑动
  - 文本第二行显示省略号
  
  - 从计算属性拿到的数据要做预处理

  - BScroll防误触的坑
    - 手动添加click:true配置
  - [vuex] unknown action type: getTabs
    - 出现在vuex的某个module中，原因一般是没有暴露出去
  - 配置代理后要重启

## day03
  - 识物页面
  - params的使用
    - 一堆数据中找与param参数对应的数据
    - 将this.$route.params.id 与包裹器div的v-if对应起来
