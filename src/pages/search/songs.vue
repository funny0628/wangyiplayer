<template>
  <div class="search-songs">
    <div class="tabel">
      <Listtabel
        songname="音乐标题"
        artistname="歌手"
        albumname="专辑"
        duration="时长"
        classname="detailtitle"
      />
      <Listtabel
        v-for="(item, index) in hotdata"
        :songname="item.name"
        :artistname="item.artists | formatartis"
        :duration="item.duration | formatduration"
        :albumname="item.album.name"
        :alias="item.alias | formatartis"
        :picUrl="item.picUrl || ''"
        :id="item.id"
        :num="index | formatnumber"
        :mvid="item.mvid"
      />
    </div>
  </div>
</template>

<script>
import Listtabel from "../../comments/listtabel.vue";
import { mapState } from "vuex";
export default {
  components: {
    Listtabel
  },
  data() {
    return {
      opation: {
        limit: 30,
        keywords: ""
      }
    };
  },
  created() {
    this.opation.keywords = this.$route.params.name;
    this.$store.dispatch("Getsongs", this.opation);
    
  },
  watch: {
    //实时监听路由的变化,保存参数
    $route(newroute, oldroute) {
      if (newroute.params.name !== oldroute.params.name) {
        this.opation.keywords = newroute.params.name;
        this.$store.dispatch("Getsongs", this.opation);
      }
    }
  },
  computed: {
    ...mapState(["hotdata"]),

    
  }
};
</script>

<style lang="scss" scoped></style>
