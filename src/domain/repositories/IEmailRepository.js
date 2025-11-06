/**
 * Interface Repository pour les opérations email
 * Définit le contrat pour l'envoi d'emails
 */
export class IEmailRepository {
    /**
     * Envoie un email
     * @param {EmailData} emailData
     * @returns {Promise<APIResponse>}
     */
    async sendEmail(emailData) {
        throw new Error('Method sendEmail must be implemented');
    }

    /**
     * Vérifie si le service email est disponible
     * @returns {Promise<boolean>}
     */
    async isAvailable() {
        throw new Error('Method isAvailable must be implemented');
    }
}
