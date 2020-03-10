<template>
  <div @click="closebox"  id="app">
    <div id="nav">
      <Header />
      <div class="center">
        <router-view></router-view>
        <Search />
        <Lyric v-if="showLyric"/>
      </div>
      <Miniplayler />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Header from "./comments//header.vue";
import Miniplayler from "./comments/miniplayler.vue";
import Search from "./comments/header-search.vue";
import Lyric from "./comments/lyric.vue";
export default {
  components: {
    Header,
    Miniplayler,
    Search,
    Lyric
  },
   computed: {
    ...mapState(["showLyric"])
  },
  methods: {
    closebox(event) {
      this.$store.commit("changehot", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.center {
  height: calc(100vh - 75px - 66px);
  position: relative;
}
</style>
