/**
 * Constantes de l'application Bien-Rentré
 */

// Configuration EmailJS (à remplacer par les vraies valeurs)
export const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
    SERVICE_ID: 'YOUR_SERVICE_ID',
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID'
};

// Configuration de l'application
export const APP_CONFIG = {
    NAME: 'Bien-Rentré',
    EMAIL: 'contact@bienrentre.app',
    VERSION: '1.0.0'
};

// Limites de validation
export const VALIDATION_RULES = {
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
export const ERROR_MESSAGES = {
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
export const SUCCESS_MESSAGES = {
    EMAIL_SENT: 'Message envoyé avec succès !',
    FORM_VALID: 'Formulaire valide'
};

// État des FAQ - IDs correspondent aux clés de traduction
export const FAQ_DATA = [
    {
        id: 'emergency',
        question: 'Est-ce que Bien-Rentré est un système d\'alerte d\'urgence ?',
        answer: 'Non, Bien-Rentré n\'est pas un système d\'alerte d\'urgence officiel. C\'est un outil de prévention qui permet de partager votre position avec des contacts de confiance pour des déplacements nocturnes. En cas d\'urgence réelle, contactez immédiatement les services d\'urgence appropriés (112, 911, etc.).',
        isOpen: false
    },
    {
        id: 'dataProtection',
        question: 'Comment mes données de localisation sont-elles protégées ?',
        answer: 'Vos données de géolocalisation ne sont partagées qu\'avec les contacts que vous avez explicitement autorisés. Elles sont chiffrées et stockées temporairement pendant la session active. Nous respectons pleinement le RGPD et nos pratiques sont détaillées dans notre politique de confidentialité.',
        isOpen: false
    },
    {
        id: 'offline',
        question: 'L\'application fonctionne-t-elle hors ligne ?',
        answer: 'Bien-Rentré nécessite une connexion internet pour partager la géolocalisation en temps réel. Cependant, l\'application peut détecter la perte de connexion et notifier votre contact en cas d\'interruption du signal GPS.',
        isOpen: false
    },
    {
        id: 'contacts',
        question: 'Combien de contacts puis-je ajouter ?',
        answer: 'Dans la version gratuite, vous pouvez ajouter jusqu\'à 3 contacts de confiance. La version premium permet un nombre illimité de contacts simultanés.',
        isOpen: false
    },
    {
        id: 'accuracy',
        question: 'Quelle est la précision de la géolocalisation ?',
        answer: 'L\'application utilise le GPS intégré de votre smartphone avec une précision généralement de 5 à 10 mètres. La précision peut varier selon les conditions météorologiques et la couverture réseau.',
        isOpen: false
    }
];

// Classes CSS pour les états
export const CSS_CLASSES = {
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
export const CUSTOM_EVENTS = {
    FORM_SUBMIT: 'form:submit',
    FORM_VALIDATION: 'form:validation',
    EMAIL_SENT: 'email:sent',
    EMAIL_ERROR: 'email:error',
    MODAL_OPEN: 'modal:open',
    MODAL_CLOSE: 'modal:close',
    MODAL_BUTTON_CLICK: 'modal:button_click',
    FAQ_TOGGLE: 'faq:toggle',
    NAV_TOGGLE: 'nav:toggle',
    LANGUAGE_CHANGED: 'language:changed',
    TRANSLATION_LOADED: 'translation:loaded',
    TRANSLATION_ERROR: 'translation:error'
};
