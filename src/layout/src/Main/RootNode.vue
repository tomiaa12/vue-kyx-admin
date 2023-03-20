<template>
  <div class="wh-full">
    <!-- component 没有跟节点会导致 transition 动画报错 -->
    <component :is="component" />
  </div>
</template>

<script setup lang="ts">
import type { PropType, VNode } from "vue"
defineProps({
  component: {
    type: Object as PropType<VNode>,
    required: true,
  },
})
</script>
