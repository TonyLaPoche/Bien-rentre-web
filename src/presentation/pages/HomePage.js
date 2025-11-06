import { ContactFormController } from '../controllers/ContactFormController.js';
import { FAQController } from '../controllers/FAQController.js';
import { NavigationController } from '../controllers/NavigationController.js';
import { SendContactEmail } from '../../application/useCases/SendContactEmail.js';
import { ValidateContactForm } from '../../application/useCases/ValidateContactForm.js';
import { ManageFAQ } from '../../application/useCases/ManageFAQ.js';
import { EmailJSAdapter } from '../../infrastructure/api/EmailJSAdapter.js';
import { FormValidationService } from '../../domain/services/FormValidationService.js';
import { FAQService } from '../../domain/services/FAQService.js';

/**
 * Page d'accueil - Orchestre tous les composants de la page principale
 * @class
 */
export class HomePage {
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
