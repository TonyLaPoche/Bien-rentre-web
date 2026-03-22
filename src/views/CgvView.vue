<template>
  <div class="legal-page">
    <div class="container">
      <header class="page-header">
        <router-link to="/" class="back-link">← {{ t('legal.backHome') }}</router-link>
        <h1 class="page-title">{{ t('cgvPage.title') }}</h1>
        <p class="page-subtitle">{{ t('legal.updatedAt') }}</p>
      </header>

      <main class="page-content">
        <section class="legal-section">
          <h2>{{ t('cgvPage.sections.object.title') }}</h2>
          <p>
            {{ t('cgvPage.sections.object.content') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('cgvPage.sections.products.title') }}</h2>
          <p>
            {{ t('cgvPage.sections.products.intro') }}
          </p>
          <ul>
            <li>{{ t('cgvPage.sections.products.list1') }}</li>
            <li>{{ t('cgvPage.sections.products.list2') }}</li>
            <li>{{ t('cgvPage.sections.products.list3') }}</li>
          </ul>
          <p>
            {{ t('cgvPage.sections.products.note') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('cgvPage.sections.payment.title') }}</h2>
          <p>
            {{ t('cgvPage.sections.payment.content') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('cgvPage.sections.withdrawal.title') }}</h2>
          <p>
            {{ t('cgvPage.sections.withdrawal.content') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('cgvPage.sections.duration.title') }}</h2>
          <p>
            {{ t('cgvPage.sections.duration.content') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('cgvPage.sections.liability.title') }}</h2>
          <p>
            {{ t('cgvPage.sections.liability.content') }}
          </p>
        </section>

        <section class="legal-section">
          <h2>{{ t('cgvPage.sections.contact.title') }}</h2>
          <p>
            {{ t('cgvPage.sections.contact.content') }}
          </p>
        </section>

        <section class="legal-section legal-note">
          <h2>{{ t('cgvPage.sections.compliance.title') }}</h2>
          <p>
            {{ t('cgvPage.sections.compliance.content') }}
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
