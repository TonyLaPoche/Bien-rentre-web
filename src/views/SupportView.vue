<template>
  <div class="support-page">
    <div class="container">
      <section class="support-header">
        <h1 class="support-title">{{ $t('support.title') }}</h1>
        <p class="support-subtitle">{{ $t('support.subtitle') }}</p>
        <p class="support-description">{{ $t('support.description') }}</p>
      </section>

      <section class="project-status">
        <div class="status-card">
          <div class="status-icon">🧪</div>
          <h3>{{ $t('support.status.title') }}</h3>
          <p>{{ $t('support.status.description') }}</p>
        </div>
        <div class="status-card">
          <div class="status-icon">📱</div>
          <h3>{{ $t('support.product.title') }}</h3>
          <p>{{ $t('support.product.description') }}</p>
        </div>
        <div class="status-card">
          <div class="status-icon">📉</div>
          <h3>{{ $t('support.patreon.title') }}</h3>
          <p>{{ $t('support.patreon.description') }}</p>
        </div>
      </section>

      <section class="economic-section">
        <h2 class="section-title">{{ $t('support.economic.title') }}</h2>
        <p class="section-subtitle">{{ $t('support.economic.subtitle') }}</p>
        <p class="section-description">{{ $t('support.economic.description') }}</p>

        <div class="economic-grid">
          <div class="economic-card">
            <div class="economic-icon">🆓</div>
            <h3>{{ $t('support.economic.freemium.title') }}</h3>
            <p>{{ $t('support.economic.freemium.content') }}</p>
          </div>
          <div class="economic-card">
            <div class="economic-icon">⭐</div>
            <h3>{{ $t('support.economic.premium.title') }}</h3>
            <p>{{ $t('support.economic.premium.content') }}</p>
          </div>
          <div class="economic-card">
            <div class="economic-icon">🎟️</div>
            <h3>{{ $t('support.economic.packs.title') }}</h3>
            <p>{{ $t('support.economic.packs.content') }}</p>
          </div>
          <div class="economic-card">
            <div class="economic-icon">⚖️</div>
            <h3>{{ $t('support.economic.fairness.title') }}</h3>
            <p>{{ $t('support.economic.fairness.content') }}</p>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <h2>{{ $t('support.cta.title') }}</h2>
        <p>{{ $t('support.cta.description') }}</p>
        <router-link to="/#contact" class="cta-button">
          {{ $t('support.cta.button') }}
        </router-link>
      </section>
    </div>
  </div>
</template>

<style scoped>
.support-page {
  min-height: 100vh;
  padding: 120px 0 80px;
  background: var(--background);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.support-header {
  text-align: center;
  margin-bottom: 80px;
}

.support-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 24px;
  line-height: 1.1;
}

.support-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 24px;
}

.support-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
}

/* Project Status */
.project-status {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-bottom: 100px;
}

/* Economic Model Section */
.economic-section {
  margin-bottom: 100px;
}

.section-subtitle {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 24px;
}

.economic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 60px;
}

.economic-card {
  background: var(--background-light);
  padding: 32px 24px;
  border-radius: var(--border-radius);
  text-align: center;
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.economic-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.economic-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.economic-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.economic-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.status-card {
  background: var(--background-light);
  padding: 40px 32px;
  border-radius: var(--border-radius);
  text-align: center;
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.status-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.status-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.status-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.status-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Patreon Section */
.patreon-section {
  margin-bottom: 100px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 16px;
}

.section-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
  line-height: 1.6;
}

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.tier-card {
  background: var(--background-light);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 32px;
  position: relative;
  transition: var(--transition);
}

.tier-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.tier-featured {
  border-color: var(--primary-color);
  background: linear-gradient(135deg, var(--background-light) 0%, rgba(99, 102, 241, 0.05) 100%);
}

.tier-premium {
  border-color: #ffd700;
  background: linear-gradient(135deg, var(--background-light) 0%, rgba(255, 215, 0, 0.05) 100%);
}

.tier-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-color);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
}

.tier-premium .tier-badge {
  background: #ffd700;
  color: var(--text-primary);
}

.tier-header {
  margin-bottom: 20px;
}

.tier-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.tier-price {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.price {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-color);
}

.period {
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.tier-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
}

.tier-benefits {
  list-style: none;
  padding: 0;
  margin-bottom: 32px;
}

.tier-benefits li {
  color: var(--text-primary);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.tier-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.tier-button {
  display: inline-block;
  width: 100%;
  padding: 16px 24px;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  text-align: center;
  transition: var(--transition);
}

.tier-button:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.tier-button-primary {
  background: var(--primary-color);
  box-shadow: var(--shadow);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--background) 100%);
  padding: 80px 40px;
  border-radius: var(--border-radius);
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta-button {
  display: inline-block;
  padding: 20px 40px;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 700;
  font-size: 1.125rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.cta-button:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px -4px rgba(99, 102, 241, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .support-page {
    padding: 100px 0 60px;
  }

  .support-title {
    font-size: 2.5rem;
  }

  .support-subtitle {
    font-size: 1.25rem;
  }

  .support-description {
    font-size: 1rem;
  }

  .project-status {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 60px;
  }

  .tiers-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .tier-card {
    padding: 24px;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-section {
    padding: 60px 20px;
  }

  .cta-section h2 {
    font-size: 2rem;
  }

  .cta-section p {
    font-size: 1rem;
  }

  .economic-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 40px;
  }

  .economic-card {
    padding: 24px 20px;
  }
}
</style>
