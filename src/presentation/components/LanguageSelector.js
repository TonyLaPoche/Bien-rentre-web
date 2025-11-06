import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
import { eventManager } from '../../infrastructure/ui/EventManager.js';
import { CUSTOM_EVENTS } from '../../shared/constants/index.js';

/**
 * Composant LanguageSelector - Sélecteur de langue
 * Permet à l'utilisateur de changer la langue de l'application
 * @class
 */
export class LanguageSelector {
    /**
     * @param {ManageTranslations} manageTranslationsUseCase
     * @param {Object} options
     */
    constructor(manageTranslationsUseCase, options = {}) {
        this.manageTranslationsUseCase = manageTranslationsUseCase;
        this.options = {
            showFlags: options.showFlags !== false,
            showNames: options.showNames !== false,
            position: options.position || 'top-right', // top-right, top-left, bottom-right, bottom-left
            theme: options.theme || 'default', // default, minimal, rounded
            ...options
        };

        this.element = null;
        this.currentLanguage = 'fr';
        this.supportedLanguages = [];
        this.isOpen = false;

        this.init();
    }

    /**
     * Initialise le sélecteur de langue
     */
    async init() {
        await this.loadLanguages();
        await this.loadCurrentLanguage();
        this.createSelectorElement();
        this.bindEvents();
        this.injectStyles();
    }

    /**
     * Charge les langues supportées
     */
    async loadLanguages() {
        try {
            this.supportedLanguages = await this.manageTranslationsUseCase.getSupportedLanguages();
        } catch (error) {
            console.error('Error loading supported languages:', error);
            this.supportedLanguages = [
                { code: 'fr', name: 'Français', flag: '🇫🇷' },
                { code: 'en', name: 'English', flag: '🇺🇸' }
            ];
        }
    }

    /**
     * Charge la langue actuelle
     */
    async loadCurrentLanguage() {
        try {
            this.currentLanguage = await this.manageTranslationsUseCase.getCurrentLanguage();
        } catch (error) {
            console.error('Error loading current language:', error);
            this.currentLanguage = 'fr';
        }
    }

    /**
     * Crée l'élément DOM du sélecteur
     */
    createSelectorElement() {
        const containerClass = `language-selector language-selector-${this.options.theme} language-selector-${this.options.position}`;

        this.element = DOMHelper.createElement('div', {
            className: containerClass,
            'data-current-lang': this.currentLanguage
        });

        // Bouton principal
        const button = this.createMainButton();
        this.element.appendChild(button);

        // Menu déroulant
        const dropdown = this.createDropdownMenu();
        this.element.appendChild(dropdown);

        // Ajouter à la page
        this.addToPage();
    }

    /**
     * Crée le bouton principal du sélecteur
     * @returns {Element}
     */
    createMainButton() {
        const currentLang = this.supportedLanguages.find(lang => lang.code === this.currentLanguage);
        const displayText = this.getLanguageDisplayText(currentLang);

        const button = DOMHelper.createElement('button', {
            className: 'language-selector-button',
            type: 'button',
            'aria-label': 'Changer de langue',
            'aria-expanded': 'false'
        }, displayText);

        // Ajouter l'indicateur de menu
        const indicator = DOMHelper.createElement('span', {
            className: 'language-selector-indicator'
        }, '▼');
        button.appendChild(indicator);

        return button;
    }

    /**
     * Crée le menu déroulant
     * @returns {Element}
     */
    createDropdownMenu() {
        const dropdown = DOMHelper.createElement('ul', {
            className: 'language-selector-dropdown',
            role: 'menu',
            'aria-hidden': 'true'
        });

        this.supportedLanguages.forEach(language => {
            const item = this.createDropdownItem(language);
            dropdown.appendChild(item);
        });

        return dropdown;
    }

    /**
     * Crée un élément du menu déroulant
     * @param {Object} language
     * @returns {Element}
     */
    createDropdownItem(language) {
        const isActive = language.code === this.currentLanguage;

        const item = DOMHelper.createElement('li', {
            className: `language-selector-item ${isActive ? 'active' : ''}`,
            role: 'menuitem',
            'data-lang': language.code,
            'aria-current': isActive ? 'true' : 'false'
        });

        // Drapeau (optionnel)
        if (this.options.showFlags) {
            const flag = DOMHelper.createElement('span', {
                className: 'language-flag'
            }, language.flag || '🏳️');
            item.appendChild(flag);
        }

        // Nom de la langue
        if (this.options.showNames) {
            const name = DOMHelper.createElement('span', {
                className: 'language-name'
            }, language.name);
            item.appendChild(name);
        }

        // Code de langue (fallback)
        if (!this.options.showFlags && !this.options.showNames) {
            const code = DOMHelper.createElement('span', {
                className: 'language-code'
            }, language.code.toUpperCase());
            item.appendChild(code);
        }

        return item;
    }

    /**
     * Ajoute le sélecteur à la page
     */
    addToPage() {
        // Trouver l'élément cible (header, nav, ou body)
        let targetElement = document.querySelector('.navbar .nav-links');
        if (!targetElement) {
            targetElement = document.querySelector('header');
        }
        if (!targetElement) {
            targetElement = document.body;
        }

        targetElement.appendChild(this.element);
    }

