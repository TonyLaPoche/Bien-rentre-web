/**
 * Use Case - Gérer les traductions
 * Orchestre les opérations de traduction et changement de langue
 */
export class ManageTranslations {
    /**
     * @param {ITranslationRepository} translationRepository
     * @param {ILocalStorageRepository} storageRepository
     */
    constructor(translationRepository, storageRepository) {
        this.translationRepository = translationRepository;
        this.storageRepository = storageRepository;
        this.STORAGE_KEY = 'bienrentre_language';
    }

    /**
     * Change la langue de l'application
     * @param {string} language
     * @returns {Promise<{success: boolean, language: string, previousLanguage?: string}>}
     */
    async changeLanguage(language) {
        try {
            const previousLanguage = await this.translationRepository.getCurrentLanguage();

            // Vérifier si la langue est supportée
            const isSupported = await this.translationRepository.isLanguageSupported(language);
            if (!isSupported) {
                return {
                    success: false,
                    language: previousLanguage,
                    error: 'Language not supported'
                };
            }

            // Changer la langue
            await this.translationRepository.setLanguage(language);

            // Sauvegarder la préférence utilisateur
            await this.storageRepository.setItem(this.STORAGE_KEY, language);

            return {
                success: true,
                language: language,
                previousLanguage: previousLanguage
            };

        } catch (error) {
            console.error('Error changing language:', error);
            return {
                success: false,
                language: await this.translationRepository.getCurrentLanguage(),
                error: error.message
            };
        }
    }

    /**
     * Récupère la langue actuelle
     * @returns {Promise<string>}
     */
    async getCurrentLanguage() {
        return await this.translationRepository.getCurrentLanguage();
    }

    /**
     * Récupère les langues supportées
     * @returns {Promise<Array>}
     */
    async getSupportedLanguages() {
        const languageCodes = await this.translationRepository.getSupportedLanguages();
        const languages = [];

        for (const code of languageCodes) {
            const info = await this.translationRepository.getLanguageInfo(code);
            if (info) {
                languages.push(info);
            }
        }

        return languages;
    }

    /**
     * Traduit une clé
     * @param {string} key
     * @param {Object} params
     * @returns {Promise<string>}
     */
    async translate(key, params = {}) {
        return await this.translationRepository.translate(key, params);
    }

    /**
     * Traduit plusieurs clés
     * @param {string[]} keys
     * @param {Object} params
     * @returns {Promise<Object>}
     */
    async translateMultiple(keys, params = {}) {
        return await this.translationRepository.translateMultiple(keys, params);
    }

    /**
     * Charge la langue sauvegardée de l'utilisateur
     * @returns {Promise<string>}
     */
    async loadSavedLanguage() {
        try {
            const savedLanguage = await this.storageRepository.getItem(this.STORAGE_KEY);

            if (savedLanguage) {
                const isSupported = await this.translationRepository.isLanguageSupported(savedLanguage);
                if (isSupported) {
                    await this.translationRepository.setLanguage(savedLanguage);
                    return savedLanguage;
                }
            }

            // Détecter la langue du navigateur
            const browserLanguage = this.detectBrowserLanguage();
            if (browserLanguage) {
                await this.translationRepository.setLanguage(browserLanguage);
                return browserLanguage;
            }

            // Utiliser la langue par défaut
            return await this.translationRepository.getCurrentLanguage();

        } catch (error) {
            console.error('Error loading saved language:', error);
            return await this.translationRepository.getCurrentLanguage();
        }
    }

    /**
     * Détecte la langue du navigateur
     * @returns {string|null}
     */
    detectBrowserLanguage() {
        try {
            const browserLang = navigator.language || navigator.userLanguage;
            if (!browserLang) return null;

            // Extraire le code de langue (ex: 'fr-FR' -> 'fr')
            const langCode = browserLang.split('-')[0].toLowerCase();

            // Mapper vers nos langues supportées
            const supportedLanguages = ['fr', 'en'];
            return supportedLanguages.includes(langCode) ? langCode : null;

        } catch (error) {
            console.error('Error detecting browser language:', error);
            return null;
        }
    }

    /**
     * Réinitialise la langue à la valeur par défaut
     * @returns {Promise<{success: boolean, language: string}>}
     */
    async resetToDefaultLanguage() {
        try {
            const defaultLanguage = 'fr'; // Langue par défaut
            await this.translationRepository.setLanguage(defaultLanguage);
            await this.storageRepository.removeItem(this.STORAGE_KEY);

            return {
                success: true,
                language: defaultLanguage
            };

        } catch (error) {
            console.error('Error resetting to default language:', error);
            return {
                success: false,
                language: await this.translationRepository.getCurrentLanguage(),
                error: error.message
            };
        }
    }

    /**
     * Recherche dans les traductions
     * @param {string} query
     * @returns {Promise<Array>}
     */
    async searchInTranslations(query) {
        return await this.translationRepository.searchTranslations(query);
    }

    /**
     * Valide l'intégrité des traductions
     * @returns {Promise<Object>}
     */
    async validateTranslationsIntegrity() {
        return await this.translationRepository.validateTranslations();
    }

    /**
     * Exporte les traductions actuelles
     * @returns {Promise<Object>}
     */
    async exportCurrentTranslations() {
        const language = await this.translationRepository.getCurrentLanguage();
        const translations = await this.translationRepository.getAllTranslations();

        return {
            language,
            translations,
            exportedAt: new Date().toISOString(),
            version: '1.0.0'
        };
    }
}
