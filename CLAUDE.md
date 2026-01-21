# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog and portfolio built with Astro 3.x. Professional, minimalist design with a focus on developer content across 8 thematic categories. Uses Astro's Content Collections for type-safe blog post management with MDX support.

**Site URL:** https://kevincouton.github.io
**Current Branch:** feature/professional-redesign-phase1 (main branch: master)

### Blog Purpose

This blog serves as a collaborative writing platform where Kevin develops article ideas with Claude's assistance. The workflow includes:
- **Ideation**: Brainstorming article topics across the 8 categories
- **Writing Collaboration**: Developing content with a unique, personal voice
- **Editing & Refinement**: Polishing articles for clarity, flow, and impact
- **Multiple Perspectives**: Articles may approach topics from different angles - sometimes friendly and approachable, sometimes intense and opinionated

### Workflow & Autonomy

Claude Code instances should operate autonomously when working on this repository:
- **Create branches freely** for new features, articles, or improvements
- **Deploy directly** after testing - the blog is hosted on GitHub Pages
- **Build and verify** changes before pushing to ensure quality
- **Commit with clear messages** following the existing commit style (e.g., "feat:", "docs:", "fix:")

This is a personal project where experimentation and iteration are encouraged.

## Commands

All commands use npm. There is no package.json in the root directory currently - if you need to run these commands, you'll need to ensure package.json exists first:

```bash
npm install              # Install dependencies
npm run dev             # Start dev server (typically localhost:4321 for Astro)
npm run build           # Build production site to ./dist/
npm run preview         # Preview production build locally
npm run astro check     # Type-check the project
```

## Architecture

### Content Collections & Category System

Blog posts are managed through Astro's Content Collections with a custom 8-category system:

