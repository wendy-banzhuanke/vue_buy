/**
 * Created by Administrator on 2017/10/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
/*import api from "../fatch/api.js"*/
import axios from 'axios'

Vue.use(Vuex)

//定义一个容器

let store = new Vuex.Store({
  state:{
    list:[],
    simpleList:[],
    footerVal:'/'
  },
  mutations: {
    changeList(state,list){
      state.list = list;
    },
    changeSimpleList(state,list){
      state.simpleList = list;
    },
    changeFooterTo(state,fv){
      state.footerVal = fv;
    }
  },
  actions:{
    getMainBookList({commit}){
      console.log(axios);
      axios.post('https://www.easy-mock.com/mock/59de29a9c09842759ae62a8f/example/mainBookList').then((data)=>{
        console.log(data.data);
        commit("changeList", data.data.data); //拿到数据后，提交mutations,改变状态
      },(error)=>{

      });
      //console.log(api.mainDataList());
      //console.log("会不会是空值呢？", api.mainDataList().data)
    },
    getMainSimpleBookList({commit}){
      axios.post('https://www.easy-mock.com/mock/59de29a9c09842759ae62a8f/example/mainSimpleBookList').then((data)=>{
        console.log(data.data);
        commit("changeSimpleList",data.data.data);
      },(error)=>{

      })
      .catch((error)=>{

      })
    }
  }
});

export default store
