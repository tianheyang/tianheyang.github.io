import { z, defineCollection } from "astro:content";
// Projects collection schema
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    roles: z.array(z.string()),
    thumbnailUrl: z.string(),
    primaryImage: z.object({
      url: z.string(),
      caption: z.string(),
      alt: z.string(),
    }),
    secondaryImage: z.object({
      url: z.string(),
      caption: z.string(),
      alt: z.string(),
    }),
    tertiaryImage: z.object({
      url: z.string(),
      caption: z.string(),
      alt: z.string(),
    }),
  }),
});
// Register projects collection
export const collections = {
  projects: projectsCollection,
};
