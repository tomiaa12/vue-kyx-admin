import type { App } from "vue"
// 导入 src 下所有文件
const directives = Object.values(
  import.meta.glob("./src/*.ts", {
    eager: true,
  })
)

// 注册所有指令
export default (app: App) => {
  directives.forEach((i: any) => {
    for (const name in i) {
      app.directive(name, i[name])
    }
  })
}
