<template>
  <div id="app">
    <div id="nav">
      <Header />
      <div class="center">
        <router-view></router-view>
        <Search/>
      </div>
      <Miniplayler />
    </div>
  </div>
</template>
<script>
import Header from "./comments//header.vue";
import Miniplayler from "./comments/miniplayler.vue";
import Search from './comments/header-search.vue'
export default {
  components: {
    Header,
    Miniplayler,
    Search
  }
};
</script>

<style>
.center {
   height: calc(100vh - 75px - 66px);
   position: relative;
}
</style>
