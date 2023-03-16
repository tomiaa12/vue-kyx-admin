<template>
  <el-aside
    width="200px"
    class="bg-gray-50 shadow-xl"
  >
    <el-scrollbar>
      <el-menu router>
        <MenuItem :data="routes" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue"
import MenuItem from "./Aside/MenuItem.vue"
import { routes } from "@/router"

console.log(routes)
</script>
<style lang="scss" scoped>
.el-menu {
  padding-top: var(--header-height);
  --el-menu-bg-color: transparent;
  --el-menu-border-color: transparent;
}
</style>