    /**
     * Lie les événements du sélecteur
     */
    bindEvents() {
        const button = this.element.querySelector('.language-selector-button');
        const dropdown = this.element.querySelector('.language-selector-dropdown');

        // Toggle du menu
        DOMHelper.addEventListener(button, 'click', (e) => {
            e.preventDefault();
            this.toggleDropdown();
        });

        // Sélection d'une langue
        DOMHelper.addEventListener(dropdown, 'click', (e) => {
            const item = e.target.closest('.language-selector-item');
            if (item) {
                const languageCode = item.dataset.lang;
                this.selectLanguage(languageCode);
            }
        });

        // Fermeture au clic extérieur
        DOMHelper.addEventListener(document, 'click', (e) => {
            if (!this.element.contains(e.target) && this.isOpen) {
                this.closeDropdown();
            }
        });

        // Navigation clavier
        DOMHelper.addEventListener(this.element, 'keydown', (e) => {
            this.handleKeyboardNavigation(e);
        });

        // Écouter les changements de langue
        this.manageTranslationsUseCase.translationRepository.addLanguageChangeListener(
            (newLang, oldLang) => {
                this.updateDisplay(newLang);
            }
        );
    }

    /**
     * Injecte les styles CSS
     */
    injectStyles() {
        if (document.getElementById('language-selector-styles')) return;

        const styles = `
            .language-selector {
                position: relative;
                display: inline-block;
                font-family: 'Bricolage Grotesque', sans-serif;
                z-index: 1000;
            }

            .language-selector-button {
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 8px 12px;
                background: rgba(255, 255, 255, 0.9);
                border: 1px solid #e5e5e5;
                border-radius: 6px;
                color: #0f032b;
                font-size: 0.875rem;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
                backdrop-filter: blur(10px);
            }

            .language-selector-button:hover {
                background: white;
                border-color: #5b1aff;
                box-shadow: 0 2px 8px rgba(91, 26, 255, 0.1);
            }

            .language-selector-indicator {
                font-size: 0.75rem;
                transition: transform 0.2s ease;
                color: #6b7280;
            }

            .language-selector.open .language-selector-indicator {
                transform: rotate(180deg);
            }

            .language-selector-dropdown {
                position: absolute;
                top: 100%;
                right: 0;
                min-width: 140px;
                background: white;
                border: 1px solid #e5e5e5;
                border-radius: 8px;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
                margin-top: 4px;
                padding: 4px 0;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.2s ease;
                list-style: none;
            }

            .language-selector.open .language-selector-dropdown {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }

            .language-selector-item {
                padding: 10px 16px;
                cursor: pointer;
                transition: background-color 0.2s ease;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .language-selector-item:hover,
            .language-selector-item:focus {
                background: #f8f9fa;
                outline: none;
            }

            .language-selector-item.active {
                background: #f0f9ff;
                color: #5b1aff;
                font-weight: 600;
            }

            .language-flag {
                font-size: 1.25rem;
                line-height: 1;
            }

            .language-name {
                flex: 1;
                font-size: 0.875rem;
            }

            .language-code {
                font-size: 0.75rem;
                font-weight: 600;
                color: #6b7280;
            }

            /* Positions */
            .language-selector-top-right {
                /* Position par défaut */
            }

            .language-selector-top-left {
                /* Aligné à gauche */
            }

            .language-selector-top-left .language-selector-dropdown {
                right: auto;
                left: 0;
            }

            .language-selector-bottom-right {
                /* En bas à droite */
            }

            .language-selector-bottom-right .language-selector-dropdown {
                top: auto;
                bottom: 100%;
                margin-top: 0;
                margin-bottom: 4px;
            }

            .language-selector-bottom-left {
                /* En bas à gauche */
            }

            .language-selector-bottom-left .language-selector-dropdown {
                top: auto;
                bottom: 100%;
                right: auto;
                left: 0;
                margin-top: 0;
                margin-bottom: 4px;
            }

            /* Thèmes */
            .language-selector-minimal .language-selector-button {
                padding: 6px 10px;
                font-size: 0.8125rem;
                border: none;
                background: transparent;
            }

            .language-selector-rounded .language-selector-button,
            .language-selector-rounded .language-selector-dropdown {
                border-radius: 20px;
            }

            /* Responsive */
            @media (max-width: 768px) {
                .language-selector {
                    font-size: 0.875rem;
                }

                .language-selector-dropdown {
                    min-width: 120px;
                    right: -10px;
                }
            }

            /* Animation d'entrée */
            @keyframes language-selector-fade-in {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .language-selector-dropdown {
                animation: language-selector-fade-in 0.2s ease;
            }
        `;

        const styleElement = DOMHelper.createElement('style', {
            id: 'language-selector-styles'
        }, styles);

        document.head.appendChild(styleElement);
    }

    /**
     * Toggle l'ouverture du menu déroulant
     */
    toggleDropdown() {
        if (this.isOpen) {
            this.closeDropdown();
        } else {
            this.openDropdown();
        }
    }

