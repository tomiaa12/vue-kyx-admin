import type { RouteRecordRaw } from "vue-router"

export default {
  name: "home",
  path: "/home",
  meta: {
    title: "首页",
  },
  component: () => import("@/views/home/index.vue"),
} as RouteRecordRaw
