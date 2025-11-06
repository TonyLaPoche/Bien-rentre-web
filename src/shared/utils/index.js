/**
 * Utilitaires partagés - Fonctions helper générales
 */

/**
 * Utilitaires de formatage
 */
export const formatUtils = {
    /**
     * Formate une date en français
     * @param {Date|string} date
     * @returns {string}
     */
    formatDate(date) {
        const d = new Date(date);
        return d.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    /**
     * Formate une date relative (il y a X minutes/heures/jours)
     * @param {Date|string} date
     * @returns {string}
     */
    formatRelativeTime(date) {
        const now = new Date();
        const past = new Date(date);
        const diffInSeconds = Math.floor((now - past) / 1000);

        if (diffInSeconds < 60) return 'à l\'instant';
        if (diffInSeconds < 3600) return `il y a ${Math.floor(diffInSeconds / 60)} min`;
        if (diffInSeconds < 86400) return `il y a ${Math.floor(diffInSeconds / 3600)} h`;
        if (diffInSeconds < 604800) return `il y a ${Math.floor(diffInSeconds / 86400)} j`;

        return this.formatDate(date);
    },

    /**
     * Nettoie et tronque un texte
     * @param {string} text
     * @param {number} maxLength
     * @returns {string}
     */
    truncateText(text, maxLength = 100) {
        if (!text || text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    },

    /**
     * Convertit une chaîne en slug URL
     * @param {string} text
     * @returns {string}
     */
    slugify(text) {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
};

/**
 * Utilitaires de validation
 */
export const validationUtils = {
    /**
     * Valide une adresse email avec regex
     * @param {string} email
     * @returns {boolean}
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    /**
     * Valide un numéro de téléphone français
     * @param {string} phone
     * @returns {boolean}
     */
    isValidFrenchPhone(phone) {
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    },

    /**
     * Vérifie si une chaîne contient uniquement des chiffres
     * @param {string} str
     * @returns {boolean}
     */
    isNumeric(str) {
        return /^\d+$/.test(str);
    },

    /**
     * Vérifie si une valeur est vide (null, undefined, string vide, array vide)
     * @param {*} value
     * @returns {boolean}
     */
    isEmpty(value) {
        if (value == null) return true;
        if (typeof value === 'string') return value.trim() === '';
        if (Array.isArray(value)) return value.length === 0;
        if (typeof value === 'object') return Object.keys(value).length === 0;
        return false;
    },

    /**
     * Nettoie une chaîne de caractères
     * @param {string} str
     * @returns {string}
     */
    sanitizeString(str) {
        if (typeof str !== 'string') return '';
        return str.trim().replace(/[<>]/g, '');
    }
};

/**
 * Utilitaires de manipulation d'arrays
 */
export const arrayUtils = {
    /**
     * Mélange un array (algorithme Fisher-Yates)
     * @param {Array} array
     * @returns {Array}
     */
    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    /**
     * Supprime les doublons d'un array
     * @param {Array} array
     * @returns {Array}
     */
    removeDuplicates(array) {
        return [...new Set(array)];
    },

    /**
     * Groupe les éléments d'un array par une clé
     * @param {Array} array
     * @param {Function} keyFn
     * @returns {Object}
     */
    groupBy(array, keyFn) {
        return array.reduce((groups, item) => {
            const key = keyFn(item);
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(item);
            return groups;
        }, {});
    },

    /**
     * Trie un array d'objets par une propriété
     * @param {Array} array
     * @param {string} property
     * @param {boolean} ascending
     * @returns {Array}
     */
    sortBy(array, property, ascending = true) {
        return [...array].sort((a, b) => {
            const aVal = a[property];
            const bVal = b[property];

            if (aVal < bVal) return ascending ? -1 : 1;
            if (aVal > bVal) return ascending ? 1 : -1;
            return 0;
        });
    }
};

/**
 * Utilitaires pour le DOM
 */
export const domUtils = {
    /**
     * Attend que le DOM soit chargé
     * @returns {Promise<void>}
     */
    waitForDOM() {
        return new Promise(resolve => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        });
    },

    /**
     * Crée un élément HTML avec des attributs et du contenu
     * @param {string} tagName
     * @param {Object} attributes
     * @param {string|Node} content
     * @returns {Element}
     */
    createElement(tagName, attributes = {}, content = '') {
        const element = document.createElement(tagName);

        // Attributs
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === 'className' && Array.isArray(value)) {
                element.className = value.join(' ');
            } else if (key === 'style' && typeof value === 'object') {
                Object.assign(element.style, value);
            } else {
                element.setAttribute(key, value);
            }
        });

        // Contenu
        if (typeof content === 'string') {
            element.innerHTML = content;
        } else if (content instanceof Node) {
            element.appendChild(content);
        }

        return element;
    },

    /**
     * Anime un élément avec une transition CSS
     * @param {Element} element
     * @param {Object} properties
     * @param {number} duration
     * @returns {Promise<void>}
     */
    animate(element, properties, duration = 300) {
        return new Promise(resolve => {
            if (!element) {
                resolve();
                return;
            }

            // Appliquer les propriétés finales
            Object.assign(element.style, properties);

            // Attendre la fin de l'animation
            setTimeout(resolve, duration);
        });
    },

    /**
     * Détecte si l'utilisateur est sur mobile
     * @returns {boolean}
     */
    isMobile() {
        return window.innerWidth <= 768 ||
               /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    /**
     * Obtient les dimensions de la fenêtre
     * @returns {Object}
     */
    getViewportSize() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight
        };
    }
};

