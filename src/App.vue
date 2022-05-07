<template>
  <div id="app">
    <router-view />
    <MyTabbar v-if="$route.meta.showTabbar" />
  </div>
</template>

<script>
import MyTabbar from "./components/myTabbar.vue";
export default {
  components: { MyTabbar },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #efefef;
}
html,
body {
  /*1.背景颜色铺满整个屏幕 */
  min-height: 100%;
  background-color: #efefef;
}
html {
  /*2.规定1rem=100px */
  font-size: 100px;
}
body {
  font-size: 0.14rem;
}
</style>
