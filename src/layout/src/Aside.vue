<template>
  <transition
    name="layout-fade"
    appear
  >
    <el-aside v-if="!route.meta.fullScreen">
      <el-scrollbar view-class="h-full">
        <el-menu router>
          <MenuItem :data="routes" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue"
import MenuItem from "./Aside/MenuItem.vue"
import { routes } from "@/router"
import { useRoute } from "vue-router"

const route = useRoute()
</script>
<style lang="scss" scoped>
.el-menu {
  @apply duration-1000;
  --el-menu-bg-color: transparent;
  --el-menu-border-color: transparent;
}
.el-aside {
  @apply bg-gray-50 shadow-xl duration-1000 dark:bg-transparent;
  padding-top: var(--header-height);
  width: var(--aside-width);
}

.layout-fade-enter-from,
.layout-fade-leave-to {
  width: 0;
  white-space: nowrap;
  transform: translateX(-120%);
}
</style>
