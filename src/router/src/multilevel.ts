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
        fixedTag: true,
      },
      component: () => import("@/views/multilevel/menu1/index.vue"),
    },
    {
      name: "menu2",
      path: "menu2/:id",
      meta: {
        keepAlive: true,
        title: "动态路由",
        hiddenMenu: true,
      },
      component: () => import("@/views/multilevel/menu2/index.vue"),
    },
    {
      name: "dynamic",
      meta: {
        title: "动态路由",
      },
      path: "dynamic",
      component: () => import("@/views/multilevel/menu2/index.vue"),
    },
  ],
} as RouteRecordRaw
