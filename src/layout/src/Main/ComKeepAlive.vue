<template>
  <router-view v-slot="{ Component, route }">
    <transition
      name="layout-fade"
      mode="out-in"
      appear
    >
      <keep-alive :include="include">
        <component
          :is="wrapperComponent(route.fullPath, Component)"
          :key="route.fullPath"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { routes } from "@/router"
import { formatTwoStageRoutes } from "@/utils"
import { computed, h } from "vue"
import type { VNode, Component as ComponentType } from "vue"

// 需要缓存的页面
const include = computed(() =>
  formatTwoStageRoutes(routes)
    .filter(i => i.meta?.keepAlive)
    .map(i => i.path)
)

/**
 * keep alive 封装，
 * https://github.com/vuejs/core/issues/6219#issuecomment-1186108732
 */
const maps = new Map()
const wrapperComponent = (fullPath: string, comp: VNode) => {
  // 已创建过的 vnode 直接返回
  if (maps.has(fullPath)) return maps.get(fullPath)

  const wraper: ComponentType = {
    name: fullPath,
    render: () =>
      h(
        // component 没有跟节点会导致 transition 动画报错
        "div",
        {
          class: "wh-full",
        },
        h(comp)
      ),
  }
  // 缓存以便下次返回,否者创建新的 h 函数会导致 vue 报错
  const vm = h(wraper)
  maps.set(fullPath, vm)
  return vm
}
</script>
<style lang="scss" scoped>
.layout-fade-enter-from {
  opacity: 0;
  transform: translateX(10%);
}
.layout-fade-leave-to {
  opacity: 0;
  transform: translateX(-10%);
}
</style>
