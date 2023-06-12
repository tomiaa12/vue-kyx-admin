<template>
  <div>
    <h4>动态路由</h4>
    <el-row align="middle">
      <el-col :span="2"> 地址参数 </el-col>
      <el-col :span="4">
        <el-input v-model="id"></el-input>
      </el-col>
      <el-col
        :span="2"
        :offset="1"
      >
        <el-button @click="to">to</el-button>
      </el-col>
    </el-row>
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
