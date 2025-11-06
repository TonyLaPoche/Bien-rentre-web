import { ManageFAQ } from '../../application/useCases/ManageFAQ.js';
import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
import { eventManager } from '../../infrastructure/ui/EventManager.js';
import { CUSTOM_EVENTS, CSS_CLASSES } from '../../shared/constants/index.js';

/**
 * Controller pour les FAQ
 * Gère l'interaction utilisateur avec l'accordéon FAQ
 * @class
 */
export class FAQController {
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
