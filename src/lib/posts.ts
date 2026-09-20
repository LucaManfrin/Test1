import { getCollection } from "astro:content";
import { CATEGORIES } from "../site.config";

export async function getAllPosts() {
  const posts = await getCollection("posts");
  return posts
    .filter((post) => post.data.published && !post.data.archived)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getPostsByCategory(category: string) {
  const allPosts = await getAllPosts();
  return allPosts.filter(
    (post) =>
      post.data.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 3
) {
  const posts = await getPostsByCategory(category);
  return posts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
}

export async function getCategoryLabel(slug: string) {
  const cat = CATEGORIES.find((c) => c.slug === slug);
  return cat?.label || slug;
}

export function getCategorySlug(name: string) {
  const known = CATEGORIES.find(
    (c) => c.label.toLowerCase() === name.toLowerCase()
  );
  if (known) return known.slug;
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-");
}
