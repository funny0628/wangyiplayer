<template>
  <div class="newlists">
    <!-- <div class="title">推荐歌单</div> -->
    <Topic title="推荐歌单" />

    <ul>
      <Playlistcard
        v-for="(item, index) in list"
        :imgurl="item.picUrl"
        :name="item.name"
        :desc="item.copywriter"
        :key="index"
        :id="item.id"
      />
    </ul>
  </div>
</template>

<script>
import Playlistcard from "../../comments/playlist-card.vue";
export default {
  components: {
    Playlistcard
  },
  data() {
    return {
      list: []
    };
  },
  async created() {
    let data = await this.$request.Getsonglist({ limit: 10 });
    // console.log(data);
    this.list = data.data.result;
  }
};
</script>

<style lang="scss" scoped>
.newlists {
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
