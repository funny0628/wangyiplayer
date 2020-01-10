//发现音乐
<template>
  <div class="index">
      <Banner />
      <Newlists />
      <Newsongs />
      <Newmvs />
  </div>
</template>

<script>
import Banner from "./banner.vue";
import Newlists from "./new-lists.vue";
import Newsongs from "./new-songs.vue";
import Newmvs from "./new-mvs.vue";
export default {
  components: {
    Banner,
    Newlists,
    Newsongs,
    Newmvs
  }
};
</script>

<style lang="scss" scoped>
.index {
 
}
</style>
