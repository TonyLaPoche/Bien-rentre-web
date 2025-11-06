/**
 * Bundle Bien-Rentré - Généré automatiquement
 * Date: 2025-11-06T16:34:48.640Z
 */


// ===== shared/types/index.js =====
/**
 * @typedef {Object} ContactFormData
 * @property {string} name - Nom optionnel de l'utilisateur
 * @property {string} email - Adresse email obligatoire
 * @property {string} subject - Sujet du message obligatoire
 * @property {string} message - Contenu du message obligatoire
 * @property {boolean} privacyAccepted - Acceptation de la politique de confidentialité
 */

/**
 * @typedef {Object} ValidationResult
 * @property {boolean} isValid - Si la validation est passée
 * @property {Object.<string, string>} errors - Erreurs par champ
 */

/**
 * @typedef {Object} EmailData
 * @property {string} from_name - Nom de l'expéditeur
 * @property {string} from_email - Email de l'expéditeur
 * @property {string} subject - Sujet de l'email
 * @property {string} message - Contenu du message
 * @property {string} to_email - Email destinataire
 */

/**
 * @typedef {Object} FAQItem
 * @property {string} question - Question de la FAQ
 * @property {string} answer - Réponse à la question
 * @property {boolean} isOpen - État d'ouverture de l'accordéon
 */

/**
 * @typedef {Object} FormField
 * @property {string} name - Nom du champ
 * @property {string} value - Valeur du champ
 * @property {boolean} isRequired - Si le champ est obligatoire
 * @property {Function} validator - Fonction de validation
 * @property {string} errorMessage - Message d'erreur
 */

/**
 * @typedef {Object} APIResponse
 * @property {boolean} success - Si l'appel API a réussi
 * @property {string} message - Message de réponse
 * @property {*} data - Données de réponse (optionnel)
 */


// ===== shared/constants/index.js =====
/**
 * Constantes de l'application Bien-Rentré
 */

// Configuration EmailJS (à remplacer par les vraies valeurs)
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
    SERVICE_ID: 'YOUR_SERVICE_ID',
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID'
};

// Configuration de l'application
const APP_CONFIG = {
    NAME: 'Bien-Rentré',
    EMAIL: 'contact@bienrentre.app',
    VERSION: '1.0.0'
};

