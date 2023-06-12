import { ElIcon } from "element-plus"
import { defineAsyncComponent, h, isVNode } from "vue"

/**
 * 使用 icon 图标
 * 参数如下:
 * 'el-icon-search' 或 'ElIconSearch'
 * svg 路径
 * 异步加载 import('./search.svg)
 * vue/tsx 组件
 * 函数
 * @returns 返回组件图标或本身
 */
export const useIcon = (icon: any): any => {
  if (!icon) return

  if (typeof icon === "string") {
    // element 图标
    if (/^el[-]?icon/i.test(icon)) return icon

    // svg 路径
    if (/\.svg$/i.test(icon)) return h(ElIcon, h("img", { src: icon }))
  } else if (typeof icon === "object" && icon) {
    // 本身是组件直接返回
    if (icon.render || icon.setup || isVNode(icon)) return icon
    // Promise 对象，等待成功后递归调用
    if (typeof icon.then === "function" && typeof icon.catch === "function")
      return h(defineAsyncComponent(async () => useIcon(await icon)))

    // 有 default 时为 import 导入的对象，继续递归
    if (icon.default) return useIcon(icon.default)
  } else if (typeof icon === "function") {
    // 函数
    return icon
  }
}
