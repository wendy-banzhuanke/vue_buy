<template>
  <div id="app">

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view  name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
