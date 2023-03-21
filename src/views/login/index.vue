<template>
  <div class="flex-center h-full">
    <div class="fixed right-4 top-4">
      <KSwitchDark />
    </div>
    <div class="flex-center container">
      <el-form
        :model="form"
        :rules="rules"
        class="w-4/5 pb-6 lg:w-2/3 xl:w-4/5"
        size="large"
      >
        <Title />

        <el-form-item class="animate__fadeInUp delay-75">
          <el-input
            v-model="form.username"
            placeholder="账号"
          >
            <template #prefix>
              <el-icon-user-filled />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="animate__fadeInUp animate__delay-0.5s delay-300">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="密码"
            show-password
          >
            <template #prefix>
              <el-icon-lock />
            </template>
          </el-input>
        </el-form-item>
        <div class="flex-center animate__fadeInUp animate__delay-1s w-full">
          <el-button
            type="primary"
            @click="login"
            round
            class="w-2/3 bg-gradient-to-r from-sky-500 to-indigo-400"
          >
            登录
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useRouter } from "vue-router"
import Title from "./components/Title.vue"

import axios from "axios"
const router = useRouter()
const form = ref({
  username: "admin",
  password: "password",
})
const rules = {}

const login = async () => {
  await axios.post("/login", form.value)
  router.push("/home")
}
</script>
<style lang="scss" scoped>
.container {
  @apply h-3/5 w-5/6 rounded-md  bg-neutral-50 shadow-xl transition-all dark:bg-slate-800 md:h-3/5 md:w-3/5 lg:w-2/5 xl:w-1/4;
}
</style>
