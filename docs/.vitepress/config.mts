import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

//主要作用是在文章底部添加打赏模块：
// ✅ 正确导入 SponsorPlugin
import { SponsorPlugin } from 'vitepress-plugin-sponsor'


// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
const base = process.env.GITHUB_ACTIONS === 'true'
  ? '/vitepress-blog-sugar-template/'
  : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base,
  lang: 'zh-cn',
  title: 'fqzlrの笔记本',
  description: '一个小小小小的笔记本',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: 'https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '首页', link: '/' },
        {
    text: 'ai相关',
    items: [
      {
        text: 'ai学习',
        items: [
          { text: '导演笔记', link: '/post/about-ai/ai学习/导演笔记' },
          { text: '剧本学习', link: '/post/about-ai/ai学习/剧本学习' },
          { text: '华强买瓜教程', link: '/post/about-ai/ai学习/华强买瓜教程' },
          { text: '试着制作', link: '/post/about-ai/ai学习/试着制作' },
          { text: 'codex和cc对比', link: '/post/about-ai/ai学习/codex和cc对比' },
        ]
      },
      {
        text: '跳爷',
        items: [
          { text: '跳爷5月16期', link: '/post/about-ai/跳爷/跳爷5月16期' },
        ]
      }，
            // 你之前新增的几个文件夹，我统一放在这里：
      { text: '豹豹喵呜', link: '/post/about-ai/豹豹喵呜' },
      { text: '橡树幻想', link: '/post/about-ai/橡树幻想' },
      { text: 'Useful-Tools', link: '/post/about-ai/Useful-Tools' },
      { text: '鳌拜', link: '/post/about-ai2/鳌拜' },
      { text: '肥侯', link: '/post/about-ai2/肥侯' },
      { text: '金鱼', link: '/post/about-ai2/金鱼' },
      { text: '土豆', link: '/post/about-ai2/土豆' },
      { text: 'worker-fish', link: '/post/about-ai2/worker-fish' }
    ]
  },
{
  text: 'vitepress指南',
  items: [
    {
      text: '介绍',
      items: [
        { text: '前言', link: '/post/about-vitepress/preface' },
      ],
    },
    {
      text: '基础设置',
      items: [
        { text: '快速上手', link: '/post/about-vitepress/getting-started' },
        { text: '配置', link: '/post/about-vitepress/configuration' },
        { text: '页面', link: '/post/about-vitepress/page' },
        { text: 'Frontmatter', link: '/post/about-vitepress/frontmatter' },
      ],
    },
    {
      text: '进阶玩法',
      items: [
        { text: 'Markdown', link: '/post/about-vitepress/markdown' },
        { text: '团队', link: '/post/about-vitepress/team' },
        { text: '多语言', link: '/post/about-vitepress/multi-language' },
        { text: 'DocSearch', link: '/post/about-vitepress/docsearch' },
        { text: '静态部署', link: '/post/about-vitepress/assets' },
        { text: '样式美化', link: '/post/about-vitepress/style' },
        { text: '组件', link: '/post/about-vitepress/components' },
        { text: '布局插槽', link: '/post/about-vitepress/layout' },
        { text: '插件', link: '/post/about-vitepress/plugin' },
        { text: '更新及卸载', link: '/post/about-vitepress/update' },
        { text: '搭建导航', link: '/post/about-vitepress/nav/' },
        { text: '永久链接', link: '/post/about-vitepress/permalink/' },
      ],
    },
  ],
},
      {text: '友链', link: '/friend-link-list/'}, 
      { text: '关于作者', link: 'https://fqzlr.com/about.html' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/fqzlr'
      }
    ],
    
    },
      // ✅ vite 配置放在顶层，不是 themeConfig 内部！
    vite: {
      plugins: [
        SponsorPlugin({
          type: 'simple',
          aliPayQR: '/pay/alipay.png',
          weChatQR: '/pay/wechat.png'
          })
        ]
      }
    
})
