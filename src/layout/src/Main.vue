<template>
  <el-main>
    <ComKeepAlive></ComKeepAlive>
  </el-main>
</template>

<script setup lang="ts">
import ComKeepAlive from "./Main/ComKeepAlive.vue"
</script>
<style lang="scss" scoped>
.el-main {
  @apply wh-full duration-1000;
  padding-top: calc(var(--header-height) + var(--el-main-padding));
}
</style>
