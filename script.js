/**
 * Bundle Bien-Rentré - Généré automatiquement
 * Date: 2025-11-06T16:31:01.649Z
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
