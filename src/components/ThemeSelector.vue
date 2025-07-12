<template>
  <div class="theme-selector">
    <div class="theme-button" @click="toggleThemeMenu">
      <span class="theme-icon">🎨</span>
      <span class="theme-text">Theme</span>
    </div>

    <div v-if="showThemeMenu" class="theme-menu">
      <div class="theme-menu-header">
        <span>Choose Theme</span>
      </div>
      <div class="theme-options">
        <div
          v-for="theme in themes"
          :key="theme.name"
          class="theme-option"
          :class="{ active: currentTheme === theme.name }"
          @click="selectTheme(theme.name)"
        >
          <div class="theme-preview" :style="{ background: theme.gradient }"></div>
          <span class="theme-name">{{ theme.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemeSelector',
  emits: ['theme-changed'],
  data() {
    return {
      showThemeMenu: false,
      currentTheme: 'default',
      themes: [
        {
          name: 'default',
          label: 'Ocean Blue',
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
          name: 'sunset',
          label: 'Sunset Orange',
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
          name: 'forest',
          label: 'Forest Green',
          gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
          name: 'purple',
          label: 'Purple Dreams',
          gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
        },
        {
          name: 'dark',
          label: 'Dark Mode',
          gradient: 'linear-gradient(135deg, #2c3e50 0%, #4a6741 100%)'
        },
        {
          name: 'warm',
          label: 'Warm Sunset',
          gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
        }
      ]
    };
  },
  mounted() {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
      this.applyTheme(savedTheme);
    }

    // Close menu when clicking outside
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    toggleThemeMenu() {
      this.showThemeMenu = !this.showThemeMenu;
    },
    selectTheme(themeName) {
      this.currentTheme = themeName;
      this.applyTheme(themeName);
      this.showThemeMenu = false;

      // Save to localStorage
      localStorage.setItem('selected-theme', themeName);
    },
    applyTheme(themeName) {
      const theme = this.themes.find(t => t.name === themeName);
      if (theme) {
        // Apply theme to the layout element
        const layoutElement = document.querySelector('.layout');
        if (layoutElement) {
          layoutElement.style.background = theme.gradient;
        }

        // Emit event to parent components if needed
        this.$emit('theme-changed', { name: themeName, gradient: theme.gradient });
      }
    },
    handleOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.showThemeMenu = false;
      }
    }
  }
};
</script>

<style scoped>
.theme-selector {
  position: relative;
  display: flex;
  align-items: center;
}

.theme-button {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.theme-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.theme-icon {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

.theme-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  min-width: 200px;
  z-index: 1000;
}

.theme-menu-header {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.theme-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.theme-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.theme-option:hover {
  background: rgba(255, 255, 255, 0.3);
}

.theme-option.active {
  background: rgba(255, 255, 255, 0.4);
  border-color: rgba(103, 126, 234, 0.5);
}

.theme-preview {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.theme-name {
  font-weight: 500;
  color: #333;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .theme-menu {
    right: -1rem;
    left: -1rem;
    width: auto;
  }

  .theme-button {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }

  .theme-text {
    display: none;
  }
}
</style>
