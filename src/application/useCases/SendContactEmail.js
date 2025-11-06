/**
 * Use Case - Envoyer un email de contact
 * Orchestre la logique d'envoi d'email
 */
export class SendContactEmail {
    /**
     * @param {IEmailRepository} emailRepository
     * @param {FormValidationService} validationService
     */
    constructor(emailRepository, validationService) {
        this.emailRepository = emailRepository;
        this.validationService = validationService;
    }

    /**
     * Exécute le use case d'envoi d'email
     * @param {ContactForm} contactForm
     * @returns {Promise<{success: boolean, message: string, errors?: Object}>}
     */
    async execute(contactForm) {
        try {
            // Validation du formulaire
            const validation = this.validationService.validateContactForm(contactForm);
            if (!validation.isValid) {
                return {
                    success: false,
                    message: 'Le formulaire contient des erreurs',
                    errors: validation.errors
                };
            }

            // Vérification de la disponibilité du service email
            const isAvailable = await this.emailRepository.isAvailable();
            if (!isAvailable) {
                return {
                    success: false,
                    message: 'Service d\'email indisponible'
                };
            }

            // Envoi de l'email
            const emailData = contactForm.toEmailData();
            const result = await this.emailRepository.sendEmail(emailData);

            if (result.success) {
                return {
                    success: true,
                    message: 'Message envoyé avec succès'
                };
            } else {
                return {
                    success: false,
                    message: result.message || 'Erreur lors de l\'envoi'
                };
            }

        } catch (error) {
            console.error('Erreur dans SendContactEmail:', error);
            return {
                success: false,
                message: 'Une erreur inattendue est survenue'
            };
        }
    }
}
