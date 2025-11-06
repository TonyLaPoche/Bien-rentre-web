<template>
  <section id="faq" class="faq section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('faq.title') }}</h2>
        <p class="section-subtitle">{{ $t('faq.subtitle') }}</p>
      </div>

      <div class="faq-container">
        <div
          v-for="(faq, key) in faqItems"
          :key="key"
          class="faq-item"
          :class="{ 'faq-item--open': faq.isOpen }"
        >
          <button
            class="faq-question"
            @click="toggleFAQ(key)"
            :aria-expanded="faq.isOpen"
            :aria-controls="`faq-answer-${key}`"
          >
            <span class="faq-question-text">{{ faq.question }}</span>
            <span class="faq-toggle" :class="{ 'faq-toggle--open': faq.isOpen }">
              {{ faq.isOpen ? '−' : '+' }}
            </span>
          </button>

          <div
            class="faq-answer"
            :id="`faq-answer-${key}`"
            :aria-hidden="!faq.isOpen"
          >
            <div class="faq-answer-content">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const faqItems = ref({
  emergency: {
    question: t('faq.questions.emergency.question'),
    answer: t('faq.questions.emergency.answer'),
    isOpen: false
  },
  dataProtection: {
    question: t('faq.questions.dataProtection.question'),
    answer: t('faq.questions.dataProtection.answer'),
    isOpen: false
  },
  offline: {
    question: t('faq.questions.offline.question'),
    answer: t('faq.questions.offline.answer'),
    isOpen: false
  },
  contacts: {
    question: t('faq.questions.contacts.question'),
    answer: t('faq.questions.contacts.answer'),
    isOpen: false
  },
  accuracy: {
    question: t('faq.questions.accuracy.question'),
    answer: t('faq.questions.accuracy.answer'),
    isOpen: false
  }
})

const toggleFAQ = (key) => {
  // Fermer toutes les autres FAQ
  Object.keys(faqItems.value).forEach(faqKey => {
    if (faqKey !== key) {
      faqItems.value[faqKey].isOpen = false
    }
  })

  // Basculer l'état de la FAQ cliquée
  faqItems.value[key].isOpen = !faqItems.value[key].isOpen
}
</script>

<style scoped>
.faq {
  background: var(--background);
}

.faq-container {
  max-width: 800px;
  margin: 60px auto 0;
}

.faq-item {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  margin-bottom: 16px;
  overflow: hidden;
  transition: var(--transition);
}

.faq-item:hover {
  box-shadow: var(--shadow);
}

.faq-question {
  width: 100%;
  background: none;
  border: none;
  padding: 24px 32px;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: var(--transition);
}

.faq-question:hover {
  background: var(--background-light);
}

.faq-question:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: -2px;
}

.faq-question-text {
  flex: 1;
  margin-right: 16px;
}

.faq-toggle {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  transition: var(--transition);
  min-width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.faq-toggle--open {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  background: var(--background-light);
}

.faq-item--open .faq-answer {
  max-height: 300px;
  padding: 0 32px 24px;
}

.faq-answer-content {
  padding-top: 16px;
  animation: fadeIn 0.4s ease;
}

.faq-answer-content p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .faq-container {
    margin-top: 40px;
  }

  .faq-question {
    padding: 20px 24px;
    font-size: 1rem;
  }

  .faq-item--open .faq-answer {
    padding: 0 24px 20px;
  }

  .faq-toggle {
    font-size: 1.25rem;
  }
}
</style>
