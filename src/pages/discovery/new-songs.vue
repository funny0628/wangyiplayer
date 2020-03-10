<template>
  <div class="newsongs">
     <Topic title="最新音乐"/>
     <div class="songscard">
         <Songscard 
         v-for="(item,index) in list" 
         :key="index"
         :idsc="index"
         :imageurl="item.picUrl"
         :songname="item.song.name"
         :artists="item.song.artists[0].name"
         :id="item.id"
         :duration="item.song.mMusic.playTime | formatduration"
         />
     </div>
     
  </div>
</template>

<script>
import Songscard from '../../comments/songs-card.vue'
export default {
    data () {
        return {
            list:[]
        }
    },
    components: {
        Songscard
    },
    async created () {
        let data = await this.$request.Getnewestsongs();
        // console.log(data);
        this.list = data.data.result
    }
}
</script>

<style lang="scss" scoped>
.songscard {
  display: flex;
  flex-wrap: wrap;
}

</style>