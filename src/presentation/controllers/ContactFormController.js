import { SendContactEmail } from '../../application/useCases/SendContactEmail.js';
import { ValidateContactForm } from '../../application/useCases/ValidateContactForm.js';
import { ContactForm } from '../../domain/entities/ContactForm.js';
import { DOMHelper } from '../../infrastructure/ui/DOMHelper.js';
import { eventManager } from '../../infrastructure/ui/EventManager.js';
import { CUSTOM_EVENTS, CSS_CLASSES, SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../shared/constants/index.js';

/**
 * Controller pour le formulaire de contact
 * Gère l'interaction utilisateur avec le formulaire
 * @class
 */
export class ContactFormController {
    /**
     * @param {SendContactEmail} sendContactEmailUseCase
     * @param {ValidateContactForm} validateContactFormUseCase
     */
    constructor(sendContactEmailUseCase, validateContactFormUseCase) {
        this.sendContactEmailUseCase = sendContactEmailUseCase;
        this.validateContactFormUseCase = validateContactFormUseCase;
        this.form = null;
        this.isSubmitting = false;
        this.init();
    }

    /**
     * Initialise le controller
     */
    init() {
        this.form = DOMHelper.getElement('#contactForm');
        if (!this.form) {
            console.warn('Contact form not found');
            return;
        }

        this.bindEvents();
        this.setupValidationListeners();
    }

    /**
     * Lie les événements du formulaire
     */
    bindEvents() {
        // Soumission du formulaire
        DOMHelper.addEventListener(this.form, 'submit', this.handleSubmit.bind(this));

        // Validation en temps réel
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            DOMHelper.addEventListener(input, 'blur', this.handleFieldValidation.bind(this));
            DOMHelper.addEventListener(input, 'input', this.handleFieldInput.bind(this));
        });
    }

    /**
     * Configure les écouteurs de validation
     */
    setupValidationListeners() {
        // Écouter les événements de validation
        eventManager.on(CUSTOM_EVENTS.FORM_VALIDATION, this.handleFormValidation.bind(this));
    }

    /**
     * Gère la soumission du formulaire
     * @param {Event} event
     */
    async handleSubmit(event) {
        event.preventDefault();

        if (this.isSubmitting) {
            return;
        }

        try {
            this.setSubmittingState(true);

            // Récupération des données du formulaire
            const formData = DOMHelper.getFormData(this.form);

            // Création de l'entité ContactForm
            const contactForm = new ContactForm({
                name: formData.name || '',
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                privacyAccepted: formData.privacy
            });

            // Validation du formulaire
            const validationResult = this.sendContactEmailUseCase.validationService.validateContactForm(contactForm);

            if (!validationResult.isValid) {
                this.handleValidationErrors(validationResult.errors);
                return;
            }

            // Envoi de l'email
            const result = await this.sendContactEmailUseCase.execute(contactForm);

            if (result.success) {
                this.handleSuccess();
            } else {
                this.handleError(result.message, result.errors);
            }

        } catch (error) {
            console.error('Form submission error:', error);
            this.handleError(ERROR_MESSAGES.EMAIL_SEND_FAILED);
        } finally {
            this.setSubmittingState(false);
        }
    }

    /**
     * Gère la validation d'un champ individuel
     * @param {Event} event
     */
    handleFieldValidation(event) {
        const field = event.target;
        const fieldName = field.name;
        const fieldValue = field.value;

        // Validation basique en temps réel
        this.validateField(fieldName, fieldValue, field);
    }

    /**
     * Gère la saisie dans un champ
     * @param {Event} event
     */
    handleFieldInput(event) {
        const field = event.target;

        // Masquer les erreurs lors de la saisie
        if (DOMHelper.hasClass(field.closest('.form-group'), 'error')) {
            DOMHelper.hideFieldError(field);
        }
    }

    /**
     * Gère la validation du formulaire
     * @param {ValidationResult} validationResult
     */
    handleFormValidation(validationResult) {
        if (validationResult.isValid) {
            this.clearAllErrors();
        } else {
            this.handleValidationErrors(validationResult.errors);
        }
    }

    /**
     * Valide un champ individuel
     * @param {string} fieldName
     * @param {string} value
     * @param {Element} fieldElement
     */
    validateField(fieldName, value, fieldElement) {
        const validationService = this.validateContactFormUseCase.validationService;
        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'email':
                errorMessage = validationService.validateEmail(value);
                isValid = !errorMessage;
                break;
            case 'subject':
                errorMessage = validationService.validateSubject(value);
                isValid = !errorMessage;
                break;
            case 'message':
                errorMessage = validationService.validateMessage(value);
                isValid = !errorMessage;
                break;
            case 'name':
                errorMessage = validationService.validateName(value);
                isValid = !errorMessage;
                break;
        }

        if (isValid) {
            DOMHelper.showFieldSuccess(fieldElement);
        } else {
            DOMHelper.showFieldError(fieldElement, errorMessage);
        }
    }

    /**
     * Gère les erreurs de validation
     * @param {Object} errors
     */
    handleValidationErrors(errors) {
        this.clearAllErrors();

        Object.entries(errors).forEach(([fieldName, message]) => {
            const fieldElement = this.form.querySelector(`[name="${fieldName}"]`);
            if (fieldElement) {
                DOMHelper.showFieldError(fieldElement, message);
            }
        });

        // Focus sur le premier champ en erreur
        const firstErrorField = this.form.querySelector('.error input, .error textarea');
        if (firstErrorField) {
            firstErrorField.focus();
        }
    }

    /**
     * Efface toutes les erreurs du formulaire
     */
    clearAllErrors() {
        const errorMessages = this.form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());

        const formGroups = this.form.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            DOMHelper.removeClass(group, 'error');
            DOMHelper.removeClass(group, 'success');
        });
    }

    /**
     * Gère le succès de l'envoi
     */
    handleSuccess() {
        // Émettre un événement de succès
        eventManager.emit(CUSTOM_EVENTS.EMAIL_SENT, {
            message: SUCCESS_MESSAGES.EMAIL_SENT
        });

        // Afficher le modal de succès
        this.showSuccessModal();

        // Réinitialiser le formulaire
        DOMHelper.resetForm(this.form);
        this.clearAllErrors();
    }

    /**
     * Gère les erreurs d'envoi
     * @param {string} message
     * @param {Object} errors
     */
    handleError(message, errors = null) {
        if (errors) {
            this.handleValidationErrors(errors);
        } else {
            // Afficher une erreur générale
            alert(message);
        }

        eventManager.emit(CUSTOM_EVENTS.EMAIL_ERROR, { message, errors });
    }

    /**
     * Définit l'état de soumission du formulaire
     * @param {boolean} isSubmitting
     */
    setSubmittingState(isSubmitting) {
        this.isSubmitting = isSubmitting;
        const submitBtn = this.form.querySelector('button[type="submit"]');

        if (isSubmitting) {
            DOMHelper.addClass(submitBtn, CSS_CLASSES.FORM.LOADING);
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
        } else {
            DOMHelper.removeClass(submitBtn, CSS_CLASSES.FORM.LOADING);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer le message';
        }
    }

    /**
     * Affiche le modal de succès
     */
    showSuccessModal() {
        const modal = DOMHelper.getElement('#successModal');
        if (modal) {
            DOMHelper.show(modal);
            document.body.style.overflow = 'hidden';

            // Auto-fermeture après 5 secondes
            setTimeout(() => {
                this.hideSuccessModal();
            }, 5000);
        }
    }

    /**
     * Masque le modal de succès
     */
    hideSuccessModal() {
        const modal = DOMHelper.getElement('#successModal');
        if (modal) {
            DOMHelper.hide(modal);
            document.body.style.overflow = 'auto';
        }
    }

    /**
     * Nettoie les ressources du controller
     */
    destroy() {
        // Supprimer les écouteurs d'événements
        if (this.form) {
            this.form.removeEventListener('submit', this.handleSubmit);
        }

        // Supprimer les écouteurs d'événements personnalisés
        eventManager.removeAllListeners(CUSTOM_EVENTS.FORM_VALIDATION);
    }
}
