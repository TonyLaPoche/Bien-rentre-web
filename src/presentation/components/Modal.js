import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
import { eventManager } from '../../infrastructure/ui/EventManager.js';
import { CUSTOM_EVENTS, CSS_CLASSES } from '../../shared/constants/index.js';

/**
 * Composant Modal réutilisable
 * Gère l'affichage de modales avec contenu dynamique
 * @class
 */
export class Modal {
    /**
     * @param {Object} options
     * @param {string} options.id - ID unique de la modal
     * @param {string} options.title - Titre de la modal
     * @param {string} options.content - Contenu HTML de la modal
     * @param {Array} options.buttons - Boutons de la modal
     * @param {boolean} options.closable - Si la modal peut être fermée
     * @param {string} options.size - Taille (small, medium, large)
     */
    constructor(options = {}) {
        this.id = options.id || `modal-${Date.now()}`;
        this.title = options.title || '';
        this.content = options.content || '';
        this.buttons = options.buttons || [];
        this.closable = options.closable !== false;
        this.size = options.size || 'medium';
        this.isOpen = false;

        this.element = null;
        this.overlay = null;

        this.init();
    }

    /**
     * Initialise la modal
     */
    init() {
        this.createModalElement();
        this.bindEvents();
    }

    /**
     * Crée l'élément DOM de la modal
     */
    createModalElement() {
        // Overlay
        this.overlay = DOMHelper.createElement('div', {
            className: 'modal-overlay',
            id: `${this.id}-overlay`
        });

        // Container de la modal
        const modalContainer = DOMHelper.createElement('div', {
            className: `modal-container modal-${this.size}`,
            id: this.id
        });

        // Header
        if (this.title || this.closable) {
            const header = DOMHelper.createElement('div', {
                className: 'modal-header'
            });

            if (this.title) {
                const titleElement = DOMHelper.createElement('h3', {
                    className: 'modal-title'
                }, this.title);
                header.appendChild(titleElement);
            }

            if (this.closable) {
                const closeButton = DOMHelper.createElement('button', {
                    className: 'modal-close',
                    type: 'button',
                    'aria-label': 'Fermer'
                }, '×');
                header.appendChild(closeButton);
            }

            modalContainer.appendChild(header);
        }

        // Body
        const body = DOMHelper.createElement('div', {
            className: 'modal-body'
        }, this.content);
        modalContainer.appendChild(body);

        // Footer (si il y a des boutons)
        if (this.buttons.length > 0) {
            const footer = DOMHelper.createElement('div', {
                className: 'modal-footer'
            });

            this.buttons.forEach(buttonConfig => {
                const button = DOMHelper.createElement('button', {
                    className: `btn ${buttonConfig.class || 'btn-secondary'}`,
                    type: 'button',
                    'data-action': buttonConfig.action || ''
                }, buttonConfig.text);

                if (buttonConfig.handler) {
                    DOMHelper.addEventListener(button, 'click', buttonConfig.handler);
                }

                footer.appendChild(button);
            });

            modalContainer.appendChild(footer);
        }

        this.overlay.appendChild(modalContainer);
        this.element = modalContainer;
    }

