<template>
  <transition>
    <el-header v-if="!route.meta.fullScreen">
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

      <div class="right">
        <slot name="right">
          <Avatar />
        </slot>
      </div>
    </el-header>
  </transition>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue"
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
  @apply flex-bc absolute z-10 w-full border-b border-solid border-neutral-100;
  --el-header-height: var(--header-height);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 4px -3px rgb(0 0 0 / 0.1);
}
</style>
