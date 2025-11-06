import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
import { eventManager } from '../../infrastructure/ui/EventManager.js';
import { CUSTOM_EVENTS } from '../../shared/constants/index.js';

/**
 * Composant Notification réutilisable
 * Affiche des notifications toast avec différents types et durées
 * @class
 */
export class Notification {
    /**
     * @param {Object} options
     * @param {string} options.type - Type (success, error, warning, info)
     * @param {string} options.title - Titre de la notification
     * @param {string} options.message - Message de la notification
     * @param {number} options.duration - Durée en ms (0 = permanent)
     * @param {boolean} options.closable - Si la notification peut être fermée
     * @param {Function} options.onClose - Callback de fermeture
     */
    constructor(options = {}) {
        this.type = options.type || 'info';
        this.title = options.title || '';
        this.message = options.message || '';
        this.duration = options.duration || 5000;
        this.closable = options.closable !== false;
        this.onClose = options.onClose || null;

        this.element = null;
        this.timeoutId = null;
        this.isVisible = false;

        this.init();
    }

    /**
     * Initialise la notification
     */
    init() {
        this.createNotificationElement();
        this.injectStyles();
    }

    /**
     * Crée l'élément DOM de la notification
     */
    createNotificationElement() {
        this.element = DOMHelper.createElement('div', {
            className: `notification notification-${this.type}`
        });

        // Icône selon le type
        const icon = this.getIconForType(this.type);
        if (icon) {
            const iconElement = DOMHelper.createElement('div', {
                className: 'notification-icon'
            }, icon);
            this.element.appendChild(iconElement);
        }

        // Contenu
        const content = DOMHelper.createElement('div', {
            className: 'notification-content'
        });

        if (this.title) {
            const titleElement = DOMHelper.createElement('div', {
                className: 'notification-title'
            }, this.title);
            content.appendChild(titleElement);
        }

        if (this.message) {
            const messageElement = DOMHelper.createElement('div', {
                className: 'notification-message'
            }, this.message);
            content.appendChild(messageElement);
        }

        this.element.appendChild(content);

        // Bouton de fermeture
        if (this.closable) {
            const closeButton = DOMHelper.createElement('button', {
                className: 'notification-close',
                type: 'button',
                'aria-label': 'Fermer'
            }, '×');
            this.element.appendChild(closeButton);
        }

        // Barre de progression pour les notifications temporaires
        if (this.duration > 0) {
            const progressBar = DOMHelper.createElement('div', {
                className: 'notification-progress'
            });
            const progressInner = DOMHelper.createElement('div', {
                className: 'notification-progress-inner'
            });
            progressBar.appendChild(progressInner);
            this.element.appendChild(progressBar);
        }
    }

    /**
     * Injecte les styles CSS si nécessaire
     */
    injectStyles() {
        if (document.getElementById('notification-styles')) return;

        const styles = `
            .notification-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10001;
                display: flex;
                flex-direction: column;
                gap: 12px;
                max-width: 400px;
                pointer-events: none;
            }

            .notification {
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                padding: 16px;
                display: flex;
                align-items: flex-start;
                gap: 12px;
                border-left: 4px solid #5b1aff;
                opacity: 0;
                transform: translateX(100%);
                transition: all 0.3s ease;
                pointer-events: auto;
                position: relative;
                overflow: hidden;
            }

            .notification.show {
                opacity: 1;
                transform: translateX(0);
            }

            .notification-icon {
                font-size: 1.25rem;
                flex-shrink: 0;
                margin-top: 2px;
            }

            .notification-content {
                flex: 1;
                min-width: 0;
            }

            .notification-title {
                font-weight: 600;
                color: #0f032b;
                margin-bottom: 4px;
                font-size: 0.875rem;
            }

            .notification-message {
                color: #6b7280;
                font-size: 0.875rem;
                line-height: 1.4;
            }

            .notification-close {
                background: none;
                border: none;
                font-size: 1.25rem;
                cursor: pointer;
                color: #9ca3af;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                transition: all 0.2s ease;
                flex-shrink: 0;
            }

            .notification-close:hover {
                background: #f3f4f6;
                color: #6b7280;
            }

            /* Types de notification */
            .notification-success { border-left-color: #10b981; }
            .notification-success .notification-icon { color: #10b981; }

            .notification-error { border-left-color: #ef4444; }
            .notification-error .notification-icon { color: #ef4444; }

            .notification-warning { border-left-color: #f59e0b; }
            .notification-warning .notification-icon { color: #f59e0b; }

            .notification-info { border-left-color: #5b1aff; }
            .notification-info .notification-icon { color: #5b1aff; }

            /* Barre de progression */
            .notification-progress {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: rgba(0, 0, 0, 0.1);
            }

            .notification-progress-inner {
                height: 100%;
                background: currentColor;
                transition: width linear;
                width: 100%;
            }

            /* Animations */
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            @keyframes slideOut {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100%);
                }
            }

            .notification.hide {
                animation: slideOut 0.3s ease forwards;
            }

            /* Responsive */
            @media (max-width: 768px) {
                .notification-container {
                    top: 10px;
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }

                .notification {
                    margin-bottom: 8px;
                }
            }
        `;

        const styleElement = DOMHelper.createElement('style', {
            id: 'notification-styles'
        }, styles);

        document.head.appendChild(styleElement);
    }

    /**
     * Obtient l'icône pour un type de notification
     * @param {string} type
     * @returns {string}
     */
    getIconForType(type) {
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || 'ℹ';
    }

