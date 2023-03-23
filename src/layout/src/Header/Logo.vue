<template>
  <div class="flex items-center">
    <el-image
      class="w-24"
      src="https://kuangyx.cn/logo.png"
    />
    <ComTypeIt
      tag="h1"
      class="text-xl"
    >
      logo
    </ComTypeIt>
  </div>
</template>

<script setup lang="ts">
import ComTypeIt from "@/components/ComTypeIt/index.vue"
// const props = defineProps({})
const emits = defineEmits([])
</script>
<style lang="scss" scoped></style>
