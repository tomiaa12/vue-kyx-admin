<template>
  <h1
    ref="div"
    class="py-4 text-center text-2xl"
  ></h1>
</template>

<script setup lang="ts">
import { ref, PropType, onMounted } from "vue"
import TypeIt from "typeit"

const div = ref()

onMounted(() => {
  // @ts-ignore
  const a = new TypeIt(div.value, {
    speed: 150,
    startDelay: 900,
  })
    .type("vite", { delay: 100 })
    .type("+", { delay: 300 })
    .type("vue", { delay: 200 })
    .move(-5, { delay: 100 })
    .move(null, { to: "START", instant: true, delay: 300 })
    .move(1, { delay: 200 })
    .delete(1, { delay: 500 })
    .type("V", { delay: 500 })
    .move(3, { delay: 300 })
    .type("4", { delay: 200 })
    .pause(200)
    .type(" ", { delay: 200 })
    .move(1, { delay: 300 })
    .type(" ", { delay: 200 })
    .move(1, { delay: 200 })
    .delete(1, { delay: 500 })
    .type("V", { delay: 500 })
    .move(null, { to: "END", delay: 400 })
    .type("3", { delay: 200 })
    .type(" ", { delay: 200 })
    .type("+ ", { delay: 500 })
    .type("E", { delay: 800 })
    .type("lemen", { delay: 200 })
    .type("t ", { delay: 200 })
    .type("P", { delay: 400 })
    .type("lus ", { delay: 1600 })
    .type("typescript", { delay: 200, speed: 300 })
    .move(-10, { delay: 300 })
    .type(" + ", { speed: 300 })
    .move(1, { delay: 300 })
    .delete(1, { delay: 200 })
    .type("T")
    .move(null, { to: "END", delay: 400 })
    .break({ delay: 400 })
    .type("houtai", { delay: 100 })
    .delete(6, { instant: true })
    .type("后台", { instant: true, delay: 500 })
    .type("guanli", { delay: 100 })
    .delete(6, { instant: true })
    .type("管理", { instant: true, delay: 500 })
    .type("xitong", { delay: 100 })
    .delete(6, { instant: true })
    .type("系统", { instant: true, delay: 500 })
    .type("（）")
    .move(-1, { delay: 400 })
    .type("jianrong", { delay: 100 })
    .delete(8, { instant: true })
    .type("兼容", { instant: true, delay: 500 })
    .type("yidong", { delay: 100 })
    .type("duan", { delay: 500 })
    .delete(10, { instant: true })
    .type("移动端", { instant: true, delay: 1500 })
    .move(1, { delay: 2500 })
    .type("。")
    .go()
})
</script>
