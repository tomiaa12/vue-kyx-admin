import type { RouteRecordRaw } from "vue-router"
import NProgress from "nprogress"
import { createRouter, createWebHistory } from "vue-router"
import { formatTwoStageRoutes, resolveFullPath } from "@/utils"

// 路由元信息配置
declare module "vue-router" {
  interface RouteMeta {
    // 标题
    title: string
    // 在菜单中隐藏
    hiddenMenu?: boolean
    // 图标
    icon?: string
    // 无 layout 全屏页面
    fullScreen?: boolean
    // 页面缓存
    keepAlive?: boolean
    // 是否不添加信息到标签页，（默认`false`）
    hiddenTag?: boolean
  }
}

// 将简写的 path 改为完整 / 开头的路径
export const routes = resolveFullPath(
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
      children: formatTwoStageRoutes(routes),
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
