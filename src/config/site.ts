/**
 * ==============================================================================
 * 🌟 跑机场 PAOJICHANG.BLOG — SINGLE SOURCE OF TRUTH CONFIGURATION
 * ==============================================================================
 * 高端 SEO / GEO 机场推荐与测速转化平台全局配置文件。
 * 保留原主题 Liquid Glass 流体毛玻璃拟态视觉架构与原主题头像 UI。
 * ==============================================================================
 */

export interface SiteAuthor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  location?: string;
  status?: string;
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface NavLink {
  text: string;
  href: string;
}

export interface CategoryInfo {
  name: string;
  desc: string;
}

export interface SiteConfig {
  name: string;
  logoLetter?: string;
  title: string;
  description: string;
  url: string;
  language: string;
  favicon: string;
  defaultOgImage?: string;

  author: SiteAuthor;

  hero: {
    greeting: string;
    badge: string;
    tagline: string;
    primaryButton: { text: string; href: string };
    secondaryButton: { text: string; href: string };
  };

  navLinks: NavLink[];
  categories: CategoryInfo[];

  verification?: {
    google?: string;
    bing?: string;
    shenma?: string;
    baidu?: string;
  };

  about?: {
    philosophyTitle?: string;
    philosophyParagraphs?: string[];
    quote?: string;
    highlights?: Array<{
      icon: string;
      title: string;
      desc: string;
    }>;
    techArsenal?: Array<{
      name: string;
      desc: string;
      category: string;
    }>;
  };

  newsletter?: {
    badge?: string;
    title?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
    successMessage?: string;
  };

  notFound?: {
    badge?: string;
    title?: string;
    description?: string;
    homeButtonText?: string;
    browseButtonText?: string;
  };

  search?: {
    modalTitle?: string;
    placeholder?: string;
  };

  ui?: {
    latestPostsBadge?: string;
    latestPostsTitle?: string;
    categoriesTitle?: string;
    tagsTitle?: string;
    shareTitle?: string;
    shareDescription?: string;
    shareCopiedMessage?: string;
    tocTitle?: string;
    authorCardTitle?: string;
    writtenByText?: string;
  };

  footer: {
    tagline: string;
    copyright: string;
    brandDescription?: string;
  };
}

