import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("posts");

  const searchIndex = posts
    .filter((post) => post.data.published && !post.data.archived)
    .map((post) => ({
      title: post.data.title,
      slug: post.slug,
      category: post.data.category,
      description: post.data.description,
      date: new Date(post.data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    }));

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
