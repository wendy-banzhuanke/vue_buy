<template>
  <div id="learnPlan">
    <div class="add-plan-text"><input type="text" placeholder="请输入要添加的学习计划"/></div>
    <div class="title">
      <h1>请您严格按照您所制定的计划前行~~~~</h1>
    </div>

    <div class="main">
      <div class="btn-wrap">
        <a href="javascript:;">增加计划</a>
        <a href="javascript:;">删除计划</a>
      </div>
      <ul class="data-list">
        <li class="clearfix" v-for="item in dataList"  v-bind:class="item.isCheck ? 'active':''" >
          <a href="javascript:;" class="check-radio-btn" v-on:click="checkRadio(item.isCheck)"><span class="icon icon-check"></span></a>
          <span class="content">{{item.title}}</span>
          <a href="javascript:;" class="delete-radio-btn"><span class="icon icon-delete"></span></a>
        </li>

      </ul>
    </div>
  </div>

</template>

<script>
  import VueResource from 'vue-resource';
  import Vue from 'vue';
  Vue.use(VueResource);

  export default {
    name: 'learnPlan',
    data() {
      return {
        dataList : []
      }
    },
    methods:{
      checkRadio(isCheck){

        if(isCheck){
          isCheck = false;
        }else{
          isCheck =true;
        }

         console.log(isCheck);
        this.dataList.isCheck = isCheck;
      }
    },
    created() {
      this.$http.get('../../../static/json/data.json').then(function(response)  {
        // 响应成功回调
        console.log(response.body.data);
        this.$data.dataList = response.body.data;
      });
    }
  }
</script>

<style>

</style>
