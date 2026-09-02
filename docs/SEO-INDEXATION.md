# SEO & indexation — Bien-Rentré (vitrine)

## Déjà en place sur le site

- Meta title / description + Open Graph + Twitter Card
- Image de partage `https://bien-rentre.fr/og-image.png` (1200×630)
- `robots.txt` + `sitemap.xml`
- Données structurées JSON-LD (Organization, WebSite, SoftwareApplication)
- Titles dynamiques par page (accueil, modèle économique, légal)

Après déploiement, vérifier que ces URLs répondent en 200 :

- https://bien-rentre.fr/robots.txt
- https://bien-rentre.fr/sitemap.xml
- https://bien-rentre.fr/og-image.png

---

## Marche à suivre pour être indexé

### 1. Déployer cette version

Push sur `main` pour publier sur IONOS, puis contrôler les 3 URLs ci-dessus.

### 2. Google Search Console (prioritaire)

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Ajouter la propriété **Domaine** `bien-rentre.fr` (recommandé) ou préfixe URL `https://bien-rentre.fr/`
3. Valider via **DNS** chez IONOS (enregistrement TXT fourni par Google)
4. Dans **Sitemaps** : soumettre `https://bien-rentre.fr/sitemap.xml`
5. Dans **Inspection d’URL** : tester `https://bien-rentre.fr/`, puis **Demander une indexation**
6. Répéter pour `/modele-economique` si besoin

Délai habituel : quelques jours à quelques semaines pour la première indexation.

### 3. Bing Webmaster Tools

1. [Bing Webmaster](https://www.bing.com/webmasters)
2. Importer depuis Google Search Console **ou** valider le domaine
3. Soumettre le même sitemap

### 4. Prévisualiser le partage social

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) → scraper `https://bien-rentre.fr/`
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- Twitter/X : coller le lien dans un brouillon pour voir la card

Si l’ancienne description apparaît : cliquer **Scrape Again** / **Inspect** pour vider le cache OG.

### 5. Bonnes pratiques continues

- Garder title ≤ ~60 caractères et description ≤ ~155–160 caractères
- Mettre à jour `sitemap.xml` quand une page importante est ajoutée
- Éviter le contenu dupliqué (ex. `/soutenez-nous` peut rediriger vers `/modele-economique`)
- Obtenir quelques liens naturels (presse locale, associations, page perso LinkedIn)
- Surveiller Search Console : couverture, Core Web Vitals, pages exclus

### 6. Limite actuelle (SPA Vue)

Le site est une SPA : Google indexe en général correctement, mais le HTML initial reste le plus important pour l’aperçu de lien. Les balises dans `index.html` + `src/seo.js` couvrent ce besoin. Un rendu SSR (Nuxt) n’est utile que si le SEO concurrentiel devient critique.
