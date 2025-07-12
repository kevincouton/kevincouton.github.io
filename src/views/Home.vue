<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content" @click="navigateToFeaturedPost">
        <div class="hero-text">
          <span class="hero-category">{{ featuredPost?.category || 'Development Stacks' }}</span>
          <h1 class="hero-title">{{ featuredPost?.title || 'Exploring the Best Development Stack Frameworks for 2024' }}</h1>
          <p class="hero-description">
            {{ featuredPost?.description || 'In-depth exploration of development stacks like TanStack, JHipster, and other frameworks, along with their use cases, advantages, and potential pitfalls.' }}
          </p>
          <div class="hero-meta">
            <div class="author">
              <div class="author-avatar">👨‍💻</div>
              <span class="author-name">Kevin Couton</span>
            </div>
            <div class="hero-date">{{ featuredPost?.date || '2024-01-25' }} • {{ featuredPost?.readTime || 10 }} min read</div>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-placeholder">
            <span class="hero-icon">{{ featuredPost?.icon || '🔧' }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="blog-section">
      <div class="blog-header">
        <h2 class="blog-title">{{ $t('home.blog.title') }}</h2>
        <p class="blog-description">
          {{ $t('home.blog.description') }}
        </p>
      </div>

      <!-- Category Filters -->
      <div class="category-filters">
        <button
          v-for="category in categories"
          :key="category"
          :class="['filter-btn', { active: selectedCategory === category }]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <p>{{ $t('home.blog.loading') }}</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <p>{{ $t('home.blog.error') }}</p>
      </div>

      <!-- Blog Posts Grid -->
      <div v-else-if="filteredPosts.length > 0" class="blog-grid">
        <article
          v-for="post in filteredPosts"
          :key="post.slug"
          class="blog-card"
          @click="navigateToPost(post.slug)"
        >
          <div class="card-image">
            <span class="card-category">{{ post.category }}</span>
            <div class="card-placeholder">
              <span class="card-icon">{{ post.icon }}</span>
            </div>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ post.title }}</h3>
            <p class="card-description">{{ post.description }}</p>
            <div class="card-meta">
              <span class="card-date">{{ post.date }}</span>
              <span class="card-read-time">{{ post.readTime }} min read</span>
            </div>
          </div>
        </article>
      </div>

      <!-- No Posts State -->
      <div v-else class="no-posts-state">
        <p>{{ $t('home.blog.noArticles') }}</p>
      </div>

      <!-- Homepage Bottom Ad -->
      <CarbonAd
        placeholder-text="Homepage Footer Banner"
        class="homepage-ad"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CarbonAd from '../components/CarbonAd.vue';
import { getBlogPosts, getCategories } from '@/data/blogPosts';
import type { BlogPost, CategoryFilter } from '@/types/blog';

const router = useRouter();

// Reactive data
const selectedCategory = ref<CategoryFilter>('All');
const categories = ref<string[]>(['All']);
const posts = ref<BlogPost[]>([]);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);
const featuredPost = ref<BlogPost | null>(null);

const currentDate = new Date().toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
});

// Computed properties
const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All') {
    return posts.value;
  }
  return posts.value.filter(post => post.category === selectedCategory.value);
});

// Methods
const navigateToPost = (slug: string) => {
  const post = posts.value.find(p => p.slug === slug);
  if (post?.articlePath) {
    router.push(post.articlePath);
  } else {
    router.push(`/blog/${slug}`);
  }
};

const navigateToFeaturedPost = () => {
  if (featuredPost.value?.articlePath) {
    router.push(featuredPost.value.articlePath);
  } else if (featuredPost.value?.slug) {
    router.push(`/blog/${featuredPost.value.slug}`);
  } else {
    // Fallback to development stacks article
    router.push('/articles/development-stack-frameworks');
  }
};

// Lifecycle
onMounted(() => {
  try {
    posts.value = getBlogPosts();
    categories.value = getCategories();
    
    // Set the featured post to the development stacks article
    featuredPost.value = posts.value.find(post => post.slug === 'development-stack-frameworks') || null;
    
    loading.value = false;
  } catch (err) {
    error.value = 'Failed to load blog posts';
    loading.value = false;
  }
});
</script>

<style scoped>
.home {
  color: white;
}

/* Hero Section */
.hero {
  padding: 4rem 0;
  margin-bottom: 4rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 1rem;
  padding: 1rem;
}

.hero-content:hover {
  transform: translateY(-5px);
}

.hero-category {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 1.5rem 0;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.author-avatar {
  font-size: 2rem;
}

.author-name {
  font-weight: 600;
}

.hero-date {
  opacity: 0.8;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-placeholder {
  width: 300px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-icon {
  font-size: 4rem;
}

/* Blog Section */
.blog-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  padding: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.blog-header {
  text-align: center;
  margin-bottom: 3rem;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.blog-description {
  font-size: 1.1rem;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

.category-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-btn:hover,
.filter-btn.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.blog-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.card-image {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.3);
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.card-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon {
  font-size: 3rem;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-description {
  opacity: 0.8;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  opacity: 0.7;
}

.loading-state,
.error-state,
.no-posts-state {
  text-align: center;
  padding: 3rem;
  color: white;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.error-state {
  background: rgba(255, 99, 71, 0.1);
  border-color: rgba(255, 99, 71, 0.3);
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 2rem;
  }

  .blog-section {
    padding: 2rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
