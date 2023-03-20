<template>
  <keep-alive>
    <RootNode
      v-if="$route.meta.keepAlive"
      :key="$route.path"
      :component="component"
    />
  </keep-alive>
  <!-- <component
    v-if="!$route.meta.keepAlive"
    :is="component"
  /> -->
</template>

<script setup lang="ts">
import type { PropType, VNode } from "vue"
import RootNode from "./RootNode.vue"
defineProps({
  component: {
    type: Object as PropType<VNode>,
    required: true,
  },
})
</script>
