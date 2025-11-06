<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="nav-logo">
        <img src="/icon-br.svg" alt="Bien-Rentré" class="logo">
        <span class="brand-name">{{ $t('hero.title') }}</span>
      </router-link>

      <!-- Menu desktop -->
      <div class="nav-menu">
        <a href="#features" class="nav-link">{{ $t('nav.features') }}</a>
        <a href="#faq" class="nav-link">{{ $t('nav.contact') }}</a>
        <a href="terms.html" class="nav-link">{{ $t('nav.terms') }}</a>
        <a href="privacy.html" class="nav-link">{{ $t('nav.privacy') }}</a>
      </div>

      <!-- Sélecteur de langue -->
      <LanguageSelector />

      <!-- Menu burger mobile -->
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

    <!-- Menu mobile -->
    <div class="nav-mobile" :class="{ 'nav-mobile--open': mobileMenuOpen }">
      <a href="#features" class="nav-mobile-link" @click="closeMobileMenu">{{ $t('nav.features') }}</a>
      <a href="#faq" class="nav-mobile-link" @click="closeMobileMenu">{{ $t('nav.contact') }}</a>
      <a href="terms.html" class="nav-mobile-link" @click="closeMobileMenu">{{ $t('nav.terms') }}</a>
      <a href="privacy.html" class="nav-mobile-link" @click="closeMobileMenu">{{ $t('nav.privacy') }}</a>
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
  background: var(--background);
  box-shadow: var(--shadow);
  z-index: 1000;
  padding: 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 800;
  font-size: 1.25rem;
}

.logo {
  width: 40px;
  height: 40px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 800;
}

.nav-menu {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: var(--transition);
}

.nav-link:hover::after {
  width: 100%;
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
  width: 24px;
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
  border-top: 1px solid var(--border-color);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
}

.nav-mobile--open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.nav-mobile-link {
  display: block;
  padding: 16px 20px;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition);
}

.nav-mobile-link:hover {
  background: var(--background-light);
  color: var(--primary-color);
}

/* Responsive */
@media (max-width: 768px) {
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
    height: 70px;
  }

  .brand-name {
    font-size: 1.25rem;
  }
}
</style>
