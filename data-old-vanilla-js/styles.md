# Styles CSS - Design system

## Palette de couleurs
```css
--primary-color: #6366f1;      /* Indigo principal */
--primary-dark: #4f46e5;       /* Indigo foncé */
--primary-light: #e0e7ff;      /* Indigo clair */
--secondary-color: #64748b;    /* Slate */
--background: #ffffff;         /* Blanc */
--background-light: #f8fafc;   /* Slate très clair */
--text-primary: #1e293b;       /* Slate foncé */
--text-secondary: #64748b;     /* Slate moyen */
--border-color: #e2e8f0;       /* Slate bordure */
```

## Typographie
- **Police principale** : Bricolage Grotesque (Google Fonts)
- **Poids disponibles** : 200, 400, 600, 700, 800
- **Tailles** :
  - Hero titre : 3rem (48px)
  - Section titre : 2.5rem (40px)
  - Paragraphe : 1rem (16px)
  - Petit texte : 0.875rem (14px)

## Composants
### Boutons
- **Primaire** : Fond indigo, texte blanc, border-radius 12px
- **Secondaire** : Bordure indigo, fond transparent
- **Hover** : Échelle 105%, transition smooth

### Cartes
- **Ombre** : `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- **Border-radius** : 12px
- **Padding** : 24px
- **Background** : Blanc

### Sections
- **Padding** : 80px 0 (60px sur mobile)
- **Container max-width** : 1200px
- **Container padding** : 0 20px (16px sur mobile)

## Animations
- **Transitions** : `all 0.3s ease`
- **Hover buttons** : Scale 105%
- **Scroll animations** : Fade in from bottom
- **FAQ accordéon** : Smooth height transition

## Responsive
- **Breakpoints** :
  - Mobile : < 768px
  - Tablet : 768px - 1024px
  - Desktop : > 1024px
- **Grid** : 1 colonne mobile, 2 colonnes tablet, 4 colonnes desktop
- **Navigation** : Desktop horizontal, mobile hamburger

## Icônes
- **Format** : SVG inline ou emojis
- **Taille** : 48px dans les cartes features
- **Couleur** : --primary-color

## Accessibilité
- **Contrast ratios** : Respect des normes WCAG
- **Focus visible** : Outline sur les éléments focusables
- **ARIA labels** : Pour les éléments interactifs
- **Semantic HTML** : Utilisation correcte des balises
