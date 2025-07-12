import type { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    slug: 'togaf-comprehensive-guide',
    title: 'TOGAF: The Complete Guide to Enterprise Architecture Framework',
    description: 'Comprehensive guide to TOGAF framework covering history, implementation, comparison with other frameworks, and practical applications for enterprise architects.',
    category: 'IT Frameworks',
    date: '2024-01-20',
    readTime: 15,
    icon: '📊',
    author: 'Kevin Couton',
    keywords: ['TOGAF', 'Enterprise Architecture', 'IT Framework', 'Business Architecture', 'Technology Architecture', 'COBIT', 'ITIL'],
    seoTitle: 'TOGAF Framework Guide: Enterprise Architecture Best Practices 2024',
    metaDescription: 'Master TOGAF framework with our complete guide. Learn implementation, compare with COBIT/ITIL, and discover enterprise architecture best practices.',
    articlePath: '/articles/togaf-comprehensive-guide'
  },
  {
    slug: 'development-stack-frameworks',
    title: 'Exploring the Best Development Stack Frameworks for 2024',
    description: 'In-depth exploration of development stacks like TanStack, JHipster, and other frameworks, along with their use cases, advantages, and potential pitfalls.',
    category: 'Development Stacks',
    date: '2024-01-25',
    readTime: 10,
    icon: '🔧',
    author: 'Kevin Couton',
    keywords: ['TanStack', 'JHipster', 'Full-Stack Development', 'React', 'Vue.js', 'Next.js', 'Nuxt.js', 'Spring Boot', 'Django'],
    seoTitle: 'Top Development Stack Frameworks for 2024: Comprehensive Guide',
    metaDescription: 'Discover 2024\'s top development stack frameworks like TanStack, JHipster, Next.js, and more. Learn their strengths, weaknesses, and ideal use cases.',
    articlePath: '/articles/development-stack-frameworks'
  },
  {
    slug: 'mentoring-vs-coaching',
    title: 'Mentoring vs Coaching: Understanding the Differences and Benefits',
    description: 'Explore the distinctions between mentoring and coaching, their unique benefits, certifications from ICF and EMCC, and how they shape personal and professional growth.',
    category: 'Professional Coaching',
    date: '2024-02-05',
    readTime: 8,
    icon: '🤝',
    author: 'Kevin Couton',
    keywords: ['Mentoring', 'Coaching', 'Professional Development', 'ICF', 'EMCC', 'Leadership', 'Career Growth'],
    seoTitle: 'Mentoring vs Coaching: Key Differences for Effective Development',
    metaDescription: 'Discover the unique roles and benefits of mentoring and coaching. Explore ICF and EMCC certifications and their impact on leadership growth.',
    articlePath: '/articles/mentoring-vs-coaching'
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getCategories(): string[] {
  const categories = new Set(['All']);
  blogPosts.forEach(post => categories.add(post.category));
  return Array.from(categories);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') {
    return getBlogPosts();
  }
  return getBlogPosts().filter(post => post.category === category);
}
