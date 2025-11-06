<template>
  <div id="app" class="app">
    <!-- Navigation -->
    <NavBar />

    <!-- Contenu principal -->
    <main>
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import FAQSection from './components/FAQSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Bricolage Grotesque', sans-serif;
  line-height: 1.6;
  color: #333;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Variables CSS pour les couleurs */
:root {
  --primary-color: #6366f1;
  --primary-dark: #4f46e5;
  --primary-light: #e0e7ff;
  --secondary-color: #64748b;
  --background: #ffffff;
  --background-light: #f8fafc;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border-color: #e2e8f0;
  --border-radius: 12px;
  --transition: all 0.3s ease;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Styles de base */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 16px;
  }
}
</style>
