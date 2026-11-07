export interface ClientInfo {
  name: string;
  tagline: string;
  coreFeatures: string[];
  protocols: string[];
  platforms: string[];
  license: '免费开源' | '付费应用' | '免费+内购';
  downloadUrl: string;
  tutorialSummary: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface PlatformGroup {
  platform: 'Windows' | 'macOS' | 'iOS' | 'Android' | 'Linux' | 'OpenWrt';
  title: string;
  badge: string;
  description: string;
  seoKeywords: string[];
  clients: ClientInfo[];
}

export const platformsData: PlatformGroup[] = [
  {
    platform: 'Windows',
    title: 'Windows 电脑代理客户端下载与配置指南',
    badge: 'PC 端首选工具',
    description: '适用于 Windows 10/11 的高性能开源代理客户端，支持 Mihomo 核心、TUN 虚拟网卡模式、规则分流与一键订阅导入。',
    seoKeywords: ['Clash Verge Rev 下载', 'v2rayN 电脑版教程', 'Windows 机场客户端', 'Mihomo 客户端', 'VLESS Windows 客户端'],
    clients: [
      {
        name: 'Clash Verge Rev',
        tagline: '基于 Mihomo (Clash Meta) 内核的现代化新一代 Windows 客户端，首推主力。',
        coreFeatures: ['Mihomo 超强内核', 'TUN 模式全局分流', '订阅批量管理与自动更新', '界面优雅支持深色模式'],
        protocols: ['Shadowsocks', 'VLESS', 'VMess', 'Trojan', 'Hysteria2', 'TUIC'],
        platforms: ['Windows', 'macOS', 'Linux'],
        license: '免费开源',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
        tutorialSummary: [
          '下载安装包（如 Clash.Verge_x64-setup.exe）并完成安装。',
          '在跑机场中复制您购买的机场 Clash/Mihomo 订阅链接。',
          '打开 Clash Verge Rev，进入「订阅/Profiles」页面，粘贴订阅链接并点击「导入」。',
          '在「代理/Proxies」中挑选满意的节点（建议选择香港或专线节点），右键开启「系统代理」即可畅游海外。',
        ],
        recommendedFor: '所有 Windows 个人用户、追剧与办公进阶用户。',
        isPopular: true,
      },
      {
        name: 'v2rayN',
        tagline: '老牌常青树，支持 Xray 与 sing-box 多核心，节点调优与多协议支持极佳。',
        coreFeatures: ['Xray / sing-box 双核心', '批量测速与排序', '路由自定义规则', '支持自定义核心更新'],
        protocols: ['VLESS', 'VMess', 'Shadowsocks', 'Trojan', 'Hysteria2'],
        platforms: ['Windows'],
        license: '免费开源',
        downloadUrl: 'https://github.com/2dust/v2rayN/releases',
        tutorialSummary: [
          '下载 v2rayN-With-Core.zip 解压至无中文字符路径运行。',
          '点击顶部菜单「订阅分组」->「订阅分组设置」->「添加」，填入机场订阅地址。',
          '点击「订阅分组」->「更新全部订阅（不通过代理）」，加载全部节点。',
          '底部路由推荐选择「绕过大陆(Whitelist)」，右键系统托盘开启「自动配置系统代理」。',
        ],
        recommendedFor: '熟悉网络协议、需要批量测速排查或重度多协议管理的高阶用户。',
        isPopular: true,
      },
      {
        name: 'FlClash',
        tagline: '基于 Flutter 构建的极简跨平台代理软件，内存占用低，启动迅速。',
        coreFeatures: ['Flutter 极简轻量 UI', 'Mihomo 内核', '全平台操作逻辑统一', '低内存占用'],
        protocols: ['Shadowsocks', 'VLESS', 'Trojan', 'Hysteria2'],
        platforms: ['Windows', 'macOS', 'Android', 'Linux'],
        license: '免费开源',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases',
        tutorialSummary: [
          '下载安装后打开主界面，点击左侧「配置」添加订阅链接。',
          '保存并点击更新，在「节点」列表中选择合适区域。',
          '开启主开关即可享受顺畅外网加速。',
        ],
        recommendedFor: '喜欢轻量精简 UI、不喜欢繁琐设置的办公族。',
      },
      {
        name: 'Hiddify',
        tagline: '基于 sing-box 核心的多协议跨平台通用客户端，自动化智能分流。',
        coreFeatures: ['全协议自动识别', '智能选点', '深度防屏蔽', '一键启动'],
        protocols: ['VLESS', 'Trojan', 'Hysteria2', 'Shadowsocks', 'SSH'],
        platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Linux'],
        license: '免费开源',
        downloadUrl: 'https://github.com/hiddify/hiddify-next/releases',
        tutorialSummary: ['直接导入订阅链接即可智能连接，免去繁杂策略组调试。'],
        recommendedFor: '海外多国漫游、多协议混用的新手用户。',
      },
    ],
  },
  {
    platform: 'Android',
    title: 'Android 安卓手机/平板代理客户端指南',
    badge: '移动端自由利器',
    description: '安卓生态主流代理应用，免 Root 支持全局分流、应用分应用代理与息屏长效保活。',
    seoKeywords: ['v2rayNG 安卓下载', 'FlClash 安卓手机版', 'Clash Meta Android', '安卓机场配置教程'],
    clients: [
      {
        name: 'v2rayNG',
        tagline: '安卓端装机必备的经典 Xray 客户端，稳定耐用，占用极低。',
        coreFeatures: ['Xray 内核原生支持', '应用分应用分流代理', '分发分流规则丰富', '省电省内存'],
        protocols: ['VLESS', 'VMess', 'Shadowsocks', 'Trojan', 'Hysteria2'],
        platforms: ['Android'],
        license: '免费开源',
        downloadUrl: 'https://github.com/2dust/v2rayNG/releases',
        tutorialSummary: [
          '下载 APK 文件安装到手机并给予 VPN 权限。',
          '点击左侧菜单「订阅分组设置」-> 点击右上角「+」-> 填入分组名与机场订阅 URL。',
          '返回主界面，点击右上角三点菜单选择「更新订阅」。',
          '选中测速延迟最低的节点，点击右下角「V」图标启动连接。',
        ],
        recommendedFor: '绝大多数安卓手机用户首选，日常刷帖、追剧、查资料稳定首选。',
        isPopular: true,
      },
      {
        name: 'FlClash (Android)',
        tagline: '现代感满满的安卓端 Clash 客户端，与 PC 界面无缝衔接。',
        coreFeatures: ['Material 质感设计', 'Mihomo 核心驱动', '策略组直观展开', '快速切换'],
        protocols: ['Shadowsocks', 'VLESS', 'Trojan', 'Hysteria2'],
        platforms: ['Android', 'Windows', 'macOS'],
        license: '免费开源',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases',
        tutorialSummary: ['导入机场 Clash 订阅链接，刷新后在策略组中点击节点切换即可。'],
        recommendedFor: '喜欢现代化设计风格的安卓旗舰手机用户。',
      },
      {
        name: 'Karing (Android)',
        tagline: '基于 sing-box 开发的跨平台客户端，支持多订阅源聚合。',
        coreFeatures: ['多订阅聚合管理', '规则智能分流', '界面极简', '无需繁杂调试'],
        protocols: ['VLESS', 'Shadowsocks', 'Trojan', 'Hysteria2'],
        platforms: ['Android', 'iOS', 'Windows', 'macOS'],
        license: '免费开源',
        downloadUrl: 'https://github.com/KaringX/karing/releases',
        tutorialSummary: ['直接粘贴订阅链接自动解析，适合多机场备用管理。'],
        recommendedFor: '持有多个不同机场订阅的用户。',
      },
    ],
  },
  {
    platform: 'iOS',
    title: 'iPhone / iPad (iOS) 苹果设备代理客户端指南',
    badge: 'iOS 生态精选',
    description: '苹果生态规则代理软件，支持全流量托管、分流规则覆写与小组件一键启停。（注：受限于 App Store 政策，大部分需在非国区 Apple ID 购买下载）。',
    seoKeywords: ['Shadowrocket 小火箭使用教程', 'Stash 苹果配置', 'Quantumult X 圈X', '美区 Apple ID 代理软件'],
    clients: [
      {
        name: 'Shadowrocket (小火箭)',
        tagline: 'iOS 平台上保有量最大、使用最广泛的规则分流代理工具，新手友好度第一。',
        coreFeatures: ['支持一键扫码/订阅导入', '智能路由与策略组分流', '场景与自动化支持', '流量分析与请求监控'],
        protocols: ['Shadowsocks', 'VLESS', 'VMess', 'Trojan', 'Hysteria2', 'TUIC'],
        platforms: ['iOS', 'macOS (M芯片)'],
        license: '付费应用',
        downloadUrl: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
        tutorialSummary: [
          '登录非国区（如美区、港区）Apple ID，在 App Store 搜索购买下载 Shadowrocket。',
          '在跑机场进入所选机场控制台，复制「Shadowrocket / 小火箭 一键订阅链接」。',
          '打开小火箭会自动弹出添加订阅提示，点击「保存」；若未弹出，点击右上角「+」，类型选择「Subscribe」，粘贴 URL 保存。',
          '向下滑动更新节点列表，点击选择节点，顶部开启主开关，首次允许添加 VPN 配置即可。',
        ],
        recommendedFor: '所有 iPhone / iPad 用户的首推装机工具。',
        isPopular: true,
      },
      {
        name: 'Stash (iOS)',
        tagline: 'iOS 端最原汁原味的 Clash 体验，完美兼容 Clash Premium 规则与覆盖。',
        coreFeatures: ['Clash 规则完全兼容', 'Web 仪表盘与请求重写', '脚本支持与自适应策略', 'UI 极其精致'],
        protocols: ['Shadowsocks', 'VLESS', 'Trojan', 'VMess', 'Hysteria2'],
        platforms: ['iOS', 'macOS', 'tvOS'],
        license: '付费应用',
        downloadUrl: 'https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349',
        tutorialSummary: ['在 Stash 中导入机场 Clash 订阅链接，享受原汁原味的策略组切换体验。'],
        recommendedFor: '习惯 Clash 配置逻辑与策略组精细分流的高级 iOS 用户。',
      },
      {
        name: 'Quantumult X (圈 X)',
        tagline: '以强大的 JavaScript 脚本支持与请求覆写闻名，极客定制性极高。',
        coreFeatures: ['JS 脚本扩展能力', '精细 MITM 与重写', '漂亮的彩色节点柱状图', '策略组灵活'],
        protocols: ['Shadowsocks', 'Trojan', 'VMess', 'VLESS'],
        platforms: ['iOS'],
        license: '付费应用',
        downloadUrl: 'https://apps.apple.com/us/app/quantumult-x/id1453926894',
        tutorialSummary: ['点击右下角风车图标，在节点模块添加机场订阅资源标签即可解析。'],
        recommendedFor: '追求脚本自动化、个性化规则编写的高玩极客。',
      },
    ],
  },
  {
    platform: 'macOS',
    title: 'macOS 苹果电脑客户端下载与配置指南',
    badge: 'Mac 办公与开发',
    description: '针对 Intel 与 Apple Silicon (M1/M2/M3/M4) 原生适配的 macOS 客户端，开发环境与 Terminal 终端无缝代理。',
    seoKeywords: ['Clash Verge Rev Mac 版', 'M1/M2/M3 Mac 代理软件', 'macOS 终端代理配置', 'Surge Mac'],
    clients: [
      {
        name: 'Clash Verge Rev (macOS)',
        tagline: 'Mac 端目前维护最活跃、体验最佳的开源客户端，支持 Universal 通用二进制架构。',
        coreFeatures: ['支持 Apple Silicon & Intel 双架构', '系统托盘常驻与快捷切换', 'TUN 模式解决终端代理难题', '开机自启'],
        protocols: ['Shadowsocks', 'VLESS', 'Trojan', 'Hysteria2', 'TUIC'],
        platforms: ['macOS', 'Windows', 'Linux'],
        license: '免费开源',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
        tutorialSummary: [
          '根据 Mac 芯片型号下载 dmg（M芯片选 aarch64，Intel芯片选 x64），拖拽至应用程序目录。',
          '在订阅管理中粘贴机场订阅并更新。',
          '开启「系统代理」；如需终端 git/brew/npm 也走代理，开启「TUN 模式」即可全量接管。',
        ],
        recommendedFor: '所有 Mac 个人办公、软件开发与影音娱乐用户。',
        isPopular: true,
      },
      {
        name: 'Surge Mac',
        tagline: 'Mac 平台上顶级网络开发与网络调试网关，性能与体验无可挑剔。',
        coreFeatures: ['专业网络抓包与分析', '网关模式接管局域网', '极低 CPU 与内存开销', '完美生态联动'],
        protocols: ['Shadowsocks', 'Trojan', 'Snell', 'VMess'],
        platforms: ['macOS', 'iOS'],
        license: '付费应用',
        downloadUrl: 'https://nssurge.com/',
        tutorialSummary: ['适合对网络有绝对掌控欲的专业工程师与开发团队。'],
        recommendedFor: '预算充裕、追求 Mac 端极致稳定与开发调试的资深工程师。',
      },
    ],
  },
  {
    platform: 'OpenWrt',
    title: '软路由 / OpenWrt 局域网透明代理',
    badge: '全屋无感翻墙',
    description: '在软路由或家庭网关部署，让智能电视、Apple TV、Switch、PS5、手机与 PC 全屋设备免装客户端自动科学上网。',
    seoKeywords: ['OpenClash 教程', '软路由透明代理', 'Apple TV 翻墙', 'OpenWrt 机场配置'],
    clients: [
      {
        name: 'OpenClash',
        tagline: 'OpenWrt 软路由上功能最强大的 Clash/Mihomo 插件，实现局域网真透明代理。',
        coreFeatures: ['Fake-IP 高速 DNS 解析', '全屋设备无感翻墙', 'Netflix/Disney+ 电视端直连', '规则智能分流'],
        protocols: ['Shadowsocks', 'VLESS', 'Trojan', 'Hysteria2'],
        platforms: ['OpenWrt'],
        license: '免费开源',
        downloadUrl: 'https://github.com/vernesong/OpenClash/releases',
        tutorialSummary: [
          '在路由器后台安装 OpenClash 插件及对应架构内核文件。',
          '进入「配置订阅」页面，添加订阅链接并执行更新生成 YAML 配置。',
          '运行模式推荐切换为「Fake-IP（增强模式）」，并勾选常用端口绕过大陆。',
          '启动 OpenClash，局域网所有设备连接 Wi-Fi 即可自动无感翻墙。',
        ],
        recommendedFor: '拥有软路由、希望全家智能家居与游戏机自动科学上网的家庭网络玩家。',
        isPopular: true,
      },
    ],
  },
];
