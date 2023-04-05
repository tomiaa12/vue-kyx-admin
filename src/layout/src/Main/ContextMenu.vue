<template>
  <transition name="el-zoom-in-top">
    <ul
      v-if="show"
      class="rounded py-2 text-sm shadow-md transition-all"
      @contextmenu.prevent
      @click.stop
    >
      <li
        v-for="i of list"
        :class="{
          'is-disabled': i.isDisabled?.(),
        }"
        @click="
          () => {
            if (i.isDisabled?.()) return
            emits('update:modelValue', false)
            i.handler?.()
          }
        "
      >
        <component
          :is="useIcon(i.icon)"
          class="mr-2"
        />
        <span>{{ i.name }}</span>
      </li>
    </ul>
  </transition>
</template>

<script setup lang="ts">
import { watch, type PropType, onMounted, onUnmounted, computed } from "vue"
import { ref } from "vue"
import { useIcon } from "@/hooks"
import { useLayoutTagStore, type Tag } from "@/stores"

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  curMenuData: {
    type: Object as PropType<Tag>,
    default: () => ({}),
  },
})
const emits = defineEmits(["update:modelValue"])
const layoutTagStore = useLayoutTagStore()
const show = ref(false)
const curIndex = computed(() => layoutTagStore.getIndexByTag(props.curMenuData))
const list = ref([
  {
    name: "刷新",
    icon: "el-icon-refresh",
    handler() {},
  },
  {
    name: "关闭",
    icon: "el-icon-close",
    handler() {
      layoutTagStore.delTag(props.curMenuData)
    },
    isDisabled: () => props.curMenuData.meta.fixedTag,
  },
  {
    name: "关闭左侧",
    icon: "el-icon-back",
    handler() {
      layoutTagStore.tags.forEach((tag, i) => {
        i < curIndex.value && layoutTagStore.delTag(tag)
      })
    },
    isDisabled: () =>
      !layoutTagStore.tags.some(
        (tag, i) => i < curIndex.value && !tag.meta.fixedTag
      ),
  },
  {
    name: "关闭右侧",
    icon: "el-icon-right",
    handler() {
      layoutTagStore.tags.forEach((tag, i) => {
        i > curIndex.value && layoutTagStore.delTag(tag)
      })
    },
    isDisabled: () =>
      !layoutTagStore.tags.some(
        (tag, i) => i > curIndex.value && !tag.meta.fixedTag
      ),
  },
  {
    name: "关闭其他",
    icon: "el-icon-switch",
    handler() {
      layoutTagStore.tags.forEach((tag, i) => {
        i != curIndex.value && layoutTagStore.delTag(tag)
      })
    },
    isDisabled: () =>
      !layoutTagStore.tags.some(
        (tag, i) => i != curIndex.value && !tag.meta.fixedTag
      ),
  },
  {
    name: "关闭全部",
    icon: "el-icon-close",
    handler() {
      layoutTagStore.tags.forEach(layoutTagStore.delTag)
    },
    isDisabled: () => !layoutTagStore.tags.some(tag => !tag.meta.fixedTag),
  },
])

watch(
  () => props.modelValue,
  () => {
    show.value = props.modelValue
  },
  { immediate: true }
)

watch(show, () => {
  emits("update:modelValue", show.value)
})

const close = () => (show.value = false)

onMounted(() => {
  document.addEventListener("click", close)
})

onUnmounted(() => {
  document.removeEventListener("click", close)
})
</script>
<style lang="scss" scoped>
ul {
  background-color: var(--el-bg-color);
  li {
    @apply flex cursor-pointer items-center px-3 py-1 transition-all duration-300;
    &:not(.is-disabled):hover {
      background-color: var(--el-color-primary-light-9);
    }
    &.is-disabled {
      @apply cursor-not-allowed;
      color: var(--el-text-color-disabled);
    }
  }
}
</style>
