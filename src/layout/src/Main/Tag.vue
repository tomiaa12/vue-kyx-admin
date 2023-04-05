<template>
  <div class="tag-container">
    <el-scrollbar view-class="scroll-view">
      <transition-group
        enter-active-class="animate__zoomIn duration-100"
        leave-active-class="tag-zoomOut duration-100"
      >
        <button
          v-for="data in layoutTagStore.tags"
          :ref="el => (data.el = el as HTMLButtonElement)"
          :key="data.path"
          :class="{
            active: data === layoutTagStore.curTag,
          }"
          @mousedown.left="go(data)"
          @mousedown.middle="layoutTagStore.delTag(data)"
          @mousedown.right="openMenu(data, $event)"
          @contextmenu.prevent
        >
          {{ nn(useIcon(data.meta.icon)) }}
          <el-icon
            v-if="useIcon(data.meta.icon)"
            class="mr-2"
          >
            <component :is="useIcon(data.meta.icon)" />
          </el-icon>
          <span class="h-full truncate pr-2 text-sm">
            {{ data.meta.title }}
          </span>
          <el-icon
            v-if="!data.meta.fixedTag"
            class="close"
            @mousedown.left.middle.stop
            @click="layoutTagStore.delTag(data)"
          >
            <el-icon-close />
          </el-icon>
        </button>
      </transition-group>
    </el-scrollbar>
    <el-icon-more-filled class="ml-auto shrink-0" />
  </div>
  <ContextMenu
    v-model="showMenu"
    :cur-menu-data="curMenuData"
    class="fixed z-50"
    :style="menuStyle"
  />
</template>

<script setup lang="ts">
import { watch, type PropType, ref, type CSSProperties } from "vue"
import { useLayoutTagStore, type Tag } from "@/stores"
import { useRoute, useRouter } from "vue-router"
import ContextMenu from "./ContextMenu.vue"
import { useIcon } from "@/hooks"
// const props = defineProps({})
// const emits = defineEmits([])

const layoutTagStore = useLayoutTagStore()

const route = useRoute()
const router = useRouter()

const go = (data: Tag) => router.push(data)

watch(
  () => route,
  () => {
    layoutTagStore.push(route)
  },
  {
    immediate: true,
    deep: true,
  }
)

const showMenu = ref(false)
const menuStyle = ref<CSSProperties>({
  left: 0,
  top: 0,
})
const curMenuData = ref<Tag>()
const openMenu = (data: Tag, e: MouseEvent) => {
  menuStyle.value.left = e.clientX + "px"
  menuStyle.value.top = e.clientY + "px"
  showMenu.value = true
  curMenuData.value = data
}
</script>
<style lang="scss" scoped>
.tag-padding-margin {
  @apply mr-1 px-2 py-1;
}
@keyframes tagZoomOut {
  0% {
    @apply mr-1 border-0 px-2 py-1 opacity-100;
  }
  100% {
    transform: scale3d(0, 0, 0);
    @apply m-0 w-0 border-0 p-0 opacity-0;
  }
}
.tag-zoomOut {
  animation-fill-mode: both;
  animation-duration: var(--animate-duration);
  animation-name: tagZoomOut;
}
.tag-container {
  @apply absolute left-0 z-10 flex w-full items-center bg-white/50 backdrop-blur transition-all dark:bg-transparent;
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
    @apply flex-bc mr-1 overflow-hidden rounded border border-transparent px-2 py-1 text-base transition-all duration-1000 dark:border-none;
    &.active {
      @apply border border-gray-200 bg-white/50 dark:border-none dark:bg-[#42414d] dark:shadow-none;

      box-shadow: 0 0 5px rgb(229 231 235 / var(--tw-border-opacity));
    }
    &:hover {
      @apply bg-gray-100 dark:bg-[#35343a];
    }
    .close {
      width: unset;
      @apply h-5 w-5 shrink-0 overflow-hidden rounded-sm transition-all;
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
