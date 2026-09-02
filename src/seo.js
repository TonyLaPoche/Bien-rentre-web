const SITE = 'https://bien-rentre.fr'
const DEFAULT_TITLE = 'Bien-Rentré — Suivi de retour simple et rassurant'
const DEFAULT_DESCRIPTION =
  'Partagez un code, suivez le trajet en direct, recevez « bien rentré ». L’app qui rassure ceux qui partent… et ceux qui attendent.'

const ROUTE_SEO = {
  Home: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: '/',
  },
  BusinessModel: {
    title: 'Modèle économique — Bien-Rentré',
    description:
      'Freemium pour rassurer un proche. Premium pour partager à plusieurs, historique long et replay. Transparence avant l’ouverture publique.',
    path: '/modele-economique',
  },
  Support: {
    title: 'Modèle économique — Bien-Rentré',
    description:
      'Freemium pour rassurer un proche. Premium pour partager à plusieurs, historique long et replay.',
    path: '/soutenez-nous',
  },
  Terms: {
    title: 'Conditions générales d’utilisation — Bien-Rentré',
    description: 'Conditions générales d’utilisation du service Bien-Rentré.',
    path: '/terms',
  },
  Privacy: {
    title: 'Politique de confidentialité — Bien-Rentré',
    description: 'Comment Bien-Rentré collecte, utilise et protège vos données personnelles.',
    path: '/privacy',
  },
  Cgv: {
    title: 'Conditions générales de vente — Bien-Rentré',
    description: 'Conditions générales de vente du service Premium Bien-Rentré.',
    path: '/cgv',
  },
}

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function applyRouteSeo(routeName) {
  const seo = ROUTE_SEO[routeName] || ROUTE_SEO.Home
  const url = `${SITE}${seo.path}`

  document.title = seo.title
  upsertMeta('name', 'description', seo.description)
  upsertMeta('property', 'og:title', seo.title)
  upsertMeta('property', 'og:description', seo.description)
  upsertMeta('property', 'og:url', url)
  upsertMeta('name', 'twitter:title', seo.title)
  upsertMeta('name', 'twitter:description', seo.description)
  upsertLink('canonical', url)
}
