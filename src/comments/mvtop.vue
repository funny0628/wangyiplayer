<template>
  <div class="mvtop">
    <span>{{ title }} :</span>
    <ul>
      <li
        :class="{listyle:activeindex === index}"
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
  props:["title","list"],
  methods: {
    tochangeindex(index) {
      this.activeindex = index;
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
          color: red;
      }
    }
  }
}
</style>
