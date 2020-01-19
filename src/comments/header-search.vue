<!--
 * @Descripttion: 
 * @version: 
 * @Author: F
 * @Date: 2020-01-15 14:19:45
 * @LastEditors  : sueRimn
 * @LastEditTime : 2020-01-19 11:12:50
 -->
<template>
  <div ref="search" @click="closebox" v-if="show" class="search">
    <div v-if="hotdata && hotdata.length" class="hot">
      <div class="title">热门搜索</div>
      <Tag v-for="item in hotdata" :tag="item.first" @todetail="Todetail" />
    </div>
    <div v-if="historydata && historydata.length" class="history">
      <div class="title">历史搜索</div>
      <Tag v-for="item in historydata" :tag="item" @todetail="Todetail" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotdata: [],
      historydata: []
    };
  },
  async created() {
    let { data } = await this.$request.Gethotsearch();
    // console.log(data);
    this.hotdata = data.result.hots;
    // this.historydata = localStorage.getItem("hisSearch") || []
  },

  methods: {
    Todetail(name) {
      let hasexist = this.historydata.includes(name);
      if (hasexist) {
        return;
      } else {
        this.historydata.unshift(name);
      }
    },
    closebox(e) {
      //阻止事件的捕获
      e.stopPropagation();
    }
  },
  // mounted() {
  //   window.onbeforeunload = function() {
  //     console.log(this.historydata);
  //     localStorage.setItem("hisSearch",this.historydata);
      
  //   };
  // },
  // destroyed() {
  //   window.onbeforeunload = null;
  // },
  computed: {
    show() {
      return this.$store.state.hotlist;
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 450px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
  box-shadow: -2px -2px 8px 1px rgba(0, 0, 0, 0.2);
  padding: 25px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: #fff;
  color: #4a4a4a;

  .history {
    margin-top: 30px;
  }
  .title {
    margin-bottom: 20px;
  }
}
</style>
