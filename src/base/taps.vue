<template>
  <div  class="tap">
    <!-- <router-link></router-link> -->
    <div
      v-if="classname"
      :class="{ detailtabel: index === activeindex }"
      @click="changeclass(index)"
      v-for="(item, index) in taps"
      :key="index"
      class="taps"
    >
      {{ item.tap || item }} <span v-if="index === 1">({{totalcomment}})</span>
    </div>
    <div
      v-if="!classname"
      :class="{ default: idx === activeindex }"
      @click="changeclass(idx)"
      v-for="(itm, idx) in taps"
      :key="idx"
      class="taps"
    >
      {{ itm.tap || itm }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Taps",
  props: ["taps", "classname", "getindex","totalcomment"],

  data() {
    return {
      activeindex: 0
    };
  },

  methods: {
    changeclass(index) {
      this.activeindex = index;
     if(this.$listeners.gettap){
       this.$listeners.gettap(this.taps[this.activeindex])
     }else if(this.$listeners.sendindex){
       this.$listeners.sendindex(this.activeindex)
     }
    }
  }
};
</script>

<style lang="scss" scoped>
.tap {
  font-size: 16px;
  line-height: 60px;
  display: flex;
  justify-content: flex-end;
  .taps {
    cursor: pointer;
    margin-right: 30px;
    &.default {
      color: #d33a31;
    }

    &.detailtabel {
      color: #d33a31;
      border-bottom: 2px solid #d33a31;
    }
  }
}
</style>
