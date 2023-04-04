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
        class="cursor-pointer px-3 py-1 transition-all duration-300 hover:bg-[var(--el-color-primary-light-9)]"
      >
        {{ i.name }}
      </li>
    </ul>
  </transition>
</template>

<script setup lang="ts">
import { watch, type PropType, onMounted, onUnmounted } from "vue"
import { ref } from "vue"
const props = defineProps({
  modelValue: {
    type: Boolean,
  },
})
const emits = defineEmits(["update:modelValue"])

const show = ref(false)

const list = ref([
  {
    name: "刷新",
    icon: "el-icon-refresh",
  },
  {
    name: "关闭",
  },
  {
    name: "关闭左侧标签页",
  },
  {
    name: "关闭右侧标签页",
  },
  {
    name: "关闭其他标签页",
  },
  {
    name: "关闭全部标签页",
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
