//mv详情页面
<template>
  <div class="mv">
    <div class="content">
      <div class="left">
        <div class="title">mv详情</div>
        <div class="video">
          <Playcard v-if="Urldata.url" ref="video" :url="Urldata.url" />
        </div>
        <div class="singermsg">
          <img :src="detaildata.cover" />
          {{ detaildata.artists | formatartis }}
        </div>
        <p class="songname">{{ detaildata.name }}</p>
        <p class="time">
          <i class="fabu">发布：{{ detaildata.publishTime }}</i>
          <i class="play">播放：{{ detaildata.playCount }}次</i>
        </p>
        <div class="comment">
          <div
            class="com"
            v-if="comment.topComments !== undefined && comment.topComments.length > 0">
            <div class="title">最新评论({{ comment.topComments.length }})</div>
            <Comment
              v-for="(ite, ind) in comment.topComments"
              :content="ite.content"
              :username="ite.user.nickname"
              :userimg="ite.user.avatarUrl"
              :userId="ite.user.userId"
              :time="ite.time | formatdate"
              :likedCount="ite.likedCount"
            />
          </div>
          <div
            class="com"
            v-if="comment.hotComments !== undefined && comment.hotComments.length > 0">
            <div class="title">热门评论({{ comment.hotComments.length }})</div>
            <Comment
              v-for="(itm, indx) in comment.hotComments"
              :content="itm.content"
              :username="itm.user.nickname"
              :userimg="itm.user.avatarUrl"
              :userId="itm.user.userId"
              :time="itm.time | formatdate"
              :likedCount="itm.likedCount"
            />
          </div>
          <div
            class="com"
            v-if="comment.comments !== undefined && comment.comments.length > 0"
          >
            <div class="title">精彩评论({{ comment.comments.length }})</div>
            <Comment
              v-for="(item, index) in comment.comments"
              :content="item.content"
              :username="item.user.nickname"
              :userimg="item.user.avatarUrl"
              :userId="item.user.userId"
              :time="item.time | formatdate"
              :likedCount="item.likedCount"
            />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">相关推荐</div>
        <div class="item">
          <Mvcard
            classname="mvdetail"
            v-for="(item, index) in simidata"
            :imageurl="item.cover"
            :songname="item.name"
            :artiname="item.artists | formatartis"
            :count="item.playCount"
            :id="item.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "../../comments/comment.vue";
import Mvcard from "../../comments/mvs-card.vue";
import Playcard from "../../comments/play-card.vue";
export default {
  components: {
    Comment,
    Mvcard,
    Playcard
  },
  data() {
    return {
      //相似mv
      simidata: [],
      //mv详情
      detaildata: {},
      //不同清晰度的mv地址
      brs: {},
      //mv播放地址
      Urldata: {},
      //评论数据
      comment: {}
    };
  },
  created() {
    let mvid = this.$route.params.id;
    this.init(mvid);
  },
  methods: {
    async init(mvid) {
      //获取相似的mv
      let { data } = await this.$request.Getsimimv({ mvid });
      //获取mv 的详情
      let backdata = await this.$request.Getmvdetail({ mvid });
      //获取mv的url
      let urldata = await this.$request.Getmvurl({ id: mvid });
      //获取mv评论
      let commentdata = await this.$request.Getmvcoment({ id: mvid });
      this.simidata = data.mvs;
      this.detaildata = backdata.data.data;
      this.brs = backdata.data.data.brs;
      this.Urldata = urldata.data.data;
      this.comment = commentdata.data;
    }
  },
  watch: {
    //侦听路由的变化,去掉最新的mvid
    $route() {
      let mvid = this.$route.params.id;
      this.init(mvid);
    }
  }
};
</script>

<style lang="scss" scoped>
.mv {
  height: 100%;
  overflow: auto;
  .content {
    width: 1204px;
    margin: 0 auto 100px;
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 60%;
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
      // height: 500px;
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
        object-fit: cover;
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
    }
    .comment {
      width: 100%;
      margin-top: 20px;
      .com {
        .title {
          font-size: 18px;
          height: 50px;
          line-height: 50px;
          font-weight: 400;
          color: black;
          text-align: left;
          margin-top: 20px;
        }
      }
    }
  }
  .right {
    width: 35%;
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
}
</style>
