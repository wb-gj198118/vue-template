### 项目启动
npm i -g pnpm // 全局安装 pnpm
pnpm install // 安装依赖
pnpm dev // 开发
pnpm build // 打包
pnpm preview

### vite 识别 sass 全局变量

- 文档：https://cn.vitejs.dev/guide/features.html#css-pre-processors

1. 安装依赖
   使用`dart-sass`, 安装速度比较快，大概率不会出现安装不成功

```js
pnpm i -D sass
```

2. 使用
   每个页面自己对应的样式都写在自己的 .vue 文件之中 `scoped` 它顾名思义给 css 加了一个域的概念。

```html
<style lang="scss">
  /* global styles */
</style>

<style lang="scss" scoped>
  /* local styles */
</style>
```

### 动态引入图片

- 文档：https://cn.vitejs.dev/guide/assets.html#the-public-directory
- 参考链接：https://juejin.cn/post/7030698018609315871

- 使用`new URL` 和 `import.meta.url`时的问题
  - `import.meta.url` 获取到的是当前页面完整 url 地址
  - `new URL` 中必须填写**相对路径**
  - 打包不支持中文路径，暂时没解决`[vite:asset-import-meta-url] ENOENT: no such file or directory, open '/Users/zhangyong/code/oneself/template/vite-vue3-h5-template/src/assets/images/png/\u5E74\u7EC8\u603B\u7ED3.png'`

```js
// src/components/HelloWorld.vue
new URL('../assets/images/png/year.png', import.meta.url).href
// import.meta.url 获取到的地址：http://192.168.124.4:3000/src/components/HelloWorld.vue?t=1641037446646
// 拼接后的地址：http://192.168.124.4:3000/src/assets/images/png/%E5%B9%B4%E7%BB%88%E6%80%BB%E7%BB%93.png
```

### <span id="tsx">✅ 集成 Tsx </span>

- 文档：https://cn.vitejs.dev/guide/features.html#jsx

1. 安装依赖

```js
pnpm i -D @vitejs/plugin-vue-jsx
```

2. 修改 vite.config.ts 配置

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      include: /\.(jsx|tsx)/
    })
  ],
  server: {
    host: '0.0.0.0'
  }
})
```