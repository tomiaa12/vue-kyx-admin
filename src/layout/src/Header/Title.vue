<template>
  <h2
    ref="dom"
    class="text-xl"
  ></h2>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import TypeIt from "typeit"

const dom = ref()

onMounted(() => {
  // @ts-ignore
  new TypeIt(dom.value, {
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
    .go()
})
</script>
