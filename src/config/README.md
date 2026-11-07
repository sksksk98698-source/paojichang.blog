# 🛠️ 站点配置指南 (Site Configuration Guide)

本站所有核心品牌信息、SEO 元数据与作者信息均集中在单一配置文件管理：
👉 **[`src/config/site.ts`](./site.ts)**

### 核心配置项：
1. **作者档案与团队信息**：
   - `name`: 站点维护者或团队名称
   - `role`: 角色定位
   - `avatar`: 头像资产路径（如 `/images/avatar.svg`）
   - `bio`: 个人简介与技术宣言
   - `social`: 社交账号与联系邮箱

2. **品牌与全局 SEO**：
   - `name`: 品牌标识（如 `PAOJICHANG.BLOG`）
   - `title`: 搜索引擎优化标题
   - `description`: 站点 Meta 描述
   - `url`: 官方正式域名（如 `https://paojichang.blog`）
   - `defaultOgImage`: OpenGraph 默认卡片图片

3. **首页横幅与导航**：
   - `hero`: 问候语、标签、Slogan 与快捷引导按钮
   - `navLinks`: 顶部导航条链接
   - `categories`: 技术专栏分类

4. **SEO 与爬虫规范**：
   - `public/robots.txt`: 爬虫规范与 Sitemap 索引路径
   - 结构化数据：已内置 Schema.org `WebSite`、`BlogPosting` 与 `BreadcrumbList` JSON-LD
