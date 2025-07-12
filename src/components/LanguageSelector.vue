<template>
  <div class="language-selector" ref="dropdownRef">
    <button 
      class="language-button"
      @click="toggleDropdown"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <span class="language-icon">🌐</span>
      <span class="language-text">{{ $t('nav.language') }}</span>
      <span class="dropdown-arrow" :class="{ 'is-open': isOpen }">▼</span>
    </button>
    
    <div v-if="isOpen" class="language-dropdown">
      <button
        v-for="locale in availableLocales"
        :key="locale.code"
        class="language-option"
        :class="{ 'is-active': locale.code === currentLocale }"
        @click="changeLanguage(locale.code)"
      >
        <span class="language-flag">{{ locale.flag }}</span>
        <span class="language-name">{{ locale.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { setDocumentLocale, type SupportLocale } from '@/i18n';

const { locale } = useI18n();
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement>();

const availableLocales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

const currentLocale = computed(() => locale.value);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const changeLanguage = (newLocale: SupportLocale) => {
  locale.value = newLocale;
  setDocumentLocale(newLocale);
  localStorage.setItem('locale', newLocale);
  isOpen.value = false;
};

const closeDropdown = (event: Event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown);
});
</script>

<style scoped>
.language-selector {
  position: relative;
  display: inline-block;
}

.language-button {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  gap: 0.5rem;
}

.language-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.dropdown-arrow {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.dropdown-arrow.is-open {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 1000;
}

.language-option {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: transparent;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.language-option:hover {
  background: rgba(102, 126, 234, 0.1);
}

.language-option.is-active {
  background: rgba(102, 126, 234, 0.2);
  font-weight: 600;
}

.language-option:first-child {
  border-radius: 0.5rem 0.5rem 0 0;
}

.language-option:last-child {
  border-radius: 0 0 0.5rem 0.5rem;
}

.language-flag {
  font-size: 1.2rem;
}

.language-name {
  flex: 1;
  text-align: left;
}

@media (max-width: 768px) {
  .language-dropdown {
    right: -1rem;
    left: -1rem;
    margin-top: 0.25rem;
  }
}
</style>
