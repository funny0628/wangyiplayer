//推荐歌单
<template>
  <div class="playlist">
    <Topplaylistcard
      :name="topdata.name"
      :description="topdata.description"
      :coverImgUrl="topdata.coverImgUrl"
      :id="topdata.id"
    />
    <div class="tap">
      <Taps :taps="taps" />
    </div>
    <ul class="playlist">
      <Playlistcard
        v-for="(item, index) in list"
        :key="index"
        :id="item.id"
        :name="item.name"
        :imgurl="item.coverImgUrl"
        :desc="`播放量: ${item.playCount}`"
      />
    </ul>
    <div class="pagenation">
      <Pagenation/>
    </div>
 
  </div>
</template>

<script>
import Topplaylistcard from "../../comments/topplaylist-card";
import Playlistcard from "../../comments/playlist-card.vue";

const taplist = [
  "全部",
  "欧美",
  "华语",
  "流行",
  "说唱",
  "摇滚",
  "民谣",
  "电子",
  "轻音乐",
  "影视原声",
  "ACG",
  "怀旧",
  "治愈",
  "旅行"
];
export default {
  components: {
    Topplaylistcard,
    Playlistcard
  },
  data() {
    return {
      topdata: {},
      taps: taplist,
      list: []
    };
  },
  async created() {
    let data = await this.$request.Gethighquality({ limit: 1 });
    let listdata = await this.$request.Getplaylist();
    // console.log(listdata);
    this.topdata = data.data.playlists[0];
    this.list = listdata.data.playlists;
  }
};
</script>

<style lang="scss" scoped>
.playlist {
  .tap {
    margin-top: 20px;
  }
  .playlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    width: 100%;
  }
  .pagenation {

    margin-top: 20px;
    text-align: right;
  }
}
</style>
