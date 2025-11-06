<template>
  <div class="language-selector">
    <button
      class="lang-btn"
      @click="toggleDropdown"
      :aria-expanded="dropdownOpen"
      aria-label="Changer de langue"
    >
      <span class="lang-flag">{{ currentLang === 'fr' ? '🇫🇷' : '🇺🇸' }}</span>
      <span class="lang-text">{{ currentLang === 'fr' ? 'FR' : 'EN' }}</span>
      <svg class="dropdown-arrow" :class="{ 'dropdown-arrow--open': dropdownOpen }" viewBox="0 0 24 24" width="16" height="16">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </button>

    <div class="lang-dropdown" :class="{ 'lang-dropdown--open': dropdownOpen }">
      <button
        class="lang-option"
        @click="changeLanguage('fr')"
        :class="{ 'lang-option--active': currentLang === 'fr' }"
      >
        <span class="lang-flag">🇫🇷</span>
        <span class="lang-text">Français</span>
      </button>
      <button
        class="lang-option"
        @click="changeLanguage('en')"
        :class="{ 'lang-option--active': currentLang === 'en' }"
      >
        <span class="lang-flag">🇺🇸</span>
        <span class="lang-text">English</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const dropdownOpen = ref(false)

const currentLang = computed(() => locale.value)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const changeLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('bien-rentre-language', lang)
  dropdownOpen.value = false
}

// Fermer le dropdown quand on clique ailleurs
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
      dropdownOpen.value = false
    }
  })
})
</script>

<style scoped>
.language-selector {
  position: relative;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: none;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: var(--transition);
}

.lang-btn:hover {
  border-color: var(--primary-color);
  background: var(--primary-light);
}

.lang-flag {
  font-size: 1rem;
}

.dropdown-arrow {
  transition: var(--transition);
  fill: var(--text-secondary);
}

.dropdown-arrow--open {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: var(--background);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  min-width: 140px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: var(--transition);
  z-index: 1000;
}

.lang-dropdown--open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  transition: var(--transition);
}

.lang-option:hover {
  background: var(--background-light);
}

.lang-option--active {
  background: var(--primary-light);
  color: var(--primary-color);
  font-weight: 600;
}

.lang-option:first-child {
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}

.lang-option:last-child {
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}

.lang-option:only-child {
  border-radius: var(--border-radius);
}

/* Responsive */
@media (max-width: 768px) {
  .lang-btn {
    padding: 6px 10px;
    font-size: 0.8rem;
  }

  .lang-option {
    padding: 10px 12px;
    font-size: 0.8rem;
  }
}
</style>
