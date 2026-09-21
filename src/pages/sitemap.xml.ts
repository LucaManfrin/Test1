import { getAllPosts } from "../lib/posts";
import { SITE, CATEGORIES } from "../site.config";

export async function GET() {
  const posts = await getAllPosts();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE.url}</loc>
  </url>
  <url>
    <loc>${SITE.url}/posts</loc>
  </url>
  <url>
    <loc>${SITE.url}/search</loc>
    <priority>0.7</>
  </url>
  ${CATEGORIES.map(
    (cat) => `
  <url>
    <loc>${SITE.url}/category/${cat.slug}</loc>
    <priority>0.8</priority>
  </url>`
  ).join("")}
  ${posts
    .map(
      (post) => `
  <url>
    <loc>${SITE.url}/posts/${post.slug}</loc>
    <lastmod>${post.data.date.toISOString().split("T")[0]}</lastmod>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}