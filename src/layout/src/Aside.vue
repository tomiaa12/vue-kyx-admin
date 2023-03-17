<template>
  <transition name="fade">
    <el-aside
      v-if="!route.meta.fullScreen"
      width="200px"
    >
      <el-scrollbar>
        <el-menu router>
          <MenuItem :data="routes" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
  </transition>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue"
import MenuItem from "./Aside/MenuItem.vue"
import { routes } from "@/router"
import { useRoute } from "vue-router"

const route = useRoute()
</script>
<style lang="scss" scoped>
.el-menu {
  @apply duration-1000;
  padding-top: var(--header-height);
  --el-menu-bg-color: transparent;
  --el-menu-border-color: transparent;
}
.el-aside {
  @apply bg-gray-50 shadow-xl duration-1000;
}

.fade-enter-from,
.fade-leave-to {
  width: 0;
  transform: translateX(-120%);
}
</style>
