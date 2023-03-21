<template>
  <el-main>
    <!-- header 高度占位 -->
    <div style="height: var(--header-height)"></div>

    <router-view v-slot="{ Component, route }">
      <transition
        name="layout-fade"
        mode="out-in"
      >
        <!-- transition 只能有一个组件，keep-alive封装 -->
        <ComKeepAlive
          :component="Component"
          :route="route"
        ></ComKeepAlive>
      </transition>

      <transition
        name="layout-fade"
        mode="out-in"
      >
        <RootNode
          v-if="!$route.meta.keepAlive"
          :key="$route.path"
          :component="Component"
        />
      </transition>
    </router-view>
  </el-main>
</template>

<script setup lang="ts">
import { ref } from "vue"
import ComKeepAlive from "./Main/ComKeepAlive.vue"
import RootNode from "./Main/RootNode.vue"
</script>
<style lang="scss" scoped>
.el-main {
  @apply wh-full duration-1000;
}

.layout-fade-enter-from {
  opacity: 0;
  transform: translateX(10%);
}
.layout-fade-leave-to {
  opacity: 0;
  transform: translateX(-10%);
}
</style>
