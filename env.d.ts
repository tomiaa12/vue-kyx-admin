/// <reference types="vite/client" />

// import MyIcon from './my-icon.svg?component' 以组件引入时，ts 类型定义
/// <reference types="vite-svg-loader" />

declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

