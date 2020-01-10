<template>
  <div v-if="url" class="play">
    play-card.vue
  </div>
</template>

<script>
import Player from "xgplayer";
export default {
  props:["url"],
  mounted() {
       console.log(this);
    let player = new Player({
      id: "mse",
      url: "1080"
    });
  
  },
  created () {
  
      
  }
};
</script>

<style lang="scss" scoped>
.play {
  width: 100%;
  height: 300px;
}
</style>
