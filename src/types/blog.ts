export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: number;
  icon: string;
  author: string;
  keywords: string[];
  seoTitle?: string;
  metaDescription?: string;
  content?: string;
  articlePath?: string; // Path to the dedicated article page
}

export interface BlogCategory {
  name: string;
  count: number;
}

export type CategoryFilter = 'All' | string;
