# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal website/blog built with Astro, based on the official Astro blog starter template. It uses Astro's Content Collections for blog post management and includes MDX support.

## Commands

All commands use npm (not yarn, despite yarn.lock being present):

- `npm install` - Install dependencies
- `npm run dev` or `npm start` - Start dev server at localhost:3000
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro ...` - Run Astro CLI commands (e.g., `npm run astro add`, `npm run astro check`)

## Architecture

### Content Collections System
Blog posts are managed through Astro's Content Collections API:
- Blog posts live in `src/content/blog/` as `.md` or `.mdx` files
- Schema is defined in `src/content/config.ts` with Zod validation
- Required frontmatter: `title`, `description`, `pubDate`
- Optional frontmatter: `updatedDate`, `heroImage`
- Access posts using `getCollection('blog')` from `astro:content`

### Routing & Pages
- `src/pages/` - File-based routing (each file becomes a route)
- `src/pages/index.astro` - Homepage
- `src/pages/blog/index.astro` - Blog listing page
- `src/pages/blog/[...slug].astro` - Dynamic blog post pages (uses `getStaticPaths()`)

### Components & Layouts
- `src/components/` - Reusable Astro components
  - `BaseHead.astro` - Meta tags, SEO, Open Graph data (imports global.css)
  - `Header.astro`, `Footer.astro` - Site navigation and footer
  - `FormattedDate.astro` - Date formatting utility
- `src/layouts/BlogPost.astro` - Blog post layout wrapper

### Site Configuration
- `src/consts.ts` - Global constants (`SITE_TITLE`, `SITE_DESCRIPTION`)
- `astro.config.mjs` - Astro configuration with MDX and sitemap integrations
- Site URL currently set to 'https://example.com' in config

### Static Assets
- `public/` - Static files served as-is (images, favicon, etc.)
- Global styles in `src/styles/global.css`

## Development Notes

- TypeScript is configured with strict mode
- VSCode extension recommended: `astro-build.astro-vscode`
- Built-in integrations: MDX, RSS, Sitemap
- Based on Bear Blog styling (minimal, lightweight)
