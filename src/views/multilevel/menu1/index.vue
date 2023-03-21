<template>
  <div>
    <el-input-number v-model="val"> </el-input-number>
    <el-input v-model="text"></el-input>

    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
    <div>10</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const props = defineProps({})
const emits = defineEmits([])

const text = ref()
const val = ref()
</script>
<style lang="scss" scoped></style>
