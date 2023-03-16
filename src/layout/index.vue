<template>
  <el-container class="h-full">
    <Aside v-if="!route.meta.fullScreen" />

    <Header />
    <el-container class="flex-col">
      <el-scrollbar view-class="h-full">
        <Main />
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import Aside from "./src/Aside.vue"
import Header from "./src/Header.vue"
import Main from "./src/Main.vue"
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<style lang="scss" scoped>
.el-container {
  --header-height: 60px;
}
</style>
