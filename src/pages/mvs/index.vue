//最新mvs
<template>
  <div class="mvs">
    <Mvtop v-bind="listlocal" @getarea="Getarea" />
    <Mvtop v-bind="listtype" @gettype="Gettype" />
    <Mvtop v-bind="listsort" @getorder="Getorder" />
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
    <Pagenation
      v-if="list && list.length > 0"
      class="pagenation"
      :total="total"
      :page-size="pagesize"
      @current-change="onPageChange"
      :current-page.sync="currentPage"
    />
  </div>
</template>

<script>
import Mvtop from "../../comments/mvtop.vue";
import Mvscard from "../../comments/mvs-card.vue";
import { local, types, sort } from "./list.js";

export default {
  components: {
    Mvtop,
    Mvscard
  },
  data() {
    return {
      //mvtop本地数据
      listlocal: local,
      listtype: types,
      listsort: sort,
      //mvlist数据
      list: [],
      total: 0,
      pagesize: 48,
      currentPage: 0,
      area: "",
      type: "",
      order: ""
    };
  },
  created() {
    this.initdata();
  },
  methods: {
    async initdata() {
      let { data } = await this.$request.Getmv({
        limit: this.pagesize,
        // offset: (this.currentPage - 1) * this.pagesize,
        area: this.area,
        type: this.type,
        order: this.order
      });
      // console.log(data);
      this.list = data.data;
      this.total = data.count;
    },
    Getarea(index) {
      this.area = this.listlocal.list[index].tap;
      this.initdata();
    },
    Gettype(index) {
      this.type = this.listtype.list[index].tap;
      this.initdata();
    },
    Getorder(index) {
      this.order = this.listsort.list[index].tap;
      this.initdata();
    },
    onPageChange(index) {
      // console.log(index);
      this.currentPage = index;
      this.initdata();
    }
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
  .pagenation {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
