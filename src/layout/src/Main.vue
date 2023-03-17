<template>
  <el-main>
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        enter-active-class="fadeInRight"
        leave-active-class="fadeOutLeft"
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
  @apply h-full p-0 duration-1000;
  padding-top: var(--header-height);
}

// 路由界面切换动画
.fadeInRight,
.fadeOutLeft {
  animation-duration: var(--animate-duration);
  animation-fill-mode: both;
  // .el-scrollbar__view {
  //   @apply overflow-hidden;
  // }
}

.fadeInRight {
  animation-name: fadeInRight;
}
.fadeOutLeft {
  animation-name: fadeOutLeft;
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-10%);
  }
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
