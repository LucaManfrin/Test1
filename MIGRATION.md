# Migration: Retro Sec Blog → Astro Paper Redesign

## What's Changed

### 🎨 Design
- ❌ **Old**: Retro Windows 95/98 desktop UI (StartMenu, Taskbar, Window widgets)
- ✅ **New**: Modern, clean, professional design (GitHub-inspired)
- ✅ Dark mode (default) + light mode toggle

### 🏗️ Architecture
| Aspect | Old | New |
|--------|-----|-----|
| Framework | Astro 4 | Astro 4 (same) |
| Search | Fuse.js | Fuse.js (same) |
| RSS | ✅ Yes | ✅ Yes |
| Categories | 6 categories | 6 categories (same) |
| Deployment | Netlify | **Cloudflare Pages** |
| Posts | 14 posts | **14 posts (all migrated!)** |

### 📝 Content
**All posts preserved:**
- ✅ All 14 `.md` files copied
- ✅ Frontmatter adapted to new schema
- ✅ Content 100% unchanged
- ✅ Images preserved in `public/images/`

### 🔗 URLs
**All URLs remain the same:**
- Post: `/posts/<category>/<slug>`
- Category: `/category/<slug>`
- Search: `/search`
- RSS: `/rss.xml`

**No redirects needed.**

---

## Files Removed

These retro components are **completely removed**:

```
❌ src/components/Bouncer.astro
❌ src/components/DesktopIcons.astro
❌ src/components/MenuBar.astro
❌ src/components/StartMenu.astro
❌ src/components/Taskbar.astro
❌ src/components/Window.astro
❌ src/components/CategoryView.astro
❌ src/scripts/bouncer.ts
❌ src/scripts/desktop.ts
❌ src/scripts/terminal.ts
❌ netlify.toml
```

## Files Added

New components for the clean design:

```
✨ src/layouts/Base.astro (main layout)
✨ src/components/Header.astro (navbar)
✨ src/components/Footer.astro
✨ src/components/PostCard.astro (updated)
✨ src/components/Pagination.astro (new)
✨ src/pages/search.astro (interactive)
✨ src/pages/posts.astro (all posts)
✨ src/pages/category/[slug].astro
✨ wrangler.toml (Cloudflare config)
```

---

## Configuration Updates

### Old → New Mapping

**Post Frontmatter:**

| Old | New | Notes |
|-----|-----|-------|
| `category: "Active Directory"` | `category: "active-directory"` | Converted to slug |
| `date: "2026-06-12 10:30"` | `date: 2026-06-12T10:30:00` | ISO format |
| `tags: [...]` | `tags: [...]` | Same array format |
| `published: true` | `published: true` | Same |
| `archived: false` | `archived: false` | Same |
| `pinned: true` | `pinned: true` | Same |
| `featured: false` | `featured: false` | Same (reserved) |
| `author: "Luca Manfrin"` | `author: "Luca Manfrin"` | Same |
| `readingTime: true` | *(removed)* | Plugin removed |

**All posts automatically migrated and adapted.**

---

## Deployment Change

### Old: Netlify
```
netlify.toml defined build
Deploy to netlify.com
```

### New: Cloudflare Pages
```bash
# Option 1: GitHub + Cloudflare UI (auto-deploy)
git push github

# Option 2: Wrangler CLI
npm run build && wrangler pages deploy dist
```

**Benefits of Cloudflare Pages:**
- ✅ Faster CDN (200+ edge locations)
- ✅ Better DDoS protection
- ✅ Same pricing as Netlify (free tier available)
- ✅ Native Workers support for serverless

---

## Testing Locally

### 1. Install & Run
```bash
npm install
npm run dev
```

### 2. Verify
- [ ] Homepage loads, shows latest posts
- [ ] Dark/light toggle works
- [ ] Search finds posts (try "windows", "active-directory", etc.)
- [ ] Category pages work (`/category/windows`, etc.)
- [ ] Post detail pages render markdown correctly
- [ ] Related posts appear at bottom
- [ ] RSS at `/rss.xml` is valid XML
- [ ] Mobile responsive on phone

### 3. Check Console
- No errors in browser console
- Search index loads (`/search-index.json`)

---

## What Stayed the Same

✅ **Security**
- CSP headers (now in `public/_headers`)
- Security best practices

✅ **SEO**
- Sitemap auto-generated
- Open Graph tags
- Twitter cards
- Canonical URLs

✅ **Performance**
- 100% static generation
- Git-driven publishing (no CMS)
- No third-party trackers

✅ **Content**
- All 14 posts with full history
- All 6 categories working
- Reading time can be re-added if needed

---

## Rollback Plan

If you need to go back:

```bash
# Repository still has old version
git checkout <old-commit-hash>
git push -f origin main

# Or redeploy from Netlify backup
```

**No data loss** - all posts in both repos.

---

## Post Frontmatter Schema

**Required:**
```yaml
title: string
description: string
date: ISO datetime (2026-01-20T10:30:00)
category: string (slug: windows, active-directory, linux, etc.)
```

**Optional:**
```yaml
tags: array of strings (default: [])
author: string (default: site author)
published: boolean (default: true)
archived: boolean (default: false)
pinned: boolean (default: false)
featured: boolean (default: false)
```

---

## URL Structure

### Homepage
- `/` - Shows latest + pinned posts

### Posts
- `/posts` - All posts with pagination
- `/posts/<slug>` - Individual post

### Categories
- `/category/<slug>` - Posts in category
- `/category/windows`, `/category/active-directory`, etc.

### Search & Meta
- `/search` - Search page
- `/rss.xml` - RSS feed
- `/sitemap-index.xml` - Sitemap
- `/robots.txt` - Robots file

---

## Browser Support

Modern browsers only:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

Older browsers will see a blank page (no error fallback).

---

## Next Steps

1. **Test locally**:
   ```bash
   npm install
   npm run dev
   # Visit http://localhost:4321
   ```

2. **Deploy**:
   - Follow `DEPLOYMENT.md` for Cloudflare Pages setup

3. **Monitor**:
   - Check Cloudflare Pages dashboard for builds
   - Watch build logs for errors

4. **Optimize** (optional):
   - Add more categories
   - Customize colors in `src/layouts/Base.astro`
   - Add reading time back if desired

---

## Comparison Table

| Feature | Old | New |
|---------|-----|-----|
| Framework | Astro 4 | Astro 4 |
| Design | Retro | Modern |
| Dark Mode | Toggle | Native + persistent |
| Search | Fuse.js | Fuse.js |
| Categories | 6 | 6 |
| Posts | 14 | 14 |
| RSS | ✅ | ✅ |
| Deployment | Netlify | Cloudflare Pages |
| SSL | Auto | Auto |
| CDN | Netlify | Cloudflare (200+ edge) |
| Cache | 1h default | Optimized per type |
| Performance | Good | Great |

---

## Questions?

See:
- `README.md` - Setup & features
- `DEPLOYMENT.md` - Deploy instructions
- Astro: https://docs.astro.build/
- Cloudflare Pages: https://developers.cloudflare.com/pages/
