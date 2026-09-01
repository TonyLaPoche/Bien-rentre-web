# Déploiement IONOS — Site vitrine

**URL production :** [https://bien-rentre.fr/](https://bien-rentre.fr/)  
**Hébergeur :** IONOS (hébergement web + déploiement Git)  
**Domaine :** `bien-rentre.fr` (DNS chez IONOS)

> Ancien déploiement GitHub Pages + GitHub Actions — **supprimé**. IONOS gère le build et la publication au push.

---

## Déploiement automatique (IONOS)

Le site est connecté au repo Git via **IONOS Deploy Now** (ou déploiement Git IONOS équivalent).

**Workflow habituel :**

```bash
git add .
git commit -m "feat: ..."
git push origin main
```

IONOS détecte le push, exécute `npm ci` + `npm run build`, puis publie le contenu de `dist/` sur `bien-rentre.fr`.

Aucune GitHub Action n'est nécessaire côté repo — le pipeline tourne chez IONOS.

---

## Architecture DNS (écosystème Bien-Rentré)

| Sous-domaine / domaine | Cible | Rôle |
|------------------------|-------|------|
| `bien-rentre.fr` | Hébergement web IONOS | Site vitrine Vue.js |
| `api.bien-rentre.fr` | VPS Infomaniak (`179.237.85.206`) | API NestJS |
| `bo.bien-rentre.fr` | VPS Infomaniak | Back-office admin |

Le domaine racine est chez **IONOS**. Seul l'enregistrement **`api`** (A → IP VPS) pointe vers Infomaniak pour l'API.

---

## Build local (test avant push)

```bash
cd br-vitrine
npm ci
npm run build
npm run preview   # http://localhost:4173
```

Le dossier `dist/` contient les fichiers statiques générés.

**Configuration Vite :** `base: '/'` dans `vite.config.js` — adapté au domaine racine `bien-rentre.fr`.

---

## Routage SPA (Vue Router)

Le site utilise `createWebHistory()` — les routes (`/terms`, `/privacy`, etc.) nécessitent une réécriture vers `index.html`.

Sur Apache (IONOS), un fichier `.htaccess` à la racine du site :

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Placer ce fichier dans le repo (ex. `public/.htaccess`) pour qu'il soit copié dans `dist/` au build, ou le configurer une fois sur IONOS.

Sans réécriture, un rafraîchissement sur `/privacy` renverra une 404.

---

## Déploiement manuel (secours)

Si le déploiement Git IONOS est indisponible :

1. `npm run build`
2. Uploader le contenu de `dist/` via FTP/SFTP ou le gestionnaire de fichiers IONOS

---

## Checklist après modification

- [ ] `npm run build` OK en local
- [ ] Push sur `main`
- [ ] Vérifier le build IONOS (panneau hébergement)
- [ ] https://bien-rentre.fr/
- [ ] Route interne : https://bien-rentre.fr/privacy

---

*Mise à jour : septembre 2026*
