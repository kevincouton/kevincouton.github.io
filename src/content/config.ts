import { defineCollection, z } from 'astro:content';
import { getCategoryIds } from '../data/categories';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		// New fields for enhanced content organization
		category: z.enum([
			'devops',
			'craftsmanship',
			'governance',
			'handbooks',
			'opensource',
			'toolchains',
			'security',
			'personal',
		]),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().optional().default(false),
		author: z.string().optional().default('Kevin Couton'),
		readingTime: z.number().optional(),
	}),
});

export const collections = { blog };