    /**
     * Lie les événements de la modal
     */
    bindEvents() {
        if (!this.overlay) return;

        // Fermeture par clic sur l'overlay
        if (this.closable) {
            DOMHelper.addEventListener(this.overlay, 'click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });
        }

        // Fermeture par le bouton X
        const closeButton = this.element.querySelector('.modal-close');
        if (closeButton && this.closable) {
            DOMHelper.addEventListener(closeButton, 'click', () => this.close());
        }

        // Gestion des boutons personnalisés
        const buttons = this.element.querySelectorAll('.modal-footer button[data-action]');
        buttons.forEach(button => {
            const action = button.dataset.action;
            DOMHelper.addEventListener(button, 'click', () => {
                eventManager.emit(CUSTOM_EVENTS.MODAL_BUTTON_CLICK, {
                    modalId: this.id,
                    action,
                    modal: this
                });
            });
        });

        // Écoute des événements personnalisés
        eventManager.on(CUSTOM_EVENTS.MODAL_CLOSE, (data) => {
            if (data.modalId === this.id) {
                this.close();
            }
        });
    }

    /**
     * Ouvre la modal
     * @param {Object} options - Options de contenu dynamique
     */
    open(options = {}) {
        if (this.isOpen) return;

        // Mise à jour du contenu si fourni
        if (options.title) {
            this.setTitle(options.title);
        }
        if (options.content) {
            this.setContent(options.content);
        }

        // Ajout au DOM
        if (!this.overlay.parentNode) {
            document.body.appendChild(this.overlay);
        }

        // Animation d'ouverture
        setTimeout(() => {
            DOMHelper.addClass(this.overlay, 'open');
            document.body.style.overflow = 'hidden';
        }, 10);

        this.isOpen = true;

        // Focus sur la modal
        this.element.focus();

        // Événement
        eventManager.emit(CUSTOM_EVENTS.MODAL_OPEN, {
            modalId: this.id,
            modal: this
        });

        // Gestion de l'échappement
        this.escapeHandler = (e) => {
            if (e.key === 'Escape' && this.closable) {
                this.close();
            }
        };
        document.addEventListener('keydown', this.escapeHandler);
    }

    /**
     * Ferme la modal
     */
    close() {
        if (!this.isOpen) return;

        DOMHelper.removeClass(this.overlay, 'open');

        // Animation de fermeture
        setTimeout(() => {
            if (this.overlay.parentNode) {
                this.overlay.parentNode.removeChild(this.overlay);
            }
            document.body.style.overflow = 'auto';
        }, 300);

        this.isOpen = false;

        // Nettoyage
        if (this.escapeHandler) {
            document.removeEventListener('keydown', this.escapeHandler);
            this.escapeHandler = null;
        }

        // Événement
        eventManager.emit(CUSTOM_EVENTS.MODAL_CLOSE, {
            modalId: this.id,
            modal: this
        });
    }

    /**
     * Met à jour le titre de la modal
     * @param {string} title
     */
    setTitle(title) {
        this.title = title;
        const titleElement = this.element.querySelector('.modal-title');
        if (titleElement) {
            DOMHelper.setText(titleElement, title);
        }
    }

    /**
     * Met à jour le contenu de la modal
     * @param {string} content
     */
    setContent(content) {
        this.content = content;
        const bodyElement = this.element.querySelector('.modal-body');
        if (bodyElement) {
            DOMHelper.setHTML(bodyElement, content);
        }
    }

    /**
     * Ajoute un bouton à la modal
     * @param {Object} buttonConfig
     */
    addButton(buttonConfig) {
        this.buttons.push(buttonConfig);
        // Recréer la modal si elle est déjà affichée
        if (this.isOpen) {
            this.close();
            setTimeout(() => this.open(), 350);
        }
    }

    /**
     * Vérifie si la modal est ouverte
     * @returns {boolean}
     */
    isModalOpen() {
        return this.isOpen;
    }

    /**
     * Obtient l'élément DOM de la modal
     * @returns {Element}
     */
    getElement() {
        return this.element;
    }

    /**
     * Nettoie les ressources de la modal
     */
    destroy() {
        this.close();
        this.overlay = null;
        this.element = null;

        // Supprimer les écouteurs d'événements
        eventManager.removeAllListeners(CUSTOM_EVENTS.MODAL_CLOSE);
    }
}

/**
 * Gestionnaire de modales - Singleton pour gérer plusieurs modales
 * @class
 */
export class ModalManager {
    constructor() {
        this.modals = new Map();
        this.init();
    }

    /**
     * Initialise le gestionnaire
     */
    init() {
        // Créer les styles CSS si nécessaire
        this.injectStyles();
    }

    /**
     * Injecte les styles CSS pour les modales
     */
    injectStyles() {
        if (document.getElementById('modal-styles')) return;

        const styles = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .modal-overlay.open {
                opacity: 1;
            }

            .modal-container {
                background: white;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                max-width: 90vw;
                max-height: 90vh;
                overflow: hidden;
                transform: scale(0.9);
                transition: transform 0.3s ease;
            }

            .modal-overlay.open .modal-container {
                transform: scale(1);
            }

            .modal-small { width: 300px; }
            .modal-medium { width: 500px; }
            .modal-large { width: 800px; }

            .modal-header {
                padding: 20px 24px;
                border-bottom: 1px solid #e5e5e5;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .modal-title {
                margin: 0;
                font-size: 1.25rem;
                font-weight: 600;
                color: #0f032b;
            }

            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.2s ease;
            }

            .modal-close:hover {
                background: #f5f5f5;
                color: #333;
            }

            .modal-body {
                padding: 24px;
                max-height: 60vh;
                overflow-y: auto;
            }

            .modal-footer {
                padding: 16px 24px;
                border-top: 1px solid #e5e5e5;
                display: flex;
                justify-content: flex-end;
                gap: 12px;
            }

            @media (max-width: 768px) {
                .modal-container {
                    width: 95vw;
                    margin: 20px;
                }

                .modal-header,
                .modal-body,
                .modal-footer {
                    padding: 16px 20px;
                }
            }
        `;

        const styleElement = DOMHelper.createElement('style', {
            id: 'modal-styles'
        }, styles);

        document.head.appendChild(styleElement);
    }

    /**
     * Crée une nouvelle modal
     * @param {Object} options
     * @returns {Modal}
     */
    create(options = {}) {
        const modal = new Modal(options);
        this.modals.set(options.id || modal.id, modal);
        return modal;
    }

    /**
     * Récupère une modal par son ID
     * @param {string} id
     * @returns {Modal|null}
     */
    get(id) {
        return this.modals.get(id) || null;
    }

    /**
     * Supprime une modal
     * @param {string} id
     */
    remove(id) {
        const modal = this.modals.get(id);
        if (modal) {
            modal.destroy();
            this.modals.delete(id);
        }
    }

    /**
     * Ferme toutes les modales
     */
    closeAll() {
        this.modals.forEach(modal => {
            if (modal.isModalOpen()) {
                modal.close();
            }
        });
    }

    /**
     * Obtient toutes les modales
     * @returns {Map}
     */
    getAll() {
        return this.modals;
    }
}

// Instance globale du gestionnaire de modales
export const modalManager = new ModalManager();
