<template>
  <!-- <div class="layout">
    <Header /> -->
    <div class="layout-menu">
       <Menu/>
      <div class="content">
        <div class="inner">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- <!-- <Miniplayer />
  </div> -->
</template>

<script>

import Menu from "./menu.vue";

export default {
  components: {
    Menu,
  }
};
</script>

<style lang="scss" scoped>

.layout-menu {
  height: 100%;
  display: flex;
  width: 100%;
  // background-color: pink;
  
  .content {
    width: calc(100vw - 250px);
    height: 100%;
    overflow: auto;
    padding: 36px 64px;
    box-sizing: border-box;
    .inner {
      width: 1204px;
      margin: 0px auto;
      margin-bottom: 100px;
    }
    // 滚动条整体部分
    &::-webkit-scrollbar {
      width: 0.25rem;
      height: 0rem;
      background-image: linear-gradient(
        135deg,
        #1de9b6 0%,
        rgba(8, 196, 219, 0.5) 72%,
        rgba(219, 20, 219, 0.3) 100%
      );
      &:hover {
        background-color: yellow;
      }
    }
    // 滚动条的轨道（里面装有Thumb）
    &::-webkit-scrollbar-track {
      border-radius: 0;
    }
    // 滚动条里面的小方块
    &::-webkit-scrollbar-thumb {
      border-radius: 0;
      background-image: linear-gradient(
        135deg,
        #000 0%,
        #08c4db 72%,
        #000 100%
      );
      transition: all 0.2s;
      border-radius: 0.25rem;
    }
  }
}
</style>
