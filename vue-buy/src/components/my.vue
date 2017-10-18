<template>
  <div class="my" id="my">
    <!--个人中心-头部 start-->
    <div class="my-header">
      <div class="header-info">
        <dl class="header-info-img clearfix">
          <dt>
          <div class="img-wrap">
            <img src="../../static/imgs/book_more/datalist_01.png"/>
          </div>
          <h3>Wendy哇卡卡卡</h3>
          </dt>
          <dd>
            <!-- <h3>Wendy哇卡卡卡</h3>
           <dl class="clearfix">
                <dt>账户总额</dt>
                <dd>500.00</dd>
            </dl>-->
            <dl class="clearfix">
          <dt>目前押金</dt>
          <dd>300.00</dd>
        </dl>
        <dl class="clearfix">
          <dt>可用余额</dt>
          <dd>300.00</dd>
        </dl>
        </dd>
        </dl>
        <a href="javascript:;" class="borrow-share">借阅分享</a>
      </div>
      <!--<div class="header-count clearfix">
          <div>
              <span>298</span>
              <p>借书架</p>
          </div>
          <div>
              <span>298</span>
              <p>积分</p>
          </div>
          <div>
              <span>2</span>
              <p>优惠券</p>
          </div>
          <div>
              <span>20</span>
              <p>当前押套</p>
          </div>
      </div>-->
    </div>
    <!--个人中心-头部 end-->

    <!--个人中心-订单 start-->
    <div class="my-order">
      <div class="order-menu-title">
        <span>我的订单</span>
        <a href="./myorder.html">查看全部订单<span></span></a>
      </div>
      <ul class="order-menu-list">
        <li>
          <a href="javascript:;">
            <i></i>
            <span>2</span>
            <span>待付款</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>
            <span>2</span>
            <span>待发货</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>
            <span>22</span>
            <span>待收货</span>
          </a>
        </li>
        <li>
          <a href="./returnbook.html">
            <i></i>
            <span>2</span>
            <span>转借/还书</span>
          </a>
        </li>
        <!--<li>
            <a href="javascript:;">
                <i></i>
                <span>2</span>
                <span>待评价</span>
            </a>
        </li>-->
        <li>
          <a href="javascript:;">
            <i></i>
            <span>1</span>
            <span>已还书</span>
          </a>
        </li>
      </ul>
      <div class="call-us">
        <!--<h3>客服通道</h3>-->
        <div class="us-code">
          <div class="us-code-details title">
            <h4><i></i>
              <p>客服</p>
            </h4>
          </div>
          <div class="us-code-details call-person">
            <h4>售前</h4>
            <p>fdfer23423</p>
          </div>
          <div class="us-code-details call-person">
            <h4>售前</h4>
            <p>12334343234</p>
          </div>
        </div>
      </div>
    </div>
    <!--个人中心-订单 start-->

    <!--个人中心-个人空间 start-->
    <div class="my-storeroom">
      <ul>
        <li>
          <div id="myAccountBtn">
            <dl class="clearfix">
              <dt><span></span></dt>
              <dd>
                <p>我的账户</p>
                <span>当前可用余额<em>298</em>元</span>
              </dd>
            </dl>
          </div>
          <div id="myCollectBtn">
            <dl class="clearfix">
              <dt><span></span></dt>
              <dd>
                <p>我的收藏</p>
                <span><em>0</em>今日足迹</span>
              </dd>
            </dl>
          </div>
        </li>
      </ul>
    </div>
    <!--个人中心-个人空间 start-->

    <!--个人中心-为你推荐 start-->
    <div class="my-commend">
      <h2>
        <span></span>
        <span>为你推荐</span>
      </h2>
      <div class="my-commend-wrap">
        <ul>
          <li>
            <dl class="my-commend-context clearfix">
              <dt  class="my-commend-img"><img src="../../static/imgs/book_more/datalist_02.png"/></dt>
              <dd>
                <h3>好心情宝宝全套绘本（共10册）</h3>
                <div class="buy-person"><span>1899</span>人押过此宝</div>
                <div class="buy-money">
                  <i class="icon"><em>押</em></i>
                  <span class="ya-fuhao"></span>
                                <span class="ya-money">
                                    <span class="ya-zhengshu">189</span>
                                    <span class="ya-xiaoshu">.00</span>
                                </span>
                </div>
              </dd>
            </dl>
            <a class="my-commend-add-car" href="javascript:;">
              加入购物车
            </a>
          </li>
          <li>
            <dl class="my-commend-context clearfix">
              <dt  class="my-commend-img"><img src="../../static/imgs/book_more/datalist_02.png"/></dt>
              <dd>
                <h3>好心情宝宝全套绘本（共10册）</h3>
                <div class="buy-person"><span>1899</span>人押过此宝</div>
                <div class="buy-money">
                  <i class="icon"><em>押</em></i>
                  <span class="ya-fuhao"></span>
                                <span class="ya-money">
                                    <span class="ya-zhengshu">189</span>
                                    <span class="ya-xiaoshu">.00</span>
                                </span>
                </div>
              </dd>
            </dl>
            <a class="my-commend-add-car" href="javascript:;">
              加入购物车
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--个人中心-为你推荐 start-->
  </div>
</template>
<script>

  export default {
    name:'my',
    data(){
      return{

      }
    }/*,
     components:{
     oneFooter,
     }*/
  }
</script>
