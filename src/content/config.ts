// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
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
// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
};
