<template>
  <keep-alive>
    <RootNode
      v-if="route.meta.keepAlive"
      :key="route.path"
      :component="component"
    />
  </keep-alive>
</template>

<script setup lang="ts">
import type { PropType, VNode } from "vue"
import type { RouteLocationNormalizedLoaded } from "vue-router"
import RootNode from "./RootNode.vue"
defineProps({
  component: {
    type: Object as PropType<VNode>,
    required: true,
  },
  route: {
    type: Object as PropType<RouteLocationNormalizedLoaded>,
    required: true,
  },
})
</script>
