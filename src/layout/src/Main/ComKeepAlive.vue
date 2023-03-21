<template>
  <router-view v-slot="{ Component, route }">
    <transition
      name="layout-fade"
      mode="out-in"
    >
      <keep-alive>
        <RootNode
          v-if="route.meta.keepAlive"
          :key="route.fullPath"
          :component="Component"
        />
      </keep-alive>
    </transition>
    <transition
      name="layout-fade"
      mode="out-in"
      appear
    >
      <RootNode
        v-if="!$route.meta.keepAlive"
        :key="route.fullPath"
        :component="Component"
      />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import type { PropType, VNode } from "vue"
import type { RouteLocationNormalizedLoaded } from "vue-router"
import RootNode from "./RootNode.vue"
// defineProps({
//   component: {
//     type: Object as PropType<VNode>,
//     required: true,
//   },
//   route: {
//     type: Object as PropType<RouteLocationNormalizedLoaded>,
//     required: true,
//   },
// })
</script>
<style lang="scss" scoped>
.layout-fade-enter-from {
  opacity: 0;
  transform: translateX(10%);
}
// .layout-fade-leave-to {
//   opacity: 0;
//   transform: translateX(-10%);
// }

.layout-fade-leave-active {
  transition: unset;
}
</style>
