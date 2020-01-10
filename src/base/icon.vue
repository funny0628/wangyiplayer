<template>
  <span class="icon" :class="cssname">
    <i class="iconfont icon-bofang1"></i>
  </span>
</template>

<script>
export default {
  name: "Icon",
  props: ["cssname"]
};
</script>

<style lang="scss" scoped>
.icon {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  text-align: center;
  line-height: 40px;
  opacity: 0;
  transition: all 0.3s;
  i {
    font-size: 20px;
    color: #d33a31;
  }
  &.playlist {
    right: 10px;
    bottom: 10px;
    width: 40px;
    height: 40px;
  }
  &.songs {
    opacity: 1;
    width: 25px;
    height: 25px;
    line-height: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.mvs {
    width: 60px;
    height: 60px;
    line-height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    i {
      font-size: 25px;
    }
  }
  &.listtabel {
    opacity: 1;
    width: 20px;
    height: 20px;
    line-height: 20px;
    top: 50%;
    left: 50%;
    margin-left: -25px;
    transform: translateY(-50%);
    i {
      font-size: 14px;
    }
  }
}
</style>
