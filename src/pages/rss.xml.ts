import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../site.config";

export async function GET(context: any) {
  const posts = await getCollection("posts");

  const sortedPosts = posts
    .filter((post) => post.data.published && !post.data.archived)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.slug}`,
      author: post.data.author || SITE.author,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: `<language>en-us</language>`,
  });
}
