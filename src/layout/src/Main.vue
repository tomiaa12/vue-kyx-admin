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
  @apply duration-1000;
  padding-top: var(--header-height);
  padding-top: calc(
    var(--header-height) + var(--el-main-padding) + var(--tag-height)
  );
}
</style>
