<template>
  <div  :class="{ mvdetail: classname }" @click="toMvDetail" class="mvscard">
    <div class="image">
      <img :src="imageurl" alt="" />
      <span class="num">
        <i class="iconfont icon-bofang1"></i> {{ count }}</span
      >
      <Icon :class="{mvdetail: classname}" cssname="mvs" />
    </div>
    <div class="right">
      <p class="mvname">{{ songname }}</p>
      <p class="singername">{{ artiname }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["imageurl", "songname", "artiname", "count", "id", "classname"],
  methods: {
    toMvDetail() {
      this.$router.push(`/mv/${this.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.mvscard {
  width: 275px;
  padding: 20px 5px;
  cursor: pointer;

  .image {
    position: relative;
    img {
      width: 275px;
      height: 155px;
      border-radius: 10px;
    }
    .num {
      position: absolute;
      right: 5px;
      top: 10px;
      color: #fff;
    }
    &:hover {
      .mvs {
        opacity: 1;
      }
    }
  }
  p {
    text-align: left;
    font-size: 14px;
    line-height: 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &.mvname {
      color: #4a4a4a;
    }
    &.singername {
      color: #cdbec4;
    }
  }

  &.mvdetail {
    width: 100%;
    height: 100px;
    padding:3px 0px;
    display: flex;
    .image {
      width: 50%;
      height: 100%;
      img {
        width: 100%;
      height: 100%;
      }
      span {
        font-size: 12px;
        i {
          font-size: 12px;
        }
      }
      .mvdetail {
        width: 40px;
        height: 40px;
        line-height: 40px;
      }
    }
    .right {
      width: 50%;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &:hover {
      background-color:#f5f5f5;
    }

  }
}
</style>
