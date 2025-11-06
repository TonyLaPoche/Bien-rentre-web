/**
 * Entité ContactForm - Représente les données du formulaire de contact
 * @class
 */
export class ContactForm {
    /**
     * @param {Object} data
     * @param {string} [data.name='']
     * @param {string} data.email
     * @param {string} data.subject
     * @param {string} data.message
     * @param {boolean} data.privacyAccepted
     */
    constructor(data) {
        this.name = data.name || '';
        this.email = data.email || '';
        this.subject = data.subject || '';
        this.message = data.message || '';
        this.privacyAccepted = data.privacyAccepted || false;
        this.createdAt = new Date();
    }

    /**
     * Convertit l'entité en objet pour l'API EmailJS
     * @returns {Object}
     */
    toEmailData() {
        return {
            from_name: this.name || 'Anonyme',
            from_email: this.email,
            subject: this.subject,
            message: this.message,
            to_email: 'contact@bienrentre.app'
        };
    }

    /**
     * Vérifie si le formulaire est valide
     * @returns {boolean}
     */
    isValid() {
        return (
            this.email &&
            this.subject &&
            this.message &&
            this.privacyAccepted
        );
    }

    /**
     * Crée une copie du formulaire avec de nouvelles données
     * @param {Object} updates
     * @returns {ContactForm}
     */
    update(updates) {
        return new ContactForm({
            ...this,
            ...updates
        });
    }
}
