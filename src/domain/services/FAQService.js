import { FAQItem } from '../entities/FAQItem.js';
import { FAQ_DATA } from '../../shared/constants/index.js';

/**
 * Service de gestion des FAQ - Logique métier des questions fréquentes
 * @class
 */
export class FAQService {
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
