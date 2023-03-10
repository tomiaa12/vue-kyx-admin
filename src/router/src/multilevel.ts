import type { RouteRecordRaw } from "vue-router"

export default {
  name: "multilevel",
  path: "/multilevel",
  component: () => import("@/views/home/index.vue"),
  children: [
    {
      name: "menu1",
      path: "menu1",
      component: () => import("@/views/home/index.vue"),
    },
    {
      name: "menu2",
      path: "menu2",
      component: () => import("@/views/home/index.vue"),
    },
  ],
} as RouteRecordRaw
