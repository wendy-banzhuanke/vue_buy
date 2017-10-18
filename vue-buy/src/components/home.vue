<template>
  <div id="mainHome" class="main">
    <!--<router-link to="/test02">home-2</router-link>-->
    <div id="banner">
      <div class="banner-container swiper-container">
        <div class="swiper-wrapper">
          <div class="banner-slide swiper-slide">
            <a href="javascript:viod(0);"><img src="../../static/imgs/banner/banner_07.png"/></a>
          </div>
          <div class="banner-slide swiper-slide">
            <a href="javascript:viod(0);"><img src="../../static/imgs/banner/banner_05.png"/></a>
          </div>
          <div class="banner-slide swiper-slide">
            <a href="javascript:viod(0);"><img src="../../static/imgs/banner/banner_03.png"/></a>
          </div>
          <div class="banner-slide swiper-slide">
            <a href="javascript:viod(0);"><img src="../../static/imgs/banner/banner_06.png"/></a>
          </div>
        </div>
        <!--需要焦点按钮时加这段div-->
        <div class="swiper-pagination pagination-wrap">
          <span></span>
        </div>
        <!--banner上的浮层-->
        <div class="banner-desc clearfix">
          <div class="banner-title">
            <p>你家宝贝学习绘本了么？</p>
          </div>
        </div>
      </div>
    </div>
    <!--首页主体内容-->
    <div id="main">
      <!--选项卡切换-弹性盒模型-->
      <div class="tab-box">
        <div class="box01" @click="mainToggleTab('data-taozhuang')" :class="mainToggleTabVal=='data-taozhuang'?'active':''">
          <p></p>
          <a href="javascript:;">主体套系</a>
        </div>
        <div class="box02" @click="mainToggleTab('data-jingpin')"  :class="mainToggleTabVal=='data-jingpin'?'active':''">
          <p></p>
          <a href="javascript:;">精品单本</a>
        </div>
      </div>

      <!--条件按钮-->
      <div class="age-box">
        <div class="age01">
          <a href="javascript:;">0-2岁</a>
        </div>
        <div class="age02">
          <a href="javascript:;">2-4岁</a>
        </div>
        <div class="age03">
          <a href="javascript:;">4-6岁</a>
        </div>
      </div>

      <div class="data-wrap data-taozhuang"  :style="mainToggleTabVal=='data-taozhuang'?'display:block':'display: none;'">
        <ul class="data-list">
          <li v-for="item in data.list">
            <dl class="clearfix">
              <dt>
                <img :src="item.book_img" />
              <h3><p>{{item.book_title}}</p></h3>
              </dt>
              <dd><p>{{item.book_desc}}</p></dd>
              <dd class="clearfix"><span><i class="icon"><em>押</em></i><em><i>￥</i>{{item.book_money}}</em></span>
                <a class="add-car" href="javascript:;">我要借</a>
              </dd>
            </dl>
            <div class="line"></div>
          </li>
          <!--<li>
            <dl class="clearfix">
              <dt>
                <img src="../assets/imgs/book_more/tao/tao_1_01.jpg"/>
              <h3><p>《小脚鸭情商管理》小绘本(10册)</p></h3>
              </dt>
              <dd><p>奇妙的科学 全10册幼儿绘本 彩图注音儿童书籍科学启蒙图书故事书3-6岁 童书绘本亲子读物</p></dd>
              <dd class="clearfix"><span><i class="icon"><em>押</em></i><em><i>￥</i>159.00</em></span>
                <a class="add-car" href="javascript:;">我要借</a>
              </dd>
            </dl>
            <div class="line"></div>
          </li>-->
        </ul>
      </div>

      <div class="data-wrap data-jingpin"   :style="mainToggleTabVal=='data-jingpin'?'display:block':'display: none;'">
        <ul class="data-list">
          <li v-for="item in data.simpleList">
            <dl class="clearfix">
              <dt>
                <img :src="item.book_img" />
              <h3><p>{{item.book_title}}</p></h3>
              </dt>
              <dd><p>{{item.book_desc}}</p></dd>
              <dd class="clearfix"><span><i class="icon"><em>押</em></i><em><i>￥</i>{{item.book_money}}</em></span>
                <a class="add-car" href="javascript:;">我要借</a>
              </dd>
            </dl>
            <div class="line"></div>
          </li>

        </ul>
      </div>

    </div>

  </div>

</template>

<script>
  import Swiper from '../../static/js/swiper.min.js'
  import 'swiper/dist/css/swiper.min.css';

  export default {
    name: 'mainHome',
    computed:{
      data(){
        console.log("haha",this.$store.state.list[0]);
        return {
          list:this.$store.state.list,
          simpleList:this.$store.state.simpleList
        };
      }
    },
    data:function(){
      return {
        show:true,
        mainToggleTabVal:'data-taozhuang'
      }
    },

    methods:{
      toggleMenu:function(){
        //this.$store.dispatch("getMainBookList");
        console.log(this.$store.state);
      },
      mainToggleTab: function (name) {
        this.mainToggleTabVal = name;
      }
    },
    created(){
      //console.log("api",api.mainDataList().data);
      this.$store.dispatch("getMainBookList");
      this.$store.dispatch("getMainSimpleBookList");
    },
    mounted() {
      console.log('mounted', this)
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 700,
        autoplay: 3000,
        onTouchEnd: function() {
          swiper.startAutoplay()
        }
      });
    }
  }
</script>


<style>

</style>
