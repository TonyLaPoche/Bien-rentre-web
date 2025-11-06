<template>
  <section id="features" class="features section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('features.title') }}</h2>
        <p class="section-subtitle">{{ $t('features.subtitle') }}</p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3 class="feature-title">{{ $t('features.items.download.title') }}</h3>
          <p class="feature-description">{{ $t('features.items.download.description') }}</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">👥</div>
          <h3 class="feature-title">{{ $t('features.items.chooseContacts.title') }}</h3>
          <p class="feature-description">{{ $t('features.items.chooseContacts.description') }}</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🔗</div>
          <h3 class="feature-title">{{ $t('features.items.activate.title') }}</h3>
          <p class="feature-description">{{ $t('features.items.activate.description') }}</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">✅</div>
          <h3 class="feature-title">{{ $t('features.items.safeReturn.title') }}</h3>
          <p class="feature-description">{{ $t('features.items.safeReturn.description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de logique spécifique pour ce composant
</script>

<style scoped>
.features {
  background: var(--background-light);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 60px;
}

.feature-card {
  background: var(--background);
  padding: 40px 32px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  text-align: center;
  transition: var(--transition);
  border: 1px solid var(--border-color);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 24px;
  display: block;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Animations d'entrée */
.feature-card:nth-child(1) {
  animation: fadeInUp 0.6s ease-out;
}

.feature-card:nth-child(2) {
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.feature-card:nth-child(3) {
  animation: fadeInUp 0.6s ease-out 0.4s both;
}

.feature-card:nth-child(4) {
  animation: fadeInUp 0.6s ease-out 0.6s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 40px;
  }

  .feature-card {
    padding: 32px 24px;
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .feature-title {
    font-size: 1.125rem;
  }
}
</style>
