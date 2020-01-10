//mv详情页面
<template>
  <div class="mv">
    <div class="left">
      <div class="title">mv详情</div>
      <div class="video">
        <Playcard
        :url="detaildata.brs"
        />
      </div>
      <div class="singermsg">
        <img
          :src="detaildata.cover"
        />
        {{detaildata.artists | formatartis}}
      </div>
      <p class="songname">{{detaildata.name}}</p>
      <p class="time">
        <i class="fabu">发布：{{detaildata.publishTime}}</i>
        <i class="play">播放：{{detaildata.playCount}}次</i>
      </p>
      <div class="comment">
        <Comment/>
      </div>
    </div>
    <div class="right">
      <div class="title">相关推荐</div>
      <div class="item">
        <Mvcard
        classname="mvdetail"
        v-for="(item,index) in simidata"
        :imageurl="item.cover"
        :songname="item.name"
        :artiname="item.artists | formatartis"
        :count="item.playCount"
        :id="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Comment from '../../comments/comment.vue'
import Mvcard from '../../comments/mvs-card.vue'
import Playcard from '../../comments/play-card.vue'
export default {
  components: {
    Comment,
    Mvcard,
    Playcard
  },
  data () {
    return {
      simidata:[],
      detaildata:{},
      brs:{}
    }
  },
  async created () {
    let mvid = this.$route.params.id
    
    let {data} = await this.$request.Getsimimv({mvid})
    let backdata = await this.$request.Getmvdetail({mvid})
    
    console.log(backdata);
    
    this.simidata = data.mvs
    this.detaildata = backdata.data.data
    this.brs = backdata.data.data.brs
    console.log(this.detaildata, this.brs)
    
  }
};
</script>

<style lang="scss" scoped>
.mv {
  width: 1204px;
  margin: 0 auto;
  height: 200px;
  display: flex;
  justify-content: space-between;
  // background-color: pink;
  .left {
    width: 60%;
    height: 200px;
    // background-color: pink;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .title {
      font-size: 18px;
      line-height: 50px;
      color: black;
      font-weight: 400;

    }
    .video {
      width: 100%;
      height: 340px;
      background-color: pink;
      video {
       
      }
    }
    .singermsg {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    .songname {
      font-size: 30px;
      font-weight: 400;
      line-height: 80px;


    }
    .time {
      font-size: 12px;
      color: #bebebe;
      display: flex;

      .fabu {
        margin-right: 20px;


      }
      .play {

      }
    }
    .comment {
      width: 100%;
      margin-top: 20px;
    }
  }
  .right {
    width: 30%;
    height: 100px;
    .title {
      text-align: left;
       font-size: 18px;
      line-height: 50px;
      color: black;
      font-weight: 400;
    }
    .item {
      margin-top: 20px;
    }
    // background-color: pink;
  }
}
</style>
