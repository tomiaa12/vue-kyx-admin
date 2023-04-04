<template>
  <transition name="el-zoom-in-top">
    <ul
      v-if="show"
      class="rounded py-2 text-sm shadow-md"
      @contextmenu.prevent
      @click.stop
    >
      <li
        v-for="i of list"
        class="flex cursor-pointer items-center px-3 py-1 transition-all duration-300 hover:bg-[var(--el-color-primary-light-9)]"
        @click="i.handler"
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
import { watch, type PropType, onMounted, onUnmounted } from "vue"
import { ref } from "vue"
import { useIcon } from "@/hooks"
import type { Tag } from "@/stores"

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

const show = ref(false)

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
      
    },
  },
  {
    name: "关闭左侧",
    icon: "el-icon-back",
  },
  {
    name: "关闭右侧",
    icon: "el-icon-right",
  },
  {
    name: "关闭其他",
    icon: "el-icon-switch",
  },
  {
    name: "关闭全部",
    icon: "el-icon-close",
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
}
</style>
