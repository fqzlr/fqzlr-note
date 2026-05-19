---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
outline: [2, 3, 4]
---

<style src="/.vitepress/theme/style/nav.css"></style>

<script setup>
// 这里我直接注释掉不存在的引入，打包就不会报错了
// import { NAV_DATA } from '/.vitepress/theme/utils/data'

// 如果你需要导航数据，用下面这个空数据临时顶着（不报错）
const NAV_DATA = []
</script>

# 我的导航

::: info 教程
如果你也想搭建此导航 [点我查看教程](./index.md#茂茂导航)
:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>