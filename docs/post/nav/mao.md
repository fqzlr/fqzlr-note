---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
outline: [2, 3, 4]
---

<script setup>
// 这行是你报错的根源：文件不存在，直接删掉！
// import { NAV_DATA } from '/.vitepress/theme/untils/data'

// 这行是新报错：CSS文件不存在，直接删掉！
// import "/.vitepress/theme/style/nav.css";

// 给一个空数据，让页面不报错
const NAV_DATA = []
</script>

# 我的导航

::: info 教程
如果你也想搭建此导航 [点我查看教程](./index.md#茂茂导航)
:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>