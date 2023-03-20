<template>
  <el-container class="h-full">
    <Aside />

    <Header />

    <el-container class="flex-col">
      <el-scrollbar view-class="h-full">
        <Main />
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue"
import Aside from "./src/Aside.vue"
import Header from "./src/Header.vue"
import Main from "./src/Main.vue"
import { useRoute } from "vue-router"

const route = useRoute()

const headerHeight = computed(() => (route.meta.fullScreen ? 0 : "60px"))
</script>

<style lang="scss" scoped>
.el-container {
  --header-height: v-bind(headerHeight);
}

:deep(.layout-fade-enter-active),
:deep(.layout-fade-leave-active) {
  transition: 0.3s ease;
}
</style>
