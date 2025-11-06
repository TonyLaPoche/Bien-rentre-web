import { IEmailRepository } from '../../domain/repositories/IEmailRepository.js';
import { EMAILJS_CONFIG } from '../../shared/constants/index.js';

/**
 * Adaptateur EmailJS - Implémentation de IEmailRepository
 * Gère la communication avec l'API EmailJS
 * @class
 */
export class EmailJSAdapter extends IEmailRepository {
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
