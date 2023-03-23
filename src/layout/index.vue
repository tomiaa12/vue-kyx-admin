<template>
  <el-container class="h-full">
    <Aside />

    <Header />

    <el-container direction="vertical">
      <el-scrollbar
        view-class="flex min-h-full flex-col"
        :view-style="{
          height: route.meta.fullScreen && '100%',
        }"
      >
        <Tag />
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
import Tag from "./src/Main/Tag.vue"
import { useRoute } from "vue-router"

const route = useRoute()

const headerHeight = computed(() => (route.meta.fullScreen ? 0 : "60px"))
const tagHeight = computed(() => "50px")
const asideWidth = computed(() => "200px")
</script>

<style lang="scss" scoped>
.el-container {
  // layout header 高度
  --header-height: v-bind(headerHeight);

  // layout tag 标签高度
  --tag-height: v-bind(tagHeight);
  --tag-container-padding: 20px;

  // aside 侧边栏展开宽度
  --aside-width: v-bind(asideWidth);
}

:deep(.layout-fade-leave-active),
:deep(.layout-fade-enter-active) {
  transition: 0.3s ease;
}
</style>
