import { ValidationResult } from '../entities/ValidationResult.js';
import { VALIDATION_RULES, ERROR_MESSAGES } from '../../shared/constants/index.js';

/**
 * Service de validation des formulaires - Logique métier de validation
 * @class
 */
export class FormValidationService {
    /**
     * Valide un formulaire de contact complet
     * @param {ContactForm} contactForm
     * @returns {ValidationResult}
     */
    validateContactForm(contactForm) {
        const errors = {};

        // Validation de l'email
        const emailError = this.validateEmail(contactForm.email);
        if (emailError) errors.email = emailError;

        // Validation du nom (optionnel)
        const nameError = this.validateName(contactForm.name);
        if (nameError) errors.name = nameError;

        // Validation du sujet
        const subjectError = this.validateSubject(contactForm.subject);
        if (subjectError) errors.subject = subjectError;

        // Validation du message
        const messageError = this.validateMessage(contactForm.message);
        if (messageError) errors.message = messageError;

        // Validation de l'acceptation de la confidentialité
        if (!contactForm.privacyAccepted) {
            errors.privacy = ERROR_MESSAGES.PRIVACY_REQUIRED;
        }

        return Object.keys(errors).length === 0
            ? ValidationResult.success()
            : ValidationResult.failure(errors);
    }

    /**
     * Valide une adresse email
     * @param {string} email
     * @returns {string|null}
     */
    validateEmail(email) {
        if (!email || email.trim() === '') {
            return ERROR_MESSAGES.REQUIRED;
        }

        if (email.length > VALIDATION_RULES.EMAIL.MAX_LENGTH) {
            return ERROR_MESSAGES.EMAIL_TOO_LONG;
        }

        if (!VALIDATION_RULES.EMAIL.PATTERN.test(email)) {
            return ERROR_MESSAGES.EMAIL_INVALID;
        }

        return null;
    }

    /**
     * Valide un nom (optionnel)
     * @param {string} name
     * @returns {string|null}
     */
    validateName(name) {
        if (name && name.length > VALIDATION_RULES.NAME.MAX_LENGTH) {
            return ERROR_MESSAGES.NAME_TOO_LONG;
        }

        return null;
    }

    /**
     * Valide un sujet
     * @param {string} subject
     * @returns {string|null}
     */
    validateSubject(subject) {
        if (!subject || subject.trim() === '') {
            return ERROR_MESSAGES.REQUIRED;
        }

        if (subject.length < VALIDATION_RULES.SUBJECT.MIN_LENGTH) {
            return ERROR_MESSAGES.SUBJECT_TOO_SHORT;
        }

        if (subject.length > VALIDATION_RULES.SUBJECT.MAX_LENGTH) {
            return ERROR_MESSAGES.SUBJECT_TOO_LONG;
        }

        return null;
    }

    /**
     * Valide un message
     * @param {string} message
     * @returns {string|null}
     */
    validateMessage(message) {
        if (!message || message.trim() === '') {
            return ERROR_MESSAGES.REQUIRED;
        }

        if (message.length < VALIDATION_RULES.MESSAGE.MIN_LENGTH) {
            return ERROR_MESSAGES.MESSAGE_TOO_SHORT;
        }

        if (message.length > VALIDATION_RULES.MESSAGE.MAX_LENGTH) {
            return ERROR_MESSAGES.MESSAGE_TOO_LONG;
        }

        return null;
    }

    /**
     * Nettoie et sanitise les données du formulaire
     * @param {Object} formData
     * @returns {Object}
     */
    sanitizeFormData(formData) {
        return {
            name: this.sanitizeText(formData.name || ''),
            email: this.sanitizeEmail(formData.email || ''),
            subject: this.sanitizeText(formData.subject || ''),
            message: this.sanitizeText(formData.message || ''),
            privacyAccepted: Boolean(formData.privacyAccepted)
        };
    }

    /**
     * Nettoie un texte
     * @param {string} text
     * @returns {string}
     */
    sanitizeText(text) {
        return text.trim().replace(/[<>]/g, '');
    }

    /**
     * Nettoie une adresse email
     * @param {string} email
     * @returns {string}
     */
    sanitizeEmail(email) {
        return email.trim().toLowerCase();
    }
}
