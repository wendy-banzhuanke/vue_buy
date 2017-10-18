<template>
  <!--底部导航-->
  <div id="mainFooter" class="footer-nav">
    <div class="nav-list clearfix">
      <div class=" f-mian " @click="tabFooter('f-mian')" :class="tabFooterVal=='f-mian'?'active':''"><router-link exact to="/" class=""><span>首页</span></router-link></div>
      <div class=" f-book " @click="tabFooter('f-book')" :class="tabFooterVal=='f-book'?'active':''"><router-link exact to="/buyCar" class=""><span>购物车</span></router-link></div>
      <div class=" f-mine " @click="tabFooter('f-mine')" :class="tabFooterVal=='f-mine'?'active':''"><router-link exact to="/my" class=""><span>我的</span></router-link></div>
    </div>
  </div>
  <!--<section class="mask">
      <div class="has-add-car">成功加入借书架</div>
  </section>-->
  <!--底部导航 end-->
</template>

<script>
    export default {
        name: 'mainFooter',
        data(){
          return {
            tabFooterVal:'f-mian',
            footerToUrl:'/'
          }
        },
      methods:{
        tabFooter(name){
          this.tabFooterVal = name;
        }
      },
      created(){
        this.$store.commit('changeFooterTo',"");
      }
    }
</script>

<style>

</style>
