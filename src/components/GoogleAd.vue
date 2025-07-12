<template>
  <div v-if="showAds" class="google-ad-container">
    <span class="ad-label">Advertisement</span>
    <div class="ad-content">
      <ins
        class="adsbygoogle"
        :style="adStyle"
        :data-ad-client="adClient"
        :data-ad-slot="adSlot"
        :data-ad-format="adFormat"
        :data-full-width-responsive="fullWidthResponsive"
      ></ins>
    </div>
  </div>
  <!-- Placeholder for development/before approval -->
  <div v-else class="ad-placeholder">
    <span class="ad-label">Advertisement Placeholder</span>
    <div class="placeholder-content">
      <div class="placeholder-text">
        <span class="placeholder-icon">📊</span>
        <p>Google AdSense</p>
        <p class="placeholder-size">{{ placeholderText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleAd',
  props: {
    adSlot: {
      type: String,
      default: '1234567890' // Replace with your actual ad slot ID
    },
    adFormat: {
      type: String,
      default: 'auto'
    },
    adClient: {
      type: String,
      default: 'ca-pub-xxxxxxxxxxxxxxxxx' // Replace with your AdSense client ID
    },
    width: {
      type: [String, Number],
      default: '100%'
    },
    height: {
      type: [String, Number],
      default: '250'
    },
    fullWidthResponsive: {
      type: String,
      default: 'true'
    },
    placeholderText: {
      type: String,
      default: 'Responsive Banner'
    }
  },
  data() {
    return {
      showAds: false // Set to true once approved by AdSense
    };
  },
  computed: {
    adStyle() {
      return {
        display: 'block',
        width: typeof this.width === 'number' ? `${this.width}px` : this.width,
        height: typeof this.height === 'number' ? `${this.height}px` : this.height
      };
    }
  },
  mounted() {
    if (this.showAds && window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }
};
</script>

<style scoped>
.google-ad-container, .ad-placeholder {
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
  min-height: 100px;
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

@media (max-width: 768px) {
  .google-ad-container, .ad-placeholder {
    margin: 1rem 0;
    padding: 0.75rem;
  }
}
</style>
