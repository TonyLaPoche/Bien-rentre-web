import { ILocalStorageRepository } from '../../domain/repositories/ILocalStorageRepository.js';

/**
 * Adaptateur LocalStorage - Implémentation de ILocalStorageRepository
 * Gère la persistance des données dans le localStorage du navigateur
 * @class
 */
export class LocalStorageAdapter extends ILocalStorageRepository {
    constructor() {
        super();
        this.prefix = 'bienrentre_';
        this.isAvailable = this.checkAvailability();
    }

    /**
     * Vérifie si localStorage est disponible
     * @returns {boolean}
     */
    checkAvailability() {
        if (typeof window === 'undefined' || !window.localStorage) {
            return false;
        }

        try {
            const testKey = '__localStorage_test__';
            window.localStorage.setItem(testKey, 'test');
            window.localStorage.removeItem(testKey);
            return true;
        } catch (error) {
            console.warn('localStorage not available:', error);
            return false;
        }
    }

    /**
     * Génère une clé avec préfixe
     * @param {string} key
     * @returns {string}
     */
    getPrefixedKey(key) {
        return `${this.prefix}${key}`;
    }

    /**
     * Sauvegarde une valeur dans localStorage
     * @param {string} key
     * @param {*} value
     * @returns {Promise<void>}
     */
    async setItem(key, value) {
        if (!this.isAvailable) {
            console.warn('localStorage not available');
            return;
        }

        try {
            const prefixedKey = this.getPrefixedKey(key);
            const serializedValue = JSON.stringify(value);
            window.localStorage.setItem(prefixedKey, serializedValue);
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            throw new Error('Impossible de sauvegarder les données');
        }
    }

    /**
     * Récupère une valeur depuis localStorage
     * @param {string} key
     * @returns {Promise<*>}
     */
    async getItem(key) {
        if (!this.isAvailable) {
            console.warn('localStorage not available');
            return null;
        }

        try {
            const prefixedKey = this.getPrefixedKey(key);
            const serializedValue = window.localStorage.getItem(prefixedKey);

            if (serializedValue === null) {
                return null;
            }

            return JSON.parse(serializedValue);
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    }

    /**
     * Supprime une valeur du localStorage
     * @param {string} key
     * @returns {Promise<void>}
     */
    async removeItem(key) {
        if (!this.isAvailable) {
            console.warn('localStorage not available');
            return;
        }

        try {
            const prefixedKey = this.getPrefixedKey(key);
            window.localStorage.removeItem(prefixedKey);
        } catch (error) {
            console.error('Error removing from localStorage:', error);
            throw new Error('Impossible de supprimer les données');
        }
    }

    /**
     * Vérifie si une clé existe dans localStorage
     * @param {string} key
     * @returns {Promise<boolean>}
     */
    async hasItem(key) {
        if (!this.isAvailable) {
            return false;
        }

        try {
            const prefixedKey = this.getPrefixedKey(key);
            return window.localStorage.getItem(prefixedKey) !== null;
        } catch (error) {
            console.error('Error checking localStorage:', error);
            return false;
        }
    }

    /**
     * Vide tout le localStorage (seulement les clés avec préfixe)
     * @returns {Promise<void>}
     */
    async clear() {
        if (!this.isAvailable) {
            console.warn('localStorage not available');
            return;
        }

        try {
            const keys = Object.keys(window.localStorage);
            const prefixedKeys = keys.filter(key => key.startsWith(this.prefix));

            prefixedKeys.forEach(key => {
                window.localStorage.removeItem(key);
            });
        } catch (error) {
            console.error('Error clearing localStorage:', error);
            throw new Error('Impossible de vider le stockage');
        }
    }

    /**
     * Récupère toutes les clés avec préfixe
     * @returns {Promise<string[]>}
     */
    async getAllKeys() {
        if (!this.isAvailable) {
            return [];
        }

        try {
            const keys = Object.keys(window.localStorage);
            return keys
                .filter(key => key.startsWith(this.prefix))
                .map(key => key.replace(this.prefix, ''));
        } catch (error) {
            console.error('Error getting keys from localStorage:', error);
            return [];
        }
    }

    /**
     * Récupère les statistiques d'utilisation
     * @returns {Promise<Object>}
     */
    async getStats() {
        if (!this.isAvailable) {
            return { available: false, keys: 0, size: 0 };
        }

        try {
            const keys = await this.getAllKeys();
            let totalSize = 0;

            for (const key of keys) {
                const value = await this.getItem(key);
                if (value) {
                    totalSize += JSON.stringify(value).length;
                }
            }

            return {
                available: true,
                keys: keys.length,
                size: totalSize
            };
        } catch (error) {
            console.error('Error getting localStorage stats:', error);
            return { available: false, keys: 0, size: 0 };
        }
    }
}
