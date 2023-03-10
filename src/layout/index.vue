<template>
  <div class="h-full">
    <el-container class="h-full">
      <el-aside width="auto"> </el-aside>
      <el-container>
        <el-main class="!p-0">
          <el-scrollbar
            class="main-scroll"
            view-class="h-full"
          >
            <RouterView />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router"
import { ref, PropType } from "vue"
const props = defineProps({})
const emits = defineEmits([])
</script>
<style lang="scss" scoped>
.layout {
}
</style>
