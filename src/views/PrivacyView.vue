<template>
  <div class="legal-page">
    <div class="container">
      <header class="page-header">
        <router-link to="/" class="back-link">← {{ t('legal.backHome') }}</router-link>
        <h1 class="page-title">{{ t('privacyPage.title') }}</h1>
        <p class="page-subtitle">{{ t('legal.updatedAt') }}</p>
      </header>

      <main class="page-content">
        <section class="legal-section">
          <h2>{{ t('privacyPage.sections.controller.title') }}</h2>
          <p>
            {{ t('privacyPage.sections.controller.content') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('privacyPage.sections.data.title') }}</h2>
          <ul>
            <li>{{ t('privacyPage.sections.data.list1') }}</li>
            <li>{{ t('privacyPage.sections.data.list2') }}</li>
            <li>{{ t('privacyPage.sections.data.list3') }}</li>
            <li>{{ t('privacyPage.sections.data.list4') }}</li>
          </ul>
          <p>
            {{ t('privacyPage.sections.data.note') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('privacyPage.sections.purposes.title') }}</h2>
          <ul>
            <li>{{ t('privacyPage.sections.purposes.list1') }}</li>
            <li>{{ t('privacyPage.sections.purposes.list2') }}</li>
            <li>{{ t('privacyPage.sections.purposes.list3') }}</li>
            <li>{{ t('privacyPage.sections.purposes.list4') }}</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>{{ t('privacyPage.sections.legalBasis.title') }}</h2>
          <ul>
            <li>{{ t('privacyPage.sections.legalBasis.list1') }}</li>
            <li>{{ t('privacyPage.sections.legalBasis.list2') }}</li>
            <li>{{ t('privacyPage.sections.legalBasis.list3') }}</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>{{ t('privacyPage.sections.recipients.title') }}</h2>
          <p>
            {{ t('privacyPage.sections.recipients.content') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('privacyPage.sections.retention.title') }}</h2>
          <ul>
            <li>{{ t('privacyPage.sections.retention.list1') }}</li>
            <li>{{ t('privacyPage.sections.retention.list2') }}</li>
            <li>{{ t('privacyPage.sections.retention.list3') }}</li>
          </ul>
          <p>
            {{ t('privacyPage.sections.retention.note') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('privacyPage.sections.rights.title') }}</h2>
          <p>
            {{ t('privacyPage.sections.rights.content1') }}
          </p>
          <p>
            {{ t('privacyPage.sections.rights.content2') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('privacyPage.sections.security.title') }}</h2>
          <p>
            {{ t('privacyPage.sections.security.content') }}
          </p>
        </section>

        <section class="legal-section legal-note">
          <h2>{{ t('privacyPage.sections.compliance.title') }}</h2>
          <p>
            {{ t('privacyPage.sections.compliance.content') }}
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
