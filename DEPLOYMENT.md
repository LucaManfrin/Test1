# Deployment to Cloudflare Pages

## Option 1: GitHub + Cloudflare Pages (Recommended)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "feat: Astro Paper redesign with 14 posts migrated"
git branch -M main
git remote add origin https://github.com/LucaManfrin/blueteamzone.com.git
git push -u origin main
```

### 2. Connect to Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Select "Connect to Git"
4. Authorize GitHub and select your repo
5. Click "Begin setup"

### 3. Configure Build Settings

- **Framework**: Astro
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: (leave empty)

### 4. Deploy

Click "Save and Deploy". Cloudflare will:
1. Clone your repo
2. Install dependencies
3. Run the build
4. Deploy to `https://blueteamzone.pages.dev`

**Every push to `main` triggers automatic deploys.**

---

## Option 2: Wrangler CLI (Manual)

### 1. Install Wrangler

```bash
npm install -g @cloudflare/wrangler
wrangler login
```

### 2. Build Your Site

```bash
npm run build
```

### 3. Deploy

```bash
wrangler pages deploy dist
```

Wrangler uploads to Cloudflare and gives you a URL.

---

## Domain Setup

### Update DNS

In Cloudflare dashboard:

1. **Add CNAME record**:
   - Name: `blueteamzone`
   - Content: `blueteamzone.pages.dev`

2. Or if already on Cloudflare, just update the existing CNAME

3. DNS propagation: 5-10 minutes

### Update Site Config

Make sure `src/site.config.ts` has:

```typescript
export const SITE: SiteConfig = {
  url: "https://blueteamzone.com",  // Your production domain
  // ...
};
```

---

## SSL Certificate

Cloudflare Pages automatically provisions SSL. No action needed.

---

## Environment Variables

If you need env vars (API keys, etc.):

1. Dashboard → Your Project → Settings → Environment Variables
2. Add `VARIABLE_NAME=value`
3. Redeploy

Access in code:
```typescript
const apiKey = import.meta.env.API_KEY;
```

---

## Cache Settings

Files are cached by type in `public/_headers`:

- **HTML**: 1 hour
- **JS/CSS**: 1 year (immutable hashes)
- **Images**: 7 days

---

## Preview URLs

- Production: `https://blueteamzone.com`
- Auto (main branch): `https://main.blueteamzone.pages.dev`
- PR previews: `https://pr-123.blueteamzone.pages.dev`

---

## Troubleshooting

### Build Fails

Check Cloudflare Pages dashboard:
1. Go to your project
2. Click the failed deployment
3. Scroll to see build logs

**Common issues:**
- Node.js version (needs 18+)
- Missing dependencies
- Invalid post frontmatter

### DNS Not Resolving

1. Wait 24-48 hours for propagation
2. Check DNS records are correct in Cloudflare
3. Verify CNAME points to `blueteamzone.pages.dev`

### Cache Issues

Clear cache in Cloudflare dashboard:
1. Go to dashboard
2. Caching → Purge Cache
3. Select "Purge Everything"

---

## Performance Monitoring

Cloudflare Pages dashboard shows:
- Build time
- Deployment history
- Analytics (with Cloudflare Analytics)

---

## Custom Domain

If you want to use a custom domain (not pages.dev):

1. Set up DNS CNAME record (see above)
2. In Cloudflare Pages project settings → Custom domain
3. Add your domain (`blueteamzone.com`)

---

## Support

- Cloudflare Pages docs: https://developers.cloudflare.com/pages/
- Astro docs: https://docs.astro.build/
- Cloudflare community: https://community.cloudflare.com/
