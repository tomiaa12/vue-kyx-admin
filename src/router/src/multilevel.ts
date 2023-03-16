import type { RouteRecordRaw } from "vue-router"

export default {
  name: "multilevel",
  path: "/multilevel",
  meta: {
    title: "多级菜单",
  },
  component: () => import("@/views/home/index.vue"),
  children: [
    {
      name: "menu1",
      path: "menu1",
      meta: {
        title: "菜单1-1",
      },
      component: () => import("@/views/home/index.vue"),
    },
    {
      name: "menu2",
      path: "menu2",
      meta: {
        title: "菜单1-2",
      },
      component: () => import("@/views/home/index.vue"),
    },
  ],
} as RouteRecordRaw
