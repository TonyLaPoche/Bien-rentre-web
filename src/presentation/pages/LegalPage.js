import { NavigationController } from '../controllers/NavigationController.js';
import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
import { eventManager } from '../../infrastructure/ui/EventManager.js';
import { CUSTOM_EVENTS } from '../../shared/constants/index.js';

/**
 * Page légale - Gestion des pages Conditions d'utilisation et Politique de confidentialité
 * @class
 */
export class LegalPage {
    /**
     * @param {string} pageType - 'terms' ou 'privacy'
     */
    constructor(pageType = 'terms') {
        this.pageType = pageType;
        this.navigationController = null;
        this.isInitialized = false;

        this.init();
    }

    /**
     * Initialise la page légale
     */
    async init() {
        try {
            console.log(`📄 Initialisation de la page ${this.pageType}...`);

            // Initialiser la navigation
            this.navigationController = new NavigationController();

            // Initialiser les composants spécifiques
            this.initPageComponents();

            // Initialiser les interactions
            this.initInteractions();

            this.isInitialized = true;
            console.log(`✅ Page ${this.pageType} initialisée`);

        } catch (error) {
            console.error(`❌ Erreur lors de l'initialisation de la page ${this.pageType}:`, error);
        }
    }

    /**
     * Initialise les composants spécifiques à la page
     */
    initPageComponents() {
        this.initBackToTop();
        this.initPrintButton();
        this.initTableOfContents();
        this.initLastUpdated();
    }

    /**
     * Initialise le bouton "Retour en haut"
     */
    initBackToTop() {
        const backToTopButton = DOMHelper.createElement('button', {
            className: 'back-to-top',
            'aria-label': 'Retour en haut'
        }, '↑');

        // Ajouter au DOM
        document.body.appendChild(backToTopButton);

        // Gestionnaire d'événements
        DOMHelper.addEventListener(backToTopButton, 'click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Afficher/masquer selon le scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const threshold = 300;

            if (scrolled > threshold) {
                DOMHelper.show(backToTopButton);
            } else {
                DOMHelper.hide(backToTopButton);
            }
        });

