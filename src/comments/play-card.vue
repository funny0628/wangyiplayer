<template>
  <div ref="player" class="play"></div>
</template>

<script>
import Player from "xgplayer";
export default {
  props: ["url"],

  mounted() {
    this.initplay();
   
  },
  methods: {
    initplay() {
      if (!this.url) return;
      this.player = new Player({
        el: this.$refs.player,
        url: this.url,
        width: "100%",
        // height: "300",
        videoInit: true,
        playbackRate: [0.5, 0.75, 1, 1.5, 2],
        lang: "zh-cn"
      });
    },
  
  },
  watch: {
    url(url,oldurl){
        if(url && url !== oldurl){
          
          if(!this.player){
            this.initplay()
          }else {
            //修改video的url
            this.player.src = url;
            //重新加载player
            this.player.reload();
          }
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.play {
  width: 100%;
  height: 420px;
  border-radius: 10px;
}
</style>
