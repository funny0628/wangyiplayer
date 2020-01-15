<template>
  <div @click="torouter" class="tag">
     {{$attrs.tag}}
  </div>
</template>

<script>
export default {
    name:"Tag",
    methods: {
        torouter(){
            this.$router.push(`/search/${this.$attrs.tag}`);
            this.$listeners.todetail(this.$attrs.tag)
        }
    }
}
</script>

<style lang="scss" scoped>
.tag {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #ccc;
    margin-right: 6px;
    margin-bottom: 10px;
    cursor: pointer;
}
</style>