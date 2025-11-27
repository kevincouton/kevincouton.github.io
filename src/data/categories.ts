/**
 * Blog Category System
 * Defines the 8 thematic categories with metadata
 */

export type CategoryId = 
	| 'devops'
	| 'craftsmanship'
	| 'governance'
	| 'handbooks'
	| 'opensource'
	| 'toolchains'
	| 'security'
	| 'personal';

export interface Category {
	id: CategoryId;
	name: string;
	description: string;
	color: string;
	icon: string;
}

export const CATEGORIES: Record<CategoryId, Category> = {
	devops: {
		id: 'devops',
		name: 'DevOps & Platform Engineering',
		description: 'CI/CD pipelines, infrastructure as code, container orchestration, observability, and platform engineering best practices.',
		color: 'var(--color-devops)',
		icon: '🚀',
	},
	craftsmanship: {
		id: 'craftsmanship',
		name: 'Software Craftsmanship',
		description: 'Clean code, refactoring techniques, testing strategies, design patterns, and software engineering principles.',
		color: 'var(--color-craftsmanship)',
		icon: '🛠️',
	},
	governance: {
		id: 'governance',
		name: 'IT Governance',
		description: 'COBIT, ITIL, TOGAF, ISO/IEC 27001, SOC 2, NIST frameworks, and enterprise architecture.',
		color: 'var(--color-governance)',
		icon: '📋',
	},
	handbooks: {
		id: 'handbooks',
		name: 'Public Handbooks',
		description: 'Analysis of company handbooks, documentation strategies, and organizational transparency (GitLab, Warp.dev, Mastodon).',
		color: 'var(--color-handbooks)',
		icon: '📖',
	},
	opensource: {
		id: 'opensource',
		name: 'Open Source',
		description: 'OSS contributions, trending repositories, ecosystem analysis, licensing, and community building.',
		color: 'var(--color-opensource)',
		icon: '💻',
	},
	toolchains: {
		id: 'toolchains',
		name: 'IT Toolchains',
		description: 'Curated technology stacks, tool comparisons, and modern IT infrastructure for regulated industries.',
		color: 'var(--color-toolchains)',
		icon: '🔧',
	},
	security: {
		id: 'security',
		name: 'Security & Compliance',
		description: 'Corporate security questionnaires, audit readiness, penetration testing, and compliance frameworks.',
		color: 'var(--color-security)',
		icon: '🔒',
	},
	personal: {
		id: 'personal',
		name: 'Personal Development',
		description: 'Philosophy, self-efficacy, coaching, leadership, and insights from classical thinkers.',
		color: 'var(--color-personal)',
		icon: '🎯',
	},
};

export const CATEGORY_LIST = Object.values(CATEGORIES);

/**
 * Get category by ID
 */
export function getCategoryById(id: CategoryId): Category {
	return CATEGORIES[id];
}

/**
 * Get all category IDs
 */
export function getCategoryIds(): CategoryId[] {
	return Object.keys(CATEGORIES) as CategoryId[];
}

/**
 * Validate if a string is a valid category ID
 */
export function isValidCategoryId(id: string): id is CategoryId {
	return id in CATEGORIES;
}
