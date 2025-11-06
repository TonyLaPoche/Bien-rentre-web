/**
 * Use Case - Valider un formulaire de contact
 * Orchestre la validation du formulaire
 */
export class ValidateContactForm {
    /**
     * @param {FormValidationService} validationService
     */
    constructor(validationService) {
        this.validationService = validationService;
    }

    /**
     * Exécute la validation du formulaire
     * @param {Object} formData
     * @returns {ValidationResult}
     */
    execute(formData) {
        try {
            // Nettoyage des données
            const sanitizedData = this.validationService.sanitizeFormData(formData);

            // Création de l'entité ContactForm
            const contactForm = new (require('../../domain/entities/ContactForm.js').ContactForm)(sanitizedData);

            // Validation
            return this.validationService.validateContactForm(contactForm);

        } catch (error) {
            console.error('Erreur dans ValidateContactForm:', error);
            return require('../../domain/entities/ValidationResult.js').ValidationResult.failure({
                general: 'Erreur de validation du formulaire'
            });
        }
    }
}
