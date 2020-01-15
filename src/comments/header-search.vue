<template>
  <div v-if="show" class="search">
    <div v-if="hotdata && hotdata.length" class="hot">
      <div class="title">热门搜索</div>
      <Tag 
      v-for="item  in hotdata"
      :tag="item.first"
      @todetail="Todetail"
      />
    </div>
    <div v-if="historydata && historydata.length" class="history">
      <div class="title">历史搜索</div>
      <Tag />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotdata:[],
      historydata:[],
    };
  },
  async created () {
    console.log(this.$store.state.hotlist);
    
    let {data} = await this.$request.Gethotsearch();
    console.log(data);
    this.hotdata = data.result.hots
    
  },
  methods: {
    Todetail(name){
      console.log(name);
    }
  },
  computed: {
    show(){
      return this.$store.state.hotlist
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
  z-index: 99;
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
