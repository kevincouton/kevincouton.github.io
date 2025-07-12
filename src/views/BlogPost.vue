<template>
  <div class="blog-post">
    <div v-if="post" class="post-content">
      <div class="post-header">
        <div class="post-meta">
          <span class="post-category">{{ post.category }}</span>
          <span class="post-date">{{ post.date }}</span>
          <span class="post-read-time">{{ post.readTime }} min read</span>
        </div>
        <div class="post-version-info">
          <span class="version-label">Version {{ post.version || '1.0' }}</span>
          <span class="current-date">Last updated: {{ currentDate }}</span>
        </div>
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-author">
          <div class="author-avatar">👨‍💻</div>
          <span class="author-name">Kevin Couton</span>
        </div>
      </div>

      <div class="post-image">
        <div class="image-placeholder">
          <span class="image-icon">{{ post.icon }}</span>
        </div>
      </div>

      <!-- Header Ad - After title, before content -->
      <CarbonAd placeholder-text="Header Banner" />

      <div class="post-body">
        <div class="post-content-text" v-html="post.content"></div>

        <!-- Mid-article Ad -->
        <GoogleAd
          placeholder-text="Mid-Article Banner"
          :height="250"
          ad-format="rectangle"
        />
      </div>

      <!-- Bottom Article Ad -->
      <GoogleAd
        placeholder-text="Article Footer Banner"
        :height="200"
        ad-format="auto"
      />

      <div class="post-footer">
        <div class="contact-section">
          <h3 class="contact-title">Get in Touch</h3>
          <p class="contact-text">
            Have questions about this article or want to discuss these topics further?
            I'd love to hear from you!
          </p>
          <div class="contact-links">
            <a
              href="mailto:kevin.couton@gmail.com"
              class="contact-link email"
            >
              <span class="contact-icon">📧</span>
              <span class="contact-text-link">kevin.couton@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-couton-71632649/"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link linkedin"
            >
              <span class="contact-icon">💼</span>
              <span class="contact-text-link">Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        <div class="navigation-section">
          <router-link to="/" class="back-link">
            <span class="back-arrow">←</span>
            Back to Blog
          </router-link>
        </div>
      </div>
    </div>

    <div v-else class="post-not-found">
      <h1>Post Not Found</h1>
      <p>The requested blog post could not be found.</p>
      <router-link to="/" class="back-link">
        <span class="back-arrow">←</span>
        Back to Blog
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import GoogleAd from '../components/GoogleAd.vue';
import CarbonAd from '../components/CarbonAd.vue';
import { getBlogPost } from '@/data/blogPosts';
import type { BlogPost } from '@/types/blog';

const route = useRoute();

// Reactive data
const post = ref<BlogPost | null>(null);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

// Computed
const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// Lifecycle
onMounted(() => {
  const slug = route.params.slug as string;
  
  try {
    post.value = getBlogPost(slug) || null;
    if (!post.value) {
      error.value = 'Post not found';
    }
  } catch (err) {
    error.value = `Failed to load post: ${err instanceof Error ? err.message : 'Unknown error'}`;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.blog-post {
  color: white;
  max-width: 800px;
  margin: 0 auto;
}

.post-content {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  padding: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.post-header {
  margin-bottom: 3rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.post-category {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.post-date,
.post-read-time {
  opacity: 0.8;
  font-size: 0.9rem;
}

.post-version-info {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.version-label,
.current-date {
  opacity: 0.7;
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
}

.post-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.author-avatar {
  font-size: 1.5rem;
}

.author-name {
  font-weight: 600;
}

.post-image {
  margin-bottom: 3rem;
}

.image-placeholder {
  width: 100%;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.image-icon {
  font-size: 4rem;
}

.post-body {
  margin-bottom: 3rem;
}

.post-content-text {
  line-height: 1.7;
  font-size: 1.1rem;
}

.post-content-text h2 {
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
}

.post-content-text p {
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.post-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
}

.contact-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.contact-text {
  opacity: 0.9;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.contact-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  text-decoration: none;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  font-weight: 500;
}

.contact-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.contact-link.email:hover {
  background: rgba(234, 67, 53, 0.3);
}

.contact-link.linkedin:hover {
  background: rgba(0, 119, 181, 0.3);
}

.contact-icon {
  font-size: 1.2rem;
}

.navigation-section {
  text-align: center;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.back-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.back-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.back-link:hover .back-arrow {
  transform: translateX(-5px);
}

.post-not-found {
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.post-not-found h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.post-not-found p {
  opacity: 0.8;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .post-content {
    padding: 2rem;
    margin: 1rem;
  }

  .post-title {
    font-size: 2rem;
  }

  .post-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
