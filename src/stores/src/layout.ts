import { ref, computed } from "vue"
import { defineStore } from "pinia"
import type { RouteMeta, RouteLocationNormalizedLoaded } from "vue-router"
import router, { routes } from "@/router"
import { deepEqual } from "@/utils"

// 标签
export interface Tag {
  path: string
  meta: RouteMeta
  el?: HTMLButtonElement
  params?: { [prop: string]: any }
  query?: { [prop: string]: any }
}

export const useLayoutStore = defineStore("layout", () => {
  // 多标签列表
  const tags = ref<Tag[]>([])
  // 当前选中标签
  const curTag = ref<Tag>()

  const init = () => {
    // console.log(routes)
  }
  init()

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

    // 是否为动态路由
    const path = route.matched[route.matched.length - 1].path
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

    tags.value.push(data)

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
   * 删除标签
   * @param tag 标签
   */
  const delTag = (tag: Tag) => {
    const index = tags.value.findIndex(i => i === tag)
    if (index === -1) return

    tags.value.splice(index, 1)[0]

    // 删除的是当前标签时，跳转到相邻标签
    if (tag === curTag.value) {
      const nextRoute = tags.value[index - 1] || tags.value[0]

      nextRoute && router.push(nextRoute)
    }
  }

  return { tags, curTag, push, setCurTag, delTag }
})
