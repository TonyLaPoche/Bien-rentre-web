# Spécifications techniques

## Application mobile
- **Framework** : Flutter
- **Langage** : Dart
- **Plateformes** : iOS, Android
- **Backend** : Firebase
  - Authentication
  - Firestore (base de données)
  - Cloud Functions
  - Push Notifications

## Site vitrine
- **Type** : Site statique
- **Hébergement** : GitHub Pages
- **Build** : Généré automatiquement
- **Framework** : Vue.js + Vite (recommandé)

## Fonctionnalités techniques
### Géolocalisation
- **API** : GPS natif du téléphone
- **Précision** : 5-10 mètres
- **Fréquence** : Mise à jour en temps réel
- **Batterie** : Optimisé pour la consommation

### Notifications
- **Push** : Firebase Cloud Messaging
- **Types** :
  - Arrivée à destination
  - Perte de signal GPS
  - Alertes de sécurité
  - Messages des contacts

### Sécurité
- **Chiffrement** : AES-256 pour les données sensibles
- **Authentification** : Firebase Auth
- **Autorisations** : GPS, notifications
- **RGPD** : Conformité complète

## API EmailJS (site vitrine)
- **Service** : emailjs-com
- **Configuration** :
  - Service ID
  - Template ID
  - Public Key
- **Template** : Formulaire de contact

## Internationalisation
- **Bibliothèque** : vue-i18n
- **Langues** : Français, Anglais
- **Détection** : Langue du navigateur
- **Persistance** : localStorage

## Déploiement GitHub Pages
- **Repository** : Bien-rentre-web
- **Branch** : main
- **Path** : /docs ou build vers root
- **Domain** : https://tonylapoche.github.io/Bien-rentre-web/

## Performances
- **Bundle size** : < 500 KB
- **Loading** : Lazy loading des composants
- **SEO** : Meta tags optimisés
- **Accessibilité** : WCAG 2.1 AA
