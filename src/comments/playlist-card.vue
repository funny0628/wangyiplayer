<template>
  <li @click="toDetail">
    <a>
      <div class="image">
        <img :src="imgurl" />
        <span class="top">{{ desc }}</span>
        <Icon cssname="playlist"/>
      </div>
      <p>{{ name }}</p>
    </a>
  </li>
</template>

<script>
export default {
  props: ["imgurl", "name", "desc","id"],
  methods: {
    toDetail(){
      this.$router.push(`/playlist/${this.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  padding: 5px;
  box-sizing: border-box;
  height: 300px;
  a {
    display: block;
    width: 230px;
    height: 230px;
    .image {
      position: relative;
      overflow: hidden;
      img {
        width: 230px;
        height: 230px;
        border-radius: 5px;
        // object-fit: contain;
      }
      .top {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.4);
        transform: translateY(-100%);
        transition: all 0.3s;
        color: #fff;
      }
      &:hover {
        .top {
          transform: translateY(0);
        }
        .icon {
          opacity: 1;
        }
      }
    }
    p {
      width: 100%;
      height: 32px;
      text-align: left;
      font-size: 14px;
      line-height: 32px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
