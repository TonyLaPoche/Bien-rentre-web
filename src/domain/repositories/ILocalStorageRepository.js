/**
 * Interface Repository pour le stockage local
 * Définit le contrat pour la persistance des données locales
 */
export class ILocalStorageRepository {
    /**
     * Sauvegarde une valeur
     * @param {string} key
     * @param {*} value
     * @returns {Promise<void>}
     */
    async setItem(key, value) {
        throw new Error('Method setItem must be implemented');
    }

    /**
     * Récupère une valeur
     * @param {string} key
     * @returns {Promise<*>}
     */
    async getItem(key) {
        throw new Error('Method getItem must be implemented');
    }

    /**
     * Supprime une valeur
     * @param {string} key
     * @returns {Promise<void>}
     */
    async removeItem(key) {
        throw new Error('Method removeItem must be implemented');
    }

    /**
     * Vérifie si une clé existe
     * @param {string} key
     * @returns {Promise<boolean>}
     */
    async hasItem(key) {
        throw new Error('Method hasItem must be implemented');
    }

    /**
     * Vide tout le stockage
     * @returns {Promise<void>}
     */
    async clear() {
        throw new Error('Method clear must be implemented');
    }
}
