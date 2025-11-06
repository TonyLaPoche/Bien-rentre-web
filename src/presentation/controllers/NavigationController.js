import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
import { eventManager } from '../../infrastructure/ui/EventManager.js';
import { CUSTOM_EVENTS, CSS_CLASSES } from '../../shared/constants/index.js';

/**
 * Controller pour la navigation
 * Gère la navigation mobile et le scroll fluide
 * @class
 */
export class NavigationController {
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
