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
// 修复：拼写错误 + 改用相对路径（最稳）
import { NAV_DATA } from '../../.vitepress/theme/utils/data'
</script>

# 我的导航

::: info 教程
如果你也想搭建此导航 [点我查看教程](./index.md#茂茂导航)
:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>