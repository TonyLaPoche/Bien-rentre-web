import { ITranslationRepository } from '../../domain/repositories/ITranslationRepository.js';
import fr from '../../shared/i18n/locales/fr.json';
import en from '../../shared/i18n/locales/en.json';

/**
 * Service de traduction - Implémentation de ITranslationRepository
 * Gère le chargement et l'accès aux traductions
 * @class
 */
export class TranslationService extends ITranslationRepository {
    constructor() {
        super();
        this.translations = {
            fr: fr,
            en: en
        };
        this.currentLanguage = 'fr';
        this.fallbackLanguage = 'fr';
        this.listeners = new Set();
    }

    /**
     * Définit la langue actuelle
     * @param {string} language
     * @returns {Promise<boolean>}
     */
    async setLanguage(language) {
        if (!this.isLanguageSupported(language)) {
            console.warn(`Language '${language}' is not supported. Using fallback '${this.fallbackLanguage}'`);
            language = this.fallbackLanguage;
        }

        const previousLanguage = this.currentLanguage;
        this.currentLanguage = language;

        // Notifier les écouteurs du changement de langue
        this.notifyListeners(previousLanguage, language);

        return true;
    }

    /**
     * Récupère la langue actuelle
     * @returns {Promise<string>}
     */
    async getCurrentLanguage() {
        return this.currentLanguage;
    }

    /**
     * Traduit une clé
     * @param {string} key - Clé de traduction (ex: 'hero.title')
     * @param {Object} params - Paramètres de substitution
     * @returns {Promise<string>}
     */
    async translate(key, params = {}) {
        try {
            const translation = this.getTranslation(key);

            if (!translation) {
                console.warn(`Translation key '${key}' not found for language '${this.currentLanguage}'`);
                return key; // Retourner la clé si traduction non trouvée
            }

            return this.interpolateParams(translation, params);
        } catch (error) {
            console.error('Translation error:', error);
            return key;
        }
    }

    /**
     * Traduit plusieurs clés
     * @param {string[]} keys
     * @param {Object} params
     * @returns {Promise<Object>}
     */
    async translateMultiple(keys, params = {}) {
        const translations = {};

        for (const key of keys) {
            translations[key] = await this.translate(key, params);
        }

        return translations;
    }

    /**
     * Récupère toutes les traductions pour la langue actuelle
     * @returns {Promise<Object>}
     */
    async getAllTranslations() {
        return { ...this.translations[this.currentLanguage] };
    }

    /**
     * Vérifie si une langue est supportée
     * @param {string} language
     * @returns {Promise<boolean>}
     */
    async isLanguageSupported(language) {
        return this.translations.hasOwnProperty(language);
    }

    /**
     * Récupère la liste des langues supportées
     * @returns {Promise<string[]>}
     */
    async getSupportedLanguages() {
        return Object.keys(this.translations);
    }

    /**
     * Récupère les informations d'une langue
     * @param {string} language
     * @returns {Promise<Object|null>}
     */
    async getLanguageInfo(language) {
        if (!await this.isLanguageSupported(language)) {
            return null;
        }

        const translations = this.translations[language];
        const languageNames = {
            fr: 'Français',
            en: 'English'
        };

        return {
            code: language,
            name: languageNames[language] || language,
            isRTL: false, // Pour l'instant, pas de langue RTL supportée
            flag: this.getLanguageFlag(language)
        };
    }

    /**
     * Ajoute un écouteur de changement de langue
     * @param {Function} listener
     */
    addLanguageChangeListener(listener) {
        this.listeners.add(listener);
    }

    /**
     * Supprime un écouteur de changement de langue
     * @param {Function} listener
     */
    removeLanguageChangeListener(listener) {
        this.listeners.delete(listener);
    }

    /**
     * Notifie les écouteurs du changement de langue
     * @param {string} previousLanguage
     * @param {string} newLanguage
     */
    notifyListeners(previousLanguage, newLanguage) {
        this.listeners.forEach(listener => {
            try {
                listener(newLanguage, previousLanguage);
            } catch (error) {
                console.error('Error in language change listener:', error);
            }
        });
    }

    /**
     * Récupère une traduction par sa clé
     * @param {string} key
     * @returns {string|null}
     */
    getTranslation(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];

