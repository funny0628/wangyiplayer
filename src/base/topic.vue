<template>
  <div>
      <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
    name:"Topic",
    props:['title']

}
</script>

<style lang="scss" scoped>
.title {
    font-size: 25px;
    text-align: left;
    line-height: 80px;
  }

</style>