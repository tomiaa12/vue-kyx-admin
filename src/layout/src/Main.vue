<template>
  <el-main class="h-full p-0">
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="animate__fadeInLeft"
        leave-active-class="animate__fadeOutRight"
        mode="out-in"
      >
        <!-- <keep-alive> -->
        <component :is="Component" />
        <!-- </keep-alive> -->
      </transition>
    </router-view>
  </el-main>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue"
// const props = defineProps({});
const emits = defineEmits([])
</script>
<style lang="scss" scoped>
.el-main {
  padding-top: var(--header-height);
}
</style>
