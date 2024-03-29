import { ref } from "vue"
import { defineStore } from "pinia"
import type { RouteMeta, RouteLocationNormalizedLoaded } from "vue-router"
import router, { routes } from "@/router"
import { deepEqual, formatTwoStageRoutes } from "@/utils"

// 标签
export interface Tag {
  name: RouteLocationNormalizedLoaded["name"]
  path: string
  meta: RouteMeta

  // tag 的 dom 元素
  el?: HTMLButtonElement

  params?: { [prop: string]: any }
  query?: { [prop: string]: any }
}

export const useLayoutTagStore = defineStore("layoutTag", () => {
  // 多标签列表
  const tags = ref<Tag[]>([])
  // 当前选中标签
  const curTag = ref<Tag>()

  const init = () => {
    /** 添加需要固定在标签的路由 */
    const flotRoutes = formatTwoStageRoutes(routes)
    flotRoutes.forEach(route => {
      route.meta?.fixedTag &&
        push({
          path: route.path,
          meta: route.meta,
          matched: [],
          query: {},
          params: {},
          fullPath: "",
          redirectedFrom: undefined,
          hash: "",
          name: "",
        })
    })
  }

  /**
   * 添加标签
   * @param {route} 路由
   * @return {boolean} 是否添加成功
   */
  const push = (route: RouteLocationNormalizedLoaded): boolean => {
    const data: Tag = {
      name: route.name,
      path: route.path,
      meta: route.meta,
      query: route.query,
      params: route.params,
    }

    // 不添加到标签
    if (data.meta.hiddenTag) return false
    // 没有标题拒绝添加到标签
    if (!data.meta.title) return false

    // 是否为动态路由
    const path = route.matched[route.matched.length - 1]?.path || ""
    const isDynamic = path.includes(":")
    if (isDynamic) {
      // 正则匹配当前动态路由，/xxx/:id 改为 ^/xxx/[^/]+$
      const reg = new RegExp(`^${path.replace(/:[^/]+/g, "[^/]+")}$`)

      // 找出当前动态路由已添加的标签
      const findTags = tags.value.filter(i => reg.test(i.path))

      // 是否 params 相等
      const isParamsEqual = findTags.some(i => deepEqual(i.params, data.params))

      // 是否 query 相等
      const isQueryEqual = findTags.some(i => deepEqual(i.query, data.query))

      // 当前动态路由存在且参数匹配
      if (findTags.length && isParamsEqual && isQueryEqual) {
        // 找到当前动态路由设置高亮
        setCurTag(
          findTags.find(
            i =>
              deepEqual(i.params, data.params) && deepEqual(i.query, data.query)
          )!
        )
        return true
      }

      // 超过最大动态路由数量时，删除第一个
      if (findTags.length > (data.meta.maxTag || 5)) delTag(findTags[0])
    }

    // 是否已添加
    const oldTag = tags.value.find(i => i.path === data.path)

    // 已存在的标签只需要更新值
    if (oldTag) {
      Object.assign(oldTag, data)
      setCurTag(oldTag)
      return true
    }

    const insertIndex = tags.value.findIndex(i => i === curTag.value)

    tags.value.splice(insertIndex + 1, 0, data)

    // 设置当前激活标签
    setCurTag(data)

    return true
  }

  /**
   * 设置当前选中 tag 标签
   * @param tag 标签
   */
  const setCurTag = (tag: Tag) => (curTag.value = tag)

  /**
   * 查询传入 tag 所在下标
   */
  const getIndexByTag = (tag: Tag): number =>
    tags.value.findIndex(i => i === tag)

  /**
   * 删除标签
   * @param tag 标签
   */
  const delTag = (tag: Tag) => {
    // 固定在菜单栏标签不能删除
    if (tag.meta.fixedTag) return

    const index = getIndexByTag(tag)
    if (index === -1) return

    // 删除前设置固定宽度，否则会导致宽度 auto - 0px 无动画过渡
    if (tag.el) tag.el.style.setProperty("width", tag.el.offsetWidth + "px")

    tags.value.splice(index, 1)[0]

    // 删除的是当前标签时，跳转到相邻标签
    if (tag === curTag.value) {
      const nextRoute = tags.value[index - 1] || tags.value[0]

      nextRoute && router.push(nextRoute)
    }
  }

  init()

  return { tags, curTag, push, setCurTag, delTag, getIndexByTag }
})
