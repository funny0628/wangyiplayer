//推荐歌单
<template>
  <div ref="playlist" class="playlist">
    <Topplaylistcard
      :name="topdata.name"
      :description="topdata.description"
      :coverImgUrl="topdata.coverImgUrl"
      :id="topdata.id"
      :hasdata="topdata.more"
    />
    <div class="tap">
      <Taps :taps="taps" @gettap="Getitmetap" />
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
      <div v-if="list && total > list.length" class="pagenation">
        <Pagenation
          :current-page.sync="currentPage"
          :total="total"
          :page-size="PAGESIZE"
          @current-change="onPageChange"
        />
      </div>
    </ul>
  </div>
</template>

<script>
import Topplaylistcard from "../../comments/topplaylist-card";
import Playlistcard from "../../comments/playlist-card.vue";
import { scrollInto } from "../../utils/comment.js";
const PAGESIZE = 50;
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
      PAGESIZE: PAGESIZE,
      list: [],
      total: 0,
      currentPage: 0,
      tap: ""
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.Getlistdata();
      this.Gettopdata();
    },

    async Getlistdata() {
      let { data } = await this.$request.Getplaylist({
        limit: PAGESIZE,
        offset: (this.currentPage - 1) * PAGESIZE,
        cat: this.tap
      });
      // console.log(data);
      this.list = data.playlists || [];
      this.total = data.total;
    },

    async Gettopdata() {
      let { data } = await this.$request.Gethighquality({
        limit: 1,
        cat: this.tap
      });
      // console.log(data);
      this.topdata = data.playlists[0] || {};
      this.topdata.more = data.more;
    },

    onPageChange(page) {
      // console.log(page);
      this.currentPage = page;
      this.Getlistdata();
      //使当前的元素滚动到浏览器可视窗口的最顶端
      scrollInto(this.$refs.playlist);
    },

    Getitmetap(tap) {
      // console.log(tap);
      this.tap = tap;
      this.initData();
    }
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
    justify-content: flex-start;
    width: 100%;
    .pagenation {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
}
</style>
