<template>
  <div>
    menu2
    <el-input v-model="id"></el-input>

    <button @click="to">to</button>
    <el-input-number> </el-input-number>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
const props = defineProps({})
const emits = defineEmits([])

const router = useRouter()

const id = ref()
const to = () => {
  router.push({
    name: "menu2",
    params: {
      id: id.value,
      dd: 1,
    },
    query: {
      aa: id.value,
    },
  })
}
</script>
<style lang="scss" scoped></style>
