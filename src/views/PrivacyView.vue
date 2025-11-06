<template>
  <div class="legal-page">
    <div class="container">
      <header class="page-header">
        <div class="header-content">
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
        <div style="padding: 20px; background: #f0f0f0; border-radius: 8px; margin: 20px 0;">
          <h3>Test de contenu</h3>
          <p>Si vous voyez ce texte, le composant fonctionne.</p>
          <p>Titre de la page: {{ $t('privacy.title') }}</p>
        </div>

        <section class="legal-section">
          <h2 class="section-title">{{ $t('privacy.controller.title') }}</h2>
          <div class="section-content">
            <p>{{ $t('privacy.controller.content') }}</p>
          </div>
        </section>

        <section class="legal-section">
          <h2 class="section-title">{{ $t('privacy.data.title') }}</h2>
          <div class="section-content">
            <div class="highlight-box">
              <h3>{{ $t('privacy.data.location.title') }}</h3>
              <p>{{ $t('privacy.data.location.content') }}</p>
            </div>

            <div class="highlight-box">
              <h3>{{ $t('privacy.data.contact.title') }}</h3>
              <p>{{ $t('privacy.data.contact.content') }}</p>
            </div>

            <p>{{ $t('privacy.data.note') }}</p>
          </div>
        </section>

        <section class="legal-section">
          <h2 class="section-title">{{ $t('privacy.purpose.title') }}</h2>
          <div class="section-content">
            <p>{{ $t('privacy.purpose.content') }}</p>
            <ul>
              <li>{{ $t('privacy.purpose.list1') }}</li>
              <li>{{ $t('privacy.purpose.list2') }}</li>
              <li>{{ $t('privacy.purpose.list3') }}</li>
            </ul>
          </div>
        </section>

        <section class="legal-section">
          <h2 class="section-title">{{ $t('privacy.legal.title') }}</h2>
          <div class="section-content">
            <p>{{ $t('privacy.legal.content') }}</p>
            <ul>
              <li>{{ $t('privacy.legal.list1') }}</li>
              <li>{{ $t('privacy.legal.list2') }}</li>
              <li>{{ $t('privacy.legal.list3') }}</li>
            </ul>
          </div>
        </section>

        <section class="legal-section">
          <h2 class="section-title">{{ $t('privacy.recipients.title') }}</h2>
          <div class="section-content">
            <p>{{ $t('privacy.recipients.content') }}</p>
            <p>{{ $t('privacy.recipients.support') }}</p>
          </div>
        </section>

        <section class="legal-section">
          <h2 class="section-title">{{ $t('privacy.retention.title') }}</h2>
          <div class="section-content">
            <div class="highlight-box">
              <h3>{{ $t('privacy.retention.location.title') }}</h3>
              <p>{{ $t('privacy.retention.location.content') }}</p>
            </div>

            <div class="highlight-box">
              <h3>{{ $t('privacy.retention.contact.title') }}</h3>
              <p>{{ $t('privacy.retention.contact.content') }}</p>
            </div>
          </div>
        </section>

        <section class="legal-section">
          <h2 class="section-title">{{ $t('privacy.rights.title') }}</h2>
          <div class="section-content">
            <p>{{ $t('privacy.rights.content') }}</p>
            <ul>
              <li v-html="$t('privacy.rights.list1')"></li>
              <li v-html="$t('privacy.rights.list2')"></li>
              <li v-html="$t('privacy.rights.list3')"></li>
              <li v-html="$t('privacy.rights.list4')"></li>
              <li v-html="$t('privacy.rights.list5')"></li>
            </ul>
            <p>{{ $t('privacy.rights.contact') }}</p>
          </div>
        </section>

        <section class="legal-section">
          <h2 class="section-title">{{ $t('privacy.security.title') }}</h2>
          <div class="section-content">
            <p>{{ $t('privacy.security.content') }}</p>
            <p>{{ $t('privacy.security.encryption') }}</p>
          </div>
        </section>

        <section class="legal-section">
          <h2 class="section-title">{{ $t('privacy.contact.title') }}</h2>
          <div class="section-content">
            <p>{{ $t('privacy.contact.content') }}</p>
            <ul>
              <li>{{ $t('privacy.contact.list1') }}</li>
              <li>{{ $t('privacy.contact.list2') }}</li>
            </ul>
            <p>{{ $t('privacy.contact.response') }}</p>
          </div>
        </section>
      </main>

      <div class="contact-section">
        <h3 class="contact-title">{{ $t('privacy.questions.title') }}</h3>
        <p class="contact-text">{{ $t('privacy.questions.content') }}</p>
        <router-link to="/#contact" class="action-link">{{ $t('privacy.contactLink') }}</router-link>
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
