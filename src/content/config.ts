import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string().optional(),
    published: z.boolean().default(true),
    archived: z.boolean().default(false),
    pinned: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};