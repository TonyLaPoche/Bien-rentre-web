import { createRouter, createWebHistory } from 'vue-router'
import TermsView from '../views/TermsView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import SupportView from '../views/SupportView.vue'
import CgvView from '../views/CgvView.vue'
import { applyRouteSeo } from '../seo'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HomePage.vue'),
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsView,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyView,
  },
  {
    path: '/soutenez-nous',
    name: 'Support',
    component: SupportView,
  },
  {
    path: '/modele-economique',
    name: 'BusinessModel',
    component: SupportView,
  },
  {
    path: '/cgv',
    name: 'Cgv',
    component: CgvView,
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  applyRouteSeo(to.name)
})

export default router
