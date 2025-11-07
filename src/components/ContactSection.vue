<template>
  <section id="contact" class="contact section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('contact.title') }}</h2>
        <p class="section-subtitle">{{ $t('contact.subtitle') }}</p>
      </div>

      <div class="contact-container">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="title" class="form-label">{{ $t('contact.form.title') }} *</label>
            <input
              id="title"
              v-model="form.title"
              type="text"
              class="form-input"
              :class="{ 'form-input--error': errors.title }"
              required
            >
            <span v-if="errors.title" class="form-error">{{ errors.title }}</span>
          </div>

          <div class="form-group">
            <label for="email" class="form-label">{{ $t('contact.form.email') }} *</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              :class="{ 'form-input--error': errors.email }"
              required
            >
            <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label for="message" class="form-label">{{ $t('contact.form.message') }} *</label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-textarea"
              :class="{ 'form-textarea--error': errors.message }"
              rows="6"
              required
            ></textarea>
            <span v-if="errors.message" class="form-error">{{ errors.message }}</span>
          </div>

          <button
            type="submit"
            class="btn-submit"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.send') }}
          </button>

          <div v-if="submitMessage" class="submit-message" :class="submitMessage.type">
            {{ submitMessage.text }}
          </div>
        </form>

        <div class="contact-info">
          <div class="info-item">
            <div class="info-icon">📧</div>
            <div class="info-content">
              <h4>Email</h4>
              <p>contact@antoineterrade.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import emailjs from '@emailjs/browser'

const { t } = useI18n()

const form = reactive({
  title: '',
  email: '',
  message: ''
})

const errors = reactive({
  title: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref(null)

const validateForm = () => {
  let isValid = true

  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })

  // Validate title
  if (!form.title.trim()) {
    errors.title = 'Le titre est requis'
    isValid = false
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'L\'email est requis'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Format d\'email invalide'
    isValid = false
  }

  // Validate message
  if (!form.message.trim()) {
    errors.message = 'Le message est requis'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitMessage.value = null

  try {
    // Configuration EmailJS (à remplacer par vos vraies clés)
    const serviceId = 'your_service_id'
    const templateId = 'your_template_id'
    const publicKey = 'your_public_key'

    const templateParams = {
      from_title: form.title,
      from_email: form.email,
      message: form.message,
      to_email: 'contact@antoineterrade.com'
    }

    // Simulation d'envoi (remplacer par l'appel réel EmailJS)
    console.log('Envoi du message:', templateParams)

    // Simulation d'attente
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Simulation de succès
    submitMessage.value = {
      type: 'success',
      text: t('contact.form.success')
    }

    // Reset form
    form.title = ''
    form.email = ''
    form.message = ''

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    submitMessage.value = {
      type: 'error',
      text: t('contact.form.error')
    }
  } finally {
    isSubmitting.value = false
  }
}
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

.contact-form {
  background: var(--background);
  padding: 40px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--text-primary);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
  background: var(--background);
  color: var(--text-primary);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-input--error,
.form-textarea--error {
  border-color: #ef4444;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-error {
  display: block;
  margin-top: 4px;
  font-size: 0.875rem;
  color: #ef4444;
}

.btn-submit {
  width: 100%;
  padding: 16px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.btn-submit:hover:not(:disabled) {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.submit-message {
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: var(--border-radius);
  font-weight: 500;
  text-align: center;
}

.submit-message.success {
  background: #d1fae5;
  color: #065f46;
  border: 1px solid #a7f3d0;
}

.submit-message.error {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #fca5a5;
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
  .contact-form {
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
