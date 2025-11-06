/**
 * Use Case - Gérer les FAQ
 * Orchestre les opérations sur les FAQ
 */
export class ManageFAQ {
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
