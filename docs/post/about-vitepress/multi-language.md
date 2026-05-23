# 多语言

> [!IMPORTANT]
>
> 我们假设多语言中，只包含`中文`和`英文`；如果需要扩展其他的语言，原理是类似的。



## 概述

之前，只是在[基础配置 --> 站点配置 --> 多语言](./page.md#多语言)中，提及了多语言；但是，不够具体和详细。下文将给出详细的解决方案，如何实现多语言。



## 项目目录

```txt
├─📁 docs----------------- # 文档目录
│ ├─📁 .vitepress--------- # Vitepress 配置
│ │ ├─📁 config
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 share.ts
│ │ │ └─📄 zh.ts
│ │ ├─📁 navbar
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 index.ts
│ │ │ └─📄 zh.ts
│ │ ├─📁 sidebar
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 index.ts
│ │ │ └─📄 zh.ts
│ │ └─📄 config.mts
│ ├─📁 en----------------- # 英文文档
│ │ ├─📁 guide
│ │ │ └─📄 index.md
│ │ ├─📁 quick-started
│ │ │ └─📄 index.md
│ │ ├─📁 reference
│ │ │ └─📄 index.md
│ │ └─📄 index.md
│ ├─📁 public
│ │ └─📄 logo.svg
│ └─📁 zh----------------- # 中文文档
│   ├─📁 guide
│   │ └─📄 index.md
│   ├─📁 quick-started
│   │ └─📄 index.md
│   ├─📁 reference
│   │ └─📄 index.md
│   └─📄 index.md
├─📄 .env.development----- # 开发环境
├─📄 .env.production------ # 生产环境
├─📄 .gitignore
└─📄 package.json--------- # 依赖
```



## 环境配置

有的时候，服务器上是需要二级或三级路径，如：`https://vitepress.yiov.top/vite/xxx`。

但是，我们在本地开发的时候，却不希望二级或三级路径，这个时候就需要分为开发环境和生产环境了。



步骤如下：

* ① `package.json` 中配置开发环境和生产环境。

> [!NOTE]
>
> ::: details 点我查看
>
> ```json [package.json] {8-9}
> {
>   "name": "abc",
>   "version": "1.5.0",
>   "description": "",
>   "main": "index.js",
>   "type": "module",
>   "scripts": {
>     "docs:dev": "vitepress dev docs --mode development", 
>     "docs:build": "vitepress build docs --mode production", 
>     "docs:preview": "vitepress preview docs"
>   },
>   "devDependencies": {
>     "@types/dom-view-transitions": "^1.0.5",
>     "@types/node": "^22.10.1",
>     "canvas-confetti": "^1.9.3",
>     "markdown-it-mathjax3": "^4.3.2",
>     "vitepress": "^1.5.0"
>   },
>   "dependencies": {
>     "@fontsource/roboto": "^5.1.0",
>     "@theojs/lumen": "^5.0.0",
>     "busuanzi.pure.js": "^1.0.3",
>     "dayjs": "1.11.13",
>     "dotenv": "^16.4.5",
>     "font-pingfang-sc-font-weight-improved": "^1.0.7",
>     "medium-zoom": "^1.1.0",
>     "vitepress-markdown-timeline": "^1.2.1",
>     "vitepress-plugin-comment-with-giscus": "^1.1.15",
>     "vue-router": "^4.5.0"
>   }
> }
> ```
>
> :::



* ② 新建 `.env.development` 文件，作为`开发环境`的配置。

> [!NOTE]
>
> ::: details 点我查看
>
> ```ini
> VITE_BASE_URL='/'
> ```
>
> :::

* ③ 新建 `.env.production`文件，作为`生产环境`的配置。

> [!NOTE]
>
> ::: details 点我查看
>
> ```ini
> VITE_BASE_URL='/vite/' # 如果是二级路径，就这样配置；否则，直接配置 /
> ```
>
> :::

## 多语言文档目录的配置

多语言文档目录的位置，如下所示：

```txt {16,26}
├─📁 docs----------------- # 文档目录
│ ├─📁 .vitepress--------- # Vitepress 配置
│ │ ├─📁 config
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 share.ts
│ │ │ └─📄 zh.ts
│ │ ├─📁 navbar
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 index.ts
│ │ │ └─📄 zh.ts
│ │ ├─📁 sidebar
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 index.ts
│ │ │ └─📄 zh.ts
│ │ └─📄 config.mts
│ ├─📁 en----------------- # 英文文档
│ │ ├─📁 guide
│ │ │ └─📄 index.md
│ │ ├─📁 quick-started
│ │ │ └─📄 index.md
│ │ ├─📁 reference
│ │ │ └─📄 index.md
│ │ └─📄 index.md
│ ├─📁 public
│ │ └─📄 logo.svg
│ └─📁 zh----------------- # 中文文档
│   ├─📁 guide
│   │ └─📄 index.md
│   ├─📁 quick-started
│   │ └─📄 index.md
│   ├─📁 reference
│   │ └─📄 index.md
│   └─📄 index.md
├─📄 .env.development----- # 开发环境
├─📄 .env.production------ # 生产环境
├─📄 .gitignore
└─📄 package.json--------- # 依赖
```

对于`中文`文档，其在 `docs/zh` 目录中，内容如下：

::: code-group 

```md [zh/index.md]
---
layout: home
home: true

lang: zh-CN
title: xxx
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
  name: "xxx"
  text: ""
  tagline: "xxx"
  actions:
    - theme: brand
      text: 入门指南
      link: /guide/
    - theme: alt
      text: 快速开始
      link: /quick-started/

features:
  - icon: 📍 
    title: xxx
    details: xxx，xxx，xx
  - icon: 🌍
    title: xxx
    details: xxx，xxx，xx
  - icon: 🤖
    title: xxx
    details: xxx，xxx，xx
---
```

```md [zh/guide/index.md]
# guide
### 入门指南1
### 入门指南2
```

```md [zh/quick-started/index.md]
# quick-started
### 快速开始1
### 快速开始2
```

:::

对于`英文`文档，其在 `docs/en` 目录中，内容如下：

 ::: code-group 

```md [en/index.md]
---
layout: home
home: true

lang: en
title: xxx
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
  name: "xxx"
  text: ""
  tagline: "xxx"
  actions:
    - theme: brand
      text: guide
      link: /guide/
    - theme: alt
      text: quick-started
      link: /quick-started/

features:
  - icon: 📍 
    title: xxx
    details: xxx，xxx，xx
  - icon: 🌍
    title: xxx
    details: xxx，xxx，xx
  - icon: 🤖
    title: xxx
    details: xxx，xxx，xx
---
```

```md [en/guide/index.md]
# guide
### guide1
### guide2
```

```md [en/quick-started/index.md]
# quick-started
### quick-started1
### quick-started2
```

:::

## 多语言侧边栏的配置

多语言`侧边栏`的位置，如下所示：

```txt {11-14}
├─📁 docs----------------- # 文档目录
│ ├─📁 .vitepress--------- # Vitepress 配置
│ │ ├─📁 config
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 share.ts
│ │ │ └─📄 zh.ts
│ │ ├─📁 navbar
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 index.ts
│ │ │ └─📄 zh.ts
│ │ ├─📁 sidebar
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 index.ts
│ │ │ └─📄 zh.ts
│ │ └─📄 config.mts
│ ├─📁 en----------------- # 英文文档
│ │ ├─📁 guide
│ │ │ └─📄 index.md
│ │ ├─📁 quick-started
│ │ │ └─📄 index.md
│ │ ├─📁 reference
│ │ │ └─📄 index.md
│ │ └─📄 index.md
│ ├─📁 public
│ │ └─📄 logo.svg
│ └─📁 zh----------------- # 中文文档
│   ├─📁 guide
│   │ └─📄 index.md
│   ├─📁 quick-started
│   │ └─📄 index.md
│   ├─📁 reference
│   │ └─📄 index.md
│   └─📄 index.md
├─📄 .env.development----- # 开发环境
├─📄 .env.production------ # 生产环境
├─📄 .gitignore
└─📄 package.json--------- # 依赖
```

对于`中文`侧边栏，其在 `docs/.vitepress/sidebar/zh.ts` 文件中，内容如下：

```ts [docs/.vitepress/sidebar/zh.ts]
import { DefaultTheme } from 'vitepress'
export const zhSidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: '使用指南',
      collapsed: false,
      items: [
        { text: '简介', link: `/guide/` },
        { text: '快速开始', link: `/quick-started/` },
        { text: '参考', link: `/reference/` },
      ]
    },
    {
      text: 'API',
      collapsed: false,
      items: [
        { text: '简介', link: `/abc/` },
        { text: '快速开始', link: `/bca/` },
      ]
    },
  ]
}

```

对于`英文`侧边栏，其在 `docs/.vitepress/sidebar/en.ts` 文件中，内容如下：

```ts [docs/.vitepress/sidebar/en.ts]
import { DefaultTheme } from 'vitepress'
export const enSidebar: DefaultTheme.Sidebar = {
  '/en/': [
    {
      text: 'Guide',
      collapsed: false,
      items: [
        { text: 'guide', link: `/en/guide/` },
        { text: 'quick started', link: `/en/quick-started/` },
        { text: 'reference', link: `/en/reference/` },
      ]
    },
    {
      text: 'API',
      collapsed: false,
      items: [
        { text: 'guide', link: `/en/abc/` },
        { text: 'quick started', link: `/en/bca/` },
      ]
    },
  ]
}
```

对于`聚合`侧边栏（侧边栏的主配置），其在 `docs/.vitepress/sidebar/index.ts` 文件中，内容如下：

```ts [docs/.vitepress/sidebar/index.ts]
import { enSidebar } from './en'
import { zhSidebar } from './zh'

export {
  zhSidebar,
  enSidebar
}
```

## 多语言导航栏的配置

多语言`导航栏`的位置，如下所示：

```txt {7-10}
├─📁 docs----------------- # 文档目录
│ ├─📁 .vitepress--------- # Vitepress 配置
│ │ ├─📁 config
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 share.ts
│ │ │ └─📄 zh.ts
│ │ ├─📁 navbar
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 index.ts
│ │ │ └─📄 zh.ts
│ │ ├─📁 sidebar
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 index.ts
│ │ │ └─📄 zh.ts
│ │ └─📄 config.mts
│ ├─📁 en----------------- # 英文文档
│ │ ├─📁 guide
│ │ │ └─📄 index.md
│ │ ├─📁 quick-started
│ │ │ └─📄 index.md
│ │ ├─📁 reference
│ │ │ └─📄 index.md
│ │ └─📄 index.md
│ ├─📁 public
│ │ └─📄 logo.svg
│ └─📁 zh----------------- # 中文文档
│   ├─📁 guide
│   │ └─📄 index.md
│   ├─📁 quick-started
│   │ └─📄 index.md
│   ├─📁 reference
│   │ └─📄 index.md
│   └─📄 index.md
├─📄 .env.development----- # 开发环境
├─📄 .env.production------ # 生产环境
├─📄 .gitignore
└─📄 package.json--------- # 依赖
```

对于`中文`导航栏，其在 `docs/.vitepress/navbar/zh.ts` 文件中，内容如下：

```ts [docs/.vitepress/navbar/zh.ts]
import { DefaultTheme } from 'vitepress'

// 中文导航
export const zhNav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '快速开始', link: '/quick-started/', activeMatch: '/quick-started/' },
  { text: '参考', link: '/reference/', activeMatch: '/reference/' },
]
```

对于`英文`导航栏，其在 `docs/.vitepress/navbar/en.ts` 文件中，内容如下：

```ts [docs/.vitepress/navbar/en.ts]
import { DefaultTheme } from 'vitepress'

// 英文导航
export const enNav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/en/', activeMatch: '/en/' },
  { text: 'Quick Start', link: '/en/quick-started/', activeMatch: '/en/quick-started/' },
  { text: 'reference', link: '/en/reference/', activeMatch: '/en/reference/' },
]
```

对于`聚合`导航栏（导航栏的主配置），其在 `docs/.vitepress/navbar/index.ts` 文件中，内容如下：

```ts [docs/.vitepress/navbar/index.ts]
import { enNav } from './en'
import { zhNav } from './zh'

export {
  zhNav,
  enNav
}
```

## vitepress 主配置

vitepress 主配置的位置，如下所示：

```txt {3-6,15}
├─📁 docs----------------- # 文档目录
│ ├─📁 .vitepress--------- # Vitepress 配置
│ │ ├─📁 config
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 share.ts
│ │ │ └─📄 zh.ts
│ │ ├─📁 navbar
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 index.ts
│ │ │ └─📄 zh.ts
│ │ ├─📁 sidebar
│ │ │ ├─📄 en.ts
│ │ │ ├─📄 index.ts
│ │ │ └─📄 zh.ts
│ │ └─📄 config.mts
│ ├─📁 en----------------- # 英文文档
│ │ ├─📁 guide
│ │ │ └─📄 index.md
│ │ ├─📁 quick-started
│ │ │ └─📄 index.md
│ │ ├─📁 reference
│ │ │ └─📄 index.md
│ │ └─📄 index.md
│ ├─📁 public
│ │ └─📄 logo.svg
│ └─📁 zh----------------- # 中文文档
│   ├─📁 guide
│   │ └─📄 index.md
│   ├─📁 quick-started
│   │ └─📄 index.md
│   ├─📁 reference
│   │ └─📄 index.md
│   └─📄 index.md
├─📄 .env.development----- # 开发环境
├─📄 .env.production------ # 生产环境
├─📄 .gitignore
└─📄 package.json--------- # 依赖
```

对于`中文`的 `themeConfig` 配置，其在 `docs/.vitepress/config/zh.ts` 文件中，内容如下：

```ts [docs/.vitepress/config/zh.ts]
import { zhNav } from '../navbar'
import { zhSidebar } from '../sidebar'
import dayjs from 'dayjs'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: { // 主题设置
    lastUpdatedText: '上次更新', // 上次更新显示文本
    returnToTopLabel: '返回顶部', // 更改手机端菜单文字显示
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索',
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重制搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: 'enter',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上方向键',
                  navigateDownKeyAriaLabel: '下方向键',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },
    nav: zhNav,
    sidebar: zhSidebar, // 侧边栏
    docFooter: { // 自定义上下页名
      prev: '上一篇', next: '下一篇'
    },
    darkModeSwitchLabel: '深浅模式', // 手机端深浅模式文字修改
    footer: { // 页脚
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${dayjs().format("YYYY")} xxx有限公司`
    },
    outline: { // 大纲显示 1-6 级标题
      level: [1, 6],
      label: '目录'
    },
    //大纲顶部标题
    outlineTitle: '当前页大纲',
  }
}
```

对于`英文`的 `themeConfig` 配置，其在 `docs/.vitepress/config/en.ts` 文件中，内容如下：

```ts [docs/.vitepress/config/en.ts]
import { enNav } from '../navbar'
import { enSidebar } from '../sidebar'
import dayjs from 'dayjs'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: { // 主题设置
    nav: enNav,
    sidebar: enSidebar, // 侧边栏
    footer: { // 页脚
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${dayjs().format("YYYY")} xxx Information Technology Co., Ltd.`
    },
    outline: { // 大纲显示 1-6 级标题
      level: [1, 6],
    }
  }
}
```

对于总的 `defineConfig` 配置，其在 `docs/.vitepress/config/share.ts`文件中，内容如下：

> [!NOTE]
>
> ::: details 点我查看
>
> ```ts 
>   rewrites: { 
>     // 是以中文为主，当 vitepress 编译并启动好，自动跳转到简体中文，
>     // 并就所有路由中含义 zh 的删除带哦  
>     'zh/:rest*': ':rest*' 
>   },
> ```
>
> :::

```ts [docs/.vitepress/config/share.ts] {12-15}
import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"

import { loadEnv } from 'vite'
const mode = process.env.NODE_ENV || 'development'
const { VITE_BASE_URL } = loadEnv(mode, process.cwd())

console.log('Mode:', process.env.NODE_ENV)
console.log('VITE_BASE_URL:', VITE_BASE_URL)

export const sharedConfig = defineConfig({
  rewrites: { // 很重要，
    'zh/:rest*': ':rest*'
  },
  metaChunk: true,
  lang: 'zh-CN', // 语言
  title: "xxx", // 站点名称
  titleTemplate: "Hi，终于等到你", // 网页标题
  description: "xxx、xxx", // 站点描述
  head: [ // favicon.ico 图标等
    ['link', { rel: "shortcut icon", href: `${VITE_BASE_URL}logo.svg` }],
    // 网站 favicon.ico 图标
    ['link', { rel: "icon", href: `${VITE_BASE_URL}logo.svg`, type: "image/svg+xml" }],
    // 引入 Google Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }],
    // 网页视口
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no" }],
    // 关键词和描述
    ['meta', { name: "keywords", content: "xxx,xxx" }],
  ],
  appearance: true, // 主题模式，默认浅色且开启切换
  base: VITE_BASE_URL,
  lastUpdated: true, // 上次更新
  vite: {
    build: {
      chunkSizeWarningLimit: 1600
    },
    plugins: [],
    server: {
      port: 18089
    }
  },
  markdown: { // markdown 配置
    math: true,
    lineNumbers: true, // 行号显示
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    config: (md) => {
      md.use(timeline)
    }
  },
  themeConfig: { // 主题设置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search',
              },
              modal: {
                displayDetails: 'Display detailed list',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results for',
                footer: {
                  selectText: 'to select',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'to navigate',
                  navigateUpKeyAriaLabel: 'up arrow',
                  navigateDownKeyAriaLabel: 'down arrow',
                  closeText: 'to close',
                  closeKeyAriaLabel: 'escape',
                },
              },
            },
          },

        },
      },
    },
    logo: '/logo.svg',  // 左上角logo
  }
})

```

vitepress 的总配置文件，其在 `docs/.vitepress/config.mts` 文件中，内容如下：

```ts [docs/.vitepress/config.mts]
import { defineConfig } from 'vitepress'
import { sharedConfig } from './config/share'
import { zhConfig } from './config/zh'
import { enConfig } from './config/en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,
  locales: { // 多语言
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      ...zhConfig
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      ...enConfig
    }
  },
})
```

