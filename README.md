# DEV PAGES · 插件测试靶场

## 项目概述

**一句话定位**：用于测试浏览器插件（扩展）效果的静态网页场景集合。

**详细介绍**：纯原生 HTML + CSS + JS，零依赖、无构建步骤。默认打开即是**新闻门户**（`index.html`），所有页面顶部有一条固定的全站导航条（`assets/site-nav.js` 注入），可在八个场景之间随时切换。每个场景采用不同的版式、字体与配色，逼近真实网站结构，用于验证扩展在吸顶导航、无限滚动、视频弹幕、弹窗浮层、表单输入、深浅主题等不同环境下的表现。

- 标签：`插件测试` `浏览器扩展` `静态页面`
- 目标人群：浏览器插件开发者（作者本人）
- 技术栈：`原生 HTML` `原生 CSS` `原生 JavaScript` `localStorage`
- 价格：免费

## 场景目录

| 页面 | 说明 | 覆盖测试点 |
|------|------|-----------|
| `index.html` | 新闻门户（默认页） | 吸顶导航、跑马灯、广告位、夜间模式 |
| `pages/video.html` | 视频流（可播放 + 弹幕引擎） | video 元素、多源降级、本地视频、弹幕浮层 |
| `pages/gallery.html` | Pinterest 式图片瀑布流 | 无限滚动、灯箱弹窗、懒加载、悬停浮层 |
| `pages/admin.html` | 管理后台 | 固定侧栏、可排序表格、模态框、Toast、深浅主题 |
| `pages/article.html` | 常规网页（长文章） | 阅读进度条、ScrollSpy、代码复制、评论区 |
| `pages/social.html` | 社交动态信息流 | 动态 DOM 插入、点赞动画、无限滚动、计数器 |
| `pages/shop.html` | 电商商城 | 倒计时、购物车抽屉、筛选排序、价格文本 |
| `pages/search.html` | 搜索结果页 | URL 参数、关键词高亮、联想下拉、分页 |

## 使用方式

```bash
# 方式一：直接用浏览器打开
open index.html

# 方式二：起一个本地服务（推荐，避免个别 file:// 限制）
python3 -m http.server 8080
# 然后访问 http://localhost:8080
```

1. 在 `chrome://extensions` 开启开发者模式，加载你的插件；
2. 打开任意场景，通过**顶部固定导航条**在场景间切换；
3. 在真实页面结构中验证注入、浮层、快捷键与主题适配。

## 说明

- 顶部导航条为**静态内嵌**：markup 写在每个页面 `<body>` 首行（当前场景高亮），样式集中在 `assets/site-nav.css`，随首帧一起渲染，切换场景无闪动；`assets/site-nav.js` 仅负责导航条上的实时时钟；
- 场景中的示例图片来自 picsum.photos；视频页配置了多个国内可访问的 CDN 源（W3C / Video.js / W3Schools / MDN）自动降级，全部失败时可拖入本地视频文件，断网时图片自动降级为本地 SVG 占位图。

## 新增场景

在 `pages/` 下新建独立 HTML 文件，引入 `<script src="../assets/site-nav.js"></script>`，并在该脚本的 `ITEMS` 列表中追加一项即可。
