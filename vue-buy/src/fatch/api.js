/**
 * Created by Administrator on 2017/10/12.
 */
import axios from 'axios'
import qs from 'qs'

//axios 设置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8080';

//POST传参序列化
axios.interceptors.request.use((config)=>{
  if(config.method === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error)=>{
  return Promise.reject(error);
});

export function fetch(url, params) {

  return new Promise((resolve,reject)=>{
    axios.post(url, params).then(response=>{
      resolve(response.data);
    },err=>{
      reject(err);
    })
      .catch((error)=>{
        reject(error);
      })

    /*axios.get(url).then((response) => {
      console.log(response.data.data)
    }, response => {
      // error callback
    })*/
  })
}

export default {
  mainDataList() {
    console.log("fetch",fetch('/static/json/main_datalist.json',{}));
    return fetch('/static/json/main_datalist.json',{});
  },
  /**
   * 获取约跑步详情
   */
  SportsDetail(id) {
    return fetch('/api/sportDetail', {sportId: id})
  }
}



