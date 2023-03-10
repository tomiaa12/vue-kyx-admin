import { createI18n } from "vue-i18n"

// 引入 vite 插件 @intlify/unplugin-vue-i18n include 字段批量导入的语言
import messages from "@intlify/unplugin-vue-i18n/messages"

export const i18n = createI18n({
  locale: "zh-CN",
  legacy: false,
  messages,
})
