# Bien-Rentré - Site Vitrine

Site vitrine statique pour l'application mobile "Bien-Rentré", une app de sécurité pour les retours de soirée.

## 🎯 Description

Bien-Rentré est une application mobile qui permet aux utilisateurs de partager leur géolocalisation en temps réel avec des contacts de confiance lors de leurs déplacements nocturnes, offrant ainsi une protection supplémentaire contre les risques liés aux trajets en soirée.

## 🏗️ Architecture Clean Code

Ce projet suit les principes de **Clean Architecture** et **Clean Code** pour une maintenabilité et scalabilité optimales :

```
src/
├── domain/           # Règles métier (Entities, Services, Repositories)
├── application/      # Use Cases - Orchestration métier
├── infrastructure/   # Interfaces externes (API, DOM, Storage)
├── presentation/     # Interface utilisateur (Controllers)
├── shared/           # Utilitaires et constantes partagés
└── main.js          # Point d'entrée avec injection de dépendances
```

### Principes appliqués :
- **Séparation des préoccupations** : Chaque couche a une responsabilité unique
- **Injection de dépendances** : Interfaces claires entre les couches
- **SOLID principles** : Code extensible et maintenable
- **DRY (Don't Repeat Yourself)** : Pas de duplication de code
- **Single Responsibility** : Une classe = une responsabilité

### Construction du bundle :
```bash
node build.js  # Génère script.js à partir des modules ES6
```

## 🚀 Déploiement sur GitHub Pages

### Prérequis

1. **Créer un compte EmailJS** (gratuit) : https://www.emailjs.com/
   - Créer un service SMTP (Gmail, Outlook, etc.)
   - Créer un template d'email
   - Noter votre clé publique

2. **Créer un compte GitHub** (si nécessaire)

### Configuration EmailJS

1. **Service SMTP :**
   - Connectez votre compte email (Gmail recommandé)
   - Configurez l'authentification

2. **Template d'email :**
   ```
   Objet: {{subject}}

   Nouveau message de {{from_name}} ({{from_email}}) :

   {{message}}

   --
   Ce message a été envoyé via le formulaire de contact de Bien-Rentré.
   ```

3. **Configuration dans `script.js` :**
   ```javascript
   // Remplacer ces valeurs par vos identifiants EmailJS
   emailjs.init("VOTRE_CLÉ_PUBLIQUE");
   const result = await emailjs.send(
       'VOTRE_SERVICE_ID',
       'VOTRE_TEMPLATE_ID',
       { ... }
   );
   ```

### Déploiement

1. **Créer un repository GitHub :**
   ```
   Nom: bienrentre-vitrine (ou similaire)
   Description: Site vitrine de l'app Bien-Rentré
   Visibilité: Public
   ```

2. **Uploader les fichiers :**
   - Glisser-déposer tous les fichiers du projet
   - Ou utiliser Git :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Site vitrine Bien-Rentré"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/bienrentre-vitrine.git
   git push -u origin main
   ```

3. **Activer GitHub Pages :**
   - Aller dans Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: main
   - Folder: /(root)
   - Sauvegarder

4. **Domaine personnalisé (optionnel) :**
   - Acheter `bienrentre.app` chez un registrar
   - Dans Settings > Pages > Custom domain
   - Ajouter `bienrentre.app`

## 📁 Structure du projet

```
bienrentre-vitrine/
├── index.html          # Page d'accueil
├── terms.html          # Conditions d'utilisation
├── privacy.html        # Politique de confidentialité
├── styles.css          # Styles CSS
├── script.js           # JavaScript (EmailJS, interactions)
├── icon-br.svg         # Logo de l'application
└── README.md           # Ce fichier
```

## 🎨 Charte graphique

- **Couleurs principales :**
  - Violet primaire: `#5B1AFF`
  - Fond clair: `#F4F0FF`
  - Fond sombre: `#0F032B`

- **Police :** Bricolage Grotesque (Google Fonts)

- **Style :** Design moderne avec Material Design 3

## 📱 Fonctionnalités

### Page d'accueil
- Hero section avec présentation de l'app
- Section fonctionnalités
- Section "Comment ça marche" (4 étapes)
- FAQ interactive
- Formulaire de contact avec EmailJS

### Pages légales
- Conditions d'utilisation complètes
- Politique de confidentialité RGPD
- Mentions légales

### Responsive Design
- Compatible mobile, tablette, desktop
- Navigation mobile avec menu burger

## 🔧 Personnalisation

### Modifier les couleurs
Dans `styles.css`, modifier les variables CSS :
```css
:root {
    --primary-color: #5B1AFF;  /* Violet principal */
    --primary-light: #F4F0FF;  /* Fond clair */
    --primary-dark: #0F032B;   /* Fond sombre */
}
```

### Modifier les informations de contact
Dans `index.html` et autres fichiers :
```html
<p><strong>Email :</strong> contact@bienrentre.app</p>
```

### Ajouter des captures d'écran
Remplacer le mockup dans la hero section :
```html
<div class="phone-screen">
    <img src="votre-capture-ecran.png" alt="App Bien-Rentré" style="width: 100%; height: auto;">
</div>
```

## 📧 Configuration EmailJS détaillée

### 1. Créer un compte
- Aller sur https://www.emailjs.com/
- S'inscrire gratuitement

### 2. Configurer le service email
- **Email Services** > **Add New Service**
- Choisir Gmail (ou autre fournisseur)
- Suivre les instructions de configuration
- Noter le **Service ID**

### 3. Créer un template
- **Email Templates** > **Create New Template**
- Configuration :
  ```
  To Email: contact@bienrentre.app
  From Name: {{from_name}}
  From Email: {{from_email}}
  Subject: {{subject}}
  Message:
  Nouveau message depuis le site Bien-Rentré :

  De: {{from_name}} ({{from_email}})

  Message:
  {{message}}

  --
  Formulaire de contact - Site vitrine Bien-Rentré
  ```
- Noter le **Template ID**

### 4. Récupérer la clé publique
- **Account** > **General**
- Noter la **Public Key**

### 5. Intégration dans le code
Modifier `script.js` :
```javascript
// Initialisation EmailJS
(function() {
    emailjs.init("VOTRE_PUBLIC_KEY");
})();

// Dans la fonction de soumission
const result = await emailjs.send(
    'VOTRE_SERVICE_ID',
    'VOTRE_TEMPLATE_ID',
    {
        from_name: formData.from_name,
        from_email: formData.from_email,
        subject: formData.subject,
        message: formData.message
    }
);
```

## 🚀 Optimisations SEO

Le site est optimisé pour les moteurs de recherche :

- Balises meta complètes
- Structure HTML sémantique
- URLs propres
- Performance optimisée (CSS/JS minifiés recommandés)

## 🐛 Dépannage

### Le formulaire ne fonctionne pas
- Vérifier que EmailJS est correctement configuré
- Vérifier la console du navigateur (F12 > Console)
- S'assurer que les quotas EmailJS ne sont pas dépassés

### Le site ne se charge pas sur GitHub Pages
- Vérifier que tous les fichiers sont dans le dossier root
- Attendre 5-10 minutes après le déploiement
- Vérifier l'URL: `https://VOTRE_USERNAME.github.io/NOM_REPO/`

### Problèmes de responsive
- Tester sur différents appareils
- Vérifier les media queries dans `styles.css`

## 📞 Support

Pour toute question ou problème :
- Email: contact@bienrentre.app
- GitHub Issues: [Créer une issue](https://github.com/VOTRE_USERNAME/bienrentre-vitrine/issues)

---

**Bien-Rentré** - Sécurité et tranquillité d'esprit pour vos retours de soirée. 🏠✨
