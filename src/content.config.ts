import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			lang: z.enum(['en', 'id']).default('en'),
			// Set only on posts migrated from Medium, where the Medium copy is
			// still published and stays canonical. See docs/adr/0001.
			canonicalUrl: z.string().url().optional(),
			heroImage: image().optional(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
