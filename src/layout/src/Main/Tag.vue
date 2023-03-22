<template>
  <div class="tag-container">tag</div>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import { ref } from "vue"
// const props = defineProps({})
// const emits = defineEmits([])
</script>
<style lang="scss" scoped>
.tag-container {
  @apply absolute left-0 z-10 w-full text-right transition-all;
  height: var(--tag-height);
  top: var(--header-height);

  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 4px -3px rgb(0 0 0 / 0.1);
}
</style>
