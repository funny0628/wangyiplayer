<template>
  <div id="app">
    <div id="nav">
      <Header />
      <router-view></router-view>
      <Miniplayler />
    </div>
  </div>
</template>
<script>
import Header from "./comments//header.vue";
import Miniplayler from "./comments/miniplayler.vue";
export default {
  components: {
    Header,
    Miniplayler
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
