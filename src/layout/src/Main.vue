<template>
  <el-main>
    <!-- header 高度占位 -->
    <div style="height: var(--header-height)"></div>
    {{ !!$route.meta.keepAlive }}
    <!-- <router-view v-slot="{ Component, route }"> -->
    <!-- <transition
        name="layout-fade"
        mode="out-in"
      > -->
    <!-- transition 只能有一个组件，keep-alive封装 -->
    <!-- :component="Component"
    :route="route" -->
    <ComKeepAlive></ComKeepAlive>
    <!-- <RootNode
        v-if="!$route.meta.keepAlive"
        :key="$route.path"
        :component="Component"
      /> -->
    <!-- </transition> -->

    <!-- <transition name="layout-fade">
        <RootNode
          v-if="!$route.meta.keepAlive"
          :key="$route.path"
          :component="Component"
        />
      </transition> -->
    <!-- </router-view> -->
  </el-main>
</template>

<script setup lang="ts">
import { ref } from "vue"
import ComKeepAlive from "./Main/ComKeepAlive.vue"
import RootNode from "./Main/RootNode.vue"
</script>
<style lang="scss" scoped>
.el-main {
  @apply wh-full duration-1000;
}
</style>
