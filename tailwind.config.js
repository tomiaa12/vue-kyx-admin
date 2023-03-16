/** @type {import('tailwindcss').Config} */

const addElementCssVar = () => {
  // 添加 Element plus 颜色
  const temp = {}
  ;["primary", "success", "warning", "danger", "error", "info"].forEach(i => {
    temp[i] = {
      DEFAULT: `var(--el-color-${i})`,
      "dark-2": `var(--el-color-${i}-dark-2)`,
      light: {
        3: `var(--el-color-${i}-light-3)`,
        5: `var(--el-color-${i}-light-5)`,
        7: `var(--el-color-${i}-light-7)`,
        8: `var(--el-color-${i}-light-8)`,
        9: `var(--el-color-${i}-light-9)`,
      },
    }
  })
  return temp
}

module.exports = {
  // 手动控制夜间模式，而不是通过 media 查询
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // 屏幕断点与 Element el-row 统一，
      // xs: "< 768px" 使用 max-sm: 开头
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1920px",
    },
    extend: {
      colors: {
        // 添加 Element plus 颜色
        ...addElementCssVar(),
      },
    },
  },
  plugins: [],
}
