import { fileURLToPath, URL } from "node:url"

import { defineConfig, loadEnv } from "vite"

import getPlugins from "./build/plugins"

// https://vitejs.dev/config/
export default defineConfig(configEnv => {
  const { mode, command } = configEnv

  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: getPlugins(configEnv),
    base: command === "serve" ? "/" : "/", // 编译的 public 路径前缀
    resolve: {
      alias: {
        // 别名
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        // "vue-i18n": "vue-i18n/index", // 解决引入 i18n 控制台报摇树的警告
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/styles/src/minxin.scss";', // 全局混入，不需要引入就能使用
        },
      },
    },
    optimizeDeps: {
      /**
       * 依赖预构建，`vite` 启动时会将下面 include 里的模块，编译成 esm 格式并缓存到 node_modules/.vite 文件夹，页面加载到对应模块时如果浏览器有缓存就读取浏览器缓存，如果没有会读取本地缓存并按需加载
       * 尤其当您禁用浏览器缓存时（这种情况只应该发生在调试阶段）必须将对应模块加入到 include里，否则会遇到开发环境切换页面卡顿的问题（vite 会认为它是一个新的依赖包会重新加载并强制刷新页面），因为它既无法使用浏览器缓存，又没有在本地 node_modules/.vite 里缓存
       * 温馨提示：如果您使用的第三方库是全局引入，也就是引入到 src/main.ts 文件里，就不需要再添加到 include 里了，因为 vite 会自动将它们缓存到 node_modules/.vite
       */
      include: [
        "dayjs",
        "axios",
        "pinia",
        "echarts",
        "vue-i18n",
        "@wangeditor/editor-for-vue",
        "@element-plus/icons-vue",
        "typeit",
      ],
    },
    server: {
      host: "0.0.0.0", // 配合 package.json scripts中 --host 0.0.0.0 来允许通过ip地址来访问服务
      proxy: {
        // 开启代理
        "/admin/api": {
          target: "https://www.iecas.cn",
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
      // fs: {
      //   allow: [".."],
      // },
    },
    build: {
      outDir: "dist", // 编译后的文件名
      assetsDir: "assets", // 编译后静态文件的文件夹名称
      sourcemap: false, // 构建后是否生成 source map 文件
      chunkSizeWarningLimit: 4000, // 消除打包大小超过500kb警告
      rollupOptions: {
        output: {
          // 静态资源分类打包
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",

          //  压缩切片
          manualChunks(id: any) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString()
            }
          },
          //  创建切分文件夹
          chunkFileNames: (chunkInfo: any) => {
            const facadeModuleId = chunkInfo.facadeModuleId
              ? chunkInfo.facadeModuleId.split("/")
              : []
            const fileName =
              facadeModuleId[facadeModuleId.length - 2] || "[name]"
            return `js/${fileName}/[name].[hash].js`
          },
        },
      },
    },
  }
})
