import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import BlogPost from '../views/BlogPost.vue';
// Import article pages
import TogafGuide from '../views/articles/TogafGuide.vue';
import DevelopmentStacks from '../views/articles/DevelopmentStacks.vue';
import MentoringCoaching from '../views/articles/MentoringCoaching.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPost,
    props: true
  },
  // Article pages
  {
    path: '/articles/togaf-comprehensive-guide',
    name: 'TogafGuide',
    component: TogafGuide
  },
  {
    path: '/articles/development-stack-frameworks',
    name: 'DevelopmentStacks',
    component: DevelopmentStacks
  },
  {
    path: '/articles/mentoring-vs-coaching',
    name: 'MentoringCoaching',
    component: MentoringCoaching
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Handle GitHub Pages SPA routing
router.beforeEach((to, from, next) => {
  // Check if this is a GitHub Pages redirect
  if (to.query.redirect) {
    // Remove the redirect query parameter and navigate to the actual path
    const redirectPath = decodeURIComponent(to.query.redirect);
    delete to.query.redirect;
    next({ path: redirectPath, query: to.query, hash: to.hash });
  } else {
    next();
  }
});

export default router;
