//歌单详情
<template>
  <div class="playlistdetail">
    <Detailtop
      :coverImgUrl="topdata.coverImgUrl"
      :name="topdata.name"
      :tags="topdata.tags | formatartis"
      :desc="topdata.description"
      :createTime="topdata.createTime | formatdate"
      :userId="topdata.userId"
      :commentCoun="topdata.commentCoun"
    />
    <div class="top">
      <Taps :taps="taps" @sendindex="getIndex" classname="detailtabel" :totalcomment="commentlist.total"/>
      <p class="inpt">
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" placeholder="搜索歌单音乐" />
      </p>
    </div>
    <!-- 歌单列表 -->
    <div v-if="isReady" class="tabel">
      <Listtabel
        songname="音乐标题"
        artistname="歌手"
        albumname="专辑"
        duration="时长"
        classname="detailtitle"
      />
      <Listtabel
        v-for="(item, index) in listdata"
        :songname="item.name"
        :artistname="item.ar | formatartis"
        :duration="item.dt | formatduration"
        :albumname="item.al.name"
        :picUrl="item.al.picUrl"
        :id="item.id"
        :num="index | formatnumber"
        :mvid="item.mv"
      />
    </div>
    <!-- 歌单评论 -->
    <div v-else class="comment">
      <span>精彩评论: </span>
      <Comment
        v-for="item in commentlist.hotComments"
        :content="item.content"
        :likedCount="item.likedCount"
        :time="item.time || formatdate"
        :userId="item.user.userId"
        :userimg="item.user.avatarUrl"
        :username="item.user.nickName"
      />
      <span>最新评论: </span>
      <Comment
        v-for="it in commentlist.comments"
        :content="it.content"
        :likedCount="it.likedCount"
        :time="it.time || formatdate"
        :userId="it.user.userId"
        :userimg="it.user.avatarUrl"
        :username="it.user.nickName"
      />
      <div  v-if="commentlist.comments && commentlist.comments.length > 0" class="pagenation">
        <Pagenation
        :total="commentlist.total"
        :page-size="pagesize"
        @current-change="onPageChange"
        :current-page.sync="currentPage" 
        />
       </div>
    </div>
  </div>
</template>

<script>
import Detailtop from "../../comments/detail-top.vue";
import Listtabel from "../../comments/listtabel.vue";
import Comment from "../../comments/comment.vue";
const taplist = ["歌曲列表", "评论"];
export default {
  components: {
    Detailtop,
    Listtabel,
    Comment
  },
  data() {
    return {
      taps: taplist,
      listdata: [],
      topdata: {},
      trackIds: [],
      isReady: true,
      commentlist: [],
      pagesize:20,
      currentPage:1

    };
  },
  async created() {
    let id = this.$route.params.id;
    //获取top歌单详情
    let { data } = await this.$request.Getplaylistdetail({ id });
    // console.log(data);
    this.topdata = data.playlist;
    let ids = this.formatIdlist(data);
    //获取歌单列表
    let backdata = await this.$request.Getsongdetail({ ids });
    this.listdata = backdata.data.songs;
    // console.log(backdata);
    //获得歌单评论
     this.getComment(id)
  },
  methods: {
    formatIdlist(data) {
      let { trackIds } = data.playlist;
      let IDS = trackIds.map(item => item.id);
      let ids = IDS.join(",");
      return ids;
    },
    getIndex(v) {
      if (v === 0) {
        this.isReady = true;
      } else {
        this.isReady = false;
      }
    },
    //切换页码时
    onPageChange(){
      let id = this.$route.params.id;
      this.getComment(id)
    },
    //获取歌单评论
    async getComment(id){
      let bckdata = await this.$request.songSheetComment({ 
      id,
      offset:(this.currentPage -1) * this.pagesize
     });
    this.commentlist = bckdata.data;
    console.log( bckdata.data)
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  // height: 50px;
  border-bottom: 1px solid #ccc;

  display: flex;
  align-items: center;
  position: relative;
  padding: 0px 15px;

  p {
    position: absolute;
    right: 15px;
    width: 150px;
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    border-radius: 10px;
    background-color: #fff;
    i {
      position: relative;
      margin-right: 5px;
    }
    input {
      position: relative;
      width: 120px;
      height: 100%;
      background-color: #fff;
    }
    &:hover {
      background-color: #ccc;
      input {
        background-color: #ccc;
      }
    }
  }
}
.comment {
  span {
    display:block;
    font-size: 20px;
    margin-top:20px;
  }
}
.pagenation {
  float:right;
  margin-top:40px;
}
</style>
