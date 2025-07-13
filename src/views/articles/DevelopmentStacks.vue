<template>
  <div v-if="!articleContent" class="loading-container">
    <p>Loading article...</p>
  </div>
  <ArticleLayout
    v-else
    :title="articleContent.title"
    :category="articleContent.category"
    date="2024-01-25"
    :read-time="10"
    :meta-description="articleContent.metaDescription"
    :keywords="['TanStack', 'JHipster', 'Full-Stack Development', 'React', 'Vue.js', 'Next.js', 'Nuxt.js', 'Spring Boot', 'Django']"
  >
    <template #content>

      <h2>{{ articleContent.content.introduction.title }}</h2>
      <p>{{ articleContent.content.introduction.text }}</p>

      <h2>{{ articleContent.content.understanding.title }}</h2>
      <p>{{ articleContent.content.understanding.text }}</p>

      <h2>{{ articleContent.content.tanstack.title }}</h2>
      <h3>{{ articleContent.content.tanstack.overview.title }}</h3>
      <p>{{ articleContent.content.tanstack.overview.text }}</p>
      <h3>{{ articleContent.content.tanstack.features.title }}</h3>
      <ul>
        <li v-for="feature in articleContent.content.tanstack.features.items" :key="feature.title">
          <strong>{{ feature.title }}</strong>: {{ feature.description }}
        </li>
      </ul>

      <h2>{{ articleContent.content.jhipster.title }}</h2>
      <h3>{{ articleContent.content.jhipster.overview.title }}</h3>
      <p>{{ articleContent.content.jhipster.overview.text }}</p>
      <h3>{{ articleContent.content.jhipster.features.title }}</h3>
      <ul>
        <li v-for="feature in articleContent.content.jhipster.features.items" :key="feature.title">
          <strong>{{ feature.title }}</strong>: {{ feature.description }}
        </li>
      </ul>

      <h2>{{ articleContent.content.nextjs.title }}</h2>
      <h3>{{ articleContent.content.nextjs.overview.title }}</h3>
      <p>{{ articleContent.content.nextjs.overview.text }}</p>
      <h3>{{ articleContent.content.nextjs.features.title }}</h3>
      <ul>
        <li v-for="feature in articleContent.content.nextjs.features.items" :key="feature.title">
          <strong>{{ feature.title }}</strong>: {{ feature.description }}
        </li>
      </ul>

      <h2>{{ articleContent.content.conclusion.title }}</h2>
      <p>{{ articleContent.content.conclusion.text }}</p>
    </template>
  </ArticleLayout>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import ArticleLayout from '@/components/ArticleLayout.vue';

// Article content reactive reference
const articleContent = ref(null);

const localesToPaths = {
  en: () => import('./locales/en/development-stacks.json'),
  fr: () => import('./locales/fr/development-stacks.json'),
  zh: () => import('./locales/zh/development-stacks.json'),
};

const { locale } = useI18n();

async function loadContent() {
  try {
    const { default: content } = await localesToPaths[locale.value]();
    articleContent.value = content;
  } catch (error) {
    console.error('Failed to load article content:', error);
  }
}

// Watch locale changes and load corresponding content
watchEffect(() => {
  if (locale.value) loadContent();
});
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: white;
  font-size: 1.1rem;
}
</style>

