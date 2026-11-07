// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import { defineConfig } from 'astro/config';
import process from 'node:process';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

// Resolve canonical site URL with precedence:
// 1. Explicit SITE_URL environment variable
// 2. Netlify / Vercel deployment URL
// 3. Official domain https://paojichang.blog
const siteUrl = process.env.SITE_URL 
  || (process.env.NETLIFY ? process.env.URL : '')
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '')
  || 'https://paojichang.blog';

const basePath = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: basePath,
  trailingSlash: 'never',
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    expressiveCode({
      themes: ['tokyo-night'],
      useThemedScrollbars: true,
      styleOverrides: {
        borderRadius: '1rem',
        borderWidth: '1px',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        codeFontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        uiFontFamily: '"Space Grotesk", "Plus Jakarta Sans", system-ui, sans-serif',
      },
    }),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