    /**
     * Affiche la notification
     * @param {Element} container - Conteneur optionnel
     */
    show(container = null) {
        if (this.isVisible) return;

        const targetContainer = container || this.getOrCreateContainer();
        targetContainer.appendChild(this.element);

        // Animation d'entrée
        setTimeout(() => {
            DOMHelper.addClass(this.element, 'show');
        }, 10);

        this.isVisible = true;

        // Liaison des événements
        this.bindEvents();

        // Auto-fermeture si durée définie
        if (this.duration > 0) {
            this.startAutoClose();
        }

        // Événement
        eventManager.emit(CUSTOM_EVENTS.NOTIFICATION_SHOW, {
            notification: this,
            type: this.type
        });
    }

    /**
     * Masque la notification
     */
    hide() {
        if (!this.isVisible) return;

        DOMHelper.addClass(this.element, 'hide');

        // Supprimer après l'animation
        setTimeout(() => {
            if (this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }

            if (this.onClose) {
                this.onClose(this);
            }

            // Événement
            eventManager.emit(CUSTOM_EVENTS.NOTIFICATION_HIDE, {
                notification: this,
                type: this.type
            });
        }, 300);

        this.isVisible = false;
        this.clearAutoClose();
    }

    /**
     * Lie les événements de la notification
     */
    bindEvents() {
        // Bouton de fermeture
        const closeButton = this.element.querySelector('.notification-close');
        if (closeButton && this.closable) {
            DOMHelper.addEventListener(closeButton, 'click', () => this.hide());
        }

        // Clic sur la notification
        DOMHelper.addEventListener(this.element, 'click', (e) => {
            if (e.target === this.element) {
                this.hide();
            }
        });
    }

    /**
     * Démarre l'auto-fermeture
     */
    startAutoClose() {
        const progressBar = this.element.querySelector('.notification-progress-inner');
        if (progressBar) {
            progressBar.style.transition = `width ${this.duration}ms linear`;
            setTimeout(() => {
                progressBar.style.width = '0%';
            }, 10);
        }

        this.timeoutId = setTimeout(() => {
            this.hide();
        }, this.duration);
    }

    /**
     * Annule l'auto-fermeture
     */
    clearAutoClose() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }

    /**
     * Obtient ou crée le conteneur de notifications
     * @returns {Element}
     */
    getOrCreateContainer() {
        let container = document.querySelector('.notification-container');
        if (!container) {
            container = DOMHelper.createElement('div', {
                className: 'notification-container'
            });
            document.body.appendChild(container);
        }
        return container;
    }

    /**
     * Met à jour le message de la notification
     * @param {string} message
     */
    setMessage(message) {
        this.message = message;
        const messageElement = this.element.querySelector('.notification-message');
        if (messageElement) {
            DOMHelper.setText(messageElement, message);
        }
    }

    /**
     * Met à jour le titre de la notification
     * @param {string} title
     */
    setTitle(title) {
        this.title = title;
        const titleElement = this.element.querySelector('.notification-title');
        if (titleElement) {
            DOMHelper.setText(titleElement, title);
        }
    }

    /**
     * Vérifie si la notification est visible
     * @returns {boolean}
     */
    isNotificationVisible() {
        return this.isVisible;
    }

    /**
     * Obtient l'élément DOM de la notification
     * @returns {Element}
     */
    getElement() {
        return this.element;
    }

    /**
     * Nettoie les ressources de la notification
     */
    destroy() {
        this.hide();
        this.clearAutoClose();
        this.element = null;
    }
}

/**
 * Gestionnaire de notifications - Pour gérer facilement les notifications dans l'app
 * @class
 */
export class NotificationManager {
    constructor() {
        this.notifications = new Map();
        this.container = null;
    }

    /**
     * Initialise le gestionnaire
     */
    init() {
        this.container = this.createContainer();
    }

    /**
     * Crée le conteneur de notifications
     * @returns {Element}
     */
    createContainer() {
        let container = document.querySelector('.notification-container');
        if (!container) {
            container = DOMHelper.createElement('div', {
                className: 'notification-container'
            });
            document.body.appendChild(container);
        }
        return container;
    }

    /**
     * Affiche une notification
     * @param {Object} options
     * @returns {Notification}
     */
    show(options = {}) {
        const notification = new Notification(options);
        const id = `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        this.notifications.set(id, notification);
        notification.show(this.container);

        return notification;
    }

    /**
     * Affiche une notification de succès
     * @param {string} message
     * @param {string} title
     * @returns {Notification}
     */
    success(message, title = 'Succès') {
        return this.show({
            type: 'success',
            title,
            message,
            duration: 4000
        });
    }

    /**
     * Affiche une notification d'erreur
     * @param {string} message
     * @param {string} title
     * @returns {Notification}
     */
    error(message, title = 'Erreur') {
        return this.show({
            type: 'error',
            title,
            message,
            duration: 6000
        });
    }

    /**
     * Affiche une notification d'avertissement
     * @param {string} message
     * @param {string} title
     * @returns {Notification}
     */
    warning(message, title = 'Attention') {
        return this.show({
            type: 'warning',
            title,
            message,
            duration: 5000
        });
    }

    /**
     * Affiche une notification d'information
     * @param {string} message
     * @param {string} title
     * @returns {Notification}
     */
    info(message, title = 'Information') {
        return this.show({
            type: 'info',
            title,
            message,
            duration: 4000
        });
    }

    /**
     * Masque toutes les notifications
     */
    hideAll() {
        this.notifications.forEach(notification => {
            if (notification.isNotificationVisible()) {
                notification.hide();
            }
        });
    }

    /**
     * Supprime toutes les notifications
     */
    clearAll() {
        this.notifications.forEach((notification, id) => {
            notification.destroy();
            this.notifications.delete(id);
        });
    }

    /**
     * Obtient le nombre de notifications actives
     * @returns {number}
     */
    getCount() {
        return this.notifications.size;
    }
}

// Instance globale du gestionnaire de notifications
export const notificationManager = new NotificationManager();
