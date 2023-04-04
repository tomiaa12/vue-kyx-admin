import type { RouteRecordRaw } from "vue-router"

export default {
  name: "home",
  path: "/home",
  meta: {
    title: "首页",
    // fixedTag: true,
  },
  component: () => import("@/views/home/index.vue"),
} as RouteRecordRaw
