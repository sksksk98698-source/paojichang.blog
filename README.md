<div align="center">

# ⚡ 跑机场 (PAOJICHANG.BLOG)

**2026 全球优质机场独立评测大厅 • IEPL 专线实测 • 全网测速图库 • GEO/SEO 内容矩阵**

[![Astro](https://img.shields.io/badge/Astro-v7.2.8-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![SEO Optimized](https://img.shields.io/badge/SEO-100%25_Optimized-059669?style=for-the-badge&logo=google&logoColor=white)](https://paojichang.blog)
[![License](https://img.shields.io/badge/License-MIT-6366F1?style=for-the-badge)](./LICENSE)

[🌐 访问官网](https://paojichang.blog) • [📊 测速实测大厅](https://paojichang.blog/speedtest) • [🏢 42家品牌库](https://paojichang.blog/airports) • [❓ 百科FAQ](https://paojichang.blog/faq) • [🚨 跑路预警](https://paojichang.blog/alert)

</div>

---

## 📖 项目简介 (Overview)

**跑机场 (paojichang.blog)** 是一个基于 **Astro 7** 和 **Tailwind CSS 4** 构建的高性能、现代毛玻璃（Liquid Glass）视觉的科学上网与跨境网络独立实测平台。

面对业内充斥的虚假宣传、延迟造假、超售拥堵与跑路卷款痛点，跑机场秉承“**用真实数据说话，拒绝虚标跑路**”的原则，收录全网 42 家主流机场的物理线路、起步资费、协议架构、真实节点测速大图与流媒体/ChatGPT 原生解锁矩阵，为全球华人用户提供最专业、最透明的网络选购决策大厅。

---

## ✨ 核心功能与专区矩阵 (Core Features)

### 🏢 1. 全网 42 家机场品牌大厅 (`/airports`)
* 全量收录 42 家品牌档案，支持按 **IEPL 专线、BGP 中转、性价比平价、大流量、按量付费** 实时筛选与模糊检索；
* 每家服务商均拥有独立的具名实体评测页（`/airports/[slug]`），附带套餐价格明细、独家优惠码一键复制及多维度优缺点分析；
* 重点推介第一梯队标杆：**光速云**（IEPL+内网双架构，优惠码 `AMM`，147 永久套餐）。

### 📊 2. 网络可观测性实测实验室 (`/speedtest`)
* 归档 17+ 家重点品牌的真实晚高峰（20:00 - 23:00）全节点测速大图；
* 包含完整测试参数：网络类型、测速宽带、节点延迟、下载速度与 Netflix 4K / ChatGPT 解锁检测截图。

### 🎁 3. 免费资源与白嫖生存指南 (`/free`)
* 深度揭秘公共免费节点的中间人监听（MITM）与隐私黑产陷阱；
* 独家整理 Cloudflare WARP / WARP+ 官方 WireGuard 优选 IP 实操指南；
* 汇总正规机场官方赠送的免费试用配额与每日打卡签到福利。

### ❓ 4. 机场终极百科全书 (`/faq`)
* 涵盖 5 大专业分卷、25+ 个深度解答：
  1. **网络协议与专线物理层**（VLESS、Trojan、Shadowsocks-2022、IEPL vs IPLC）；
  2. **流媒体与 AI 工具风控**（ChatGPT 1020 报错、Claude 封号、住宅 IP 辨识）；
  3. **客户端实操与排障**（Clash Verge TUN 模式、Fake-IP 原理、微信卡顿修复）；
  4. **选购策略与防跑路**（月付安全法则、节点倍率陷阱、按量备用机制）；
  5. **隐私安全与合规边界**（HTTPS 端到端加密原理、DNS 泄漏防护）。

### 🚨 5. 跑路预警情报局与阵亡公墓 (`/alert`)
* 建立行业首创的 **四级运营状态响应矩阵**（🟢 正常运营 | 🟡 观察期 | 🟠 高危警报 | 🔴 已确认跑路）；
* 深度拆解劣质机场跑路前的“五步连环收割法”；
* 详实复盘速鹰666、速蛙云、喵帕斯等典型历史阵亡公墓档案；
* 提供断网失联后的 3 步紧急止损与备用节点自救手册。

### 💻 6. 全平台科学上网客户端专区 (`/clients`)
* 涵盖 Windows、macOS、Android、iOS、Linux、OpenWrt 软路由客户端下载与配置；
* 深度集成 **Clash Verge Rev** (Mihomo 内核)、**Shadowrocket** (小火箭)、**Sing-box**、**v2rayN** 等现代主流工具。

---

## 🛠️ 技术架构 (Tech Stack)

| 领域 | 技术方案 | 特性说明 |
| :--- | :--- | :--- |
| **底层引擎** | [Astro v7](https://astro.build) | 采用 Island Architecture 与 SSG 纯静态生成，极速加载，首屏 0 JS 负担 |
| **样式系统** | [Tailwind CSS v4](https://tailwindcss.com) | 配合现代 Liquid Glass 流体毛玻璃拟态与高级暗黑渐变网格（Dark Mode） |
| **内容系统** | Astro Content Collections + MDX | 严格 TypeScript 类型验证，支持万字级技术专栏扩展与内嵌交互组件 |
| **图标库** | [Lucide Astro](https://lucide.dev) | 高度精简、树摇优化的现代化轻量 SVG 图标集 |
| **SEO 基础设施** | 预留四大多端验证 + `@astrojs/sitemap` | 输出自引用 Canonical、Sitemap Index、RSS Feed 与无损 Schema.org JSON-LD |

---

## 📁 目录结构 (Directory Structure)

```text
paojichang.blog/
├── public/                       # 静态公开资产
│   ├── favicon.svg               # 原创 Monogram 矢量 Favicon
│   ├── robots.txt                # 规范化爬虫协议 (允许 Googlebot/Baidu/Shenma)
│   ├── sitemap.xml               # 搜索引擎提交 Sitemap 入口
│   └── images/airports/          # 18+ 机场真实晚高峰测速大图与解锁截图
├── src/
│   ├── components/               # Astro UI 组件库
│   │   ├── airport/              # AirportCard 等机场卡片模块
│   │   ├── mdx/                  # Callout, SpeechBubble 等 MDX 渲染组件
│   │   └── ui/                   # Header, Footer, PostCard, TagBadge 等
│   ├── config/
│   │   └── site.ts               # 全站唯一数据源配置文件 (Single Source of Truth)
│   ├── content/
│   │   └── blog/                 # 4 篇万字级深度网络架构与避坑实战 MDX 笔记
│   ├── data/
│   │   ├── airports.ts           # 42 家机场完整强类型数据字典 (资费/优惠码/链接)
│   │   └── clients.ts            # 全平台代理客户端下载与极简使用流程
│   ├── layouts/
│   │   ├── BaseLayout.astro      # 全局统一 SEO Head 与毛玻璃底座骨架
│   │   └── BlogPostLayout.astro  # 深度长文排版布局 (TOC/阅读时间/Schema)
│   ├── pages/                    # 路由体系 (82 个静态页面全量生成)
│   │   ├── index.astro           # 官网首页 (42 家完整梯队天梯榜)
│   │   ├── airports/             # 42 家品牌大厅与 [slug] 详情评测
│   │   ├── speedtest/            # 测速实测报告大厅
│   │   ├── free/                 # 免费资源与 WARP 专题
│   │   ├── faq/                  # 机场百科全书
│   │   ├── alert/                # 跑路预警情报局
│   │   ├── clients/              # 客户端指南
│   │   └── blog/                 # 技术博客专栏
│   └── styles/
│       └── global.css            # 全局样式与 Liquid Glass 拟态定义
├── astro.config.mjs              # Astro 编译与 sitemap/mdx 集成配置
├── package.json
└── README.md
```

---

## 🚀 本地开发与构建指南 (Quick Start)

### 1. 环境准备
确保您的本地开发环境已安装 **Node.js 22.12.0** 或更高版本。

```bash
# 克隆本项目
git clone https://github.com/sksksk98698-source/paojichang.blog.git
cd paojichang.blog

# 安装依赖
npm install
```

### 2. 启动本地开发服务
```bash
npm run dev
```
打开浏览器访问 `http://localhost:4321` 即可体验实时热更新。

### 3. 全站生产静态构建
```bash
npm run build
```
编译产物将输出至 `dist/` 目录，构建完成后会自动生成 `sitemap-index.xml` 与全站 82 个优化后的 HTML 页面。

### 4. 本地静态预览
```bash
npm run preview
```

---

## 🌐 生产部署建议 (Deployment)

本项目为 100% 静态生成（SSG），可零成本一键托管至现代边缘网络：

* **Cloudflare Pages (推荐)**：
  * 构建命令：`npm run build`
  * 输出目录：`dist`
  * 环境变量：`NODE_VERSION = 22.12.0`
* **Vercel** / **Netlify**：开箱即用支持 Astro。

---

## ⚖️ 免责声明 (Disclaimer)

1. 本项目所收录之测评数据均采集自公开网络环境下的真实单机测速与流媒体检测截图，旨在打破跨境网络信息不对称，提供独立、客观的技术参考。
2. 本项目不提供、不销售任何 VPN 或网络代理服务本身。商业推广链接严格遵循 `rel="nofollow sponsored noopener"` 行业规范。
3. 请使用者严格遵守当地法律法规，文明自律，切勿将网络工具用于违法犯罪用途。

---

<div align="center">
  <sub>Designed & Maintained with ⚡ by 跑机场评测实验室 (PAOJICHANG.BLOG). All rights reserved.</sub>
</div>
