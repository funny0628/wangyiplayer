<template>
  <div class="comment">
    <div class="total">精彩评论</div>
    <div class="tabel">
      <div class="left">
        <img
          src="https://p4.music.126.net/Pfj9UMjTAETp8PG9n5Tgxg==/109951164607357059.jpg?param=80y80"
          alt=""
        />
      </div>
      <div class="right">
        <p class="nameCom">
          <span>雨霁___1:</span>
          爱因斯坦：瓜娃子，我就想知道这tm又和我有啥子关系
        </p>
        <p class="time">2019-12-04 11:36:38</p>
        <p class="zan"><i class="iconfont icon-zan"></i>&nbsp;&nbsp;10</p>
      </div>
    </div>
    <!-- <div class="tabel">
      <div class="left">
        <img
          src="https://p4.music.126.net/Pfj9UMjTAETp8PG9n5Tgxg==/109951164607357059.jpg?param=80y80"
          alt=""
        />
      </div>
      <div class="right">
        <p class="nameCom">
          <span>雨霁___1:</span>
          爱因斯坦：瓜娃子，我就想知道这tm又和我有啥子关系
        </p>
        <p class="time">2019-12-04 11:36:38</p>
        <p class="zan"><i class="iconfont icon-zan"></i>&nbsp;&nbsp;10</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.comment {
  .total {
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    font-weight: 400;
    color: black;
    text-align: left;
    margin-top: 20px;
  }
  .tabel {
    font-size: 12px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 80px;

    .left {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      margin-right: 10px;
    }
    .right {
      position: relative;
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .nameCom {
        color: #4a4a4a;
        line-height: 30px;
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