/**
 * Utilitaires pour les événements
 */
export const eventUtils = {
    /**
     * Crée un événement personnalisé
     * @param {string} eventName
     * @param {Object} detail
     * @returns {CustomEvent}
     */
    createCustomEvent(eventName, detail = {}) {
        return new CustomEvent(eventName, {
            detail,
            bubbles: true,
            cancelable: true
        });
    },

    /**
     * Dispatch un événement personnalisé
     * @param {Element} element
     * @param {string} eventName
     * @param {Object} detail
     */
    dispatchCustomEvent(element, eventName, detail = {}) {
        const event = this.createCustomEvent(eventName, detail);
        element.dispatchEvent(event);
    },

    /**
     * Debounce une fonction
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
    },

    /**
     * Throttle une fonction
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
};

/**
 * Utilitaires pour les API et requêtes HTTP
 */
export const apiUtils = {
    /**
     * Effectue une requête HTTP avec gestion d'erreurs
     * @param {string} url
     * @param {Object} options
     * @returns {Promise<Object>}
     */
    async fetchWithErrorHandling(url, options = {}) {
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            } else {
                return await response.text();
            }
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    },

    /**
     * Vérifie si une URL est valide
     * @param {string} url
     * @returns {boolean}
     */
    isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    },

    /**
     * Construit une URL avec des paramètres de requête
     * @param {string} baseUrl
     * @param {Object} params
     * @returns {string}
     */
    buildUrl(baseUrl, params = {}) {
        const url = new URL(baseUrl, window.location.origin);

        Object.entries(params).forEach(([key, value]) => {
            if (value != null) {
                url.searchParams.append(key, value);
            }
        });

        return url.toString();
    }
};

/**
 * Utilitaires pour le stockage local
 */
export const storageUtils = {
    /**
     * Sauvegarde dans localStorage avec gestion d'erreurs
     * @param {string} key
     * @param {*} value
     * @returns {boolean}
     */
    setItem(key, value) {
        try {
            const serialized = JSON.stringify(value);
            localStorage.setItem(key, serialized);
            return true;
        } catch (error) {
            console.error('Storage setItem failed:', error);
            return false;
        }
    },

    /**
     * Récupère depuis localStorage avec gestion d'erreurs
     * @param {string} key
     * @param {*} defaultValue
     * @returns {*}
     */
    getItem(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Storage getItem failed:', error);
            return defaultValue;
        }
    },

    /**
     * Supprime un item du localStorage
     * @param {string} key
     * @returns {boolean}
     */
    removeItem(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Storage removeItem failed:', error);
            return false;
        }
    },

    /**
     * Vérifie si une clé existe
     * @param {string} key
     * @returns {boolean}
     */
    hasItem(key) {
        return localStorage.getItem(key) !== null;
    }
};

/**
 * Utilitaires pour les performances
 */
export const performanceUtils = {
    /**
     * Mesure le temps d'exécution d'une fonction
     * @param {Function} fn
     * @param {string} label
     * @returns {*}
     */
    measureExecutionTime(fn, label = 'Execution time') {
        const start = performance.now();
        const result = fn();
        const end = performance.now();
        console.log(`${label}: ${(end - start).toFixed(2)}ms`);
        return result;
    },

    /**
     * Lazy loading d'une image
     * @param {HTMLImageElement} img
     * @param {string} src
     * @returns {Promise<void>}
     */
    lazyLoadImage(img, src) {
        return new Promise((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = () => reject(new Error('Image failed to load'));
            img.src = src;
        });
    },

    /**
     * Précharge une ressource
     * @param {string} url
     * @param {string} as
     * @returns {Promise<void>}
     */
    preloadResource(url, as = 'image') {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = as;
            link.href = url;

            link.onload = () => resolve();
            link.onerror = () => reject(new Error('Resource failed to preload'));

            document.head.appendChild(link);
        });
    }
};
