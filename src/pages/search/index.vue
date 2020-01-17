<template>
  <div class="search">
    <div class="top">
      <div class="title">
        {{ tagname }} <span>找到{{ total }}个结果</span>
      </div>
      <Taps @gettap="Gettap" class="tap" :taps="tapslist" />
    </div>
    <router-view></router-view>
    <Pagenation
      v-if="total > 0"
      class="pagenation"
      :total="total"
      :page-size="pagesize"
      @current-change="onPageChange"
      :current-page.sync="currentPage"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      tapslist: [
        { tap: "歌曲", path: "song" },
        { tap: "歌单", path: "playlist" },
        { tap: "MV", path: "mv" }
      ],
      tap: { tap: "歌曲", path: "song" },
      //路由参数
      tagname: "",
      pagesize: 30,
      currentPage: 1,
      opation: {
        limit: 30,
        offset: 0,
        keywords: ""
      }
    };
  },
  created() {
    // console.log(this.$route.params.name);
    //初次获取路由参数
    this.tagname = this.$route.params.name;
    //发送请求的参数
    this.opation.keywords = this.$route.params.name;
    this.$router.push(`/search/${this.tagname}/${this.tap.path}`);
  },
  methods: {
    Gettap(tap) {
      // console.log(tap);
      this.tap = tap;
      this.$router.push(`/search/${this.tagname}/${tap.path}`);
    },
    onPageChange() {
      if (this.tap.path === "song") {
        this.getdata()
  
      } else if (this.tap.path === "playlist") {
        this.getdata(1000)
     
      } else if (this.tap.path === "mv") {
        this.getdata(1004)
   
      }
    },
    getdata( type) {
      this.opation.offset = (this.currentPage - 1) * this.opation.limit;
      this.opation.type = type;
      this.$store.dispatch("Getsongs", this.opation);
    }
  },
  watch: {
    //实时监听路由的变化,保存参数
    $route(newroute, oldroute) {
      this.tagname = newroute.params.name;
    }
  },
  computed: {
    ...mapState(["total"])
  }
};
</script>

<style lang="scss" scoped>
.top {
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;

    span {
      font-size: 14px;
      color: #ccc;
    }
  }
  .tap {
    margin-bottom: 10px;
  }
}
.pagenation {
  text-align: right;
  margin-top: 30px;
}
</style>
