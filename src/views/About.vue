<template>
  <div class="about">
    <div class="about-content">
      <div class="about-header">
        <div class="avatar-section">
          <div class="avatar">
            <span class="avatar-emoji">👨‍💻</span>
          </div>
          <h1 class="name">Kevin Couton</h1>
          <p class="title">Software Developer & Tech Enthusiast</p>
        </div>
      </div>

      <div class="about-body">
        <div class="bio-section">
          <h2 class="section-title">About Me</h2>
          <p class="bio-text">
            I'm a passionate software developer with a love for creating innovative solutions 
            and sharing knowledge with the developer community. My interests span across 
            modern web technologies, software architecture, and emerging tech trends.
          </p>
          <p class="bio-text">
            Through this blog, I share my experiences, tutorials, and insights about 
            technology, hoping to help others on their development journey.
          </p>
        </div>

        <div class="skills-section">
          <h2 class="section-title">Technologies & Skills</h2>
          <div class="skills-grid">
            <div class="skill-item">
              <span class="skill-icon">⚡</span>
              <span class="skill-name">Vue.js</span>
            </div>
            <div class="skill-item">
              <span class="skill-icon">🚀</span>
              <span class="skill-name">Node.js</span>
            </div>
            <div class="skill-item">
              <span class="skill-icon">🎨</span>
              <span class="skill-name">CSS/SCSS</span>
            </div>
            <div class="skill-item">
              <span class="skill-icon">📱</span>
              <span class="skill-name">JavaScript</span>
            </div>
            <div class="skill-item">
              <span class="skill-icon">🔧</span>
              <span class="skill-name">Git</span>
            </div>
            <div class="skill-item">
              <span class="skill-icon">☁️</span>
              <span class="skill-name">Cloud Services</span>
            </div>
          </div>
        </div>

        <div class="connect-section">
          <h2 class="section-title">Let's Connect</h2>
          <p class="connect-text">
            Feel free to reach out if you'd like to collaborate, have questions, 
            or just want to chat about technology!
          </p>
          
          <div class="social-links">
            <a 
              href="https://www.linkedin.com/in/kevin-couton-71632649/" 
              target="_blank"
              rel="noopener noreferrer"
              class="social-link linkedin"
            >
              <span class="social-icon">💼</span>
              <span class="social-text">LinkedIn</span>
              <span class="social-arrow">→</span>
            </a>
            
            <a 
              href="https://github.com/kevincouton" 
              target="_blank"
              rel="noopener noreferrer"
              class="social-link github"
            >
              <span class="social-icon">🐙</span>
              <span class="social-text">GitHub</span>
              <span class="social-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  color: white;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-content {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  padding: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 800px;
  width: 100%;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.avatar-emoji {
  font-size: 3rem;
}

.name {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title {
  font-size: 1.2rem;
  opacity: 0.8;
  margin: 0;
}

.about-body {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
}

.bio-text {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.skill-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.skill-icon {
  font-size: 1.5rem;
}

.skill-name {
  font-weight: 500;
}

.connect-text {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  text-decoration: none;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  font-weight: 500;
  min-width: 150px;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.4);
}

.social-link.linkedin:hover {
  background: rgba(0, 119, 181, 0.3);
}

.social-link.github:hover {
  background: rgba(36, 41, 47, 0.3);
}

.social-icon {
  font-size: 1.5rem;
}

.social-text {
  flex: 1;
}

.social-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.social-link:hover .social-arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .about-content {
    padding: 2rem;
    margin: 1rem;
  }
  
  .name {
    font-size: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    flex-direction: column;
  }
}
</style>
