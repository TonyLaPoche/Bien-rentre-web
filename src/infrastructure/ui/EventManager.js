import { CUSTOM_EVENTS } from '../../shared/constants/index.js';

/**
 * Gestionnaire d'événements personnalisés
 * Permet la communication entre les composants
 * @class
 */
export class EventManager {
    constructor() {
        this.events = {};
        this.isInitialized = false;
    }

    /**
     * Initialise le gestionnaire d'événements
     */
    init() {
        if (this.isInitialized) return;

        // Événements globaux du document
        document.addEventListener('DOMContentLoaded', () => {
            this.emit(CUSTOM_EVENTS.DOM_READY);
        });

        // Événements de navigation
        window.addEventListener('scroll', this.debounce(() => {
            this.emit(CUSTOM_EVENTS.SCROLL);
        }, 100));

        window.addEventListener('resize', this.debounce(() => {
            this.emit(CUSTOM_EVENTS.RESIZE);
        }, 250));

        this.isInitialized = true;
    }

    /**
     * S'abonne à un événement
     * @param {string} event
     * @param {Function} callback
     * @param {Object} context
     * @returns {Function} Fonction de désabonnement
     */
    on(event, callback, context = null) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        const listener = { callback, context };
        this.events[event].push(listener);

        // Retourner la fonction de désabonnement
        return () => this.off(event, callback, context);
    }

    /**
     * Se désabonne d'un événement
     * @param {string} event
     * @param {Function} callback
     * @param {Object} context
     */
    off(event, callback, context = null) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(listener =>
            !(listener.callback === callback &&
              (!context || listener.context === context))
        );
    }

    /**
     * Émet un événement
     * @param {string} event
     * @param {*} data
     */
    emit(event, data = null) {
        if (!this.events[event]) return;

        this.events[event].forEach(listener => {
            try {
                if (listener.context) {
                    listener.callback.call(listener.context, data);
                } else {
                    listener.callback(data);
                }
            } catch (error) {
                console.error(`Error in event listener for ${event}:`, error);
            }
        });
    }

    /**
     * Émet un événement une seule fois
     * @param {string} event
     * @param {*} data
     */
    emitOnce(event, data = null) {
        this.emit(event, data);
        this.events[event] = [];
    }

    /**
     * Vérifie si un événement a des écouteurs
     * @param {string} event
     * @returns {boolean}
     */
    hasListeners(event) {
        return this.events[event] && this.events[event].length > 0;
    }

    /**
     * Récupère le nombre d'écouteurs pour un événement
     * @param {string} event
     * @returns {number}
     */
    getListenerCount(event) {
        return this.events[event] ? this.events[event].length : 0;
    }

    /**
     * Supprime tous les écouteurs pour un événement
     * @param {string} event
     */
    removeAllListeners(event) {
        if (event) {
            this.events[event] = [];
        } else {
            this.events = {};
        }
    }

    /**
     * Récupère la liste des événements actifs
     * @returns {string[]}
     */
    getActiveEvents() {
        return Object.keys(this.events).filter(event =>
            this.events[event].length > 0
        );
    }

    /**
     * Fonction debounce pour limiter la fréquence d'exécution
     * @param {Function} func
     * @param {number} wait
     * @returns {Function}
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Fonction throttle pour limiter la fréquence d'exécution
     * @param {Function} func
     * @param {number} limit
     * @returns {Function}
     */
    throttle(func, limit) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    /**
     * Émet un événement avec un délai
     * @param {string} event
     * @param {*} data
     * @param {number} delay
     * @returns {number} ID du timeout
     */
    emitDelayed(event, data = null, delay = 0) {
        return setTimeout(() => {
            this.emit(event, data);
        }, delay);
    }

    /**
     * Nettoie tous les événements (utile pour les tests)
     */
    destroy() {
        this.events = {};
        this.isInitialized = false;
    }
}

// Instance globale du gestionnaire d'événements
export const eventManager = new EventManager();
