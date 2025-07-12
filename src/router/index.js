import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import BlogPost from '../views/BlogPost.vue'

const routes = [
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Handle GitHub Pages SPA routing
router.beforeEach((to, from, next) => {
  // Check if this is a GitHub Pages redirect
  if (to.query.redirect) {
    // Remove the redirect query parameter and navigate to the actual path
    const redirectPath = decodeURIComponent(to.query.redirect)
    delete to.query.redirect
    next({ path: redirectPath, query: to.query, hash: to.hash })
  } else {
    next()
  }
})

export default router
