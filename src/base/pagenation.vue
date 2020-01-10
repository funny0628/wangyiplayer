<template>
   <el-pagination

  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
</template>

<script>
import { Button, Pagination } from "element-ui";
export default {
    name:'Pagenation'
}
</script>

<style lang="scss" scoped>
 /deep/.el-pager li.active {
  color: #d33a31;
 
}
 /deep/.el-pager li:hover {
    color: #d33a31;
  }

</style>