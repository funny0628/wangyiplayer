<template>
  <div ref="ly" class="lyric">
      <button @click="closelyric">点击关闭</button>
    <div class="conent">
      <div class="top">
        <div class="play">
          <img class="btn" src="../assets/image/play-bar-support.png" alt="" />
          <div class="play-bar">
            <img
              :class="{image:songUrl}"
              ref="image"
              src="../assets/image/play-bar.png"
              alt=""
            />
          </div>
          <div class="circle">
            <div class="c-first">
              <div class="c-second">
                <img
                  src="https://p1.music.126.net/vSdrZFQn3uMetLL_j3AnQg==/109951163432562414.jpg?param=400y400"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="songlyric">
          <div class="nametop">
            <p class="name">{{songname}}</p>
            <p class="singer">歌手: <i>{{artistname}}</i></p>
          </div>

          <div class="scroll">
            <div class="inner"></div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="comment">
          <!-- 评论区 -->
          <span>精彩评论: </span>
          <Comment />
          <span>最新评论: (69893)</span>
          <Comment />
        </div>
        <div class="contain">
          <!-- 被包含的歌单 -->
          <p>包含这首歌的歌单</p>
          该功能暂时不开放,没有意义了
          <p>相似歌曲</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Comment from "./comment.vue";
export default {
  components: {
    Comment
  },
   computed: {
    ...mapState(["songUrl", "songtime", "songname", "picUrl", "artistname"])
  },
  methods:{
      closelyric(){
        console.log('345678900')
        this.$refs.ly.style.top = "9999px";
        this.$refs.ly.style.transition = "all 4s";
      }
  }
};
</script>

<style lang="scss" scoped>
.lyric {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
  overflow: auto;
  background-color: #fff;
  transition: all 1s;
//   &:hover {
//       top:9999px;
//   }
  button {
      position: absolute;
      left: 200px;
      top:100px;
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
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
    background-image: linear-gradient(135deg, #000 0%, #08c4db 72%, #000 100%);
    transition: all 0.2s;
    border-radius: 0.25rem;
  }
  .conent {
    width: 1200px;
    margin: 0 auto;

    .top {
      width: 100%;
      height: 850px;
      background-color: pink;
      display: flex;

      .play {
        flex: 1;
        position: relative;
        .btn {
          position: absolute;
          width: 40px;
          top: -20px;
          left: 50%;
          transform: translate(-30%);
          z-index: 3;
        }
        .play-bar {
          position: absolute;
          z-index: 2;
          top: 0;
          left: 50%;
          img {
            width: 80%;
            transform-origin: top left;
            transform: rotate(-20deg);
            transition: all 1s;
            &.image {
              //    transform:rotate(5deg);
            }
          }
        }
        .circle {
          width: 100%;
          position: relative;
          z-index: 1;
          .c-first {
            width: 410px;
            height: 410px;
            background-color: #eee;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            top: 135px;
            display: flex;
            justify-content: center;
            align-items: center;

            .c-second {
              width: 380px;
              height: 380px;
              border-radius: 50%;
              background-color: black;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                display: block;
                width: 250px;
                height: 250px;
                border-radius: 50%;
              }
            }
          }
        }
      }
      .songlyric {
        flex: 1;
        .nametop {
          width: 100%;
          height: 200px;
          background-color: red;
          padding-left: 50px;
          padding-top: 70px;
          box-sizing: border-box;
        }
        .name {
          font-size: 30px;
        }
        .singer {
          font-size: 20px;
          line-height: 60px;
          i {
            color: blue;
          }
        }
        .scroll {
          width: 100%;
          height: calc(100% - 200px);
          overflow: auto;
          &::-webkit-scrollbar {
            width: 0.5rem;
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
          .inner {
            width: 100%;
            height: 1000px;
            background-color: yellow;
          }
        }
      }
    }
    .bottom {
      width: 100%;
      height: 2000px;
      display: flex;
      background-color: purple;
      .comment {
        flex: 2;
        border: 1px solid yellow;
        span {
          font-size: 30px;
          margin-top: 40px;
        }
      }
      .contain {
        flex: 1;
        font-size:30px;
        p {
          font-size: 20px;
          margin-top: 40px;
        }
      }
    }
  }
}
</style>
