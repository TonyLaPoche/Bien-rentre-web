<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-logo" @click="closeMobileMenu">
        <img src="/icon-br.svg" alt="Bien-Rentré" class="logo">
        <span class="brand-name">{{ $t('hero.title') }}</span>
      </router-link>

      <div class="nav-menu">
        <a href="./#features" class="nav-link">{{ $t('nav.features') }}</a>
        <a href="./#about" class="nav-link">{{ $t('nav.about') }}</a>
        <a href="./#roadmap" class="nav-link">{{ $t('nav.roadmap') }}</a>
        <a href="./#faq" class="nav-link">{{ $t('nav.faq') }}</a>
        <router-link to="/modele-economique" class="nav-cta">{{ $t('nav.support') }}</router-link>
      </div>

      <div class="nav-actions">
        <LanguageSelector />
        <button
          class="nav-toggle"
          @click="toggleMobileMenu"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <div class="nav-mobile" :class="{ 'nav-mobile--open': mobileMenuOpen }">
      <div class="nav-mobile-primary">
        <a href="#features" class="nav-mobile-link" @click="closeMobileMenu">{{ $t('nav.features') }}</a>
        <a href="#about" class="nav-mobile-link" @click="closeMobileMenu">{{ $t('nav.about') }}</a>
        <a href="#roadmap" class="nav-mobile-link" @click="closeMobileMenu">{{ $t('nav.roadmap') }}</a>
        <a href="#faq" class="nav-mobile-link" @click="closeMobileMenu">{{ $t('nav.faq') }}</a>
        <a href="#contact" class="nav-mobile-link" @click="closeMobileMenu">{{ $t('nav.contact') }}</a>
        <router-link to="/modele-economique" class="nav-mobile-cta" @click="closeMobileMenu">
          {{ $t('nav.support') }}
        </router-link>
      </div>

      <div class="nav-mobile-legal">
        <p class="nav-mobile-legal-label">{{ $t('nav.legal') }}</p>
        <div class="nav-mobile-legal-links">
          <router-link to="/terms" @click="closeMobileMenu">{{ $t('nav.terms') }}</router-link>
          <router-link to="/privacy" @click="closeMobileMenu">{{ $t('nav.privacy') }}</router-link>
          <router-link to="/cgv" @click="closeMobileMenu">{{ $t('nav.cgv') }}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import LanguageSelector from './LanguageSelector.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 72px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text-primary);
  flex-shrink: 0;
}

.logo {
  width: 36px;
  height: 36px;
}

.brand-name {
  font-size: 1.35rem;
  font-weight: 800;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 8px 12px;
  border-radius: 8px;
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--primary-color);
  background: var(--primary-light);
}

.nav-cta {
  margin-left: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--text-primary);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  transition: var(--transition);
  white-space: nowrap;
}

.nav-cta:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.nav-toggle span {
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  transition: var(--transition);
  transform-origin: center;
}

.nav-mobile {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--background);
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08);
  transform: translateY(-8px);
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
}

.nav-mobile--open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.nav-mobile-primary {
  padding: 8px 0 16px;
}

.nav-mobile-link {
  display: block;
  padding: 14px 20px;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
}

.nav-mobile-link:hover {
  background: var(--background-light);
  color: var(--primary-color);
}

.nav-mobile-cta {
  display: block;
  margin: 8px 20px 0;
  padding: 14px 18px;
  text-align: center;
  border-radius: 12px;
  background: var(--text-primary);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}

.nav-mobile-legal {
  padding: 16px 20px 20px;
  border-top: 1px solid var(--border-color);
  background: var(--background-light);
}

.nav-mobile-legal-label {
  margin: 0 0 10px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.nav-mobile-legal-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
}

.nav-mobile-legal-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.nav-mobile-legal-links a:hover {
  color: var(--primary-color);
}

@media (max-width: 900px) {
  .nav-menu {
    display: none;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-mobile {
    display: block;
  }

  .nav-container {
    padding: 0 16px;
    height: 68px;
  }

  .brand-name {
    font-size: 1.2rem;
  }
}

@media (max-width: 420px) {
  .brand-name {
    font-size: 1rem;
  }
}
</style>
