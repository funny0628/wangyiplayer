<template>
  <div class="miniplayer">
   <div class="song">
     <div class="left">
       <img src="" alt="">
       <div class="mask"><i></i></div>
     </div>
     <div class="right">
       <p class="songname">Sucker Punch <i>PicaPica</i></p>
       <p class="songtime"> 00:00/02:48 </p>
     </div>
   </div>
   <div class="control"></div>
   <div class="mode"></div>
   <span class="progress-bar"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.miniplayer {
  width: 100vw;
  height: 66px; 
  background-color: #fff;
  border-top: 2px solid #ccc;
  display: flex;
  position: relative;
  div {
    flex: 1;
    background-color: pink;
    &.song {

    }
    &.control {

    }
    &.mode {

    }
  }
  .progress-bar {
    height: 5px;
    background-color: red;
    width: 100%;
    position: absolute;
    top: 0;
  }
}
</style>
