<template>
  <section id="contact" class="contact section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="section-subtitle">{{ t('contact.subtitle') }}</p>
      </div>

      <div class="contact-container">
        <div class="contact-card">
          <p class="contact-intro">{{ t('contact.intro') }}</p>

          <h3 class="card-title">{{ t('contact.requiredInfoTitle') }}</h3>
          <ul class="required-list">
            <li>{{ t('contact.requiredInfo1') }}</li>
            <li>{{ t('contact.requiredInfo2') }}</li>
          </ul>

          <h3 class="card-title">{{ t('contact.emailTitle') }}</h3>
          <div class="mail-list">
            <a class="mail-link" href="mailto:contact@antoineterrade.com">
              contact@antoineterrade.com
            </a>
            <a class="mail-link" href="mailto:terrade.antoine.pro@gmail.com">
              terrade.antoine.pro@gmail.com
            </a>
          </div>

          <div class="notice volunteer">
            <h4>{{ t('contact.volunteerTitle') }}</h4>
            <p>{{ t('contact.volunteerContent') }}</p>
          </div>

          <div class="notice free">
            <h4>{{ t('contact.freeTitle') }}</h4>
            <p>{{ t('contact.freeContent') }}</p>
          </div>
        </div>

        <div class="contact-info">
          <div class="info-item">
            <div class="info-icon">📧</div>
            <div class="info-content">
              <h4>{{ t('contact.sideTitle') }}</h4>
              <p>{{ t('contact.sideDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.contact {
  background: var(--background-light);
}

.contact-container {
  max-width: 800px;
  margin: 60px auto 0;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  align-items: start;
}

.contact-card {
  background: var(--background);
  padding: 40px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.contact-intro {
  margin-bottom: 20px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.card-title {
  margin: 20px 0 10px;
  color: var(--text-primary);
  font-size: 1.05rem;
  font-weight: 600;
}

.required-list {
  margin-left: 18px;
  color: var(--text-secondary);
}

.required-list li {
  margin-bottom: 8px;
}

.mail-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mail-link {
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
}

.mail-link:hover {
  text-decoration: underline;
}

.notice {
  margin-top: 18px;
  border-radius: 12px;
  padding: 14px;
  border: 1px solid var(--border-color);
}

.notice h4 {
  margin-bottom: 6px;
  color: var(--text-primary);
  font-weight: 600;
}

.notice p {
  color: var(--text-secondary);
  line-height: 1.55;
}

.notice.volunteer {
  background: #f8fafc;
}

.notice.free {
  background: #ecfdf5;
  border-color: #34d399;
}

.contact-info {
  background: var(--background);
  padding: 32px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.info-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.info-icon {
  font-size: 2rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-light);
  border-radius: 50%;
}

.info-content h4 {
  margin: 0 0 4px 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
}

.info-content p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .contact-card {
    padding: 32px 24px;
  }

  .contact-info {
    padding: 24px;
  }

  .info-item {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .info-icon {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
}
</style>
