<template>
  <div class="menu">
    <div class="login">
      <i class="iconfont icon-touxiang"></i><span>未登录</span>
    </div>
    <ul>
      <router-link
        v-for="(item, index) in menu"
        :key="index"
        :to="item.path"
        tag="li"
        class="li"
        active-class="itemactive"
      >
        <i class="iconfont" :class="item.mate.ico"></i
        ><span>{{ item.mate.title }}</span>
      </router-link>
      <!-- <li @click="todiscovery"><i class="iconfont icon-changpian"></i><span>发现音乐</span></li>
      <li><i class="iconfont icon-yinleliebiao"></i><span>推荐歌单</span></li>
      <li><i class="iconfont icon-yinyue"></i><span>最新音乐</span></li>
      <li>
        <i class="iconfont icon-shipinbofangyingpian"></i><span>最新MV</span>
      </li> -->
    </ul>
  </div>
</template>

<script>
import { menuslist } from "../router/index.js";
export default {
  data() {
    return {
      menu: menuslist
    };
  },
created () {
  console.log(menuslist);
  
},
  methods: {
    // todiscovery() {
    //   this.$router.push("/discovery");
    // }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  width: 300px;
  background-color: #ededed;
  text-align: left;
  padding-top: 15px;

  .login {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    font-size: 18px;
    i {
      font-size: 20px;
      margin-right: 10px;
    }
  }
  ul {
    .li {
      font-size: 18px;
      height: 50px;
      line-height: 50px;
      padding: 0px 20px;
      box-sizing: border-box;
      i {
        font-size: 14px;
        margin-right: 10px;
      }
     
      &.itemactive {
        color: #d33a31;
         background-color: #e2e2e2;
      }
    }
  }
}
</style>
