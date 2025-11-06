import { createRouter, createWebHistory } from 'vue-router'
import TermsView from '../views/TermsView.vue'
import PrivacyView from '../views/PrivacyView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HomePage.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsView
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyView
  }
]

const router = createRouter({
  history: createWebHistory('/Bien-rentre-web/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      // Support pour les ancres (#features, #faq, #contact)
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
