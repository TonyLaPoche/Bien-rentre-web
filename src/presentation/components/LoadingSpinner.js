import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
import { CSS_CLASSES } from '../../shared/constants/index.js';

/**
 * Composant LoadingSpinner réutilisable
 * Affiche un indicateur de chargement avec différentes tailles et styles
 * @class
 */
export class LoadingSpinner {
    /**
     * @param {Object} options
     * @param {string} options.size - Taille (small, medium, large)
     * @param {string} options.color - Couleur (primary, white, gray)
     * @param {string} options.text - Texte optionnel
     * @param {boolean} options.overlay - Si afficher en overlay
     * @param {Element} options.container - Conteneur parent
     */
    constructor(options = {}) {
        this.size = options.size || 'medium';
        this.color = options.color || 'primary';
        this.text = options.text || '';
        this.overlay = options.overlay || false;
        this.container = options.container || document.body;

        this.element = null;
        this.isVisible = false;

        this.init();
    }

    /**
     * Initialise le spinner
     */
    init() {
        this.createSpinnerElement();
        this.injectStyles();
    }

    /**
     * Crée l'élément DOM du spinner
     */
    createSpinnerElement() {
        const containerClass = this.overlay ? 'spinner-overlay' : 'spinner-container';

        this.element = DOMHelper.createElement('div', {
            className: `${containerClass} spinner-${this.size} spinner-${this.color}`
        });

        // Cercle de chargement
        const spinnerCircle = DOMHelper.createElement('div', {
            className: 'spinner-circle'
        });

        // Créer les points du spinner
        for (let i = 0; i < 3; i++) {
            const dot = DOMHelper.createElement('div', {
                className: 'spinner-dot'
            });
            spinnerCircle.appendChild(dot);
        }

        this.element.appendChild(spinnerCircle);

        // Texte optionnel
        if (this.text) {
            const textElement = DOMHelper.createElement('div', {
                className: 'spinner-text'
            }, this.text);
            this.element.appendChild(textElement);
        }
    }

    /**
     * Injecte les styles CSS si nécessaire
     */
    injectStyles() {
        if (document.getElementById('spinner-styles')) return;

        const styles = `
            .spinner-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.9);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                backdrop-filter: blur(2px);
            }

            .spinner-container {
                display: inline-flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }

            .spinner-circle {
                display: flex;
                gap: 4px;
                margin-bottom: 12px;
            }

            .spinner-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #5b1aff;
                animation: spinner-bounce 1.4s ease-in-out infinite both;
            }

            .spinner-dot:nth-child(1) { animation-delay: -0.32s; }
            .spinner-dot:nth-child(2) { animation-delay: -0.16s; }

            /* Tailles */
            .spinner-small .spinner-dot {
                width: 6px;
                height: 6px;
            }

            .spinner-large .spinner-dot {
                width: 12px;
                height: 12px;
            }

            /* Couleurs */
            .spinner-primary .spinner-dot { background: #5b1aff; }
            .spinner-white .spinner-dot { background: #ffffff; }
            .spinner-gray .spinner-dot { background: #6b7280; }

            /* Texte */
            .spinner-text {
                font-size: 0.875rem;
                color: #6b7280;
                font-weight: 500;
                text-align: center;
                margin-top: 8px;
            }

            /* Animations */
            @keyframes spinner-bounce {
                0%, 80%, 100% {
                    transform: scale(0);
                    opacity: 0.5;
                }
                40% {
                    transform: scale(1);
                    opacity: 1;
                }
            }

            /* États responsives */
            @media (max-width: 768px) {
                .spinner-overlay {
                    background: rgba(255, 255, 255, 0.95);
                }

                .spinner-large .spinner-dot {
                    width: 10px;
                    height: 10px;
                }
            }
        `;

        const styleElement = DOMHelper.createElement('style', {
            id: 'spinner-styles'
        }, styles);

        document.head.appendChild(styleElement);
    }

