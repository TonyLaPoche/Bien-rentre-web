<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="/icon-br.svg" alt="Bien-Rentré" class="footer-icon">
          <span class="footer-brand">{{ $t('hero.title') }}</span>
        </div>

        <div class="footer-links">
          <a href="#features">{{ $t('nav.features') }}</a>
          <a href="#faq">{{ $t('nav.contact') }}</a>
          <router-link to="/terms">{{ $t('nav.terms') }}</router-link>
          <router-link to="/privacy">{{ $t('nav.privacy') }}</router-link>
        </div>

        <div class="footer-copyright">
          <p>&copy; 2025 {{ $t('hero.title') }}. {{ $t('footer.copyright') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Pas de logique spécifique pour ce composant
</script>

<style scoped>
.footer {
  background: var(--text-primary);
  color: white;
  padding: 40px 0 20px;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 40px;
  align-items: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
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

.footer-links {
  display: flex;
  gap: 32px;
  justify-content: center;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.footer-links a:hover {
  color: white;
  text-decoration: underline;
}

.footer-copyright {
  text-align: right;
}

.footer-copyright p {
  margin: 0;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }

  .footer-copyright {
    text-align: center;
  }
}
</style>
