<template>
  <div class="tag-container">
    <el-scrollbar view-class="scroll-view">
      <button
        v-for="i in 20"
        :class="i == 1 ? 'active' : ''"
      >
        <el-icon-clock class="mr-2" />
        <span>chack</span>
        <el-icon class="close">
          <el-icon-close />
        </el-icon>
      </button>
    </el-scrollbar>
    <el-icon-more-filled class="shrink-0" />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import { ref } from "vue"
// const props = defineProps({})
// const emits = defineEmits([])
</script>
<style lang="scss" scoped>
.tag-container {
  @apply absolute left-0 z-10 flex w-full items-center bg-white/50 backdrop-blur transition-all;
  height: var(--tag-height);
  top: var(--header-height);
  padding-right: var(--tag-container-padding);

  box-shadow: 0 2px 4px -3px rgb(0 0 0 / 0.1);

  :deep(.scroll-view) {
    @apply flex h-full flex-nowrap items-center;
    padding: 7px var(--tag-container-padding);
  }

  :deep(> .el-scrollbar) {
    .el-scrollbar__wrap {
      margin-right: var(--tag-container-padding);
    }
    .el-scrollbar__bar.is-horizontal {
      @apply bottom-0;
    }
  }

  button {
    @apply flex-bc mr-1  rounded px-2 py-1 transition-all;
    &.active {
      @apply border border-gray-200 bg-white/50;

      box-shadow: 0 0 5px rgb(229 231 235 / var(--tw-border-opacity));
    }
    &:hover {
      @apply bg-gray-100;
    }
    .close {
      width: unset;
      @apply ml-2 h-5 w-5 shrink-0 overflow-hidden rounded-sm transition-all;
      &:hover {
        @apply bg-gray-200;
      }
      svg {
        @apply scale-75;
      }
    }
  }
}
</style>
