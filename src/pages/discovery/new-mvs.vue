<template>
  <div class="newmvs">
     <Topic title="推荐MV"/>
     <div class="mvs">
         <Mvscard v-for="(item, index) in list"
         :key="index"
         :imageurl="item.picUrl"
         :songname="item.name"
         :artiname="item.artistName"
         :count="item.playCount"
         :id="item.id"
         />
     </div>
  </div>
</template>

<script>
 import Mvscard from '../../comments/mvs-card.vue'
export default {
  components: {
    Mvscard
  },
  data () {
    return {
      list:[]  
    }
  },
  async created () {
    let data = await this.$request.Getpersonalized();
    // console.log(data);
    this.list = data.data.result;
    
  }
}
</script>

<style lang="scss" scoped>
.mvs {
  display: flex;
  justify-content: space-between;
}

</style>