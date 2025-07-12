<template>
  <div class="article-layout">
    <div class="article-header">
      <router-link to="/" class="back-link">
        <span class="back-arrow">←</span> Back to Blog
      </router-link>
      <div class="article-meta">
        <span class="article-category">{{ category }}</span>
        <span class="article-date">{{ date }}</span>
        <span class="article-read-time">{{ readTime }} min read</span>
      </div>
    </div>

    <article class="article-content">
      <header class="article-title-section">
        <h1>{{ title }}</h1>
        <div class="author-info">
          <div class="author-avatar">👨‍💻</div>
          <span class="author-name">Kevin Couton</span>
        </div>
      </header>

      <div class="article-body">
        <slot name="content"></slot>
      </div>
    </article>

    <footer class="article-footer">
      <div class="contact-section">
        <h3>Get in Touch</h3>
        <p>Have questions about this article or want to discuss these topics further? I'd love to hear from you!</p>
        <div class="contact-links">
          <a href="mailto:kevin.couton@gmail.com" class="contact-link email">
            <span class="contact-icon">📧</span>
            <span>kevin.couton@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/kevin-couton-71632649/" target="_blank" rel="noopener noreferrer" class="contact-link linkedin">
            <span class="contact-icon">💼</span>
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

interface Props {
  title: string;
  category?: string;
  date?: string;
  readTime?: number;
  metaDescription?: string;
  keywords?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  category: 'Article',
  date: new Date().toLocaleDateString(),
  readTime: 5,
  metaDescription: '',
  keywords: () => []
});

// SEO optimization
onMounted(() => {
  // Update document title
  document.title = `${props.title} | Kevin Couton`;
  
  // Update meta description
  if (props.metaDescription) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', props.metaDescription);
    }
  }
  
  // Update keywords
  if (props.keywords.length > 0) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', props.keywords.join(', '));
    } else {
      const keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = props.keywords.join(', ');
      document.head.appendChild(keywordsMeta);
    }
  }
});
</script>

<style scoped>
.article-layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.article-header {
  margin-bottom: 3rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  margin-bottom: 2rem;
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

.article-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.article-category {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.article-date,
.article-read-time {
  opacity: 0.8;
  font-size: 0.9rem;
}

.article-title-section {
  margin-bottom: 3rem;
}

.article-title-section h1 {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.author-info {
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

.article-body {
  line-height: 1.7;
  font-size: 1.1rem;
}

.article-body h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  color: white;
}

.article-body h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 1.5rem 0 0.8rem;
  color: white;
}

.article-body p {
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.article-body ul,
.article-body ol {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.article-body li {
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.article-body strong {
  color: white;
  font-weight: 600;
}

.article-footer {
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
}

.contact-section {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-section h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.contact-section p {
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

@media (max-width: 768px) {
  .article-layout {
    padding: 1rem;
    margin: 1rem;
  }
  
  .article-title-section h1 {
    font-size: 2rem;
  }
  
  .article-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .contact-links {
    flex-direction: column;
  }
}
</style>

