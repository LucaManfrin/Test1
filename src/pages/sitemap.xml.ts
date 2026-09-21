import { getAllPosts } from "../lib/posts";
import { SITE, CATEGORIES } from "../site.config";

export async function GET() {
  const posts = await getAllPosts();
  
  const urls = [
    `${SITE.url}`,
    `${SITE.url}/posts`,
    `${SITE.url}/search`,
    ...CATEGORIES.map((cat) => `${SITE.url}/category/${cat.slug}`),
    ...posts.map((post) => `${SITE.url}/posts/${post.slug}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(sitemap.trim(), {
    status: 200,
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}