export const siteConfig: SiteConfig = {
  // ----------------------------------------------------------------------------
  // 1. BRAND & SEO
  // ----------------------------------------------------------------------------
  name: "跑机场",
  logoLetter: "跑",
  title: "跑机场 | 2026优质机场推荐、IEPL专线节点测速与流媒体解锁实测 (paojichang.blog)",
  description:
    "跑机场 (paojichang.blog) 是专注于 42 家主流机场深度实测、IEPL/IPLC 专线对比、晚高峰带宽测速与 ChatGPT/Netflix 解锁测试的独立评测大厅。提供全站独家优惠码与全平台科学上网客户端指南。",
  url: "https://paojichang.blog",
  language: "zh-CN",
  favicon: "/favicon.svg",
  defaultOgImage: "/images/og-default.svg",

  // ----------------------------------------------------------------------------
  // 2. AUTHOR (保留原主题头像 UI 视觉)
  // ----------------------------------------------------------------------------
  author: {
    name: "跑机场评测实验室",
    role: "网络可观测性与专线实测团队",
    avatar: "/images/avatar.jpg", // 保留原主题头像图片与视觉！
    bio: "深耕全球跨境网络链路架构、BGP 智能中转、IEPL 内网专线与流媒体 AI 解锁实测。以真实数据说话，拒绝虚标跑路机场。",
    location: "香港 / 东京 / 新加坡",
    status: "全天候监测 42 家机场晚高峰网络丢包率与时延",
    social: {
      github: "",
      twitter: "",
      email: "contact@paojichang.blog",
    },
  },

  // ----------------------------------------------------------------------------
  // 3. HOME HERO SECTION
  // ----------------------------------------------------------------------------
  hero: {
    greeting: "选好梯子，拒绝踩坑",
    badge: "2026 专线实测 • 42家品牌库 • 真实测速图",
    tagline:
      "欢迎访问 跑机场 (paojichang.blog)。我们对业内 42 家主流机场进行长期晚高峰实测监控，覆盖 IEPL 专线、性价比平价、ChatGPT/流媒体 4K 解锁与不限时按量套餐，帮您在 1 分钟内锁定最适合自己的稳定高速网络。",
    primaryButton: {
      text: "查看 42 家机场品牌库",
      href: "/airports",
    },
    secondaryButton: {
      text: "实测测速报告大厅",
      href: "/speedtest",
    },
  },

  // ----------------------------------------------------------------------------
  // 4. NAVIGATION BAR (按用户确认的方案升级)
  // ----------------------------------------------------------------------------
  navLinks: [
    { text: "精选推荐", href: "/#top10" },
    { text: "42家品牌库", href: "/airports" },
    { text: "测速实测榜", href: "/speedtest" },
    { text: "免费资源", href: "/free" },
    { text: "百科FAQ", href: "/faq" },
    { text: "跑路预警", href: "/alert" },
    { text: "客户端教程", href: "/clients" },
  ],

  // ----------------------------------------------------------------------------
  // 5. CATEGORIES
  // ----------------------------------------------------------------------------
  categories: [
    { name: "Tech", desc: "IEPL/IPLC 专线底层原理解析、抗封锁协议与网络性能工程。" },
    { name: "Design", desc: "Liquid Glass 流体毛玻璃拟态系统与现代网络仪表盘美学。" },
    { name: "Architecture", desc: "全球 CDN 边缘调度、BGP 中转容灾与分布式节点监控拓扑。" },
    { name: "Story", desc: "机场行业黑话科普、防跑路避坑指南与实测踩坑纪实。" },
  ],

  // ----------------------------------------------------------------------------
  // 6. SEARCH ENGINE VERIFICATION (预留站长平台安全验证接口)
  // ----------------------------------------------------------------------------
  verification: {
    google: "", // 填入 Google Search Console verification 字符串
    bing: "",   // 填入 Bing Webmaster Tools msvalidate.01 字符串
    shenma: "", // 填入 神马站长平台 shenma-site-verification 字符串
    baidu: "",  // 填入 百度搜索资源平台 baidu-site-verification 字符串
  },

  // ----------------------------------------------------------------------------
  // 7. ABOUT
  // ----------------------------------------------------------------------------
  about: {
    philosophyTitle: "跑机场的评测原则与独立声明",
    philosophyParagraphs: [
      "面对琳琅满目的网络代理服务商，虚假宣传、延迟造假、超售拥堵乃至突然跑路一直是广大科学上网用户的最大痛点。跑机场 (paojichang.blog) 创立的初衷，就是用真实的测速数据与透明的优缺点分析，击碎信息不对称。",
      "我们承诺所有测评基于真实网络环境下的单机测速图、流媒体解锁报告与品牌原文资料。绝不为劣质商家粉饰太平，所有推广链接均明确标注合规声明，为每一位用户的每一分钱保驾护航。",
    ],
    quote: "不迷信任何口头承诺，让晚高峰实测数据与真实解锁检测成为检验机场的唯一标准。",
    highlights: [
      {
        icon: "⚡",
        title: "真实测速图支撑",
        desc: "配备 MAI-TEST 与 Speedtest 晚高峰实测大图，延迟、带宽、丢包一目了然。",
      },
      {
        icon: "🎬",
        title: "流媒体与 AI 解锁矩阵",
        desc: "实测 Netflix 原创剧、Disney+、ChatGPT、Claude 真实可用状态。",
      },
      {
        icon: "💰",
        title: "全网独家优惠码",
        desc: "整理各品牌官方隐藏优惠券（如光速云 AMM、暮光 muguang5555 等），一键复制即刻立减。",
      },
      {
        icon: "🛡️",
        title: "透明中立与安全合规",
        desc: "所有推广链接规范标注 nofollow sponsored，客观揭示潜在风险与服务短板。",
      },
    ],
    techArsenal: [
      { name: "IEPL / IPLC 专线", desc: "不过公网 GFW 的内网跨境物理专线，抗封锁天花板", category: "网络线路" },
      { name: "VLESS / Shadowsocks", desc: "低延迟、轻量级与强抗封锁现代化代理协议", category: "传输协议" },
      { name: "Mihomo / Clash Verge", desc: "现代化桌面端分流核心与主流装机代理客户端", category: "通用工具" },
      { name: "Shadowrocket 小火箭", desc: "iOS 端装机必备的轻量化规则代理分流神器", category: "移动工具" },
      { name: "OpenClash 软路由", desc: "局域网全屋智能设备无感科学上网与电视直通", category: "网关拓扑" },
      { name: "Pagefind 即时检索", desc: "客户端纯离线毫秒级快速匹配 42 家机场品牌", category: "站内检索" },
    ],
  },

  // ----------------------------------------------------------------------------
  // 7. FOOTER NEWSLETTER
  // ----------------------------------------------------------------------------
  newsletter: {
    badge: "跑机场内参早报",
    title: "第一时间获取机场优惠活动与最新测速报告",
    description: "不定期推送优质机场打折码、新增线路通报与节点状态突发预警，无任何垃圾营销邮件。",
    placeholder: "请输入您的常用邮箱...",
    buttonText: "免费订阅情报",
    successMessage: "感谢订阅！最新机场评测与专线特惠将第一时间投递至您的邮箱。",
  },

  // ----------------------------------------------------------------------------
  // 8. 404 NOT FOUND
  // ----------------------------------------------------------------------------
  notFound: {
    badge: "HTTP_STATUS // 404_AIRPORT_LOST",
    title: "该机场或评测节点已迁出",
    description: "您访问的机场品牌评测或测速页面可能已被合并、更新，或换用了新的路由。",
    homeButtonText: "返回跑机场首页",
    browseButtonText: "查看 42 家机场品牌库",
  },

  // ----------------------------------------------------------------------------
  // 9. SEARCH
  // ----------------------------------------------------------------------------
  search: {
    modalTitle: "检索 42 家机场与技术评测",
    placeholder: "输入机场名称、协议、专线或优惠码（如 光速云、IEPL、AMM、VLESS）...",
  },

  // ----------------------------------------------------------------------------
  // 10. REUSABLE UI
  // ----------------------------------------------------------------------------
  ui: {
    latestPostsBadge: "前沿评测与内参",
    latestPostsTitle: "最新机场专题与深度选购指南",
    categoriesTitle: "探索核心技术专栏",
    tagsTitle: "热门关键词与技术标签",
    shareTitle: "分享与推荐",
    shareDescription: "若本篇机场测评对您的选购有所帮助，欢迎分享给身边的朋友。",
    shareCopiedMessage: "评测链接已复制到剪贴板！",
    tocTitle: "测评目录索引",
    authorCardTitle: "评测出品方",
    writtenByText: "评测维护",
  },

  // ----------------------------------------------------------------------------
  // 11. FOOTER
  // ----------------------------------------------------------------------------
  footer: {
    tagline: "2026 优质机场实测推荐与全平台科学上网指南。",
    copyright: "跑机场 PAOJICHANG.BLOG",
    brandDescription:
      "跑机场 (paojichang.blog) 专注于全球 42 家主流机场客观测评、IEPL 专线测速、流媒体与 AI 解锁测试及客户端配置教程。含推广链接，注册可能产生佣金但不影响实际购买价格。",
  },
};

export default siteConfig;
