//最新音乐
<template>
  <div class="songs">
    <Taps :taps="taps" @gettap="Getitmetap" />
    <ul>
      <Listtabel
        v-for="(item, index) in songlist"
        :mp3Url="item.mp3Url"
        :songname="item.name"
        :albumname="item.album.name"
        :artistname="item.album.artists | formatartis"
        :duration="item.duration | formatduration"
        :picUrl="item.album.picUrl"
        :id="item.id"
        :num="index | formatnumber"
        :mvid="item.mvid"
      />
    </ul>
  </div>
</template>

<script>
import Listtabel from '../../comments/listtabel.vue'
const taplist = [
  {tap:"全部",type:0},
  {tap:"华语",type:7},
  {tap:"欧美",type:96},
  {tap:"日本",type:8},
  {tap:"韩国",type:16},
]
export default {
  data () {
    return {
      taps:taplist,
      songlist:[],
      type:0
    }
  },
  components: {
    Listtabel
  },
   created () {
     this.initdata()
  },
  methods: {
    async initdata(){
      let {data} = await this.$request.Getnewsong({type:this.type});
      this.songlist = data.data
      // console.log(data);
    },
    Getitmetap(tap){
      // console.log(tap);//{tap:"欧美",type:96},
      this.type = tap.type
      this.initdata()
    }
  }
}
</script>

<style></style>