        // Naviguer dans l'objet de traduction
        for (const k of keys) {
            if (value && typeof value === 'object' && value.hasOwnProperty(k)) {
                value = value[k];
            } else {
                // Essayer avec la langue de fallback
                value = this.translations[this.fallbackLanguage];
                for (const fallbackKey of keys) {
                    if (value && typeof value === 'object' && value.hasOwnProperty(fallbackKey)) {
                        value = value[fallbackKey];
                    } else {
                        return null;
                    }
                }
                break;
            }
        }

        return typeof value === 'string' ? value : null;
    }

    /**
     * Interpole les paramètres dans une chaîne de traduction
     * @param {string} text
     * @param {Object} params
     * @returns {string}
     */
    interpolateParams(text, params) {
        return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
            return params.hasOwnProperty(key) ? params[key] : match;
        });
    }

    /**
     * Récupère le drapeau d'une langue
     * @param {string} language
     * @returns {string}
     */
    getLanguageFlag(language) {
        const flags = {
            fr: '🇫🇷',
            en: '🇺🇸'
        };
        return flags[language] || '🏳️';
    }

    /**
     * Recherche dans les traductions
     * @param {string} query
     * @returns {Promise<Array>}
     */
    async searchTranslations(query) {
        const results = [];
        const currentTranslations = this.translations[this.currentLanguage];

        const searchInObject = (obj, path = '') => {
            for (const [key, value] of Object.entries(obj)) {
                const currentPath = path ? `${path}.${key}` : key;

                if (typeof value === 'string') {
                    if (value.toLowerCase().includes(query.toLowerCase())) {
                        results.push({
                            key: currentPath,
                            value: value,
                            language: this.currentLanguage
                        });
                    }
                } else if (typeof value === 'object' && value !== null) {
                    searchInObject(value, currentPath);
                }
            }
        };

        searchInObject(currentTranslations);
        return results;
    }

    /**
     * Valide l'intégrité des traductions
     * @returns {Promise<Object>}
     */
    async validateTranslations() {
        const issues = {
            missingKeys: [],
            extraKeys: [],
            invalidValues: []
        };

        const referenceLang = this.fallbackLanguage;
        const referenceTranslations = this.translations[referenceLang];

        for (const [lang, translations] of Object.entries(this.translations)) {
            if (lang === referenceLang) continue;

            // Vérifier les clés manquantes et en trop
            const refKeys = this.getAllKeys(referenceTranslations);
            const langKeys = this.getAllKeys(translations);

            issues.missingKeys.push(...refKeys.filter(key => !langKeys.includes(key)).map(key => ({ lang, key })));
            issues.extraKeys.push(...langKeys.filter(key => !refKeys.includes(key)).map(key => ({ lang, key })));

            // Vérifier les valeurs invalides
            this.validateTranslationValues(translations, lang, issues.invalidValues);
        }

        return issues;
    }

    /**
     * Récupère récursivement toutes les clés d'un objet
     * @param {Object} obj
     * @param {string} prefix
     * @returns {string[]}
     */
    getAllKeys(obj, prefix = '') {
        const keys = [];

        for (const [key, value] of Object.entries(obj)) {
            const fullKey = prefix ? `${prefix}.${key}` : key;

            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                keys.push(...this.getAllKeys(value, fullKey));
            } else {
                keys.push(fullKey);
            }
        }

        return keys;
    }

    /**
     * Valide les valeurs de traduction
     * @param {Object} translations
     * @param {string} lang
     * @param {Array} invalidValues
     */
    validateTranslationValues(translations, lang, invalidValues) {
        const validateObject = (obj, path = '') => {
            for (const [key, value] of Object.entries(obj)) {
                const currentPath = path ? `${path}.${key}` : key;

                if (typeof value === 'string') {
                    // Vérifier si la chaîne n'est pas vide
                    if (value.trim() === '') {
                        invalidValues.push({ lang, key: currentPath, issue: 'empty_string' });
                    }
                    // Vérifier les paramètres de substitution non utilisés
                    const paramMatches = value.match(/\{\{(\w+)\}\}/g);
                    if (paramMatches) {
                        // Ici on pourrait vérifier si les paramètres sont utilisés correctement
                    }
                } else if (typeof value === 'object' && value !== null) {
                    validateObject(value, currentPath);
                } else {
                    invalidValues.push({ lang, key: currentPath, issue: 'invalid_type', type: typeof value });
                }
            }
        };

        validateObject(translations);
    }

    /**
     * Nettoie les ressources du service
     */
    destroy() {
        this.listeners.clear();
        this.translations = {};
    }
}