// Limites de validation
const VALIDATION_RULES = {
    EMAIL: {
        MAX_LENGTH: 254,
        PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    NAME: {
        MAX_LENGTH: 100,
        MIN_LENGTH: 0 // Optionnel
    },
    SUBJECT: {
        MAX_LENGTH: 200,
        MIN_LENGTH: 1
    },
    MESSAGE: {
        MAX_LENGTH: 1000,
        MIN_LENGTH: 10
    }
};

// Messages d'erreur
const ERROR_MESSAGES = {
    REQUIRED: 'Ce champ est obligatoire',
    EMAIL_INVALID: 'Veuillez entrer un email valide',
    EMAIL_TOO_LONG: 'L\'email ne peut pas dépasser 254 caractères',
    NAME_TOO_LONG: 'Le nom ne peut pas dépasser 100 caractères',
    SUBJECT_TOO_SHORT: 'Le sujet doit contenir au moins 1 caractère',
    SUBJECT_TOO_LONG: 'Le sujet ne peut pas dépasser 200 caractères',
    MESSAGE_TOO_SHORT: 'Le message doit contenir au moins 10 caractères',
    MESSAGE_TOO_LONG: 'Le message ne peut pas dépasser 1000 caractères',
    PRIVACY_REQUIRED: 'Vous devez accepter la politique de confidentialité',
    EMAIL_SEND_FAILED: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.',
    NETWORK_ERROR: 'Erreur de connexion. Vérifiez votre connexion internet.',
    UNKNOWN_ERROR: 'Une erreur inconnue est survenue.'
};

// Messages de succès
const SUCCESS_MESSAGES = {
    EMAIL_SENT: 'Message envoyé avec succès !',
    FORM_VALID: 'Formulaire valide'
};

// État des FAQ
const FAQ_DATA = [
    {
        question: 'Est-ce que Bien-Rentré est un système d\'alerte d\'urgence ?',
        answer: 'Non, Bien-Rentré n\'est pas un système d\'alerte d\'urgence officiel. C\'est un outil de prévention qui permet de partager votre position avec des contacts de confiance pour des déplacements nocturnes. En cas d\'urgence réelle, contactez immédiatement les services d\'urgence appropriés (112, 911, etc.).',
        isOpen: false
    },
    {
        question: 'Comment mes données de localisation sont-elles protégées ?',
        answer: 'Vos données de géolocalisation ne sont partagées qu\'avec les contacts que vous avez explicitement autorisés. Elles sont chiffrées et stockées temporairement pendant la session active. Nous respectons pleinement le RGPD et nos pratiques sont détaillées dans notre politique de confidentialité.',
        isOpen: false
    },
    {
        question: 'L\'application fonctionne-t-elle hors ligne ?',
        answer: 'Bien-Rentré nécessite une connexion internet pour partager la géolocalisation en temps réel. Cependant, l\'application peut détecter la perte de connexion et notifier votre contact en cas d\'interruption du signal GPS.',
        isOpen: false
    },
    {
        question: 'Combien de contacts puis-je ajouter ?',
        answer: 'Dans la version gratuite, vous pouvez ajouter jusqu\'à 3 contacts de confiance. La version premium permet un nombre illimité de contacts simultanés.',
        isOpen: false
    },
    {
        question: 'Quelle est la précision de la géolocalisation ?',
        answer: 'L\'application utilise le GPS intégré de votre smartphone avec une précision généralement de 5 à 10 mètres. La précision peut varier selon les conditions météorologiques et la couverture réseau.',
        isOpen: false
    }
];

// Classes CSS pour les états
const CSS_CLASSES = {
    FORM: {
        GROUP: 'form-group',
        ERROR: 'error',
        SUCCESS: 'success',
        LOADING: 'loading'
    },
    MODAL: {
        MODAL: 'modal',
        OPEN: 'open',
        CLOSE: 'close'
    },
    FAQ: {
        ITEM: 'faq-item',
        QUESTION: 'faq-question',
        ANSWER: 'faq-answer',
        TOGGLE: 'faq-toggle',
        ACTIVE: 'active'
    },
    NAV: {
        MOBILE: 'nav-mobile',
        TOGGLE: 'nav-toggle',
        LINKS: 'nav-links'
    }
};

// Événements personnalisés
const CUSTOM_EVENTS = {
    FORM_SUBMIT: 'form:submit',
    FORM_VALIDATION: 'form:validation',
    EMAIL_SENT: 'email:sent',
    EMAIL_ERROR: 'email:error',
    MODAL_OPEN: 'modal:open',
    MODAL_CLOSE: 'modal:close',
    FAQ_TOGGLE: 'faq:toggle',
    NAV_TOGGLE: 'nav:toggle'
};


// ===== shared/utils/index.js =====
/**
 * Utilitaires partagés - Fonctions helper générales
 */

/**
 * Utilitaires de formatage
 */
const formatUtils = {
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
const validationUtils = {
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
const arrayUtils = {
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
const domUtils = {
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
const eventUtils = {
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
const apiUtils = {
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
const storageUtils = {
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
const performanceUtils = {
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


// ===== domain/entities/ContactForm.js =====
/**
 * Entité ContactForm - Représente les données du formulaire de contact
 * @class
 */
class ContactForm {
    /**
     * @param {Object} data
     * @param {string} [data.name='']
     * @param {string} data.email
     * @param {string} data.subject
     * @param {string} data.message
     * @param {boolean} data.privacyAccepted
     */
    constructor(data) {
        this.name = data.name || '';
        this.email = data.email || '';
        this.subject = data.subject || '';
        this.message = data.message || '';
        this.privacyAccepted = data.privacyAccepted || false;
        this.createdAt = new Date();
    }

    /**
     * Convertit l'entité en objet pour l'API EmailJS
     * @returns {Object}
     */
    toEmailData() {
        return {
            from_name: this.name || 'Anonyme',
            from_email: this.email,
            subject: this.subject,
            message: this.message,
            to_email: 'contact@bienrentre.app'
        };
    }

    /**
     * Vérifie si le formulaire est valide
     * @returns {boolean}
     */
    isValid() {
        return (
            this.email &&
            this.subject &&
            this.message &&
            this.privacyAccepted
        );
    }

    /**
     * Crée une copie du formulaire avec de nouvelles données
     * @param {Object} updates
     * @returns {ContactForm}
     */
    update(updates) {
        return new ContactForm({
            ...this,
            ...updates
        });
    }
}


// ===== domain/entities/FAQItem.js =====
/**
 * Entité FAQItem - Élément de FAQ
 * @class
 */
class FAQItem {
    /**
     * @param {Object} data
     * @param {string} data.question
     * @param {string} data.answer
     * @param {boolean} [data.isOpen=false]
     */
    constructor(data) {
        this.question = data.question;
        this.answer = data.answer;
        this.isOpen = data.isOpen || false;
        this.id = this.generateId();
    }

    /**
     * Génère un ID unique pour l'élément FAQ
     * @returns {string}
     */
    generateId() {
        return `faq-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Bascule l'état ouvert/fermé
     * @returns {FAQItem}
     */
    toggle() {
        return new FAQItem({
            ...this,
            isOpen: !this.isOpen
        });
    }

    /**
     * Ouvre l'élément FAQ
     * @returns {FAQItem}
     */
    open() {
        return new FAQItem({
            ...this,
            isOpen: true
        });
    }

    /**
     * Ferme l'élément FAQ
     * @returns {FAQItem}
     */
    close() {
        return new FAQItem({
            ...this,
            isOpen: false
        });
    }

    /**
     * Met à jour la question
     * @param {string} question
     * @returns {FAQItem}
     */
    updateQuestion(question) {
        return new FAQItem({
            ...this,
            question
        });
    }

    /**
     * Met à jour la réponse
     * @param {string} answer
     * @returns {FAQItem}
     */
    updateAnswer(answer) {
        return new FAQItem({
            ...this,
            answer
        });
    }
}


// ===== domain/entities/ValidationResult.js =====
/**
 * Entité ValidationResult - Résultat de validation d'un formulaire
 * @class
 */
class ValidationResult {
    /**
     * @param {boolean} isValid
     * @param {Object.<string, string>} errors
     */
    constructor(isValid = true, errors = {}) {
        this.isValid = isValid;
        this.errors = errors;
        this.validatedAt = new Date();
    }

    /**
     * Crée un résultat de validation réussi
     * @returns {ValidationResult}
     */
    static success() {
        return new ValidationResult(true, {});
    }

    /**
     * Crée un résultat de validation avec erreurs
     * @param {Object.<string, string>} errors
     * @returns {ValidationResult}
     */
    static failure(errors) {
        return new ValidationResult(false, errors);
    }

    /**
     * Ajoute une erreur pour un champ spécifique
     * @param {string} field
     * @param {string} message
     * @returns {ValidationResult}
     */
    addError(field, message) {
        return new ValidationResult(false, {
            ...this.errors,
            [field]: message
        });
    }

    /**
     * Vérifie si un champ a une erreur
     * @param {string} field
     * @returns {boolean}
     */
    hasError(field) {
        return Boolean(this.errors[field]);
    }

    /**
     * Récupère l'erreur d'un champ
     * @param {string} field
     * @returns {string|null}
     */
    getError(field) {
        return this.errors[field] || null;
    }

    /**
     * Récupère toutes les erreurs
     * @returns {string[]}
     */
    getAllErrors() {
        return Object.values(this.errors);
    }

    /**
     * Fusionne deux résultats de validation
     * @param {ValidationResult} other
     * @returns {ValidationResult}
     */
    merge(other) {
        return new ValidationResult(
            this.isValid && other.isValid,
            { ...this.errors, ...other.errors }
        );
    }
}


// ===== domain/entities/index.js =====
/**
 * Export des entités du domaine
 */

// export {ContactForm } from './ContactForm.js';
// export {ValidationResult } from './ValidationResult.js';
// export {FAQItem } from './FAQItem.js';


// ===== domain/services/FAQService.js =====
// import { FAQItem } from '../entities/FAQItem.js';
// import { FAQ_DATA } from '../../shared/constants/index.js';

/**
 * Service de gestion des FAQ - Logique métier des questions fréquentes
 * @class
 */
class FAQService {
    constructor() {
        this.faqItems = this.initializeFAQ();
    }

    /**
     * Initialise la liste des FAQ à partir des données constantes
     * @returns {FAQItem[]}
     */
    initializeFAQ() {
        return FAQ_DATA.map(data => new FAQItem(data));
    }

    /**
     * Récupère tous les éléments FAQ
     * @returns {FAQItem[]}
     */
    getAllFAQ() {
        return [...this.faqItems];
    }

    /**
     * Trouve un élément FAQ par son ID
     * @param {string} id
     * @returns {FAQItem|null}
     */
    findById(id) {
        return this.faqItems.find(item => item.id === id) || null;
    }

    /**
     * Bascule l'état ouvert/fermé d'un élément FAQ
     * @param {string} id
     * @returns {FAQItem[]}
     */
    toggleFAQ(id) {
        this.faqItems = this.faqItems.map(item =>
            item.id === id ? item.toggle() : item.close()
        );
        return this.getAllFAQ();
    }

    /**
     * Ferme tous les éléments FAQ
     * @returns {FAQItem[]}
     */
    closeAllFAQ() {
        this.faqItems = this.faqItems.map(item => item.close());
        return this.getAllFAQ();
    }

    /**
     * Recherche dans les FAQ
     * @param {string} query
     * @returns {FAQItem[]}
     */
    searchFAQ(query) {
        if (!query || query.trim() === '') {
            return this.getAllFAQ();
        }

        const searchTerm = query.toLowerCase().trim();
        return this.faqItems.filter(item =>
            item.question.toLowerCase().includes(searchTerm) ||
            item.answer.toLowerCase().includes(searchTerm)
        );
    }

    /**
     * Récupère les éléments FAQ ouverts
     * @returns {FAQItem[]}
     */
    getOpenFAQ() {
        return this.faqItems.filter(item => item.isOpen);
    }

    /**
     * Compte le nombre total d'éléments FAQ
     * @returns {number}
     */
    getTotalCount() {
        return this.faqItems.length;
    }

    /**
     * Récupère les statistiques des FAQ
     * @returns {Object}
     */
    getStats() {
        return {
            total: this.getTotalCount(),
            open: this.getOpenFAQ().length,
            closed: this.getTotalCount() - this.getOpenFAQ().length
        };
    }
}


// ===== domain/services/FormValidationService.js =====
// import { ValidationResult } from '../entities/ValidationResult.js';
// import { VALIDATION_RULES, ERROR_MESSAGES } from '../../shared/constants/index.js';

/**
 * Service de validation des formulaires - Logique métier de validation
 * @class
 */
class FormValidationService {
    /**
     * Valide un formulaire de contact complet
     * @param {ContactForm} contactForm
     * @returns {ValidationResult}
     */
    validateContactForm(contactForm) {
        const errors = {};

        // Validation de l'email
        const emailError = this.validateEmail(contactForm.email);
        if (emailError) errors.email = emailError;

        // Validation du nom (optionnel)
        const nameError = this.validateName(contactForm.name);
        if (nameError) errors.name = nameError;

        // Validation du sujet
        const subjectError = this.validateSubject(contactForm.subject);
        if (subjectError) errors.subject = subjectError;

        // Validation du message
        const messageError = this.validateMessage(contactForm.message);
        if (messageError) errors.message = messageError;

        // Validation de l'acceptation de la confidentialité
        if (!contactForm.privacyAccepted) {
            errors.privacy = ERROR_MESSAGES.PRIVACY_REQUIRED;
        }

        return Object.keys(errors).length === 0
            ? ValidationResult.success()
            : ValidationResult.failure(errors);
    }

    /**
     * Valide une adresse email
     * @param {string} email
     * @returns {string|null}
     */
    validateEmail(email) {
        if (!email || email.trim() === '') {
            return ERROR_MESSAGES.REQUIRED;
        }

        if (email.length > VALIDATION_RULES.EMAIL.MAX_LENGTH) {
            return ERROR_MESSAGES.EMAIL_TOO_LONG;
        }

        if (!VALIDATION_RULES.EMAIL.PATTERN.test(email)) {
            return ERROR_MESSAGES.EMAIL_INVALID;
        }

        return null;
    }

    /**
     * Valide un nom (optionnel)
     * @param {string} name
     * @returns {string|null}
     */
    validateName(name) {
        if (name && name.length > VALIDATION_RULES.NAME.MAX_LENGTH) {
            return ERROR_MESSAGES.NAME_TOO_LONG;
        }

        return null;
    }

    /**
     * Valide un sujet
     * @param {string} subject
     * @returns {string|null}
     */
    validateSubject(subject) {
        if (!subject || subject.trim() === '') {
            return ERROR_MESSAGES.REQUIRED;
        }

        if (subject.length < VALIDATION_RULES.SUBJECT.MIN_LENGTH) {
            return ERROR_MESSAGES.SUBJECT_TOO_SHORT;
        }

        if (subject.length > VALIDATION_RULES.SUBJECT.MAX_LENGTH) {
            return ERROR_MESSAGES.SUBJECT_TOO_LONG;
        }

        return null;
    }

    /**
     * Valide un message
     * @param {string} message
     * @returns {string|null}
     */
    validateMessage(message) {
        if (!message || message.trim() === '') {
            return ERROR_MESSAGES.REQUIRED;
        }

        if (message.length < VALIDATION_RULES.MESSAGE.MIN_LENGTH) {
            return ERROR_MESSAGES.MESSAGE_TOO_SHORT;
        }

        if (message.length > VALIDATION_RULES.MESSAGE.MAX_LENGTH) {
            return ERROR_MESSAGES.MESSAGE_TOO_LONG;
        }

        return null;
    }

    /**
     * Nettoie et sanitise les données du formulaire
     * @param {Object} formData
     * @returns {Object}
     */
    sanitizeFormData(formData) {
        return {
            name: this.sanitizeText(formData.name || ''),
            email: this.sanitizeEmail(formData.email || ''),
            subject: this.sanitizeText(formData.subject || ''),
            message: this.sanitizeText(formData.message || ''),
            privacyAccepted: Boolean(formData.privacyAccepted)
        };
    }

    /**
     * Nettoie un texte
     * @param {string} text
     * @returns {string}
     */
    sanitizeText(text) {
        return text.trim().replace(/[<>]/g, '');
    }

    /**
     * Nettoie une adresse email
     * @param {string} email
     * @returns {string}
     */
    sanitizeEmail(email) {
        return email.trim().toLowerCase();
    }
}


// ===== domain/services/index.js =====
/**
 * Export des services du domaine
 */

// export {FormValidationService } from './FormValidationService.js';
// export {FAQService } from './FAQService.js';


// ===== domain/repositories/IEmailRepository.js =====
/**
 * Interface Repository pour les opérations email
 * Définit le contrat pour l'envoi d'emails
 */
class IEmailRepository {
    /**
     * Envoie un email
     * @param {EmailData} emailData
     * @returns {Promise<APIResponse>}
     */
    async sendEmail(emailData) {
        throw new Error('Method sendEmail must be implemented');
    }

    /**
     * Vérifie si le service email est disponible
     * @returns {Promise<boolean>}
     */
    async isAvailable() {
        throw new Error('Method isAvailable must be implemented');
    }
}


// ===== domain/repositories/ILocalStorageRepository.js =====
/**
 * Interface Repository pour le stockage local
 * Définit le contrat pour la persistance des données locales
 */
class ILocalStorageRepository {
    /**
     * Sauvegarde une valeur
     * @param {string} key
     * @param {*} value
     * @returns {Promise<void>}
     */
    async setItem(key, value) {
        throw new Error('Method setItem must be implemented');
    }

    /**
     * Récupère une valeur
     * @param {string} key
     * @returns {Promise<*>}
     */
    async getItem(key) {
        throw new Error('Method getItem must be implemented');
    }

    /**
     * Supprime une valeur
     * @param {string} key
     * @returns {Promise<void>}
     */
    async removeItem(key) {
        throw new Error('Method removeItem must be implemented');
    }

    /**
     * Vérifie si une clé existe
     * @param {string} key
     * @returns {Promise<boolean>}
     */
    async hasItem(key) {
        throw new Error('Method hasItem must be implemented');
    }

    /**
     * Vide tout le stockage
     * @returns {Promise<void>}
     */
    async clear() {
        throw new Error('Method clear must be implemented');
    }
}


// ===== domain/repositories/index.js =====
/**
 * Export des interfaces de repositories
 */

// export {IEmailRepository } from './IEmailRepository.js';
// export {ILocalStorageRepository } from './ILocalStorageRepository.js';


// ===== domain/index.js =====
/**
 * Point d'entrée du domaine - Logique métier
 */

export * from './entities/index.js';
export * from './services/index.js';
export * from './repositories/index.js';


// ===== application/useCases/ManageFAQ.js =====
/**
 * Use Case - Gérer les FAQ
 * Orchestre les opérations sur les FAQ
 */
class ManageFAQ {
    /**
     * @param {FAQService} faqService
     */
    constructor(faqService) {
        this.faqService = faqService;
    }

    /**
     * Récupère toutes les FAQ
     * @returns {FAQItem[]}
     */
    getAllFAQ() {
        return this.faqService.getAllFAQ();
    }

    /**
     * Bascule l'état d'une FAQ
     * @param {string} faqId
     * @returns {FAQItem[]}
     */
    toggleFAQ(faqId) {
        return this.faqService.toggleFAQ(faqId);
    }

    /**
     * Ferme toutes les FAQ
     * @returns {FAQItem[]}
     */
    closeAllFAQ() {
        return this.faqService.closeAllFAQ();
    }

    /**
     * Recherche dans les FAQ
     * @param {string} query
     * @returns {FAQItem[]}
     */
    searchFAQ(query) {
        return this.faqService.searchFAQ(query);
    }

    /**
     * Récupère les statistiques des FAQ
     * @returns {Object}
     */
    getFAQStats() {
        return this.faqService.getStats();
    }
}


// ===== application/useCases/SendContactEmail.js =====
/**
 * Use Case - Envoyer un email de contact
 * Orchestre la logique d'envoi d'email
 */
class SendContactEmail {
    /**
     * @param {IEmailRepository} emailRepository
     * @param {FormValidationService} validationService
     */
    constructor(emailRepository, validationService) {
        this.emailRepository = emailRepository;
        this.validationService = validationService;
    }

    /**
     * Exécute le use case d'envoi d'email
     * @param {ContactForm} contactForm
     * @returns {Promise<{success: boolean, message: string, errors?: Object}>}
     */
    async execute(contactForm) {
        try {
            // Validation du formulaire
            const validation = this.validationService.validateContactForm(contactForm);
            if (!validation.isValid) {
                return {
                    success: false,
                    message: 'Le formulaire contient des erreurs',
                    errors: validation.errors
                };
            }

            // Vérification de la disponibilité du service email
            const isAvailable = await this.emailRepository.isAvailable();
            if (!isAvailable) {
                return {
                    success: false,
                    message: 'Service d\'email indisponible'
                };
            }

            // Envoi de l'email
            const emailData = contactForm.toEmailData();
            const result = await this.emailRepository.sendEmail(emailData);

            if (result.success) {
                return {
                    success: true,
                    message: 'Message envoyé avec succès'
                };
            } else {
                return {
                    success: false,
                    message: result.message || 'Erreur lors de l\'envoi'
                };
            }

        } catch (error) {
            console.error('Erreur dans SendContactEmail:', error);
            return {
                success: false,
                message: 'Une erreur inattendue est survenue'
            };
        }
    }
}


// ===== application/useCases/ValidateContactForm.js =====
/**
 * Use Case - Valider un formulaire de contact
 * Orchestre la validation du formulaire
 */
class ValidateContactForm {
    /**
     * @param {FormValidationService} validationService
     */
    constructor(validationService) {
        this.validationService = validationService;
    }

    /**
     * Exécute la validation du formulaire
     * @param {Object} formData
     * @returns {ValidationResult}
     */
    execute(formData) {
        try {
            // Nettoyage des données
            const sanitizedData = this.validationService.sanitizeFormData(formData);

            // Création de l'entité ContactForm
            const contactForm = new (require('../../domain/entities/ContactForm.js').ContactForm)(sanitizedData);

            // Validation
            return this.validationService.validateContactForm(contactForm);

        } catch (error) {
            console.error('Erreur dans ValidateContactForm:', error);
            return require('../../domain/entities/ValidationResult.js').ValidationResult.failure({
                general: 'Erreur de validation du formulaire'
            });
        }
    }
}


// ===== application/useCases/index.js =====
/**
 * Export des use cases
 */

// export {SendContactEmail } from './SendContactEmail.js';
// export {ValidateContactForm } from './ValidateContactForm.js';
// export {ManageFAQ } from './ManageFAQ.js';


// ===== application/index.js =====
/**
 * Point d'entrée de la couche application - Use Cases
 */

export * from './useCases/index.js';


// ===== infrastructure/api/EmailJSAdapter.js =====
// import { IEmailRepository } from '../../domain/repositories/IEmailRepository.js';
// import { EMAILJS_CONFIG } from '../../shared/constants/index.js';

/**
 * Adaptateur EmailJS - Implémentation de IEmailRepository
 * Gère la communication avec l'API EmailJS
 * @class
 */
class EmailJSAdapter extends IEmailRepository {
    constructor() {
        super();
        this.isInitialized = false;
        this.init();
    }

    /**
     * Initialise EmailJS
     */
    init() {
        if (typeof window !== 'undefined' && window.emailjs) {
            try {
                window.emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
                this.isInitialized = true;
                console.log('EmailJS initialized successfully');
            } catch (error) {
                console.error('Failed to initialize EmailJS:', error);
                this.isInitialized = false;
            }
        } else {
            console.warn('EmailJS library not loaded');
        }
    }

    /**
     * Envoie un email via EmailJS
     * @param {EmailData} emailData
     * @returns {Promise<APIResponse>}
     */
    async sendEmail(emailData) {
        if (!this.isInitialized) {
            return {
                success: false,
                message: 'Service EmailJS non initialisé'
            };
        }

        if (!this.isValidEmailData(emailData)) {
            return {
                success: false,
                message: 'Données d\'email invalides'
            };
        }

        try {
            const result = await window.emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                emailData
            );

            if (result.status === 200) {
                return {
                    success: true,
                    message: 'Email envoyé avec succès',
                    data: result
                };
            } else {
                return {
                    success: false,
                    message: 'Erreur lors de l\'envoi de l\'email'
                };
            }

        } catch (error) {
            console.error('EmailJS send error:', error);

            // Gestion des erreurs spécifiques
            if (error.status === 400) {
                return {
                    success: false,
                    message: 'Données d\'email invalides'
                };
            } else if (error.status === 429) {
                return {
                    success: false,
                    message: 'Trop de tentatives, veuillez réessayer plus tard'
                };
            } else if (error.status >= 500) {
                return {
                    success: false,
                    message: 'Erreur du serveur, veuillez réessayer'
                };
            } else {
                return {
                    success: false,
                    message: 'Erreur lors de l\'envoi de l\'email'
                };
            }
        }
    }

    /**
     * Vérifie si le service EmailJS est disponible
     * @returns {Promise<boolean>}
     */
    async isAvailable() {
        if (!this.isInitialized) {
            return false;
        }

        // Test de disponibilité basique
        return new Promise((resolve) => {
            if (typeof window === 'undefined' || !window.emailjs) {
                resolve(false);
                return;
            }

            // Vérifier si les configurations sont présentes
            const hasConfig = EMAILJS_CONFIG.SERVICE_ID &&
                             EMAILJS_CONFIG.TEMPLATE_ID &&
                             EMAILJS_CONFIG.PUBLIC_KEY;

            resolve(hasConfig && this.isInitialized);
        });
    }

    /**
     * Valide les données d'email
     * @param {EmailData} emailData
     * @returns {boolean}
     */
    isValidEmailData(emailData) {
        return (
            emailData &&
            typeof emailData.from_name === 'string' &&
            typeof emailData.from_email === 'string' &&
            typeof emailData.subject === 'string' &&
            typeof emailData.message === 'string' &&
            typeof emailData.to_email === 'string' &&
            emailData.from_email.includes('@') &&
            emailData.to_email.includes('@')
        );
    }

    /**
     * Configure les clés EmailJS (pour les tests ou configuration dynamique)
     * @param {Object} config
     */
    configure(config) {
        if (config.publicKey) {
            EMAILJS_CONFIG.PUBLIC_KEY = config.publicKey;
        }
        if (config.serviceId) {
            EMAILJS_CONFIG.SERVICE_ID = config.serviceId;
        }
        if (config.templateId) {
            EMAILJS_CONFIG.TEMPLATE_ID = config.templateId;
        }

        // Réinitialiser avec la nouvelle configuration
        this.init();
    }
}


// ===== infrastructure/api/index.js =====
/**
 * Export des adaptateurs API
 */

// export {EmailJSAdapter } from './EmailJSAdapter.js';


// ===== infrastructure/storage/LocalStorageAdapter.js =====
// import { ILocalStorageRepository } from '../../domain/repositories/ILocalStorageRepository.js';

/**
 * Adaptateur LocalStorage - Implémentation de ILocalStorageRepository
 * Gère la persistance des données dans le localStorage du navigateur
 * @class
 */
class LocalStorageAdapter extends ILocalStorageRepository {
    constructor() {
        super();
        this.prefix = 'bienrentre_';
        this.isAvailable = this.checkAvailability();
    }

    /**
     * Vérifie si localStorage est disponible
     * @returns {boolean}
     */
    checkAvailability() {
        if (typeof window === 'undefined' || !window.localStorage) {
            return false;
        }

        try {
            const testKey = '__localStorage_test__';
            window.localStorage.setItem(testKey, 'test');
            window.localStorage.removeItem(testKey);
            return true;
        } catch (error) {
            console.warn('localStorage not available:', error);
            return false;
        }
    }

    /**
     * Génère une clé avec préfixe
     * @param {string} key
     * @returns {string}
     */
    getPrefixedKey(key) {
        return `${this.prefix}${key}`;
    }

    /**
     * Sauvegarde une valeur dans localStorage
     * @param {string} key
     * @param {*} value
     * @returns {Promise<void>}
     */
    async setItem(key, value) {
        if (!this.isAvailable) {
            console.warn('localStorage not available');
            return;
        }

        try {
            const prefixedKey = this.getPrefixedKey(key);
            const serializedValue = JSON.stringify(value);
            window.localStorage.setItem(prefixedKey, serializedValue);
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            throw new Error('Impossible de sauvegarder les données');
        }
    }

    /**
     * Récupère une valeur depuis localStorage
     * @param {string} key
     * @returns {Promise<*>}
     */
    async getItem(key) {
        if (!this.isAvailable) {
            console.warn('localStorage not available');
            return null;
        }

        try {
            const prefixedKey = this.getPrefixedKey(key);
            const serializedValue = window.localStorage.getItem(prefixedKey);

            if (serializedValue === null) {
                return null;
            }

            return JSON.parse(serializedValue);
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    }

    /**
     * Supprime une valeur du localStorage
     * @param {string} key
     * @returns {Promise<void>}
     */
    async removeItem(key) {
        if (!this.isAvailable) {
            console.warn('localStorage not available');
            return;
        }

        try {
            const prefixedKey = this.getPrefixedKey(key);
            window.localStorage.removeItem(prefixedKey);
        } catch (error) {
            console.error('Error removing from localStorage:', error);
            throw new Error('Impossible de supprimer les données');
        }
    }

    /**
     * Vérifie si une clé existe dans localStorage
     * @param {string} key
     * @returns {Promise<boolean>}
     */
    async hasItem(key) {
        if (!this.isAvailable) {
            return false;
        }

        try {
            const prefixedKey = this.getPrefixedKey(key);
            return window.localStorage.getItem(prefixedKey) !== null;
        } catch (error) {
            console.error('Error checking localStorage:', error);
            return false;
        }
    }

    /**
     * Vide tout le localStorage (seulement les clés avec préfixe)
     * @returns {Promise<void>}
     */
    async clear() {
        if (!this.isAvailable) {
            console.warn('localStorage not available');
            return;
        }

        try {
            const keys = Object.keys(window.localStorage);
            const prefixedKeys = keys.filter(key => key.startsWith(this.prefix));

            prefixedKeys.forEach(key => {
                window.localStorage.removeItem(key);
            });
        } catch (error) {
            console.error('Error clearing localStorage:', error);
            throw new Error('Impossible de vider le stockage');
        }
    }

    /**
     * Récupère toutes les clés avec préfixe
     * @returns {Promise<string[]>}
     */
    async getAllKeys() {
        if (!this.isAvailable) {
            return [];
        }

        try {
            const keys = Object.keys(window.localStorage);
            return keys
                .filter(key => key.startsWith(this.prefix))
                .map(key => key.replace(this.prefix, ''));
        } catch (error) {
            console.error('Error getting keys from localStorage:', error);
            return [];
        }
    }

    /**
     * Récupère les statistiques d'utilisation
     * @returns {Promise<Object>}
     */
    async getStats() {
        if (!this.isAvailable) {
            return { available: false, keys: 0, size: 0 };
        }

        try {
            const keys = await this.getAllKeys();
            let totalSize = 0;

            for (const key of keys) {
                const value = await this.getItem(key);
                if (value) {
                    totalSize += JSON.stringify(value).length;
                }
            }

            return {
                available: true,
                keys: keys.length,
                size: totalSize
            };
        } catch (error) {
            console.error('Error getting localStorage stats:', error);
            return { available: false, keys: 0, size: 0 };
        }
    }
}


// ===== infrastructure/storage/index.js =====
/**
 * Export des adaptateurs de stockage
 */

// export {LocalStorageAdapter } from './LocalStorageAdapter.js';


// ===== infrastructure/ui/DOMHelper.js =====
/**
 * Utilitaires pour la manipulation du DOM
 * Couche d'abstraction pour les opérations DOM
 * @class
 */
class DOMHelper {
    /**
     * Récupère un élément par son sélecteur
     * @param {string} selector
     * @returns {Element|null}
     */
    static getElement(selector) {
        return document.querySelector(selector);
    }

    /**
     * Récupère plusieurs éléments par leur sélecteur
     * @param {string} selector
     * @returns {NodeList}
     */
    static getElements(selector) {
        return document.querySelectorAll(selector);
    }

    /**
     * Crée un élément HTML
     * @param {string} tagName
     * @param {Object} attributes
     * @param {string} textContent
     * @returns {Element}
     */
    static createElement(tagName, attributes = {}, textContent = '') {
        const element = document.createElement(tagName);

        // Ajouter les attributs
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === 'className') {
                element.className = value;
            } else if (key === 'style' && typeof value === 'object') {
                Object.assign(element.style, value);
            } else {
                element.setAttribute(key, value);
            }
        });

        // Ajouter le contenu texte
        if (textContent) {
            element.textContent = textContent;
        }

        return element;
    }

    /**
     * Ajoute une classe CSS à un élément
     * @param {Element} element
     * @param {string} className
     */
    static addClass(element, className) {
        if (element && className) {
            element.classList.add(className);
        }
    }

    /**
     * Supprime une classe CSS d'un élément
     * @param {Element} element
     * @param {string} className
     */
    static removeClass(element, className) {
        if (element && className) {
            element.classList.remove(className);
        }
    }

    /**
     * Bascule une classe CSS sur un élément
     * @param {Element} element
     * @param {string} className
     */
    static toggleClass(element, className) {
        if (element && className) {
            element.classList.toggle(className);
        }
    }

    /**
     * Vérifie si un élément a une classe CSS
     * @param {Element} element
     * @param {string} className
     * @returns {boolean}
     */
    static hasClass(element, className) {
        return element && className ? element.classList.contains(className) : false;
    }

    /**
     * Définit le texte d'un élément
     * @param {Element} element
     * @param {string} text
     */
    static setText(element, text) {
        if (element) {
            element.textContent = text;
        }
    }

    /**
     * Définit le HTML d'un élément
     * @param {Element} element
     * @param {string} html
     */
    static setHTML(element, html) {
        if (element) {
            element.innerHTML = html;
        }
    }

    /**
     * Récupère la valeur d'un champ de formulaire
     * @param {Element} element
     * @returns {string}
     */
    static getValue(element) {
        return element ? element.value : '';
    }

    /**
     * Définit la valeur d'un champ de formulaire
     * @param {Element} element
     * @param {string} value
     */
    static setValue(element, value) {
        if (element) {
            element.value = value;
        }
    }

    /**
     * Vérifie si un élément est coché (checkbox/radio)
     * @param {Element} element
     * @returns {boolean}
     */
    static isChecked(element) {
        return element ? element.checked : false;
    }

    /**
     * Définit l'état coché d'un élément
     * @param {Element} element
     * @param {boolean} checked
     */
    static setChecked(element, checked) {
        if (element) {
            element.checked = checked;
        }
    }

    /**
     * Cache un élément
     * @param {Element} element
     */
    static hide(element) {
        if (element) {
            element.style.display = 'none';
        }
    }

    /**
     * Affiche un élément
     * @param {Element} element
     * @param {string} display
     */
    static show(element, display = 'block') {
        if (element) {
            element.style.display = display;
        }
    }

    /**
     * Bascule la visibilité d'un élément
     * @param {Element} element
     * @param {string} display
     */
    static toggleVisibility(element, display = 'block') {
        if (element) {
            element.style.display = element.style.display === 'none' ? display : 'none';
        }
    }

    /**
     * Ajoute un écouteur d'événement
     * @param {Element} element
     * @param {string} event
     * @param {Function} handler
     * @param {Object} options
     */
    static addEventListener(element, event, handler, options = {}) {
        if (element && event && handler) {
            element.addEventListener(event, handler, options);
        }
    }

    /**
     * Supprime un écouteur d'événement
     * @param {Element} element
     * @param {string} event
     * @param {Function} handler
     * @param {Object} options
     */
    static removeEventListener(element, event, handler, options = {}) {
        if (element && event && handler) {
            element.removeEventListener(event, handler, options);
        }
    }

    /**
     * Effectue un scroll fluide vers un élément
     * @param {Element} element
     * @param {Object} options
     */
    static scrollTo(element, options = {}) {
        if (element) {
            const defaultOptions = {
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            };

            element.scrollIntoView({ ...defaultOptions, ...options });
        }
    }

    /**
     * Récupère les données d'un formulaire
     * @param {HTMLFormElement} form
     * @returns {Object}
     */
    static getFormData(form) {
        if (!form) return {};

        const data = {};
        const formData = new FormData(form);

        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        return data;
    }

    /**
     * Définit les données d'un formulaire
     * @param {HTMLFormElement} form
     * @param {Object} data
     */
    static setFormData(form, data) {
        if (!form || !data) return;

        Object.entries(data).forEach(([key, value]) => {
            const element = form.querySelector(`[name="${key}"]`);
            if (element) {
                if (element.type === 'checkbox') {
                    element.checked = Boolean(value);
                } else {
                    element.value = value;
                }
            }
        });
    }

    /**
     * Réinitialise un formulaire
     * @param {HTMLFormElement} form
     */
    static resetForm(form) {
        if (form) {
            form.reset();
        }
    }

    /**
     * Affiche un message d'erreur pour un champ
     * @param {Element} fieldElement
     * @param {string} message
     */
    static showFieldError(fieldElement, message) {
        if (!fieldElement) return;

        // Trouver ou créer le conteneur d'erreur
        let errorElement = fieldElement.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = this.createElement('span', { className: 'error-message' });
            fieldElement.parentNode.appendChild(errorElement);
        }

        errorElement.textContent = message;
        this.addClass(fieldElement.closest('.form-group'), 'error');
    }

    /**
     * Masque le message d'erreur d'un champ
     * @param {Element} fieldElement
     */
    static hideFieldError(fieldElement) {
        if (!fieldElement) return;

        const errorElement = fieldElement.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }

        this.removeClass(fieldElement.closest('.form-group'), 'error');
        this.removeClass(fieldElement.closest('.form-group'), 'success');
    }

    /**
     * Affiche un indicateur de succès pour un champ
     * @param {Element} fieldElement
     */
    static showFieldSuccess(fieldElement) {
        if (!fieldElement) return;

        this.hideFieldError(fieldElement);
        this.addClass(fieldElement.closest('.form-group'), 'success');
    }
}


// ===== infrastructure/ui/EventManager.js =====
// import { CUSTOM_EVENTS } from '../../shared/constants/index.js';

/**
 * Gestionnaire d'événements personnalisés
 * Permet la communication entre les composants
 * @class
 */
class EventManager {
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
const eventManager = new EventManager();


// ===== infrastructure/ui/index.js =====
/**
 * Export des utilitaires UI
 */

// export {DOMHelper } from './DOMHelper.js';
// export {EventManager, eventManager } from './EventManager.js';


// ===== infrastructure/index.js =====
/**
 * Point d'entrée de l'infrastructure - Interfaces externes
 */

export * from './api/index.js';
export * from './storage/index.js';
export * from './ui/index.js';


// ===== presentation/controllers/ContactFormController.js =====
// import { SendContactEmail } from '../../application/useCases/SendContactEmail.js';
// import { ValidateContactForm } from '../../application/useCases/ValidateContactForm.js';
// import { ContactForm } from '../../domain/entities/ContactForm.js';
// import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
// import { eventManager } from '../../infrastructure/ui/EventManager.js';
// import { CUSTOM_EVENTS, CSS_CLASSES, SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../shared/constants/index.js';

/**
 * Controller pour le formulaire de contact
 * Gère l'interaction utilisateur avec le formulaire
 * @class
 */
class ContactFormController {
    /**
     * @param {SendContactEmail} sendContactEmailUseCase
     * @param {ValidateContactForm} validateContactFormUseCase
     */
    constructor(sendContactEmailUseCase, validateContactFormUseCase) {
        this.sendContactEmailUseCase = sendContactEmailUseCase;
        this.validateContactFormUseCase = validateContactFormUseCase;
        this.form = null;
        this.isSubmitting = false;
        this.init();
    }

    /**
     * Initialise le controller
     */
    init() {
        this.form = DOMHelper.getElement('#contactForm');
        if (!this.form) {
            console.warn('Contact form not found');
            return;
        }

        this.bindEvents();
        this.setupValidationListeners();
    }

    /**
     * Lie les événements du formulaire
     */
    bindEvents() {
        // Soumission du formulaire
        DOMHelper.addEventListener(this.form, 'submit', this.handleSubmit.bind(this));

        // Validation en temps réel
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            DOMHelper.addEventListener(input, 'blur', this.handleFieldValidation.bind(this));
            DOMHelper.addEventListener(input, 'input', this.handleFieldInput.bind(this));
        });
    }

    /**
     * Configure les écouteurs de validation
     */
    setupValidationListeners() {
        // Écouter les événements de validation
        eventManager.on(CUSTOM_EVENTS.FORM_VALIDATION, this.handleFormValidation.bind(this));
    }

    /**
     * Gère la soumission du formulaire
     * @param {Event} event
     */
    async handleSubmit(event) {
        event.preventDefault();

        if (this.isSubmitting) {
            return;
        }

        try {
            this.setSubmittingState(true);

            // Récupération des données du formulaire
            const formData = DOMHelper.getFormData(this.form);

            // Création de l'entité ContactForm
            const contactForm = new ContactForm({
                name: formData.name || '',
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                privacyAccepted: formData.privacy
            });

            // Validation du formulaire
            const validationResult = this.sendContactEmailUseCase.validationService.validateContactForm(contactForm);

            if (!validationResult.isValid) {
                this.handleValidationErrors(validationResult.errors);
                return;
            }

            // Envoi de l'email
            const result = await this.sendContactEmailUseCase.execute(contactForm);

            if (result.success) {
                this.handleSuccess();
            } else {
                this.handleError(result.message, result.errors);
            }

        } catch (error) {
            console.error('Form submission error:', error);
            this.handleError(ERROR_MESSAGES.EMAIL_SEND_FAILED);
        } finally {
            this.setSubmittingState(false);
        }
    }

    /**
     * Gère la validation d'un champ individuel
     * @param {Event} event
     */
    handleFieldValidation(event) {
        const field = event.target;
        const fieldName = field.name;
        const fieldValue = field.value;

        // Validation basique en temps réel
        this.validateField(fieldName, fieldValue, field);
    }

    /**
     * Gère la saisie dans un champ
     * @param {Event} event
     */
    handleFieldInput(event) {
        const field = event.target;

        // Masquer les erreurs lors de la saisie
        if (DOMHelper.hasClass(field.closest('.form-group'), 'error')) {
            DOMHelper.hideFieldError(field);
        }
    }

    /**
     * Gère la validation du formulaire
     * @param {ValidationResult} validationResult
     */
    handleFormValidation(validationResult) {
        if (validationResult.isValid) {
            this.clearAllErrors();
        } else {
            this.handleValidationErrors(validationResult.errors);
        }
    }

    /**
     * Valide un champ individuel
     * @param {string} fieldName
     * @param {string} value
     * @param {Element} fieldElement
     */
    validateField(fieldName, value, fieldElement) {
        const validationService = this.validateContactFormUseCase.validationService;
        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'email':
                errorMessage = validationService.validateEmail(value);
                isValid = !errorMessage;
                break;
            case 'subject':
                errorMessage = validationService.validateSubject(value);
                isValid = !errorMessage;
                break;
            case 'message':
                errorMessage = validationService.validateMessage(value);
                isValid = !errorMessage;
                break;
            case 'name':
                errorMessage = validationService.validateName(value);
                isValid = !errorMessage;
                break;
        }

        if (isValid) {
            DOMHelper.showFieldSuccess(fieldElement);
        } else {
            DOMHelper.showFieldError(fieldElement, errorMessage);
        }
    }

    /**
     * Gère les erreurs de validation
     * @param {Object} errors
     */
    handleValidationErrors(errors) {
        this.clearAllErrors();

        Object.entries(errors).forEach(([fieldName, message]) => {
            const fieldElement = this.form.querySelector(`[name="${fieldName}"]`);
            if (fieldElement) {
                DOMHelper.showFieldError(fieldElement, message);
            }
        });

        // Focus sur le premier champ en erreur
        const firstErrorField = this.form.querySelector('.error input, .error textarea');
        if (firstErrorField) {
            firstErrorField.focus();
        }
    }

    /**
     * Efface toutes les erreurs du formulaire
     */
    clearAllErrors() {
        const errorMessages = this.form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());

        const formGroups = this.form.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            DOMHelper.removeClass(group, 'error');
            DOMHelper.removeClass(group, 'success');
        });
    }

    /**
     * Gère le succès de l'envoi
     */
    handleSuccess() {
        // Émettre un événement de succès
        eventManager.emit(CUSTOM_EVENTS.EMAIL_SENT, {
            message: SUCCESS_MESSAGES.EMAIL_SENT
        });

        // Afficher le modal de succès
        this.showSuccessModal();

        // Réinitialiser le formulaire
        DOMHelper.resetForm(this.form);
        this.clearAllErrors();
    }

    /**
     * Gère les erreurs d'envoi
     * @param {string} message
     * @param {Object} errors
     */
    handleError(message, errors = null) {
        if (errors) {
            this.handleValidationErrors(errors);
        } else {
            // Afficher une erreur générale
            alert(message);
        }

        eventManager.emit(CUSTOM_EVENTS.EMAIL_ERROR, { message, errors });
    }

    /**
     * Définit l'état de soumission du formulaire
     * @param {boolean} isSubmitting
     */
    setSubmittingState(isSubmitting) {
        this.isSubmitting = isSubmitting;
        const submitBtn = this.form.querySelector('button[type="submit"]');

        if (isSubmitting) {
            DOMHelper.addClass(submitBtn, CSS_CLASSES.FORM.LOADING);
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
        } else {
            DOMHelper.removeClass(submitBtn, CSS_CLASSES.FORM.LOADING);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer le message';
        }
    }

    /**
     * Affiche le modal de succès
     */
    showSuccessModal() {
        const modal = DOMHelper.getElement('#successModal');
        if (modal) {
            DOMHelper.show(modal);
            document.body.style.overflow = 'hidden';

            // Auto-fermeture après 5 secondes
            setTimeout(() => {
                this.hideSuccessModal();
            }, 5000);
        }
    }

    /**
     * Masque le modal de succès
     */
    hideSuccessModal() {
        const modal = DOMHelper.getElement('#successModal');
        if (modal) {
            DOMHelper.hide(modal);
            document.body.style.overflow = 'auto';
        }
    }

    /**
     * Nettoie les ressources du controller
     */
    destroy() {
        // Supprimer les écouteurs d'événements
        if (this.form) {
            this.form.removeEventListener('submit', this.handleSubmit);
        }

        // Supprimer les écouteurs d'événements personnalisés
        eventManager.removeAllListeners(CUSTOM_EVENTS.FORM_VALIDATION);
    }
}


// ===== presentation/controllers/FAQController.js =====
// import { ManageFAQ } from '../../application/useCases/ManageFAQ.js';
// import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
// import { eventManager } from '../../infrastructure/ui/EventManager.js';
// import { CUSTOM_EVENTS, CSS_CLASSES } from '../../shared/constants/index.js';

/**
 * Controller pour les FAQ
 * Gère l'interaction utilisateur avec l'accordéon FAQ
 * @class
 */
class FAQController {
    /**
     * @param {ManageFAQ} manageFAQUseCase
     */
    constructor(manageFAQUseCase) {
        this.manageFAQUseCase = manageFAQUseCase;
        this.faqContainer = null;
        this.faqItems = [];
        this.init();
    }

    /**
     * Initialise le controller
     */
    init() {
        this.faqContainer = DOMHelper.getElement('.faq-container');
        if (!this.faqContainer) {
            console.warn('FAQ container not found');
            return;
        }

        this.loadFAQ();
        this.bindEvents();
    }

    /**
     * Charge et affiche les FAQ
     */
    loadFAQ() {
        this.faqItems = this.manageFAQUseCase.getAllFAQ();
        this.renderFAQ();
    }

    /**
     * Lie les événements des FAQ
     */
    bindEvents() {
        // Délégation d'événements pour les questions FAQ
        DOMHelper.addEventListener(this.faqContainer, 'click', this.handleFAQClick.bind(this));

        // Écouter les événements personnalisés
        eventManager.on(CUSTOM_EVENTS.FAQ_TOGGLE, this.handleToggleEvent.bind(this));
    }

    /**
     * Gère le clic sur une question FAQ
     * @param {Event} event
     */
    handleFAQClick(event) {
        const questionElement = event.target.closest('.faq-question');
        if (!questionElement) return;

        const faqItemElement = questionElement.closest('.faq-item');
        if (!faqItemElement) return;

        const faqId = faqItemElement.dataset.faqId;
        if (!faqId) return;

        event.preventDefault();
        this.toggleFAQ(faqId);
    }

    /**
     * Bascule l'état d'une FAQ
     * @param {string} faqId
     */
    toggleFAQ(faqId) {
        this.faqItems = this.manageFAQUseCase.toggleFAQ(faqId);
        this.updateFAQDisplay(faqId);

        // Émettre un événement
        eventManager.emit(CUSTOM_EVENTS.FAQ_TOGGLE, { faqId });
    }

    /**
     * Gère l'événement de basculement FAQ
     * @param {Object} data
     */
    handleToggleEvent(data) {
        if (data && data.faqId) {
            this.updateFAQDisplay(data.faqId);
        }
    }

    /**
     * Met à jour l'affichage d'une FAQ spécifique
     * @param {string} faqId
     */
    updateFAQDisplay(faqId) {
        const faqItem = this.faqItems.find(item => item.id === faqId);
        if (!faqItem) return;

        const faqElement = this.faqContainer.querySelector(`[data-faq-id="${faqId}"]`);
        if (!faqElement) return;

        // Mettre à jour les classes CSS
        if (faqItem.isOpen) {
            DOMHelper.addClass(faqElement, CSS_CLASSES.FAQ.ACTIVE);
        } else {
            DOMHelper.removeClass(faqElement, CSS_CLASSES.FAQ.ACTIVE);
        }

        // Mettre à jour l'icône du toggle
        const toggleElement = faqElement.querySelector('.faq-toggle');
        if (toggleElement) {
            toggleElement.textContent = faqItem.isOpen ? '−' : '+';
        }
    }

    /**
     * Ferme toutes les FAQ
     */
    closeAllFAQ() {
        this.faqItems = this.manageFAQUseCase.closeAllFAQ();
        this.renderFAQ();
    }

    /**
     * Recherche dans les FAQ
     * @param {string} query
     */
    searchFAQ(query) {
        this.faqItems = this.manageFAQUseCase.searchFAQ(query);
        this.renderFAQ();
    }

    /**
     * Rend les FAQ dans le DOM
     */
    renderFAQ() {
        if (!this.faqContainer) return;

        // Vider le conteneur
        DOMHelper.setHTML(this.faqContainer, '');

        // Créer les éléments FAQ
        this.faqItems.forEach(faqItem => {
            const faqElement = this.createFAQElement(faqItem);
            this.faqContainer.appendChild(faqElement);
        });
    }

    /**
     * Crée un élément FAQ
     * @param {FAQItem} faqItem
     * @returns {Element}
     */
    createFAQElement(faqItem) {
        const faqItemElement = DOMHelper.createElement('div', {
            className: `faq-item ${faqItem.isOpen ? CSS_CLASSES.FAQ.ACTIVE : ''}`,
            'data-faq-id': faqItem.id
        });

        const questionElement = DOMHelper.createElement('div', {
            className: CSS_CLASSES.FAQ.QUESTION
        });

        const questionH3 = DOMHelper.createElement('h3', {}, faqItem.question);
        const toggleElement = DOMHelper.createElement('span', {
            className: CSS_CLASSES.FAQ.TOGGLE
        }, faqItem.isOpen ? '−' : '+');

        questionElement.appendChild(questionH3);
        questionElement.appendChild(toggleElement);

        const answerElement = DOMHelper.createElement('div', {
            className: CSS_CLASSES.FAQ.ANSWER
        });

        const answerP = DOMHelper.createElement('p', {}, faqItem.answer);
        answerElement.appendChild(answerP);

        faqItemElement.appendChild(questionElement);
        faqItemElement.appendChild(answerElement);

        return faqItemElement;
    }

    /**
     * Récupère les statistiques des FAQ
     * @returns {Object}
     */
    getStats() {
        return this.manageFAQUseCase.getFAQStats();
    }

    /**
     * Trouve une FAQ par son ID
     * @param {string} faqId
     * @returns {FAQItem|null}
     */
    findFAQ(faqId) {
        return this.faqItems.find(item => item.id === faqId) || null;
    }

    /**
     * Vérifie si une FAQ est ouverte
     * @param {string} faqId
     * @returns {boolean}
     */
    isFAQOpen(faqId) {
        const faq = this.findFAQ(faqId);
        return faq ? faq.isOpen : false;
    }

    /**
     * Anime l'ouverture/fermeture d'une FAQ
     * @param {string} faqId
     * @param {boolean} isOpening
     */
    animateFAQ(faqId, isOpening) {
        const faqElement = this.faqContainer.querySelector(`[data-faq-id="${faqId}"]`);
        if (!faqElement) return;

        const answerElement = faqElement.querySelector('.faq-answer');

        if (isOpening) {
            // Animation d'ouverture
            answerElement.style.maxHeight = '0px';
            answerElement.style.overflow = 'hidden';

            // Forcer le recalcul
            answerElement.offsetHeight;

            answerElement.style.maxHeight = answerElement.scrollHeight + 'px';

            setTimeout(() => {
                answerElement.style.maxHeight = 'none';
                answerElement.style.overflow = 'visible';
            }, 300);
        } else {
            // Animation de fermeture
            answerElement.style.maxHeight = answerElement.scrollHeight + 'px';
            answerElement.style.overflow = 'hidden';

            // Forcer le recalcul
            answerElement.offsetHeight;

            answerElement.style.maxHeight = '0px';

            setTimeout(() => {
                answerElement.style.overflow = 'hidden';
            }, 300);
        }
    }

    /**
     * Met à jour l'affichage avec animation
     * @param {string} faqId
     */
    updateFAQDisplayWithAnimation(faqId) {
        const faqItem = this.faqItems.find(item => item.id === faqId);
        if (!faqItem) return;

        const wasOpen = this.isFAQOpen(faqId);
        const isOpening = faqItem.isOpen && !wasOpen;
        const isClosing = !faqItem.isOpen && wasOpen;

        this.updateFAQDisplay(faqId);

        if (isOpening || isClosing) {
            this.animateFAQ(faqId, isOpening);
        }
    }

    /**
     * Nettoie les ressources du controller
     */
    destroy() {
        // Supprimer les écouteurs d'événements
        if (this.faqContainer) {
            this.faqContainer.removeEventListener('click', this.handleFAQClick);
        }

        // Supprimer les écouteurs d'événements personnalisés
        eventManager.removeAllListeners(CUSTOM_EVENTS.FAQ_TOGGLE);
    }
}


// ===== presentation/controllers/NavigationController.js =====
// import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
// import { eventManager } from '../../infrastructure/ui/EventManager.js';
// import { CUSTOM_EVENTS, CSS_CLASSES } from '../../shared/constants/index.js';

/**
 * Controller pour la navigation
 * Gère la navigation mobile et le scroll fluide
 * @class
 */
class NavigationController {
    constructor() {
        this.navbar = null;
        this.mobileToggle = null;
        this.navLinks = null;
        this.isMobileMenuOpen = false;
        this.lastScrollTop = 0;
        this.init();
    }

    /**
     * Initialise le controller
     */
    init() {
        this.navbar = DOMHelper.getElement('.navbar');
        this.mobileToggle = DOMHelper.getElement('.nav-toggle');
        this.navLinks = DOMHelper.getElement('.nav-links');

        if (!this.navbar) {
            console.warn('Navigation bar not found');
            return;
        }

        this.bindEvents();
        this.setupScrollListener();
    }

    /**
     * Lie les événements de navigation
     */
    bindEvents() {
        // Toggle du menu mobile
        if (this.mobileToggle) {
            DOMHelper.addEventListener(this.mobileToggle, 'click', this.toggleMobileMenu.bind(this));
        }

        // Navigation fluide pour les liens d'ancrage
        if (this.navLinks) {
            const anchorLinks = this.navLinks.querySelectorAll('a[href^="#"]');
            anchorLinks.forEach(link => {
                DOMHelper.addEventListener(link, 'click', this.handleAnchorClick.bind(this));
            });
        }

        // Fermer le menu mobile lors du clic à l'extérieur
        DOMHelper.addEventListener(document, 'click', this.handleOutsideClick.bind(this));

        // Fermer le menu mobile lors du redimensionnement
        DOMHelper.addEventListener(window, 'resize', this.handleResize.bind(this));

        // Écouter les événements personnalisés
        eventManager.on(CUSTOM_EVENTS.NAV_TOGGLE, this.handleNavToggle.bind(this));
    }

    /**
     * Configure l'écouteur de scroll
     */
    setupScrollListener() {
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    /**
     * Gère le clic sur un lien d'ancrage
     * @param {Event} event
     */
    handleAnchorClick(event) {
        event.preventDefault();

        const link = event.target.closest('a');
        if (!link) return;

        const targetId = link.getAttribute('href');
        const targetElement = DOMHelper.getElement(targetId);

        if (targetElement) {
            // Fermer le menu mobile
            this.closeMobileMenu();

            // Scroll fluide vers la section
            this.scrollToSection(targetElement);

            // Mettre à jour l'URL sans recharger la page
            history.pushState(null, null, targetId);
        }
    }

    /**
     * Effectue un scroll fluide vers une section
     * @param {Element} targetElement
     */
    scrollToSection(targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Ajustement pour la navbar fixe

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    /**
     * Bascule l'état du menu mobile
     */
    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;

        if (this.isMobileMenuOpen) {
            this.openMobileMenu();
        } else {
            this.closeMobileMenu();
        }

        eventManager.emit(CUSTOM_EVENTS.NAV_TOGGLE, {
            isOpen: this.isMobileMenuOpen
        });
    }

    /**
     * Ouvre le menu mobile
     */
    openMobileMenu() {
        if (this.navLinks) {
            DOMHelper.addClass(this.navLinks, CSS_CLASSES.NAV.MOBILE);
            DOMHelper.show(this.navLinks, 'flex');
        }

        if (this.mobileToggle) {
            DOMHelper.addClass(this.mobileToggle, CSS_CLASSES.NAV.TOGGLE);
        }

        document.body.style.overflow = 'hidden';
        this.isMobileMenuOpen = true;
    }

    /**
     * Ferme le menu mobile
     */
    closeMobileMenu() {
        if (this.navLinks) {
            DOMHelper.removeClass(this.navLinks, CSS_CLASSES.NAV.MOBILE);
            DOMHelper.hide(this.navLinks);
        }

        if (this.mobileToggle) {
            DOMHelper.removeClass(this.mobileToggle, CSS_CLASSES.NAV.TOGGLE);
        }

        document.body.style.overflow = 'auto';
        this.isMobileMenuOpen = false;
    }

    /**
     * Gère le clic à l'extérieur du menu
     * @param {Event} event
     */
    handleOutsideClick(event) {
        if (this.isMobileMenuOpen &&
            !this.navbar.contains(event.target) &&
            !this.mobileToggle.contains(event.target)) {
            this.closeMobileMenu();
        }
    }

    /**
     * Gère le redimensionnement de la fenêtre
     */
    handleResize() {
        // Fermer automatiquement le menu mobile sur desktop
        if (window.innerWidth > 768 && this.isMobileMenuOpen) {
            this.closeMobileMenu();
        }
    }

    /**
     * Gère l'événement de basculement de navigation
     * @param {Object} data
     */
    handleNavToggle(data) {
        // Mettre à jour l'état interne si nécessaire
        this.isMobileMenuOpen = data.isOpen;
    }

    /**
     * Gère le scroll de la page
     */
    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollingDown = scrollTop > this.lastScrollTop;
        const scrollingUp = scrollTop < this.lastScrollTop;

        // Cacher/montrer la navbar selon le scroll
        if (scrollingDown && scrollTop > 100) {
            this.hideNavbar();
        } else if (scrollingUp || scrollTop <= 100) {
            this.showNavbar();
        }

        // Mettre à jour la section active
        this.updateActiveSection(scrollTop);

        this.lastScrollTop = scrollTop;
    }

    /**
     * Cache la navbar
     */
    hideNavbar() {
        if (this.navbar) {
            this.navbar.style.transform = 'translateY(-100%)';
        }
    }

    /**
     * Affiche la navbar
     */
    showNavbar() {
        if (this.navbar) {
            this.navbar.style.transform = 'translateY(0)';
        }
    }

    /**
     * Met à jour la section active dans la navigation
     * @param {number} scrollTop
     */
    updateActiveSection(scrollTop) {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSection = '#' + section.id;
            }
        });

        // Mettre à jour les classes actives
        navLinks.forEach(link => {
            DOMHelper.removeClass(link, 'active');

            if (link.getAttribute('href') === currentSection) {
                DOMHelper.addClass(link, 'active');
            }
        });
    }

    /**
     * Navigue vers une section spécifique
     * @param {string} sectionId
     */
    navigateToSection(sectionId) {
        const targetElement = DOMHelper.getElement(sectionId);
        if (targetElement) {
            this.scrollToSection(targetElement);
            history.pushState(null, null, sectionId);
        }
    }

    /**
     * Vérifie si le menu mobile est ouvert
     * @returns {boolean}
     */
    isMenuOpen() {
        return this.isMobileMenuOpen;
    }

    /**
     * Force la fermeture du menu mobile
     */
    forceCloseMenu() {
        if (this.isMobileMenuOpen) {
            this.closeMobileMenu();
        }
    }

    /**
     * Nettoie les ressources du controller
     */
    destroy() {
        // Supprimer les écouteurs d'événements
        if (this.mobileToggle) {
            this.mobileToggle.removeEventListener('click', this.toggleMobileMenu);
        }

        if (this.navLinks) {
            const anchorLinks = this.navLinks.querySelectorAll('a[href^="#"]');
            anchorLinks.forEach(link => {
                link.removeEventListener('click', this.handleAnchorClick);
            });
        }

        document.removeEventListener('click', this.handleOutsideClick);
        window.removeEventListener('resize', this.handleResize);

        // Supprimer les écouteurs d'événements personnalisés
        eventManager.removeAllListeners(CUSTOM_EVENTS.NAV_TOGGLE);

        // Supprimer l'écouteur de scroll
        window.removeEventListener('scroll', this.handleScroll);
    }
}


// ===== presentation/controllers/index.js =====
/**
 * Export des controllers de présentation
 */

// export {ContactFormController } from './ContactFormController.js';
// export {FAQController } from './FAQController.js';
// export {NavigationController } from './NavigationController.js';


// ===== presentation/index.js =====
/**
 * Point d'entrée de la présentation - Interface utilisateur
 */

export * from './controllers/index.js';


// ===== presentation/components/index.js =====
/**
 * Export des composants réutilisables
 */

// export {Modal, ModalManager, modalManager } from './Modal.js';
// export {LoadingSpinner, SpinnerManager, spinnerManager } from './LoadingSpinner.js';
// export {Notification, NotificationManager, notificationManager } from './Notification.js';


// ===== presentation/components/LoadingSpinner.js =====
// import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
// import { CSS_CLASSES } from '../../shared/constants/index.js';

/**
 * Composant LoadingSpinner réutilisable
 * Affiche un indicateur de chargement avec différentes tailles et styles
 * @class
 */
class LoadingSpinner {
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
class SpinnerManager {
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
const spinnerManager = new SpinnerManager();


// ===== presentation/components/Modal.js =====
// import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
// import { eventManager } from '../../infrastructure/ui/EventManager.js';
// import { CUSTOM_EVENTS, CSS_CLASSES } from '../../shared/constants/index.js';

/**
 * Composant Modal réutilisable
 * Gère l'affichage de modales avec contenu dynamique
 * @class
 */
class Modal {
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
class ModalManager {
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
const modalManager = new ModalManager();


// ===== presentation/components/Notification.js =====
// import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
// import { eventManager } from '../../infrastructure/ui/EventManager.js';
// import { CUSTOM_EVENTS } from '../../shared/constants/index.js';

/**
 * Composant Notification réutilisable
 * Affiche des notifications toast avec différents types et durées
 * @class
 */
class Notification {
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
class NotificationManager {
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
const notificationManager = new NotificationManager();


// ===== presentation/pages/HomePage.js =====
// import { ContactFormController } from '../controllers/ContactFormController.js';
// import { FAQController } from '../controllers/FAQController.js';
// import { NavigationController } from '../controllers/NavigationController.js';
// import { SendContactEmail } from '../../application/useCases/SendContactEmail.js';
// import { ValidateContactForm } from '../../application/useCases/ValidateContactForm.js';
// import { ManageFAQ } from '../../application/useCases/ManageFAQ.js';
// import { EmailJSAdapter } from '../../infrastructure/api/EmailJSAdapter.js';
// import { FormValidationService } from '../../domain/services/FormValidationService.js';
// import { FAQService } from '../../domain/services/FAQService.js';

/**
 * Page d'accueil - Orchestre tous les composants de la page principale
 * @class
 */
class HomePage {
    constructor() {
        this.controllers = {};
        this.services = {};
        this.repositories = {};
        this.isInitialized = false;
    }

    /**
     * Initialise la page d'accueil
     */
    async init() {
        try {
            console.log('🏠 Initialisation de la page d\'accueil...');

            // Initialiser les dépendances
            this.initDependencies();

            // Initialiser les contrôleurs
            this.initControllers();

            // Initialiser les composants spécifiques
            this.initComponents();

            this.isInitialized = true;
            console.log('✅ Page d\'accueil initialisée');

        } catch (error) {
            console.error('❌ Erreur lors de l\'initialisation de la page d\'accueil:', error);
        }
    }

    /**
     * Initialise les dépendances
     */
    initDependencies() {
        // Services du domaine
        this.services.formValidation = new FormValidationService();
        this.services.faq = new FAQService();

        // Repositories
        this.repositories.email = new EmailJSAdapter();

        // Use cases
        this.useCases = {
            sendContactEmail: new SendContactEmail(
                this.repositories.email,
                this.services.formValidation
            ),
            validateContactForm: new ValidateContactForm(
                this.services.formValidation
            ),
            manageFAQ: new ManageFAQ(
                this.services.faq
            )
        };
    }

    /**
     * Initialise les contrôleurs
     */
    initControllers() {
        // Contrôleur du formulaire de contact
        this.controllers.contactForm = new ContactFormController(
            this.useCases.sendContactEmail,
            this.useCases.validateContactForm
        );

        // Contrôleur des FAQ
        this.controllers.faq = new FAQController(
            this.useCases.manageFAQ
        );

        // Contrôleur de navigation
        this.controllers.navigation = new NavigationController();
    }

    /**
     * Initialise les composants spécifiques à la page d'accueil
     */
    initComponents() {
        this.initHeroAnimation();
        this.initScrollAnimations();
        this.initCTAHandlers();
    }

    /**
     * Initialise l'animation du hero
     */
    initHeroAnimation() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        // Animation d'entrée du hero
        setTimeout(() => {
            hero.classList.add('animate-in');
        }, 100);

        // Animation du mockup téléphone
        const phoneMockup = hero.querySelector('.phone-mockup');
        if (phoneMockup) {
            setTimeout(() => {
                phoneMockup.classList.add('animate-in');
            }, 500);
        }
    }

    /**
     * Initialise les animations au scroll
     */
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observer les sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });

        // Observer les cartes de fonctionnalités
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            observer.observe(card);
        });
    }

    /**
     * Initialise les gestionnaires des boutons CTA
     */
    initCTAHandlers() {
        // Boutons "Nous contacter"
        const contactButtons = document.querySelectorAll('a[href="#contact"], .btn[href="#contact"]');
        contactButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToContact();
            });
        });

        // Boutons "Découvrir"
        const discoverButtons = document.querySelectorAll('a[href="#how-it-works"]');
        discoverButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToHowItWorks();
            });
        });
    }

    /**
     * Fait défiler vers la section contact
     */
    scrollToContact() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    /**
     * Fait défiler vers la section "Comment ça marche"
     */
    scrollToHowItWorks() {
        const howItWorksSection = document.getElementById('how-it-works');
        if (howItWorksSection) {
            howItWorksSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    /**
     * Gère le changement de section active
     * @param {string} sectionId
     */
    onSectionChange(sectionId) {
        // Mettre à jour l'URL
        history.replaceState(null, null, `#${sectionId}`);

        // Analytics éventuel
        if (typeof gtag !== 'undefined') {
            gtag('event', 'section_view', {
                section_id: sectionId
            });
        }
    }

    /**
     * Vérifie si la page est visible
     * @returns {boolean}
     */
    isVisible() {
        return !document.hidden;
    }

    /**
     * Gère la visibilité de la page
     */
    handleVisibilityChange() {
        if (this.isVisible()) {
            // Reprendre les animations si nécessaire
            this.resumeAnimations();
        } else {
            // Mettre en pause les animations si nécessaire
            this.pauseAnimations();
        }
    }

    /**
     * Reprend les animations
     */
    resumeAnimations() {
        // Logique pour reprendre les animations
        console.log('Animations reprises');
    }

    /**
     * Met en pause les animations
     */
    pauseAnimations() {
        // Logique pour mettre en pause les animations
        console.log('Animations mises en pause');
    }

    /**
     * Nettoie les ressources de la page
     */
    destroy() {
        console.log('🧹 Nettoyage de la page d\'accueil...');

        // Détruire les contrôleurs
        Object.values(this.controllers).forEach(controller => {
            if (typeof controller.destroy === 'function') {
                controller.destroy();
            }
        });

        // Supprimer les écouteurs d'événements
        const contactButtons = document.querySelectorAll('a[href="#contact"]');
        contactButtons.forEach(button => {
            button.removeEventListener('click', this.scrollToContact);
        });

        this.isInitialized = false;
        console.log('✅ Page d\'accueil nettoyée');
    }

    /**
     * Vérifie si la page est initialisée
     * @returns {boolean}
     */
    isPageInitialized() {
        return this.isInitialized;
    }

    /**
     * Récupère un contrôleur par son nom
     * @param {string} name
     * @returns {Object|null}
     */
    getController(name) {
        return this.controllers[name] || null;
    }

    /**
     * Récupère un service par son nom
     * @param {string} name
     * @returns {Object|null}
     */
    getService(name) {
        return this.services[name] || null;
    }
}


// ===== presentation/pages/index.js =====
/**
 * Export des pages de présentation
 */

// export {HomePage } from './HomePage.js';
// export {LegalPage } from './LegalPage.js';


// ===== presentation/pages/LegalPage.js =====
// import { NavigationController } from '../controllers/NavigationController.js';
// import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
// import { eventManager } from '../../infrastructure/ui/EventManager.js';
// import { CUSTOM_EVENTS } from '../../shared/constants/index.js';

/**
 * Page légale - Gestion des pages Conditions d'utilisation et Politique de confidentialité
 * @class
 */
class LegalPage {
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


// ===== main.js =====
/**
 * Point d'entrée principal de l'application
 * Configuration et injection de dépendances selon Clean Architecture
 */

// Import des couches
import {
    ContactForm,
    ValidationResult,
    FormValidationService,
    FAQService
} from './domain/index.js';

import {
    SendContactEmail,
    ValidateContactForm,
    ManageFAQ
} from './application/index.js';

import {
    EmailJSAdapter,
    LocalStorageAdapter,
    DOMHelper,
    eventManager
} from './infrastructure/index.js';

import {
    ContactFormController,
    FAQController,
    NavigationController
} from './presentation/index.js';

// Import des constantes
import { APP_CONFIG } from './shared/constants/index.js';

/**
 * Classe principale de l'application
 * Gère l'initialisation et l'injection de dépendances
 * @class
 */
class BienRentreApp {
    constructor() {
        this.services = {};
        this.repositories = {};
        this.useCases = {};
        this.controllers = {};
        this.isInitialized = false;
    }

    /**
     * Initialise l'application
     */
    async init() {
        try {
            console.log(`🚀 Initialisation de ${APP_CONFIG.NAME} v${APP_CONFIG.VERSION}`);

            // Initialiser l'EventManager
            eventManager.init();

            // Créer les services du domaine
            this.initDomainServices();

            // Créer les repositories
            this.initRepositories();

            // Créer les use cases
            this.initUseCases();

            // Créer les controllers
            this.initControllers();

            // Initialiser les controllers
            await this.initControllersLifecycle();

            this.isInitialized = true;
            console.log('✅ Application initialisée avec succès');

        } catch (error) {
            console.error('❌ Erreur lors de l\'initialisation:', error);
            this.handleInitError(error);
        }
    }

    /**
     * Initialise les services du domaine
     */
    initDomainServices() {
        console.log('🔧 Initialisation des services métier...');

        this.services.formValidation = new FormValidationService();
        this.services.faq = new FAQService();

        console.log('✅ Services métier initialisés');
    }

    /**
     * Initialise les repositories
     */
    initRepositories() {
        console.log('💾 Initialisation des repositories...');

        // Repository pour les emails
        this.repositories.email = new EmailJSAdapter();

        // Repository pour le stockage local
        this.repositories.storage = new LocalStorageAdapter();

        console.log('✅ Repositories initialisés');
    }

    /**
     * Initialise les use cases
     */
    initUseCases() {
        console.log('🎯 Initialisation des use cases...');

        // Use case pour l'envoi d'emails
        this.useCases.sendContactEmail = new SendContactEmail(
            this.repositories.email,
            this.services.formValidation
        );

        // Use case pour la validation de formulaires
        this.useCases.validateContactForm = new ValidateContactForm(
            this.services.formValidation
        );

        // Use case pour la gestion des FAQ
        this.useCases.manageFAQ = new ManageFAQ(
            this.services.faq
        );

        console.log('✅ Use cases initialisés');
    }

    /**
     * Initialise les controllers de présentation
     */
    initControllers() {
        console.log('🎮 Initialisation des controllers...');

        // Controller pour le formulaire de contact
        this.controllers.contactForm = new ContactFormController(
            this.useCases.sendContactEmail,
            this.useCases.validateContactForm
        );

        // Controller pour les FAQ
        this.controllers.faq = new FAQController(
            this.useCases.manageFAQ
        );

        // Controller pour la navigation
        this.controllers.navigation = new NavigationController();

        console.log('✅ Controllers initialisés');
    }

    /**
     * Initialise le cycle de vie des controllers
     */
    async initControllersLifecycle() {
        console.log('🔄 Initialisation du cycle de vie...');

        // Attendre que le DOM soit prêt
        if (document.readyState === 'loading') {
            await new Promise(resolve => {
                document.addEventListener('DOMContentLoaded', resolve);
            });
        }

        // Les controllers s'initialisent automatiquement dans leur constructeur
        // Ici on peut ajouter des initialisations supplémentaires si nécessaire

        console.log('✅ Cycle de vie initialisé');
    }

    /**
     * Gère les erreurs d'initialisation
     * @param {Error} error
     */
    handleInitError(error) {
        // Afficher un message d'erreur à l'utilisateur
        const errorMessage = `
            Une erreur est survenue lors du chargement de l'application.
            Veuillez rafraîchir la page ou contacter le support.
        `;

        console.error('Détails de l\'erreur:', error);

        // Afficher l'erreur dans l'interface
        if (typeof alert !== 'undefined') {
            alert(errorMessage);
        } else {
            console.error(errorMessage);
        }
    }

    /**
     * Nettoie les ressources de l'application
     */
    destroy() {
        console.log('🧹 Nettoyage des ressources...');

        // Détruire les controllers
        Object.values(this.controllers).forEach(controller => {
            if (typeof controller.destroy === 'function') {
                controller.destroy();
            }
        });

        // Nettoyer l'EventManager
        eventManager.destroy();

        this.isInitialized = false;
        console.log('✅ Ressources nettoyées');
    }

    /**
     * Vérifie si l'application est initialisée
     * @returns {boolean}
     */
    isReady() {
        return this.isInitialized;
    }

    /**
     * Récupère un service par son nom
     * @param {string} name
     * @returns {*}
     */
    getService(name) {
        return this.services[name];
    }

    /**
     * Récupère un repository par son nom
     * @param {string} name
     * @returns {*}
     */
    getRepository(name) {
        return this.repositories[name];
    }

    /**
     * Récupère un use case par son nom
     * @param {string} name
     * @returns {*}
     */
    getUseCase(name) {
        return this.useCases[name];
    }

    /**
     * Récupère un controller par son nom
     * @param {string} name
     * @returns {*}
     */
    getController(name) {
        return this.controllers[name];
    }
}

// Instance globale de l'application
const app = new BienRentreApp();

// Initialisation au chargement de la page
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        app.init();
    });

    // Nettoyage lors de la fermeture de la page
    window.addEventListener('beforeunload', () => {
        app.destroy();
    });

    // Exposition de l'instance globale pour le debugging (optionnel)
    if (process.env.NODE_ENV === 'development') {
        window.BienRentreApp = app;
    }
}

// Export pour les modules ES6
export default app;

// Export pour CommonJS (si nécessaire)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = app;
}
