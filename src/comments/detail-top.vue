<template>
  <div class="detail">
    <div class="left">
      <img
        :src="coverImgUrl"
        alt=""
      />
    </div>
    <div class="right">
      <p class="title">{{name}}</p>
      <p class="image">
        <img
          src="http://p1.music.126.net/pfJqtzBjaQyl58AlRb9-Ow==/109951164184069956.jpg"
          alt=""
        />
        <span>空气很颓废 <i>{{createTime}} 创建</i> </span>
      </p>
      <p class="play"><i class="iconfont icon-bofang"></i>&nbsp;&nbsp;播放全部</p>
      <p class="mate">标签 :&nbsp;&nbsp;{{tags}}</p>
      <p class="jieshao">
        简介:&nbsp;{{desc}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:["coverImgUrl","name","tags","desc","createTime","userId","commentCoun"],
  created () {
    // console.log(this.$router);
    
  }
};
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;

  .left {
    margin-right: 20px;
    img {
      width: 256px;
      height: 256px;
    }
  }
  .right {
    text-align: left;
    p {
      cursor: text;
      &.title {
        font-size: 18px;
        height: 50px;
        line-height: 50px;
      }
      &.image {
        height: 32px;
        line-height: 32px;
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 15px;
        }
        span {
          font-size: 16px;
        }
      }
      &.play {
          margin-top: 20px;
          margin-bottom: 20px;
          border-radius: 3px;
          color: #fbdfdd;
          font-size: 16px;
          width: 100px;
          height: 24px;
          line-height: 24px;
         text-align: center;
         padding: 3px 10px;
          background: linear-gradient(to right,#f95043,#d73c33);
            i {
                vertical-align: middle;
            }
      }
      &.mate {
          font-size: 16px;
          height: 30px;
          line-height: 30px;

      }
      &.jieshao {
          margin-top: 10px;
      }
    }
  }
}
</style>
