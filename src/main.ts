import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

// 样式入口
import "@/styles/index.scss"

import { i18n } from "./i18n"

// Element Plus
import ElementPlus from "element-plus"
// Element 图标
import ElementPlusIcons from "@element-plus/icons-vue/global"

// 全局指令
import directives from "./directives"

import KComponents from "@tomiaa/vue3-components"

const app = createApp(App)
app
  .use(createPinia())
  .use(router)
  .use(i18n)
  .use(ElementPlus)
  .use(ElementPlusIcons)
  .use(KComponents)
  .use(directives)

app.mount("#app")
