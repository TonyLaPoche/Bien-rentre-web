<template>
  <div class="legal-page">
    <div class="container">
      <header class="page-header">
        <router-link to="/" class="back-link">← {{ t('legal.backHome') }}</router-link>
        <h1 class="page-title">{{ t('termsPage.title') }}</h1>
        <p class="page-subtitle">{{ t('legal.updatedAt') }}</p>
      </header>

      <main class="page-content">
        <section class="legal-section">
          <h2>{{ t('termsPage.sections.object.title') }}</h2>
          <p>
            {{ t('termsPage.sections.object.content') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('termsPage.sections.access.title') }}</h2>
          <ul>
            <li>{{ t('termsPage.sections.access.list1') }}</li>
            <li>{{ t('termsPage.sections.access.list2') }}</li>
            <li>{{ t('termsPage.sections.access.list3') }}</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>{{ t('termsPage.sections.operation.title') }}</h2>
          <p>
            {{ t('termsPage.sections.operation.content1') }}
          </p>
          <p>
            {{ t('termsPage.sections.operation.content2') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('termsPage.sections.limits.title') }}</h2>
          <p>
            {{ t('termsPage.sections.limits.content') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('termsPage.sections.accounts.title') }}</h2>
          <p>
            {{ t('termsPage.sections.accounts.content') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('termsPage.sections.economics.title') }}</h2>
          <p>
            {{ t('termsPage.sections.economics.content') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('termsPage.sections.ip.title') }}</h2>
          <p>
            {{ t('termsPage.sections.ip.content') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('termsPage.sections.law.title') }}</h2>
          <p>
            {{ t('termsPage.sections.law.content') }}
          </p>
        </section>

        <section class="legal-section legal-note">
          <h2>{{ t('termsPage.sections.compliance.title') }}</h2>
          <p>
            {{ t('termsPage.sections.compliance.content') }}
          </p>
        </section>
      </main>
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
  padding: 100px 0 40px;
}

.page-header {
  max-width: 840px;
  margin: 0 auto 32px;
}

.back-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
}

.page-title {
  margin-top: 12px;
  font-size: 2.25rem;
  color: var(--text-primary);
}

.page-subtitle {
  color: var(--text-secondary);
}

.page-content {
  max-width: 840px;
  margin: 0 auto;
}

.legal-section {
  margin-bottom: 24px;
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: var(--background-light);
}

.legal-section h2 {
  margin-bottom: 10px;
  color: var(--text-primary);
}

.legal-section p,
.legal-section li {
  color: var(--text-secondary);
}

.legal-note {
  border-left: 4px solid var(--primary-color);
}
</style>
