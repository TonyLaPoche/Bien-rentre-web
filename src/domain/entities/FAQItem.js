/**
 * Entité FAQItem - Élément de FAQ
 * @class
 */
export class FAQItem {
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
