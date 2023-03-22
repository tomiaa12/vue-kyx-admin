import type { RouteRecordRaw } from "vue-router"

export default {
  name: "multilevel",
  path: "/multilevel",
  meta: {
    title: "多级菜单",
  },
  redirect: "/multilevel/menu1",
  children: [
    {
      name: "menu1",
      path: "menu1",
      meta: {
        title: "菜单1-1",
        keepAlive: true,
      },
      component: () => import("@/views/multilevel/menu1/index.vue"),
    },
    {
      name: "menu2",
      path: "menu2",
      meta: {
        keepAlive: true,
        title: "菜单1-2",
      },
      component: () => import("@/views/multilevel/menu2/index.vue"),
    },
  ],
} as RouteRecordRaw
