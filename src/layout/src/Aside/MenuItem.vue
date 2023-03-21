<template>
  <template v-for="route of data">
    <component
      :is="route.children?.length ? 'el-sub-menu' : 'el-menu-item'"
      v-if="!route.meta?.hiddenMenu"
      :index="route.path"
    >
      <template #title>{{ route.meta?.title }}</template>
      <MenuItem :data="route.children" />
    </component>
  </template>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import type { RouteRecordRaw } from "vue-router"

defineOptions({
  name: "MenuItem",
})

const props = defineProps({
  data: {
    type: Array as PropType<RouteRecordRaw[]>,
    default: () => [],
  },
})
const emits = defineEmits([])
</script>
<style lang="scss" scoped></style>
