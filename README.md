# Blue Team Zone - Redesigned

A clean, professional cybersecurity blog built with Astro 4 and designed for Cloudflare Pages.

## Features

- 🌓 Dark/Light mode toggle
- 🔍 Client-side search with Fuse.js
- 📁 Category-based organization
- 📝 Markdown-based posts
- 📊 RSS feed
- 🚀 Optimized for Cloudflare Pages
- ♿ Accessible and responsive
- ⚡ Fast static generation

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```

Visit `http://localhost:4321`

### 3. Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── components/        # Reusable components
├── content/
│   └── posts/        # Your markdown articles (14 migrated)
├── layouts/          # Base layout
├── lib/              # Utility functions
├── pages/            # Route pages (homepage, posts, categories, search)
└── site.config.ts    # Site configuration

public/              # Static assets
```

## All Posts Migrated ✅

**14 posts successfully migrated and adapted:**

- **Active Directory** (9 posts): ad-incident-response, adcs-certificate-attacks, asrep-roasting, golden-ticket, hunting-kerberoasting, kerberoasting, pass-the-hash, pass-the-ticket, silver-ticket
- **Linux** (1 post): auditd-that-survives
- **macOS** (1 post): unified-log-persistence
- **Threat Hunting** (1 post): beaconing-jitter
- **Tools** (1 post): velociraptor-triage
- **Windows** (1 post): etw-without-edr

All posts retain their original content with updated frontmatter for the new schema.

## Site Config

Edit `src/site.config.ts`:

```typescript
export const SITE: SiteConfig = {
  url: "https://blueteamzone.com",
  title: "0xLuca // notes",
  description: "...",
  author: "Luca Manfrin",
  authorTitle: "Cyber Security Specialist",
  lang: "en",
};

export const CATEGORIES = [
  { slug: "windows", label: "Windows" },
  { slug: "active-directory", label: "Active Directory" },
  // ... all 6 categories pre-configured
];
```

## Deployment

### Cloudflare Pages (Recommended)

**Option 1: GitHub + Cloudflare UI**

1. Push to GitHub
2. Go to Cloudflare Pages → "Create a project"
3. Connect your repo
4. Build settings:
   - Framework: Astro
   - Build command: `npm run build`
   - Build output: `dist`

**Option 2: Wrangler CLI**

```bash
npm run build
wrangler pages deploy dist
```

See `DEPLOYMENT.md` for detailed instructions.

## Features

### Dark/Light Mode
- Automatically persists preference in localStorage
- Toggle in header (moon/sun icons)
- GitHub-inspired color scheme

### Search
- Real-time client-side search using Fuse.js
- Search `/search` page
- Index generated at build time

### Categories
- 6 built-in categories (windows, active-directory, linux, macos, threat-hunting, tools)
- Category pages at `/category/<slug>`
- Related posts shown on each post detail page

### RSS Feed
- Available at `/rss.xml`
- Includes all published posts
- Subscribe in any RSS reader

### SEO
- Automatic sitemap at `/sitemap-index.xml`
- Open Graph tags
- Twitter card support
- Canonical URLs

## Building

```bash
npm run dev       # Dev server with hot reload
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Lint with ESLint
npm run format    # Format with Prettier
```

## Post Frontmatter Format

```yaml
---
title: "Your Post Title"
description: "Short description for cards and meta"
date: 2026-01-20T10:30:00
category: "active-directory"  # Slug format
tags:
  - tag1
  - tag2
author: "Luca Manfrin"
published: true
archived: false
pinned: false
featured: false
---

Your content here...
```

**Required fields:**
- `title`, `description`, `date`, `category`

**Optional fields:**
- `author` (defaults to SITE.author)
- `tags` (empty array by default)
- `published`, `archived`, `pinned`, `featured` (all false by default)

## Troubleshooting

**Posts not showing?**
- Check `published: true` in frontmatter
- Check `archived: false`
- Verify frontmatter YAML is valid

**Build fails?**
```bash
npm run build  # See detailed error messages
```

**Search not working?**
- Check `/search-index.json` is generated in `dist/`
- Verify Fuse.js is installed: `npm install fuse.js`

## Performance

- **Pages**: < 1s load time (Cloudflare CDN)
- **Build**: ~2-3s for full rebuild
- **Size**: ~ 50KB per page (gzipped)

## Security

Headers configured in `public/_headers`:
- CSP (Content Security Policy)
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## Support

- Astro docs: https://docs.astro.build
- Cloudflare Pages: https://developers.cloudflare.com/pages/
- GitHub: https://github.com/LucaManfrin/blueteamzone.com
