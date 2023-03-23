<template>
  <router-view v-slot="{ Component }">
    <transition
      name="layout-fade"
      mode="out-in"
      appear
    >
      <keep-alive :include="include">
        <component
          :is="wrapperComponent(route.path, Component)"
          :key="route.path"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { h, ref, watch } from "vue"
import type { VNode, Component as ComponentType } from "vue"
import { useRoute } from "vue-router"

// 需要缓存的页面
const route = useRoute()

const include = ref<string[]>([])

watch(
  () => route.path,
  () => {
    if (route.meta.keepAlive) include.value.push(route.path)
  },
  {
    immediate: true,
  }
)

/**
 * keep alive 封装，
 * https://github.com/vuejs/core/issues/6219#issuecomment-1186108732
 */
const maps = new Map()
const wrapperComponent = (path: string, comp: VNode) => {
  // 已创建过的 vnode 直接返回
  if (maps.has(path)) return maps.get(path)

  const wraper: ComponentType = {
    name: path,
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
  maps.set(path, vm)
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
