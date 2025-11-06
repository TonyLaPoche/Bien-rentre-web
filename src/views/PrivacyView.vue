<template>
  <div class="legal-page">
    <div class="container">
      <header class="page-header">
        <div class="header-content">
          <!-- DEBUG: Test if component loads -->
          <div style="background: red; color: white; padding: 10px; margin-bottom: 20px;">
            DEBUG: PrivacyView component loaded! Current route: {{ $route.path }}
          </div>

          <router-link to="/" class="back-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{ $t('nav.home') }}
          </router-link>
          <h1 class="page-title">{{ $t('privacy.title') }}</h1>
          <p class="page-subtitle">{{ $t('privacy.subtitle') }}</p>
        </div>
      </header>

      <main class="page-content">
        <section class="legal-section">
          <h2 class="section-title">Test Section</h2>
          <div class="section-content">
            <p>This is a test content for PrivacyView.</p>
            <p>Title translation: {{ $t('privacy.title') }}</p>
            <p>Controller content: {{ $t('privacy.controller.content') }}</p>
          </div>
        </section>

      </main>

      <div class="contact-section">
        <h3 class="contact-title">Questions?</h3>
        <p class="contact-text">Test completed.</p>
        <router-link to="/" class="action-link">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: var(--background);
  padding: 80px 0 40px;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 0;
  border-bottom: 1px solid var(--border-color);
}

.header-content {
  max-width: 600px;
  margin: 0 auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 20px;
  transition: var(--transition);
}

.back-link:hover {
  color: var(--primary-dark);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.page-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
}

.page-content {
  max-width: 800px;
  margin: 0 auto 60px;
}

.legal-section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-color);
}

.section-content {
  margin-bottom: 20px;
  line-height: 1.7;
}

.section-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 24px 0 12px 0;
}

.section-content p {
  margin-bottom: 16px;
  color: var(--text-secondary);
}

.section-content ul {
  margin-left: 20px;
  margin-bottom: 16px;
}

.section-content li {
  margin-bottom: 8px;
  color: var(--text-secondary);
}

.highlight-box {
  background: var(--background-light);
  border-left: 4px solid var(--primary-color);
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
}

.highlight-box h3 {
  color: var(--text-primary);
  margin-bottom: 10px;
}

.contact-section {
  background: var(--background-light);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  margin-top: 40px;
}

.contact-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.contact-text {
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.action-link {
  display: inline-block;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  padding: 12px 24px;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  transition: var(--transition);
}

.action-link:hover {
  background: var(--primary-color);
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .legal-page {
    padding: 60px 0 20px;
  }

  .page-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.25rem;
  }

  .contact-section {
    padding: 20px;
  }
}
</style>
