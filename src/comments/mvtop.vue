<template>
  <div v-on="$listeners" class="mvtop">
    <span>{{ title }} :</span>
    <ul>
      <li
        :class="{ listyle: activeindex === index }"
        @click="tochangeindex(index)"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.tap }} <i>|</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeindex: 0
    };
  },
  props: ["title", "list"],

  methods: {
    tochangeindex(index) {
      this.activeindex = index;
      console.log(this.title);
      if(this.title ==="地区")  this.$listeners.getarea(index);
      if(this.title ==="类型") this.$listeners.gettype(index);
      if(this.title ==="排序") this.$listeners.getorder(index);
     
      // if (this.$listeners.getarea() !== undefined) {
      //   
      // } 
      //  if (this.$listeners.gettype() !== undefined) {
      //   this.$listeners.gettype(index);
      // } 
      // if (this.$listeners.getorder() !== undefined) {
      //   this.$listeners.getorder(index);
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
.mvtop {
  display: flex;
  justify-content: flex-start;
  height: 50px;
  line-height: 50px;
  span {
    font-size: 16px;
  }
  ul {
    display: flex;
    li {
      font-size: 14px;
      padding: 0px 30px;
      position: relative;
      i {
        height: 14px;
        color: #ccc;
        position: absolute;
        right: 0;
      }
      &:last-child i {
        display: none;
      }
      &.listyle {
        color: #d33a31;
      }
    }
  }
}
</style>
