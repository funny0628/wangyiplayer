<template>
  <div class="banner">
    <el-carousel :interval="4000" type="card" height="250px">
      <el-carousel-item v-for="(item,index) in bannerlist" :key="index">
          <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { log } from 'util';
export default {
  data () {
    return {
      bannerlist:[]
    }
  },
 async created () {
    const list = await this.$request.Getbanner();
    this.bannerlist = list.data.banners
    
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 600px;
  height: 250px;
  border-radius: 10px;

}
</style>
