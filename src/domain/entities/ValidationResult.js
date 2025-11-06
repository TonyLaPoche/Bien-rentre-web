/**
 * Entité ValidationResult - Résultat de validation d'un formulaire
 * @class
 */
export class ValidationResult {
    /**
     * @param {boolean} isValid
     * @param {Object.<string, string>} errors
     */
    constructor(isValid = true, errors = {}) {
        this.isValid = isValid;
        this.errors = errors;
        this.validatedAt = new Date();
    }

    /**
     * Crée un résultat de validation réussi
     * @returns {ValidationResult}
     */
    static success() {
        return new ValidationResult(true, {});
    }

    /**
     * Crée un résultat de validation avec erreurs
     * @param {Object.<string, string>} errors
     * @returns {ValidationResult}
     */
    static failure(errors) {
        return new ValidationResult(false, errors);
    }

    /**
     * Ajoute une erreur pour un champ spécifique
     * @param {string} field
     * @param {string} message
     * @returns {ValidationResult}
     */
    addError(field, message) {
        return new ValidationResult(false, {
            ...this.errors,
            [field]: message
        });
    }

    /**
     * Vérifie si un champ a une erreur
     * @param {string} field
     * @returns {boolean}
     */
    hasError(field) {
        return Boolean(this.errors[field]);
    }

    /**
     * Récupère l'erreur d'un champ
     * @param {string} field
     * @returns {string|null}
     */
    getError(field) {
        return this.errors[field] || null;
    }

    /**
     * Récupère toutes les erreurs
     * @returns {string[]}
     */
    getAllErrors() {
        return Object.values(this.errors);
    }

    /**
     * Fusionne deux résultats de validation
     * @param {ValidationResult} other
     * @returns {ValidationResult}
     */
    merge(other) {
        return new ValidationResult(
            this.isValid && other.isValid,
            { ...this.errors, ...other.errors }
        );
    }
}
