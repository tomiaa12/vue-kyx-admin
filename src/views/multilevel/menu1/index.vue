<template>
  <div>
    <button @click="to">to</button>

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
import { useRouter } from "vue-router"
const router = useRouter()

const props = defineProps({})
const emits = defineEmits([])

const text = ref()
const val = ref()

const to = () => {
  router.push({
    name: "menu1",
    query: {
      aa: text.value,
    },
  })
}
</script>
<style lang="scss" scoped></style>
