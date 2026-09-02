<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-block">
          <div class="footer-logo">
            <img src="/icon-br.svg" alt="Bien-Rentré" class="footer-icon">
            <span class="footer-brand">{{ $t('hero.title') }}</span>
          </div>
          <p class="footer-tagline">{{ $t('footer.tagline') }}</p>
        </div>

        <div class="footer-columns">
          <div class="footer-col">
            <h3>{{ $t('footer.product') }}</h3>
            <a href="#features">{{ $t('nav.features') }}</a>
            <a href="#about">{{ $t('nav.about') }}</a>
            <a href="#roadmap">{{ $t('nav.roadmap') }}</a>
            <a href="#faq">{{ $t('nav.faq') }}</a>
            <router-link to="/modele-economique">{{ $t('nav.support') }}</router-link>
            <a href="#contact">{{ $t('nav.contact') }}</a>
          </div>

          <div class="footer-col">
            <h3>{{ $t('nav.legal') }}</h3>
            <router-link to="/terms">{{ $t('nav.terms') }}</router-link>
            <router-link to="/privacy">{{ $t('nav.privacy') }}</router-link>
            <router-link to="/cgv">{{ $t('nav.cgv') }}</router-link>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 {{ $t('hero.title') }}. {{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: var(--text-primary);
  color: white;
  padding: 48px 0 24px;
  margin-top: auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.footer-icon {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
}

.footer-brand {
  font-size: 1.25rem;
  font-weight: 800;
  color: white;
}

.footer-tagline {
  margin: 0;
  max-width: 280px;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.95rem;
  line-height: 1.5;
}

.footer-columns {
  display: flex;
  gap: 56px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 140px;
}

.footer-col h3 {
  margin: 0 0 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

.footer-col a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: var(--transition);
}

.footer-col a:hover {
  color: white;
}

.footer-bottom {
  padding-top: 20px;
}

.footer-bottom p {
  margin: 0;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.55);
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    gap: 32px;
  }

  .footer-columns {
    gap: 32px;
  }

  .footer-tagline {
    max-width: none;
  }
}
</style>
