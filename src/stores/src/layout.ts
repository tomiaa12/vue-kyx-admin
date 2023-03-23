import { ref, computed } from "vue"
import { defineStore } from "pinia"
import type { RouteMeta, RouteLocationNormalizedLoaded } from "vue-router"

export interface Tag {
  path: string
  meta: RouteMeta
  params?: { [prop: string]: any }
  query?: { [prop: string]: any }
}

export const useLayoutStore = defineStore("layout", () => {
  // 多标签列表
  const tags = ref<Tag[]>([])
  // 当前选中标签
  const curTag = ref<Tag>()

  /**
   * 添加标签
   * @param {route} 路由
   * @return {boolean} 是否添加成功
   */
  const push = (route: RouteLocationNormalizedLoaded): boolean => {
    const data = {
      path: route.path,
      meta: route.meta,
      query: route.query,
      params: route.params,
    }

    // 不添加到标签
    if (data.meta.hiddenTag) return false
    // 没有标题拒绝添加到标签
    if (!data.meta.title) return false

    // 是否已添加
    const oldTag = tags.value.find(i => i.path === data.path)

    // 是否为动态路由
    const isDynamic = route.matched[route.matched.length - 1].path.includes(":")
    // /\/multilevel\/menu2\/[^/]+$/.test(a)
    console.log(tags.value, route.matched[route.matched.length - 1].path)

    // 已存在的标签只需要更新值
    if (oldTag) {
      Object.assign(oldTag, data)
      setCurTag(oldTag)
      return true
    }

    tags.value.push(data)

    setCurTag(data)

    return true
  }

  /**
   * 设置当前选中 tag 标签
   * @param tag 标签
   */
  const setCurTag = (tag: Tag) => (curTag.value = tag)

  return { tags, curTag, push, setCurTag }
})