    /**
     * Ouvre le menu déroulant
     */
    openDropdown() {
        this.isOpen = true;
        DOMHelper.addClass(this.element, 'open');
        this.element.setAttribute('aria-expanded', 'true');

        const dropdown = this.element.querySelector('.language-selector-dropdown');
        dropdown.setAttribute('aria-hidden', 'false');

        // Focus sur le premier élément
        const firstItem = dropdown.querySelector('.language-selector-item');
        if (firstItem) {
            setTimeout(() => firstItem.focus(), 100);
        }
    }

    /**
     * Ferme le menu déroulant
     */
    closeDropdown() {
        this.isOpen = false;
        DOMHelper.removeClass(this.element, 'open');
        this.element.setAttribute('aria-expanded', 'false');

        const dropdown = this.element.querySelector('.language-selector-dropdown');
        dropdown.setAttribute('aria-hidden', 'true');
    }

    /**
     * Sélectionne une langue
     * @param {string} languageCode
     */
    async selectLanguage(languageCode) {
        if (languageCode === this.currentLanguage) {
            this.closeDropdown();
            return;
        }

        try {
            const result = await this.manageTranslationsUseCase.changeLanguage(languageCode);

            if (result.success) {
                this.currentLanguage = languageCode;
                this.updateDisplay(languageCode);
                this.closeDropdown();

                // Émettre un événement de changement de langue
                eventManager.emit(CUSTOM_EVENTS.LANGUAGE_CHANGED, {
                    newLanguage: languageCode,
                    previousLanguage: result.previousLanguage
                });

            } else {
                console.error('Failed to change language:', result.error);
            }

        } catch (error) {
            console.error('Error selecting language:', error);
        }
    }

    /**
     * Met à jour l'affichage du sélecteur
     * @param {string} languageCode
     */
    updateDisplay(languageCode) {
        this.currentLanguage = languageCode;
        this.element.setAttribute('data-current-lang', languageCode);

        const currentLang = this.supportedLanguages.find(lang => lang.code === languageCode);
        if (currentLang) {
            const button = this.element.querySelector('.language-selector-button');
            const displayText = this.getLanguageDisplayText(currentLang);

            // Supprimer le contenu texte (garder l'indicateur)
            const indicator = button.querySelector('.language-selector-indicator');
            button.textContent = displayText;
            button.appendChild(indicator);

            // Mettre à jour les éléments actifs
            const items = this.element.querySelectorAll('.language-selector-item');
            items.forEach(item => {
                const isActive = item.dataset.lang === languageCode;
                item.setAttribute('aria-current', isActive ? 'true' : 'false');
                DOMHelper.toggleClass(item, 'active', isActive);
            });
        }
    }

    /**
     * Gère la navigation clavier
     * @param {KeyboardEvent} e
     */
    handleKeyboardNavigation(e) {
        if (!this.isOpen) return;

        const items = Array.from(this.element.querySelectorAll('.language-selector-item'));
        const currentIndex = items.findIndex(item => item === document.activeElement);

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                const nextIndex = Math.min(currentIndex + 1, items.length - 1);
                items[nextIndex].focus();
                break;

            case 'ArrowUp':
                e.preventDefault();
                const prevIndex = Math.max(currentIndex - 1, 0);
                items[prevIndex].focus();
                break;

            case 'Enter':
            case ' ':
                e.preventDefault();
                if (document.activeElement.classList.contains('language-selector-item')) {
                    const languageCode = document.activeElement.dataset.lang;
                    this.selectLanguage(languageCode);
                }
                break;

            case 'Escape':
                e.preventDefault();
                this.closeDropdown();
                this.element.querySelector('.language-selector-button').focus();
                break;
        }
    }

    /**
     * Obtient le texte d'affichage pour une langue
     * @param {Object} language
     * @returns {string}
     */
    getLanguageDisplayText(language) {
        if (!language) return 'FR';

        if (this.options.showFlags && this.options.showNames) {
            return `${language.flag} ${language.name}`;
        } else if (this.options.showFlags) {
            return language.flag;
        } else if (this.options.showNames) {
            return language.name;
        } else {
            return language.code.toUpperCase();
        }
    }

    /**
     * Vérifie si le menu est ouvert
     * @returns {boolean}
     */
    isDropdownOpen() {
        return this.isOpen;
    }

    /**
     * Force la fermeture du menu
     */
    forceClose() {
        if (this.isOpen) {
            this.closeDropdown();
        }
    }

    /**
     * Obtient l'élément DOM du sélecteur
     * @returns {Element}
     */
    getElement() {
        return this.element;
    }

    /**
     * Nettoie les ressources du sélecteur
     */
    destroy() {
        this.forceClose();

        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }

        // Supprimer l'écouteur de changement de langue
        if (this.manageTranslationsUseCase.translationRepository) {
            this.manageTranslationsUseCase.translationRepository.removeLanguageChangeListener(
                this.updateDisplay.bind(this)
            );
        }

        this.element = null;
        this.supportedLanguages = [];
    }
}
