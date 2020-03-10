<template>
  <div class="miniplayer">
    <div class="song">
      <div @click="toshowLyric" v-show="songUrl" class="left">
        <img :src="picUrl" alt="" />
      </div>
      <div v-show="songUrl" class="right">
        <p class="songname">
          {{ songname }} <i class="arname">{{ artistname }}</i>
        </p>
        <p class="songtime">00:00/{{ songtime }}</p>
      </div>
    </div>
    <div class="control">
      <i class="left iconfont icon-shangyiqu"></i>
      <i @click="toplay" v-if="!songUrl || isplay" class="center iconfont icon-bofang"></i>
      <i v-else @click="toplay" class="center iconfont icon-zanting"></i>
      <i class="right iconfont icon-xiayiqu"></i>
    </div>
    <div class="mode">
      <i class="share iconfont icon-fenxiang"></i>
      <i class="type iconfont icon-liebiaoshunxu"></i>
      <i class="list iconfont icon-liebiaoxiangyou"></i>
    </div>
    <span class="progress-bar"></span>
    <audio :src="songUrl" autoplay type="audio/mpeg" ref="myaudio"></audio>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import { mapMutations } from 'vuex'
import store from "vuex";
import { Message } from 'element-ui';
export default {
  data() {
    return {
      isplay: false,
      toshow:false
    };
  },
  computed: {
    ...mapState(["songUrl", "songtime", "songname", "picUrl", "artistname"])
  },
  methods: {
    toplay() {
      if (!this.songUrl) {
        return;
      } else {
        if (!this.isplay) {
          this.$refs.myaudio.pause();
          this.isplay = true;
        } else {
          this.$refs.myaudio.play();
          this.isplay = false;
        }
      }
    },
    toshowLyric(){
      console.log(this.toshow,!this.toshow)
      this.$store.commit('ShowLyric',!this.toshow);
      this.toshow = !this.toshow;
    },
  }
};
</script>

<style lang="scss" scoped>
.miniplayer {
  width: 100%;
  height: 66px;
  background-color: #fff;
  border-top: 2px solid #ccc;
  display: flex;
  position: relative;
  overflow: hidden;
  div {
    flex: 1;
    &.song {
      margin-top: 10px;

      .left {
        width: 50px;
        height: 50px;
        display: inline-block;
        margin-left: 20px;
        img {
          width: 50px;
          height: 50px;
          filter: blur(1px);
        }
      }
      .right {
        display: inline-block;
        margin-left: 30px;
        margin-left: 10px;
        line-height: 25px;
        .songname {
          font-size: 18px;
          .arname {
            font-size: 14px;
          }
        }
      }
    }
    &.control {
      color: #d33a31;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 40px;
        &.center {
          font-size: 50px;
        }
      }
    }
    &.mode {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 20px;
      i {
        color: #d33a31;
        font-size: 30px;
        &.type {
          margin-left: 20px;
          margin-right: 20px;
        }
      }
    }
  }
  .progress-bar {
    height: 5px;
    background-color: #d33a31;
    width: 100%;
    position: absolute;
    top: 0;
  }
}
</style>
