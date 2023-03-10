import type { RouteRecordRaw } from "vue-router"
import NProgress from "nprogress"
import { createRouter, createWebHistory } from "vue-router"
import { formatTwoStageRoutes, resolveFullPath } from "@/utils"

// 路由元信息配置
declare module "vue-router" {
  interface RouteMeta {
    // 标题
    title: string
    // 是否不在菜单菜单中显示
    hiddenMenu?: boolean
  }
}

// 将简写的 path 改为完整 / 开头的路径
export const routers = resolveFullPath(
  // 批量导入 src 下的路由
  Object.values(
    import.meta.glob<RouteRecordRaw[]>("./src/*.ts", {
      import: "default",
      eager: true,
    })
  ).flat()
)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
      // 全局路由以 layout 包裹
      component: () => import("@/layout/index.vue"),
      // 全部路由拍平为一级
      children: formatTwoStageRoutes(routers),
    },
  ],
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
