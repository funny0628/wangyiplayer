// 推荐歌单的top歌单
<template>
  <div :class="{nodata:!hasdata}" @click="toDetail" class="top">
    <img
      class="image"
      :src="coverImgUrl"
      alt=""
    />

    <div class="container">
      <div class="left">
        <img
          :src="coverImgUrl"
          alt=""
        />
      </div>
      <div class="right">
        <p v-if="hasdata" class="jingpin">精品歌单</p>
        <p class="title">{{name}}</p>
        <p class="jieshao">
         {{description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["name","id","coverImgUrl","description","hasdata"],
  created () {
    
  },
  methods: {
    toDetail(){
      this.$router.push(`/playlist/${this.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  position: relative;
  height: 220px;
  overflow: hidden;
  border-radius: 5px;
  &.nodata {
    background:url("http://img4.imgtn.bdimg.com/it/u=1681237413,285535555&fm=26&gp=0.jpg") center;
     .container {
       background-color: rgba(255,255,255,0);
     }
  }
  .image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: fill;

  }
  .container {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    padding: 0px 10px;
    box-sizing: border-box;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(91, 99, 102, 0.9);
     
    .left {
      img {
        width: 180px;
        height: 180px;
      }
    }
    .right {
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      p {
        text-align: left;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        &.jingpin {
          font-size: 16px;
          line-height: 32px;
          padding: 0px 15px;
          box-sizing: border-box;
          border-radius: 5px;
          color: rgb(231, 170, 90);
          border: 1px solid rgb(231, 170, 90);
        }
        &.title {
          margin-top: 15px;
          margin-bottom: 10px;
          font-size: 18px;
          color: #fff;
        }
        &.jieshao {
          font-size: 14.5px;
          color: #b2b1a4;
        }
      }
    }
  }
}
</style>
