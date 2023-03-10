import type { RouteRecordRaw } from "vue-router"

/**
 * path 修改为 / 开头的全路径,
 * 将路由 path 不是 / 开头的拼接父级的 path 路径
 */
export const resolveFullPath = <T extends RouteRecordRaw[]>(routers: T): T => {
  const deep = (arr: T, parentPath = "") =>
    arr.forEach(i => {
      if (i.path[0] !== "/") i.path = `${parentPath}/${i.path}`

      i.children?.length && deep(i.children as T, i.path)
    })

  deep(routers)

  return routers
}

/**
 * 将二级以上路由拍平为一级
 */
export const formatTwoStageRoutes = <T extends RouteRecordRaw[]>(
  routers: T
): T => {
  const temp = [] as unknown as T

  const deep = (arr: T) =>
    arr.forEach(i => {
      temp.push(i)
      i.children?.length && deep(i.children as T)
    })

  deep(routers)

  return temp
}
