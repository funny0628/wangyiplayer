<template>
  <div class="tabel">
    <li :class="{detailtitle:classname}">
      <p class="num">{{num}}</p>
      <p class="image">
               <img
          :src="picUrl"
        />
        <Icon cssname="listtabel"/>
      </p>
      <p class="songname">
        {{songname}} <i v-if="mvid" class="iconfont icon-shipinbofangyingpian"></i>
      </p>
      <p class="singername">{{artistname}}</p>
      <p class="name">{{albumname}}</p>
      <p class="time">{{duration}}</p>
    </li>
  </div>
</template>

<script>
export default {
    props:["mp3Url","songname","artistname","duration","albumname","picUrl","id","num","mvid","classname"]
};
</script>

<style lang="scss" scoped>
li {
  height: 75px;
  padding: 0px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    background-color: #efefef;
  }

  p {
    padding: 0px 10px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    &.num {
      width: 5%;
      color: rgb(190, 190, 190);
      //   padding: 0px 10px;
    }
    &.image {
      width: 10%;
        position: relative;
        img {
        width: 70px;
        height: 70px;
        border-radius: 5px;
        vertical-align: middle;
      }
    }
    &.songname {
      width: 25%;
      i {
        color: #d33a31;
      }
    }
    &.singername {
      width: 25%;
    }
    &.name {
      width: 25%;
    }
    &.time {
      width: 10%;
    }
  }
  &.detailtitle {
    color: #909090;
      height: 50px;
      line-height: 50px;
      .songname {
        color: black;
      }
      .image {
        opacity: 0;
        img {
          height: 30px;
          
        }
        
      }
  }
}
</style>
