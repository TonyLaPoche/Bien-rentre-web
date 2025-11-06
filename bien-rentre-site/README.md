# Bien-Rentré - Site Web Vue.js

Site vitrine moderne pour l'application Bien-Rentré, développé avec Vue.js 3, Vite et Vue I18n.

## 🚀 Fonctionnalités

- **Interface responsive** : Design adaptatif pour tous les appareils
- **Internationalisation** : Support français et anglais
- **FAQ interactive** : Accordéons fonctionnels avec animations
- **Formulaire de contact** : Validation et envoi par EmailJS
- **Navigation fluide** : Menu responsive avec sélecteur de langue
- **Animations** : Transitions et effets visuels modernes

## 🛠️ Technologies utilisées

- **Vue.js 3** : Framework JavaScript progressif
- **Vite** : Outil de build ultra-rapide
- **Vue I18n** : Internationalisation
- **EmailJS** : Service d'envoi d'emails
- **CSS moderne** : Variables CSS, Flexbox, Grid

## 📁 Structure du projet

```
bien-rentre-site/
├── src/
│   ├── assets/          # Ressources statiques (icônes, images)
│   ├── components/      # Composants Vue.js réutilisables
│   │   ├── NavBar.vue
│   │   ├── HeroSection.vue
│   │   ├── FeaturesSection.vue
│   │   ├── FAQSection.vue
│   │   ├── ContactSection.vue
│   │   ├── Footer.vue
│   │   └── LanguageSelector.vue
│   ├── i18n/            # Configuration d'internationalisation
│   │   └── index.js
│   ├── App.vue          # Composant racine
│   └── main.js          # Point d'entrée
├── public/              # Fichiers publics (favicon, etc.)
├── index.html           # Template HTML principal
└── package.json
```

## 🚀 Démarrage rapide

### Prérequis

- Node.js (version 16+)
- npm ou yarn

### Installation

```bash
# Cloner le projet
cd bien-rentre-site

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build pour la production

```bash
# Générer les fichiers optimisés
npm run build

# Prévisualiser la version de production
npm run preview
```

## 🌐 Déploiement sur GitHub Pages

### Configuration automatique

```bash
# Build et déploiement en une commande
npm run deploy
```

### Configuration manuelle

1. **Modifier `vite.config.js`** :
```javascript
export default defineConfig({
  base: '/Bien-rentre-web/',
  // ...
})
```

2. **Modifier `package.json`** :
```json
{
  "homepage": "https://tonylapoche.github.io/Bien-rentre-web"
}
```

3. **Build et déploiement** :
```bash
npm run build
npm run deploy
```

## 🔧 Configuration

### EmailJS (Formulaire de contact)

Modifier les clés dans `ContactSection.vue` :

```javascript
const serviceId = 'your_service_id'
const templateId = 'your_template_id'
const publicKey = 'your_public_key'
```

### Langues

Les traductions sont dans `src/i18n/index.js`. Pour ajouter une nouvelle langue :

1. Ajouter les messages dans l'objet `messages`
2. Mettre à jour la logique de détection dans `getBrowserLanguage()`

## 🎨 Personnalisation

### Couleurs

Modifier les variables CSS dans `App.vue` :

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #64748b;
  --background: #ffffff;
  /* ... */
}
```

### Contenu

Modifier les textes dans `src/i18n/index.js` pour les différentes langues.

## 📱 Fonctionnalités responsive

- **Mobile-first** : Design optimisé pour mobile
- **Breakpoints** : 768px, 1024px
- **Navigation** : Menu hamburger sur mobile
- **Grilles adaptatives** : Colonnes dynamiques

## 🧪 Tests

```bash
# Tests unitaires (à implémenter)
npm run test

# Tests E2E (à implémenter)
npm run test:e2e
```

## 📈 Performance

- **Bundle size** : ~150-200KB (gzippé)
- **Core Web Vitals** : Optimisé
- **SEO** : Meta tags dynamiques
- **Accessibilité** : Conformité WCAG

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Commit les changements
4. Push et créer une PR

## 📄 Licence

Tous droits réservés - Bien-Rentré © 2025

---

**Développé avec ❤️ pour la sécurité nocturne**
