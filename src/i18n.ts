import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import fr from './locales/fr.json';
import zh from './locales/zh.json';

export type MessageLanguages = keyof typeof en;

// Type-safe locale messages
export interface MessageSchema {
  nav: {
    blog: string;
    about: string;
    language: string;
  };
  home: {
    hero: {
      title: string;
      description: string;
      author: string;
      readTime: string;
    };
    blog: {
      title: string;
      description: string;
      categories: {
        all: string;
        tech: string;
        lifestyle: string;
        tips: string;
      };
      loading: string;
      error: string;
      noArticles: string;
    };
  };
  articles: {
    backToBlog: string;
    categories: {
      tech: string;
      lifestyle: string;
      tips: string;
      development: string;
      frameworks: string;
      coaching: string;
    };
  };
  common: {
    readMore: string;
    author: string;
    date: string;
    readTime: string;
  };
}

export const SUPPORT_LOCALES = ['en', 'fr', 'zh'] as const;
export type SupportLocale = typeof SUPPORT_LOCALES[number];

export function setupI18n(options: { locale?: string } = {}) {
  const i18n = createI18n<[MessageSchema], SupportLocale>({
    locale: options.locale ?? 'en',
    fallbackLocale: 'en',
    messages: {
      en,
      fr,
      zh,
    },
    legacy: false,
    globalInjection: true,
  });
  return i18n;
}

// Helper function to get browser locale
export function getBrowserLocale(): SupportLocale {
  const navigatorLocale = navigator.language.split('-')[0];
  return SUPPORT_LOCALES.includes(navigatorLocale as SupportLocale) 
    ? (navigatorLocale as SupportLocale)
    : 'en';
}

// Helper function to set document language
export function setDocumentLocale(locale: SupportLocale): void {
  document.documentElement.lang = locale;
}
