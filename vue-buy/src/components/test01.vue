<template>
    <div id="test01">
      <div :class="{testClass:addClass}">
        <input type="text" v-model="message">
        <p v-on:click="haha">{{message}}</p>
      </div>
      <p v-model="dataMsg">{{dataMsg}}</p>
    </div>

</template>

<script>
    export default {
        name: 'test01',
        data(){
          return{
            message:'22222',
            dataMsg:[{"张健":'18岁'},{"张健":'永远18岁'}],
            addClass:true,
          }
        },
        methods:{
          haha(){
              alert("hahahaha");
          }
        }
    }
</script>

<style>
.testClass{
  font-size: 44px;
  color: red;
}
</style>
