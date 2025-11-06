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
