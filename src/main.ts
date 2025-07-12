import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { setupI18n, getBrowserLocale, setDocumentLocale } from './i18n';

// Get initial locale from localStorage or browser
const savedLocale = localStorage.getItem('locale') || getBrowserLocale();
const i18n = setupI18n({ locale: savedLocale });

// Set document language
setDocumentLocale(savedLocale as any);

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app');
