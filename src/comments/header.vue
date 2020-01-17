<template>
  <div class="header">
    <div class="left">
      <ul class="btn">
        <li><i class="iconfont icon-shouye"></i></li>
        <li><i class="iconfont icon-jianhao"></i></li>
        <li><i class="iconfont icon-icon--"></i></li>
      </ul>
      <div class="router">
        <i class="iconfont icon-prev"> </i>
        <i class="iconfont icon-next"> </i>
      </div>
    </div>
    <div class="right">
      <div class="inpt">
        <input @click="openbox" type="text" placeholder="搜索">
        <i class="iconfont icon-fangdajing"></i>
      </div>
      <span class="yifu"><i class="iconfont icon-yifu"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openbox(event){
      //阻止事件冒泡
      event.stopPropagation();
      this.$store.commit('changehot',true)
    },
   
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 12px 36px 0px 10px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  .left {
    display: flex;
    .btn {
      margin-right: 30px;
      li {
        display: inline-block;
        margin-right: 10px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
      
        &:nth-child(1) {
          background-color: #ed655a;
        }
        &:nth-child(2) {
          background-color: #e0c04c;
        }
        &:nth-child(3) {
          background-color: #72be47;
        }
      }
    }
    .router {
      // margin-top: 5px;
      i {
        margin-right: 20px;
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border-radius: 50%;
        &:hover {
          background-color: #ebebeb;
        }
      }
    }
  }
  .right {
    padding-right: 36px;
     
    display: flex;
    .inpt {
      position: relative;
      margin-top: 5px;
      input {
        width: 150px;
        height: 25px;
        box-sizing: border-box;
        background-color: #ededed;
        padding-left: 30px;
        border-radius: 5px;
      
      }
      i {
        position: absolute;
        left: 10px;
        top: 5px;
        
      }

    }
    .yifu {
      margin-left: 20px;
      margin-top: 10px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      line-height: 25px;
      text-align: center;
      &:hover {
         background-color: #ebebeb;
      }
    }

   
  }
}
</style>
