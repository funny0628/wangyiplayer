<template>
  <div class="search-mv">
    <div class="mvtabel">
      <Mvscard
        v-for="(item, index) in hotdata"
        :key="index"
        :imageurl="item.cover"
        :songname="item.name"
        :artiname="item.artists | formatartis"
        :count="item.playCount"
        :id="item.id"
        :duration="item.duration"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Mvscard from '../../comments/mvs-card.vue'
export default {
  components: {
    Mvscard
  },
  data() {
    return {
      opation: {
        limit: 30,
        type: 1004,
        keywords: ""
      }
    };
  },
  created () {
    this.opation.keywords = this.$route.params.name;
    this.$store.dispatch("Getsongs", this.opation);
  },
  computed: {
    ...mapState(["hotdata"])
  }
};
</script>

<style lang="scss" scoped>
.mvtabel {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
