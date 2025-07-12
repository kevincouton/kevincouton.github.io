<template>
  <div class="layout">
    <!-- Header Navigation -->
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <router-link to="/" class="brand-link">
            <span class="brand-icon">🌐</span>
            <span class="brand-text">Kevin Couton</span>
          </router-link>
        </div>
        
        <div class="nav-menu">
          <router-link to="/" class="nav-link">Blog</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
        </div>
        
        <div class="nav-actions">
          <div class="language-selector">
            <span class="language-icon">🌐</span>
            <span class="language-text">EN</span>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
}

.brand-icon {
  margin-right: 0.5rem;
  font-size: 1.5rem;
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-actions {
  display: flex;
  align-items: center;
}

.language-selector {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.language-selector:hover {
  background: rgba(255, 255, 255, 0.2);
}

.language-icon {
  margin-right: 0.5rem;
}

.main-content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-menu {
    gap: 1rem;
  }
  
  .main-content {
    padding: 1rem;
  }
}
</style>
