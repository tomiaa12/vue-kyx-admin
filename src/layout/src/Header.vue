<template>
  <transition
    name="layout-fade"
    appear
  >
    <el-header v-show="!route.meta.fullScreen">
      <div class="left">
        <slot name="left">
          <Logo />
        </slot>
      </div>
      <div class="center">
        <slot name="center">
          <Title />
        </slot>
      </div>

      <div class="right flex-center">
        <slot name="right">
          <KSwitchDark class="mr-4" />
          <Avatar />
        </slot>
      </div>
    </el-header>
  </transition>
</template>

<script setup lang="ts">
import Avatar from "./Header/Avatar.vue"
import Logo from "./Header/Logo.vue"
import Title from "./Header/Title.vue"

import { useRoute } from "vue-router"

const route = useRoute()
// const props = defineProps({})
const emits = defineEmits([])
</script>
<style lang="scss" scoped>
.el-header {
  @apply flex-bc absolute z-10 w-full  border-solid border-neutral-100 bg-white/50 backdrop-blur duration-1000 dark:bg-transparent;
  --el-header-height: var(--header-height);
  padding-left: 0;
  box-shadow: 0 2px 4px -3px rgb(0 0 0 / 0.1);
}
.left {
  padding: var(--el-header-padding);
  padding-right: 0;
  width: var(--aside-width);
}
.layout-fade-enter-from,
.layout-fade-leave-to {
  overflow: hidden;
  transform: translateY(-100px);
}
</style>
