<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "vue-i18n"
const { t } = useI18n()
</script>

<template>
  <div id="latex">
    <h1>{{ t("buttons.hsLoginOut") }}</h1>
    <h1>{{ t("hello") }}</h1>
    <button>dasd</button>
    <div>div</div>
    <a href="a">aa</a>
    <p>p</p>
    <a href="a12">a</a>
    <textarea placeholder="textarea" />
    <input
      type="text"
      placeholder="input"
    />
    <ul>
      <li>li</li>
      <li>li</li>
    </ul>
    <summary>summary</summary>
    <input type="search" />
    <input
      type="button"
      value="button"
    />
    <input type="submit" />
    <input type="reset" />
    <hr />
    <hr dashed />
    <hr double />

    <p>
      图片
      <img
        src="https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        alt=""
        srcset=""
      />
      <img
        src="https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        alt=""
        srcset=""
      />
    </p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <div>123</div>
    <div>123</div>
    <div>123</div>
    <div>123</div>
    <div>123</div>
  </div>
</template>

<style lang="scss"></style>

<i18n lang="yaml">
en:
  hello: "Hello World!"
zh-CN:
  hello: "你好"
</i18n>