**Categories** (defined in `src/data/categories.ts`):
1. **devops** - DevOps & Platform Engineering (#0066CC) 🚀
2. **craftsmanship** - Software Craftsmanship (#059669) 🛠️
3. **governance** - IT Governance (#7C3AED) 📋
4. **handbooks** - Public Handbooks (#EA580C) 📖
5. **opensource** - Open Source (#DB2777) 💻
6. **toolchains** - IT Toolchains (#0891B2) 🔧
7. **security** - Security & Compliance (#DC2626) 🔒
8. **personal** - Personal Development (#4F46E5) 🎯

Each category has: `id`, `name`, `description`, `color` (CSS custom property), and `icon` (emoji).

**Content Schema** (`src/content/config.ts`):
- `title` (required): Post title
- `description` (required): Post description/excerpt
- `pubDate` (required): Publication date
- `category` (required): One of the 8 category IDs
- `tags` (optional): Array of strings
- `featured` (optional, default false): Featured on homepage
- `author` (optional, default "Kevin Couton"): Post author
- `readingTime` (optional): Reading time in minutes
- `heroImage` (optional): Hero image path
- `updatedDate` (optional): Last updated date

### File Structure

```
src/
├── components/
│   ├── BaseHead.astro       # SEO, meta tags, imports global.css
│   ├── CategoryBadge.astro  # Category indicator (3 sizes: sm/md/lg, responsive)
│   ├── Footer.astro         # Multi-column footer with categories
│   ├── FormattedDate.astro  # Date formatting utility
│   ├── Header.astro         # Sticky header with theme toggle, nav, social links
│   ├── HeaderLink.astro     # Navigation link component
│   ├── PostCard.astro       # Reusable blog post preview card
│   ├── ReadingTime.astro    # Reading time indicator
│   ├── TagList.astro        # Tag pill display (2 sizes: sm/md)
│   └── ThemeToggle.astro    # Dark mode toggle with localStorage
├── content/
│   ├── blog/                # Blog posts (.md or .mdx files)
│   └── config.ts            # Content Collections schema
├── data/
│   └── categories.ts        # Category system definitions and utilities
├── layouts/
│   └── BlogPost.astro       # Blog post layout wrapper
├── pages/
│   ├── blog/
│   │   ├── [...slug].astro  # Dynamic blog post routes
│   │   └── index.astro      # Blog listing page
│   ├── about.astro          # About page
│   ├── index.astro          # Homepage
│   └── rss.xml.js           # RSS feed generator
├── styles/
│   └── global.css           # Design system with CSS custom properties
└── consts.ts                # Site constants (SITE_TITLE, SITE_DESCRIPTION, etc.)
```

### Design System

All design tokens are defined as CSS custom properties in `src/styles/global.css`:

**Color System:**
- Light mode: `#FAFAFA` background, `#FFFFFF` surfaces, `#1A1A1A` text
- Dark mode: `#0F0F0F` background, `#1A1A1A` surfaces, `#E5E5E5` text
- Auto-detects system preference, manual override via `data-theme` attribute
- 8 category-specific colors as CSS variables (e.g., `var(--color-devops)`)

**Typography:**
- System font stack (no web fonts for performance)
- Fluid type scale using `clamp()` (xs to 4xl)
- 5 line heights (tight to loose)

**Spacing:**
- 8-point scale (xs: 0.25rem to 4xl: 6rem)

**Layout:**
- `--max-width-content`: 70ch (article content)
- `--max-width-wide`: 90rem (page container)
- `--max-width-narrow`: 50ch (narrow content)

**Responsive Breakpoints:**
- 640px (mobile)
- 768px (tablet)
- 1024px (desktop)

### Routing

File-based routing via `src/pages/`:
- `/` → `index.astro` (homepage with hero, featured articles, recent articles, categories)
- `/blog` → `blog/index.astro` (all blog posts in grid)
- `/blog/{slug}` → `blog/[...slug].astro` (individual post)
- `/about` → `about.astro` (about page)
- `/rss.xml` → `rss.xml.js` (RSS feed)

Dynamic routes use `getStaticPaths()` to generate pages at build time.

### Content Collections API

```typescript
// Get all blog posts
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');

// Filter by category
const devopsPosts = posts.filter(post => post.data.category === 'devops');

// Sort by date
posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
```

### Category Utilities

```typescript
import { getCategoryById, CATEGORIES, CATEGORY_LIST } from '../data/categories';

// Get category metadata
const category = getCategoryById('devops');
// Returns: { id, name, description, color, icon }

// All categories
const allCategories = CATEGORY_LIST;
```

## Creating New Blog Posts

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Add required frontmatter (see schema above)
3. Choose one of the 8 category IDs
4. Optionally add tags, reading time, hero image
5. Set `featured: true` to show on homepage featured section

Example frontmatter:
```yaml
---
title: "Your Post Title"
description: "Brief description for previews and SEO"
pubDate: "Jan 21 2024"
category: "devops"
tags: ["terraform", "kubernetes", "automation"]
featured: true
readingTime: 7
heroImage: "/images/your-image.jpg"
---
```

## Writing Style Guidelines

When collaborating on articles with Kevin:

**Voice & Tone:**
- **Authentic**: Write in Kevin's voice - knowledgeable but not condescending
- **Flexible**: Adapt tone to content - friendly for how-to guides, intense for opinion pieces
- **Personal**: Use first-person perspective and share real experiences/insights
- **Opinionated**: Don't be afraid to take a stance, especially on governance, craftsmanship, or toolchain choices

**Structure:**
- Start with a hook or compelling question
- Use clear headers for scannable content
- Include practical examples and code snippets where relevant
- End with actionable takeaways or thought-provoking questions

**Perspective Variety:**
- **Technical deep-dives**: In-depth analysis with code examples (DevOps, Toolchains, Security)
- **Conceptual explorations**: Big-picture thinking on patterns and principles (Craftsmanship, Governance)
- **Case studies**: Analysis of real-world examples (Handbooks, Open Source)
- **Reflective pieces**: Personal insights and philosophy (Personal Development)

**Target Audience:**
Senior engineers, architects, and engineering leaders who value depth, nuance, and practical wisdom over surface-level tutorials.

## Content Roadmap

Priority articles to develop for the blog:

### 1. IT Governance Frameworks Deep-Dive
**Category:** `governance`
**Frameworks:** ITIL, TOGAF, COBIT, PRINCE2

**Content Requirements:**
- Create an **interactive Venn diagram** showing framework overlaps and relationships
- Explain the "big ideas" behind each framework
- Compare different angles of approach (process vs. architecture vs. governance vs. project)
- Discuss practical applications in modern organizations
- Define target audiences for each framework (when to use which)
- Address common misconceptions and real-world implementation challenges

**Interactive Elements:**
- Clickable Venn diagram sections revealing detailed comparisons
- Framework selector tool to help readers choose the right fit
- Visual timeline of framework evolution
- Comparison matrix (interactive table)

**Tags:** `["ITIL", "TOGAF", "COBIT", "PRINCE2", "governance", "frameworks", "enterprise-architecture"]`

### 2. Engineering Career Paths & Staff+ Archetypes
**Category:** `craftsmanship`

**Reference Materials:**
- https://newsletter.pragmaticengineer.com/p/engineering-career-paths-at-big-tech
- https://staffeng.com/guides/staff-archetypes/
- https://lethain.com/perf-management-system/
- https://www.engineeringladders.com/TechLead-EngineeringManager.html

**Content Requirements:**
- Synthesize insights from the referenced articles
- Compare career paths at big tech companies
- Explain Staff+ Engineer archetypes (Tech Lead, Architect, Solver, Right Hand)
- Contrast Tech Lead vs Engineering Manager paths
- Discuss performance management systems for senior ICs
- Provide actionable guidance for career progression

**Interactive Elements:**
- Visual career path flowchart (clickable nodes)
- Archetype selector quiz ("Which Staff+ archetype fits you?")
- Interactive comparison: TL vs EM responsibilities
- Skills matrix visualization
- Company-by-company career ladder comparison

**Tags:** `["career", "staff-engineer", "leadership", "tech-lead", "engineering-manager", "career-paths"]`

### 3. DORA Metrics & SDLC Productivity Measurement
**Category:** `devops`

**Content Requirements:**
- Deep dive into DORA metrics (Deployment Frequency, Lead Time, MTTR, Change Failure Rate)
- Compare DORA with other frameworks (SPACE, DevEx, Flow Metrics)
- Discuss tech stacks for modern SDLC
- Review tools for measuring productivity:
  - **MiddlewareHQ** (primary focus)
  - Sleuth, LinearB, Jellyfish, Swarmia
  - Native platform metrics (GitHub, GitLab, etc.)
- Address the pitfalls of productivity measurement
- Practical implementation guide

**Interactive Elements:**
- DORA metrics calculator
- Interactive dashboard mockup showing key metrics
- Tool comparison matrix (filterable/sortable)
- Metric correlation visualizations
- Self-assessment: "How mature is your SDLC measurement?"

**Tags:** `["DORA", "metrics", "productivity", "SDLC", "devops", "engineering-metrics", "MiddlewareHQ"]`

### Technical Implementation Notes for Interactive Content

When implementing interactive visualizations:
- Use lightweight libraries (D3.js, Chart.js, or native SVG)
- Ensure mobile responsiveness (touch interactions)
- Provide fallback static images for accessibility
- Consider using MDX for embedding interactive React/Svelte components
- Keep interactions intuitive (hover tooltips, click to expand, etc.)
- Use the existing design system colors for consistency
- Add loading states for any dynamic content
- Test on multiple devices and screen sizes

## Component Guidelines

**CategoryBadge:**
- Props: `categoryId` (CategoryId), `size` ('sm' | 'md' | 'lg')
- Responsive: Hides text on mobile <640px, shows icon only
- Hover effect fills with category color

**PostCard:**
- Props: `post` (blog collection entry), `featured` (boolean)
- Shows: hero image, category badge, date, reading time, title, description, tags
- Featured variant has accent border
- Hero image has zoom hover effect

**ThemeToggle:**
- No props needed
- Auto-detects system preference via `prefers-color-scheme`
- Persists user choice to `localStorage` with key `theme`
- Sets `data-theme` attribute on `<html>` element

**TagList:**
- Props: `tags` (string[]), `size` ('sm' | 'md')
- Displays tags as pills with `#` prefix

## Key Design Principles

1. **Slick & Neat**: Clean, modern aesthetic with attention to details - smooth transitions, consistent spacing, polished interactions
2. **Mobile-First**: Fully responsive design with mobile as the primary consideration - all components adapt gracefully to small screens
3. **Type-first**: Clear hierarchy, fluid typography, readable line lengths (70ch max for content)
4. **Minimalist**: Neutral colors, generous whitespace, focused content without clutter
5. **Performance**: System fonts, minimal JS, static generation for fast load times
6. **Accessibility**: ARIA labels, semantic HTML, keyboard navigation, WCAG AA contrast
7. **Category accents**: Subtle color coding without overwhelming the design
8. **Dark mode**: Full support with smooth transitions and localStorage persistence

**Design Quality Bar:**
- Every component should look refined at all viewport sizes (320px to 4K)
- Interactions should feel smooth and intentional, never jarring
- Visual hierarchy should guide the reader's eye naturally
- No element should feel like an afterthought

## Deployment

Built static site deploys to GitHub Pages. The `dist/` directory contains the production build.

**Deployment Workflow:**
1. Build the site: `npm run build`
2. Verify the build in `dist/` directory
3. Push to the appropriate branch
4. GitHub Pages will automatically deploy

## Analytics Integration

The blog should track visitor engagement to understand content performance:

**PostHog** (Primary Analytics):
- Track page views and reading patterns
- Measure time spent on articles
- Monitor scroll depth and engagement
- Track category and tag popularity
- User journey through the site

**Google Analytics** (Secondary):
- Traditional web analytics
- Traffic sources and demographics
- Page performance metrics
- Search queries bringing visitors

**Implementation Notes:**
- Analytics scripts should be added to `BaseHead.astro`
- Respect user privacy - consider cookie consent for GDPR/CCPA
- Use environment variables for tracking IDs (not committed to repo)
- Track custom events: article completion, category exploration, theme toggle usage

## TypeScript Configuration

Uses `astro/tsconfigs/strict` with `strictNullChecks: true`. Content Collections provide full type safety for blog post frontmatter.

## VSCode Extensions

Recommended: `astro-build.astro-vscode` (see `.vscode/extensions.json`)

## Additional Context

See `REDESIGN_SUMMARY.md` for detailed implementation history of the professional redesign (Phases 1-4), including design tokens, component specifications, and pending Phase 5 tasks (category landing pages, enhanced SEO, testing).
