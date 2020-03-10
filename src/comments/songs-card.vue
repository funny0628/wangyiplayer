<template>
  
    <div class="item" @click="toplay(id)">
      <span class="serialnumber">{{ idsc | formatnumber}}</span>
      <div class="image">
           <img :src="imageurl"/>
      <Icon cssname="songs"/>
      </div>
      <span class="name">
        <p class="top">{{songname}}</p>
        <p class="bottom">{{artists}}</p>
      </span>
    </div>

</template>

<script>
export default {
    components: {
    },
   props:["imageurl","songname", "idsc","artists","id","duration"],
   methods:{
     toplay(id){
        this.$store.dispatch("Getplayurl",{
        id:this.id,
        duration:this.duration,
        picUrl:this.imageurl,
        songname:this.songname,
        artistname:this.artistname
      })
     }
   }

};
</script>

<style lang="scss" scoped>

  .item {
    cursor: pointer;
    width: 50%;
    height: 100px;
    padding: 0px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:hover {
      background-color: #f5f5f5;
    }
    .serialnumber {
      font-size: 14px;
      color: black;
    }
    .image {
        position: relative;
         img {
        width: 76px;
        height: 76px;
        margin: 0 20px;
    }
    }
   
    .name{
        font-size: 14px;
        line-height: 38px;
        text-align: left;
    }
    &:last-child {
        margin-bottom: 20px;
    }
  }

</style>
