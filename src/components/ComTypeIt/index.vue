<template>
  <component
    ref="dom"
    :is="tag"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { ref, onMounted, PropType } from "vue"
import TypeIt from "typeit"

const props = defineProps({
  // 标签名
  tag: {
    type: String,
    default: "div",
  },
  breakLines: {
    type: Boolean,
    default: undefined,
  },
  cursorChar: {
    type: String,
    default: undefined,
  },
  cursor: {
    type: Boolean,
  },
  cursorSpeed: {
    type: Number,
    default: undefined,
  },
  deleteSpeed: {
    type: Number,
    default: undefined,
  },

  html: {
    type: Boolean,
    default: undefined,
  },

  lifeLike: {
    type: Boolean,
    default: undefined,
  },

  loop: {
    type: Boolean,
    default: undefined,
  },
  loopDelay: {
    type: [Number, Array] as PropType<number | any[]>,
    default: undefined,
  },
  nextStringDelay: {
    type: [Number, Array] as PropType<number | any[]>,
    default: undefined,
  },
  speed: {
    type: Boolean,
    default: undefined,
  },
  startDelay: {
    type: Number,
    default: undefined,
  },
  startDelete: {
    type: Boolean,
    default: undefined,
  },
  strings: {
    type: [String, Array] as PropType<string | string[]>,
    default: undefined,
  },
  waitUntilVisible: {
    type: Boolean,
    default: undefined,
  },
  beforeString: {
    type: Function,
    default: undefined,
  },
  afterString: {
    type: Function,
    default: undefined,
  },
  beforeStep: {
    type: Function,
    default: undefined,
  },
  afterStep: {
    type: Function,
    default: undefined,
  },
  afterComplete: {
    type: Function,
    default: undefined,
  },
})

const dom = ref()

onMounted(() => {
  // @ts-ignore
  new TypeIt(dom.value, JSON.parse(JSON.stringify(props))).go()
})
</script>
<style lang="scss" scoped></style>