    /**
     * Affiche le spinner
     * @param {string} text - Texte optionnel à afficher
     */
    show(text = null) {
        if (this.isVisible) return;

        if (text) {
            this.setText(text);
        }

        if (!this.element.parentNode) {
            this.container.appendChild(this.element);
        }

        // Animation d'entrée
        setTimeout(() => {
            DOMHelper.addClass(this.element, 'visible');
        }, 10);

        this.isVisible = true;

        // Désactiver le scroll si c'est un overlay
        if (this.overlay) {
            document.body.style.overflow = 'hidden';
        }
    }

    /**
     * Masque le spinner
     */
    hide() {
        if (!this.isVisible) return;

        DOMHelper.removeClass(this.element, 'visible');

        // Animation de sortie
        setTimeout(() => {
            if (this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }

            // Réactiver le scroll
            if (this.overlay) {
                document.body.style.overflow = 'auto';
            }
        }, 300);

        this.isVisible = false;
    }

    /**
     * Met à jour le texte du spinner
     * @param {string} text
     */
    setText(text) {
        this.text = text;
        const textElement = this.element.querySelector('.spinner-text');

        if (text) {
            if (textElement) {
                DOMHelper.setText(textElement, text);
            } else {
                // Créer l'élément texte s'il n'existe pas
                const newTextElement = DOMHelper.createElement('div', {
                    className: 'spinner-text'
                }, text);
                this.element.appendChild(newTextElement);
            }
        } else if (textElement) {
            textElement.remove();
        }
    }

    /**
     * Change la taille du spinner
     * @param {string} size
     */
    setSize(size) {
        DOMHelper.removeClass(this.element, `spinner-${this.size}`);
        this.size = size;
        DOMHelper.addClass(this.element, `spinner-${this.size}`);
    }

    /**
     * Change la couleur du spinner
     * @param {string} color
     */
    setColor(color) {
        DOMHelper.removeClass(this.element, `spinner-${this.color}`);
        this.color = color;
        DOMHelper.addClass(this.element, `spinner-${this.color}`);
    }

    /**
     * Vérifie si le spinner est visible
     * @returns {boolean}
     */
    isSpinnerVisible() {
        return this.isVisible;
    }

    /**
     * Obtient l'élément DOM du spinner
     * @returns {Element}
     */
    getElement() {
        return this.element;
    }

    /**
     * Nettoie les ressources du spinner
     */
    destroy() {
        this.hide();
        this.element = null;
    }
}

/**
 * Gestionnaire de spinners - Pour gérer facilement les spinners dans l'app
 * @class
 */
export class SpinnerManager {
    constructor() {
        this.spinners = new Map();
    }

    /**
     * Crée un nouveau spinner
     * @param {string} id
     * @param {Object} options
     * @returns {LoadingSpinner}
     */
    create(id, options = {}) {
        const spinner = new LoadingSpinner(options);
        this.spinners.set(id, spinner);
        return spinner;
    }

    /**
     * Récupère un spinner par son ID
     * @param {string} id
     * @returns {LoadingSpinner|null}
     */
    get(id) {
        return this.spinners.get(id) || null;
    }

    /**
     * Affiche un spinner
     * @param {string} id
     * @param {string} text
     */
    show(id, text = null) {
        const spinner = this.get(id);
        if (spinner) {
            spinner.show(text);
        }
    }

    /**
     * Masque un spinner
     * @param {string} id
     */
    hide(id) {
        const spinner = this.get(id);
        if (spinner) {
            spinner.hide();
        }
    }

    /**
     * Supprime un spinner
     * @param {string} id
     */
    remove(id) {
        const spinner = this.get(id);
        if (spinner) {
            spinner.destroy();
            this.spinners.delete(id);
        }
    }

    /**
     * Masque tous les spinners
     */
    hideAll() {
        this.spinners.forEach(spinner => {
            if (spinner.isSpinnerVisible()) {
                spinner.hide();
            }
        });
    }

    /**
     * Nettoie tous les spinners
     */
    destroyAll() {
        this.spinners.forEach((spinner, id) => {
            spinner.destroy();
            this.spinners.delete(id);
        });
    }
}

// Instance globale du gestionnaire de spinners
export const spinnerManager = new SpinnerManager();
