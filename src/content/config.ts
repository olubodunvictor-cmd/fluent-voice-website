import { defineCollection, z } from 'astro:content';

const lessonSchema = z.object({
  title: z.string(),
  description: z.string(),
  youtubeId: z.string(),
  moduleTag: z.string(),
  worksheetUrl: z.string().optional(),
  publishedDate: z.string(),
});

const productSchema = z.object({
  title: z.string(),
  brand: z.enum(['fluent-voice', 'play-sounds']),
  priceDisplay: z.string(),
  description: z.string(),
  format: z.string(),
  payhipId: z.string(),
  featured: z.boolean().default(false),
});

export const collections = {
  'fluent-voice': defineCollection({ type: 'content', schema: lessonSchema }),
  'play-sounds': defineCollection({ type: 'content', schema: lessonSchema }),
  products: defineCollection({ type: 'content', schema: productSchema }),
};