import type { ConfigEnv, PluginOption } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import DefineOptions from "unplugin-vue-define-options/vite"
import viteCompression from "vite-plugin-compression"
import svgLoader from "vite-svg-loader"
import visualizer from "rollup-plugin-visualizer"
import { viteMockServe } from "vite-plugin-mock"
import removeConsole from "vite-plugin-remove-console"
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import { resolve } from "path"

export default ({ command }: ConfigEnv): PluginOption[] => [
  vue(),

  // jsx 支持
  vueJsx(),

  /**
   * 组件使用 DefineOptions 定义 setup script options
   * https://vue-macros.sxzz.moe/macros/define-options.html
   * defineOptions({
   *   name: "ComponentName",
   * })
   */
  DefineOptions(),

  /**
   * 打包体积分析插件可视化工具
   * https://github.com/btd/rollup-plugin-visualizer#readme
   * npm run build 后根目录自动生成 stats.html
   * 浏览器打开 stats.html 查看打包后的各个依赖占用的内存大小
   */
  visualizer() as PluginOption,

  /**
   * 将 svg 加载为 vue 组件
   * https://github.com/jpkleemans/vite-svg-loader#readme
   *
   * import iconUrl from './my-icon.svg?url'
   * '/assets/my-icon.2d8efhg.svg'
   *
   * import iconRaw from './my-icon.svg?raw'
   * '<?xml version="1.0"?>...'
   *
   * import IconComponent from './my-icon.svg?component'
   * <IconComponent />
   */
  svgLoader(),

  /**
   * mock 支持
   * https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md
   */
  viteMockServe({
    mockPath: "mock",
    localEnabled: command === "serve",
  }),

  /**
   * gzip 压缩打包
   */
  viteCompression({
    disable: command === "serve", // 开发时不压缩
  }),

  /**
   * 线上环境删除console
   */
  removeConsole(),

  /**
   * 国际化插件
   * https://www.npmjs.com/package/@intlify/unplugin-vue-i18n
   */
  VueI18nPlugin({
    runtimeOnly: true,
    compositionOnly: true,
    include: [resolve("locales/**"), resolve("src/**")],
  }),
]
