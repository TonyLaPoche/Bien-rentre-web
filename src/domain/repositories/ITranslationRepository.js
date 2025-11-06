/**
 * Interface Repository pour les traductions
 * Définit le contrat pour l'accès aux traductions
 */
export class ITranslationRepository {
    /**
     * Définit la langue actuelle
     * @param {string} language
     * @returns {Promise<boolean>}
     */
    async setLanguage(language) {
        throw new Error('Method setLanguage must be implemented');
    }

    /**
     * Récupère la langue actuelle
     * @returns {Promise<string>}
     */
    async getCurrentLanguage() {
        throw new Error('Method getCurrentLanguage must be implemented');
    }

    /**
     * Traduit une clé
     * @param {string} key
     * @param {Object} params
     * @returns {Promise<string>}
     */
    async translate(key, params = {}) {
        throw new Error('Method translate must be implemented');
    }

    /**
     * Traduit plusieurs clés
     * @param {string[]} keys
     * @param {Object} params
     * @returns {Promise<Object>}
     */
    async translateMultiple(keys, params = {}) {
        throw new Error('Method translateMultiple must be implemented');
    }

    /**
     * Récupère toutes les traductions
     * @returns {Promise<Object>}
     */
    async getAllTranslations() {
        throw new Error('Method getAllTranslations must be implemented');
    }

    /**
     * Vérifie si une langue est supportée
     * @param {string} language
     * @returns {Promise<boolean>}
     */
    async isLanguageSupported(language) {
        throw new Error('Method isLanguageSupported must be implemented');
    }

    /**
     * Récupère la liste des langues supportées
     * @returns {Promise<string[]>}
     */
    async getSupportedLanguages() {
        throw new Error('Method getSupportedLanguages must be implemented');
    }
}
