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
        <ComKeepAlive :component="Component"></ComKeepAlive>
        <!-- <keep-alive>
          <RootNode
            v-if="route.meta.keepAlive"
            :key="route.path"
            :component="Component"
          />
        </keep-alive> -->
      </transition>
      <transition
        name="layout-fade"
        mode="out-in"
        v-if="!$route.meta.keepAlive"
      >
        <component
          :key="route.path"
          :is="Component"
        />
      </transition>
    </router-view>
  </el-main>
</template>

<script setup lang="ts">
import { ref, PropType, nextTick } from "vue"
// const props = defineProps({});
import ComKeepAlive from "./Main/ComKeepAlive.vue"
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
