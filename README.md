# Bien-Rentré — Site vitrine

Site marketing et pages légales pour l'application Bien-Rentré.

**Production :** [https://bien-rentre.fr/](https://bien-rentre.fr/) (hébergement **IONOS**)  
**Repo :** [TonyLaPoche/Bien-rentre-web](https://github.com/TonyLaPoche/Bien-rentre-web)

---

## Fonctionnalités

- Interface responsive (FR/EN via Vue I18n)
- FAQ interactive (12 questions)
- Pages légales : CGU, confidentialité, CGV
- Modèle économique freemium documenté
- Contact par email direct (pas de formulaire)

## Stack

- Vue 3 (Composition API) + Vite 5
- Vue Router 4 + Vue I18n 9
- CSS natif (variables CSS, Flexbox, Grid)
- Police Bricolage Grotesque (alignée avec l'app mobile)

## Structure

```
br-vitrine/
├── src/
│   ├── components/      # NavBar, Hero, Features, FAQ, Contact, Footer…
│   ├── i18n/index.js    # Contenu FR/EN (source de vérité textes)
│   ├── router/
│   └── views/           # Terms, Privacy, CGV, Support…
├── docs/
│   └── DEPLOIEMENT-IONOS.md   # Guide déploiement production
├── vite.config.js       # base: '/' (domaine racine)
└── package.json
```

## Démarrage local

```bash
npm install
npm run dev
```

Site local : `http://localhost:5173`

## Build production

```bash
npm run build
npm run preview   # prévisualiser dist/
```

## Déploiement

**Production :** [https://bien-rentre.fr/](https://bien-rentre.fr/) — hébergement **IONOS** avec déploiement Git automatique au push sur `main`.

Guide complet : [`docs/DEPLOIEMENT-IONOS.md`](docs/DEPLOIEMENT-IONOS.md)

```bash
npm run build      # test local
git push origin main   # IONOS rebuild et publie
```

> Pas de GitHub Actions : le pipeline de build/déploiement est géré par IONOS.

## Écosystème Bien-Rentré

| Composant | URL |
|-----------|-----|
| Site vitrine | https://bien-rentre.fr |
| API | https://api.bien-rentre.fr |
| Back-office | https://bo.bien-rentre.fr |

## Personnalisation

- **Textes :** `src/i18n/index.js`
- **Couleurs :** variables CSS dans `App.vue`
- **Routes :** `src/router/index.js`

## Archive

Le dossier `data-old-vanilla-js/` conserve les specs de l'ancien site statique (pré-migration Vue).

---

*Bien-Rentré © 2025–2026*
