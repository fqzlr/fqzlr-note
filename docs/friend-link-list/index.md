---
aside: false
hidden: true
readingTime: false
date: false
author: false
sidebar: false
---

# 友情链接

<script setup>
  // 业界大佬
  const authoritys = [
    {
      avatar: "https://sugarat.top/logo.png",
      name: "粥里有勺糖",
      desc: "指尖亦可改变世界",
      link: "https://sugarat.top/",
    },
  ];
  // 互联好友
  const friends = [
    {
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640",
      name: "番茄主理人",
      desc: "坐而言不如起而行.",
      link: "https://fqzlr.com/",
    },
    {
      avatar: "https://free.picui.cn/free/2026/03/23/69c12fe83f7a4.jpg",
      name: "椰汁の主页",
      desc: "关关难过关关过,前路漫漫亦灿灿.",
      link: "https://home.132614.xyz/",
    },
    {
      avatar: "https://upxuu.com/images/20260214145619.jpg",
      name: "UpXuu",
      desc: "逐光而上！",
      link: "https://upxuu.com",
    },
    {
      avatar: "https://img.cdn1.vip/i/69f03a1c79908_1777351196.webp",
      name: "Re.Y.Ju.hao | 个人主页",
      desc: "先活着吧，其他的再想想",
      link: "http://irehao.42web.io/",
    },
    {
      avatar: "https://halo.aizaibao.cn/upload/%E5%A4%B4%E5%83%8F.jpg",
      name: "大熊",
      desc: "日常随笔与灵感收集小角落",
      link: "https://halo.aizaibao.cn/",
    },
    {
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=1323860289&s=640",
      name: "年华",
      desc: "分享生活和记术。",
      link: "https://blog.520781.xyz/",
    },
    {
      avatar: "https://github.com/lm-xiao-fen/lm-xiao-fen.github.io/blob/main/image/MEITU_20260128_220225596.jpg?raw=true",
      name: "xf_blog",
      desc: "立志玩转各类免费建站服务",
      link: "https://lm-xiao-fen.github.io/",
    },
    {
      avatar: "https://re.tsh520.cn/zl/tx.webp",
      name: "团子和蛋糕",
      desc: "如果你喜欢那么欢迎来到我的世界！",
      link: "https://blog.tsh520.cn/",
    },
    {
      avatar: "https://tu.ztyukino.com/file/1778322126543_微信图片_2026-05-09_182135_917.jpg",
      name: "yukino",
      desc: "一个现充的个人博客网站！",
      link: "https://blog.ztyukino.com/",
    },
    {
      avatar: "https://pan.lingview.xyz/d/%E9%9B%A8%E4%BA%91%E8%8A%82%E7%82%B9/%E5%9B%BE%E5%BA%93/%E5%A4%A9%E4%BE%9D/Image_1721230292906.png?sign=JU30z6z_RsZ3Vv7HB_5D3msYRneiga5NLjhN3EpL-3w=:0",
      name: "king-blog",
      desc: "这是一个很随便的网站",
      link: "https://www.888721.xyz",
    },
    {
      avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
      name: "Mizuki Docs",
      desc: "Mizuki 主题使用文档",
      link: "https://docs.mizuki.mysqil.com",
    },
    {
      avatar: "https://dongyue.org/avatar.webp",
      name: "冬月",
      desc: "分享学习心得与生活琐事",
      link: "https://dongyue.org/",
    },
    {
      avatar: "https://z.wiki/u/bV2PV5yR9",
      name: "ZSSO",
      desc: "一步一印，自成风景。",
      link: "https://www.zsso.net/",
    },
  ];
</script>

<style>
/* VitePress 原生适配 · 卡片带柔和背景 */
.vp-doc .friends-section {
  max-width: 1100px;
  margin: 2rem auto;
}
.vp-doc .friends-card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
}
.vp-doc .friend-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}
.vp-doc .friend-item:hover {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg-alt);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.vp-doc .friend-item img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}
.vp-doc .friend-info {
  flex: 1;
  min-width: 0;
}
.vp-doc .friend-name {
  font-weight: 500;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.vp-doc .friend-desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<div class="friends-section">

## 🌟 业界大佬
<div class="friends-card">
  <a v-for="item in authoritys" :href="item.link" target="_blank" class="friend-item">
    <img :src="item.avatar" />
    <div class="friend-info">
      <div class="friend-name">{{ item.name }}</div>
      <div class="friend-desc">{{ item.desc }}</div>
    </div>
  </a>
</div>
<br>

### 🤝 互联好友
<div class="friends-card">
  <a v-for="item in friends" :href="item.link" target="_blank" class="friend-item">
    <img :src="item.avatar" />
    <div class="friend-info">
      <div class="friend-name">{{ item.name }}</div>
      <div class="friend-desc">{{ item.desc }}</div>
    </div>
  </a>
</div>

</div>

## 🔗 本站友链信息

::: details 📝 友链申请格式（点击展开复制）
站点名称：    番茄主理人  
站点地址：    https://fqzlr.com/  
一句话简介：  坐而言不如起而行.  
头像链接：    https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640
:::

::: details ⚠️ 免责声明 {open}
本博客遵守中华人民共和国相关法律。友情链接中的网站均为第三方站点，本站无法对其内容、域名变更、服务器安全等进行全程监管，访问风险由用户自行承担。若发现链接存在违法或不良内容，请及时联系：`fqzlr@outlook.com`，我会第一时间处理。
:::