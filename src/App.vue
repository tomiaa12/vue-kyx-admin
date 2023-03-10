<script setup lang="ts">
import { RouterView } from "vue-router"

/* 首屏加载的动画 */
const el = document.getElementById("firstLoading") as any
if (el) {
  el.setAttribute("transition-style", "out:custom:circle-swoop")
  // 动画完毕后删除
  "onanimationend" in el
    ? el.addEventListener("animationend", el.remove)
    : // 兼容chrome 79以下
      setTimeout(
        el?.remove,
        parseFloat(getComputedStyle(el).animationDuration) * 1000
      )
}
</script>

<template>
  <RouterView />
</template>
