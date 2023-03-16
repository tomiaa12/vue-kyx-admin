import type { RouteRecordRaw } from "vue-router"

/**
 * 基础路由
 */
export default [
  {
    path: "/",
    meta: {
      hiddenMenu: true,
    },
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
      hiddenMenu: true,
      fullScreen: true,
    },
    component: () => import("@/views/login/index.vue"),
  },
] as RouteRecordRaw[]
