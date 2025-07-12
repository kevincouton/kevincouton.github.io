<template>
  <div v-if="showAds" class="carbon-ad-container">
    <span class="ad-label">Advertisement</span>
    <div class="ad-content">
      <div :id="carbonId" class="carbon-ad"></div>
    </div>
  </div>
  <!-- Placeholder for development/before approval -->
  <div v-else class="ad-placeholder">
    <span class="ad-label">Advertisement Placeholder</span>
    <div class="placeholder-content">
      <div class="placeholder-text">
        <span class="placeholder-icon">💻</span>
        <p>Carbon Ads</p>
        <p class="placeholder-size">{{ placeholderText }}</p>
        <p class="placeholder-desc">Developer-focused advertising</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarbonAd',
  props: {
    placement: {
      type: String,
      default: 'your-placement-id' // Replace with your Carbon placement ID
    },
    serve: {
      type: String,
      default: 'your-serve-id' // Replace with your Carbon serve ID
    },
    placeholderText: {
      type: String,
      default: 'Developer Ad'
    }
  },
  data() {
    return {
      showAds: false, // Set to true once approved by Carbon
      carbonId: `carbon-${Math.random().toString(36).substring(7)}`
    };
  },
  mounted() {
    if (this.showAds) {
      this.loadCarbonAd();
    }
  },
  beforeUnmount() {
    // Clean up Carbon ads script
    const carbonScript = document.getElementById('_carbonads_js');
    if (carbonScript) {
      carbonScript.remove();
    }
  },
  methods: {
    loadCarbonAd() {
      if (window._carbonads) {
        window._carbonads.refresh();
        return;
      }

      const script = document.createElement('script');
      script.async = true;
      script.type = 'text/javascript';
      script.src = `//cdn.carbonads.com/carbon.js?serve=${this.serve}&placement=${this.placement}`;
      script.id = '_carbonads_js';

      const carbonElement = document.getElementById(this.carbonId);
      if (carbonElement) {
        carbonElement.appendChild(script);
      }
    }
  }
};
</script>

<style scoped>
.carbon-ad-container, .ad-placeholder {
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

.ad-label {
  display: block;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
  text-align: center;
}

.ad-content {
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-content {
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border: 2px dashed rgba(255, 255, 255, 0.2);
}

.placeholder-text {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}

.placeholder-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.placeholder-text p {
  margin: 0.25rem 0;
  font-weight: 500;
}

.placeholder-size {
  font-size: 0.9rem;
  opacity: 0.8;
}

.placeholder-desc {
  font-size: 0.8rem;
  opacity: 0.6;
  font-style: italic;
}

/* Carbon Ads styling to match your theme */
.carbon-ad-container :deep(.carbon-ad) {
  font-family: inherit;
}

.carbon-ad-container :deep(.carbon-text) {
  color: rgba(255, 255, 255, 0.9) !important;
  text-decoration: none !important;
}

.carbon-ad-container :deep(.carbon-poweredby) {
  color: rgba(255, 255, 255, 0.6) !important;
  font-size: 0.75rem !important;
}

.carbon-ad-container :deep(.carbon-img) {
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .carbon-ad-container, .ad-placeholder {
    margin: 1rem 0;
    padding: 0.75rem;
  }
}
</style>
