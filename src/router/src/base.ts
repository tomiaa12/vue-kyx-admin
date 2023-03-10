import type { RouteRecordRaw } from "vue-router"

/**
 * 基础路由
 */
export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
] as RouteRecordRaw[]