        // Injecter les styles
        this.injectBackToTopStyles();
    }

    /**
     * Injecte les styles pour le bouton "Retour en haut"
     */
    injectBackToTopStyles() {
        if (document.getElementById('back-to-top-styles')) return;

        const styles = `
            .back-to-top {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                background: #5b1aff;
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 1.25rem;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(91, 26, 255, 0.3);
            }

            .back-to-top:hover {
                background: #4a15d1;
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(91, 26, 255, 0.4);
            }

            .back-to-top.show {
                opacity: 1;
                visibility: visible;
            }

            @media (max-width: 768px) {
                .back-to-top {
                    bottom: 15px;
                    right: 15px;
                    width: 45px;
                    height: 45px;
                    font-size: 1.125rem;
                }
            }
        `;

        const styleElement = DOMHelper.createElement('style', {
            id: 'back-to-top-styles'
        }, styles);

        document.head.appendChild(styleElement);
    }

    /**
     * Initialise le bouton d'impression
     */
    initPrintButton() {
        const header = document.querySelector('.legal-header');
        if (!header) return;

        const printButton = DOMHelper.createElement('button', {
            className: 'print-button',
            type: 'button'
        }, '🖨️ Imprimer');

        // Insérer après le titre
        const title = header.querySelector('h1');
        if (title) {
            title.insertAdjacentElement('afterend', printButton);
        }

        // Gestionnaire d'événements
        DOMHelper.addEventListener(printButton, 'click', () => {
            window.print();
        });

        // Injecter les styles
        this.injectPrintButtonStyles();
    }

    /**
     * Injecte les styles pour le bouton d'impression
     */
    injectPrintButtonStyles() {
        if (document.getElementById('print-button-styles')) return;

        const styles = `
            .print-button {
                background: #f3f4f6;
                color: #374151;
                border: 1px solid #d1d5db;
                padding: 8px 16px;
                border-radius: 6px;
                font-size: 0.875rem;
                cursor: pointer;
                transition: all 0.2s ease;
                margin-top: 16px;
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }

            .print-button:hover {
                background: #e5e7eb;
                border-color: #9ca3af;
            }

            @media print {
                .print-button {
                    display: none;
                }
            }
        `;

        const styleElement = DOMHelper.createElement('style', {
            id: 'print-button-styles'
        }, styles);

        document.head.appendChild(styleElement);
    }

    /**
     * Initialise la table des matières
     */
    initTableOfContents() {
        const content = document.querySelector('.legal-content');
        if (!content) return;

        const headings = content.querySelectorAll('h2');
        if (headings.length < 3) return; // Pas besoin de TOC si peu de sections

        const toc = this.createTableOfContents(headings);
        const header = document.querySelector('.legal-header');

        if (header) {
            header.insertAdjacentElement('afterend', toc);
        }
    }

    /**
     * Crée la table des matières
     * @param {NodeList} headings
     * @returns {Element}
     */
    createTableOfContents(headings) {
        const tocContainer = DOMHelper.createElement('div', {
            className: 'table-of-contents'
        });

        const tocTitle = DOMHelper.createElement('h3', {}, 'Table des matières');
        tocContainer.appendChild(tocTitle);

        const tocList = DOMHelper.createElement('ul', {
            className: 'toc-list'
        });

        headings.forEach((heading, index) => {
            const listItem = DOMHelper.createElement('li', {
                className: 'toc-item'
            });

            const link = DOMHelper.createElement('a', {
                href: `#section-${index}`,
                className: 'toc-link'
            }, heading.textContent);

            // Ajouter un ID à la section
            heading.id = `section-${index}`;

            listItem.appendChild(link);
            tocList.appendChild(listItem);
        });

        tocContainer.appendChild(tocList);

        // Injecter les styles
        this.injectTOCStyles();

        return tocContainer;
    }

    /**
     * Injecte les styles pour la table des matières
     */
    injectTOCStyles() {
        if (document.getElementById('toc-styles')) return;

        const styles = `
            .table-of-contents {
                background: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
            }

            .table-of-contents h3 {
                margin: 0 0 16px 0;
                color: #0f032b;
                font-size: 1.125rem;
                font-weight: 600;
            }

            .toc-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .toc-item {
                margin-bottom: 8px;
            }

            .toc-link {
                color: #5b1aff;
                text-decoration: none;
                font-size: 0.875rem;
                transition: color 0.2s ease;
            }

            .toc-link:hover {
                color: #4a15d1;
                text-decoration: underline;
            }

            @media print {
                .table-of-contents {
                    display: none;
                }
            }
        `;

        const styleElement = DOMHelper.createElement('style', {
            id: 'toc-styles'
        }, styles);

        document.head.appendChild(styleElement);
    }

    /**
     * Initialise la date de dernière mise à jour
     */
    initLastUpdated() {
        const metaElement = document.querySelector('.legal-header .meta time');
        if (!metaElement) return;

        const lastUpdated = new Date(metaElement.getAttribute('datetime'));

        // Calculer le temps écoulé
        const now = new Date();
        const diffTime = Math.abs(now - lastUpdated);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Ajouter une indication visuelle
        if (diffDays < 30) {
            metaElement.style.color = '#10b981'; // Vert pour récent
        } else if (diffDays < 90) {
            metaElement.style.color = '#f59e0b'; // Orange pour moyennement récent
        } else {
            metaElement.style.color = '#ef4444'; // Rouge pour ancien
        }
    }

    /**
     * Initialise les interactions
     */
    initInteractions() {
        this.initSmoothScrolling();
        this.initKeyboardNavigation();
    }

    /**
     * Initialise le scroll fluide pour les liens d'ancrage
     */
    initSmoothScrolling() {
        const tocLinks = document.querySelectorAll('.toc-link');
        tocLinks.forEach(link => {
            DOMHelper.addEventListener(link, 'click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Initialise la navigation clavier
     */
    initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + P pour imprimer
            if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
                e.preventDefault();
                window.print();
            }

            // Échap pour fermer/aller en haut
            if (e.key === 'Escape') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            // Home/End pour navigation
            if (e.key === 'Home') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            if (e.key === 'End') {
                e.preventDefault();
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
        });
    }

    /**
     * Met à jour le titre de la page selon le type
     */
    updatePageTitle() {
        const titles = {
            terms: 'Conditions d\'utilisation - Bien-Rentré',
            privacy: 'Politique de confidentialité - Bien-Rentré'
        };

        const title = titles[this.pageType] || 'Page légale - Bien-Rentré';
        document.title = title;
    }

    /**
     * Gère les événements de visibilité
     */
    handleVisibilityChange() {
        if (document.hidden) {
            // Page masquée - pause des animations si nécessaire
            this.pauseAnimations();
        } else {
            // Page visible - reprise des animations
            this.resumeAnimations();
        }
    }

    /**
     * Met en pause les animations
     */
    pauseAnimations() {
        // Logique pour mettre en pause les animations CSS si nécessaire
        console.log('Animations de la page légale mises en pause');
    }

    /**
     * Reprend les animations
     */
    resumeAnimations() {
        // Logique pour reprendre les animations CSS
        console.log('Animations de la page légale reprises');
    }

    /**
     * Nettoie les ressources de la page
     */
    destroy() {
        console.log(`🧹 Nettoyage de la page ${this.pageType}...`);

        // Détruire le contrôleur de navigation
        if (this.navigationController && typeof this.navigationController.destroy === 'function') {
            this.navigationController.destroy();
        }

        // Supprimer les éléments ajoutés dynamiquement
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            backToTop.remove();
        }

        this.isInitialized = false;
        console.log(`✅ Page ${this.pageType} nettoyée`);
    }

    /**
     * Vérifie si la page est initialisée
     * @returns {boolean}
     */
    isPageInitialized() {
        return this.isInitialized;
    }

    /**
     * Obtient le type de page
     * @returns {string}
     */
    getPageType() {
        return this.pageType;
    }
}
