import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*import test02 from '@/components/test02'*/
import oneFooter from '@/components/footer';
import Home from '@/components/home'
import buyCar from '@/components/buycar'
import my from '@/components/my'

import "../../static/js/resizeFontSize.js";
import "../../static/js/swiper.min.js";

import "../assets/css/app.css";
import "../assets/css/picturebook.less";

const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path: '/',
      components:{
        default:Home,
        footer:oneFooter
      }
    },
    {
      path:'/buyCar',
      components:{
        default:buyCar,
        footer:oneFooter
      }
    },
    {
      path:'/my',
      components:{
        default:my,
        footer:oneFooter
      }
    }
  ]
});

export default router
