<template>
  <el-dropdown>
    <el-avatar
      src="https://foruda.gitee.com/avatar/1677057574618995539/5538584_kyx117885_1615626213.png"
    />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">

import { useRouter } from "vue-router"
const router = useRouter()

const logout = () => {
  router.push("/login")
}
</script>
