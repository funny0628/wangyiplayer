<template>
  <el-pagination 
  layout="prev, pager, next" 
  v-bind="$attrs" 
  v-on="$listeners">
  </el-pagination>
</template>

<script>
import { Button, Pagination } from "element-ui";
export default {
  name: "Pagenation"
  // props: ["total", "pagesize"]
};
</script>

<style lang="scss" scoped>
/deep/.el-pager li.active {
  color: #d33a31;
}
/deep/.el-pager li:hover {
  color: #d33a31;
}
</style>
