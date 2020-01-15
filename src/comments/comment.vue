<template>
  <div class="comment">
    <!-- <div class="total">{{title}} <span v-if="count > 0">({{count}})</span></div> -->
    <div class="tabel">
      <div class="left">
        <img
          :src="userimg"
          alt=""
        />
      </div>
      <div class="right">
        <p class="nameCom">
          <span>{{username}} : </span>
          {{content}}
        </p>
        <p class="time">{{time}}</p>
        <p class="zan"><i class="iconfont icon-zan"></i>&nbsp;&nbsp;{{likedCount}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["content","username","userimg","userId","time","likedCount"]
};
</script>

<style lang="scss" scoped>
.comment {
  .tabel {
    font-size: 12px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 80px;

    .left {
      width: 40px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      margin-right: 10px;
    }
    .right {
      position: relative;
      width: calc(100% - 50px);
      height: 100%;
      border-bottom: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      text-align: left;
      .nameCom {
        width: 100%;
        color: #4a4a4a;
        line-height: 30px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        span {
          color: #517eaf;
        }
      }
      .time {
        color: #bebebe;
      }
      .zan {
        position: absolute;
        right: 10px;
        bottom: 20px;
      }
    }
    &:last-child .right {
      border-bottom: 0px;
    }
  }
}
</style>
