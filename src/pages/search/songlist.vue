<template>
  <div class="search-songlist">
    <Playlistcard
      v-for="(item, index) in hotdata"
      :key="index"
      :id="item.id"
      :name="item.name"
      :imgurl="item.coverImgUrl"
      :desc="`播放量: ${item.playCount}`"
    />
  </div>
</template>

<script>
import Playlistcard from "../../comments/playlist-card.vue";
import {mapState} from 'vuex'
export default {
  components: {
    Playlistcard
  },
  data() {
    return {
      opation: {
        limit: 30,
        type:1000,
        keywords: ""
      },
     
    };
  },
  created() {
    this.opation.keywords = this.$route.params.name;
    this.$store.dispatch("Getsongs", this.opation);
  },
  computed: {
    ...mapState(["hotdata"])
  }
};
</script>

<style lang="scss" scoped>
.search-songlist{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
