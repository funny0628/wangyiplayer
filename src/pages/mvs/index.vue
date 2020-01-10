//最新mvs
<template>
  <div class="mvs">
    <Mvtop v-bind="listlocal" />
    <Mvtop v-bind="listtype" />
    <Mvtop v-bind="listsort" />
    <div class="mvtabel">
      <Mvscard
        v-for="(item, index) in list"
        :key="index"
        :imageurl="item.cover"
        :songname="item.name"
        :artiname="item.artists | formatartis"
        :count="item.playCount"
        :id="item.id"
        :duration="item.duration"
      />
    </div>
  </div>
</template>

<script>
import Mvtop from "../../comments/mvtop.vue";
import Mvscard from '../../comments/mvs-card.vue'
import { local, types, sort } from "./list.js";
import { create } from "domain";
export default {
  components: {
    Mvtop,
    Mvscard
  },
  data() {
    return {
      listlocal: local,
      listtype: types,
      listsort: sort,
      list: []
    };
  },
  async created() {
    let {data} = await this.$request.Getmv();
    console.log(data);
    this.list = data.data;
    console.log(this.list);
    
  }
};
</script>

<style lang="scss" scoped>
.mvs {
  .mvtabel {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
</style>
