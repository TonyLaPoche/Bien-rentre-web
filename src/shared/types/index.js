/**
 * @typedef {Object} ContactFormData
 * @property {string} name - Nom optionnel de l'utilisateur
 * @property {string} email - Adresse email obligatoire
 * @property {string} subject - Sujet du message obligatoire
 * @property {string} message - Contenu du message obligatoire
 * @property {boolean} privacyAccepted - Acceptation de la politique de confidentialité
 */

/**
 * @typedef {Object} ValidationResult
 * @property {boolean} isValid - Si la validation est passée
 * @property {Object.<string, string>} errors - Erreurs par champ
 */

/**
 * @typedef {Object} EmailData
 * @property {string} from_name - Nom de l'expéditeur
 * @property {string} from_email - Email de l'expéditeur
 * @property {string} subject - Sujet de l'email
 * @property {string} message - Contenu du message
 * @property {string} to_email - Email destinataire
 */

/**
 * @typedef {Object} FAQItem
 * @property {string} question - Question de la FAQ
 * @property {string} answer - Réponse à la question
 * @property {boolean} isOpen - État d'ouverture de l'accordéon
 */

/**
 * @typedef {Object} FormField
 * @property {string} name - Nom du champ
 * @property {string} value - Valeur du champ
 * @property {boolean} isRequired - Si le champ est obligatoire
 * @property {Function} validator - Fonction de validation
 * @property {string} errorMessage - Message d'erreur
 */

/**
 * @typedef {Object} APIResponse
 * @property {boolean} success - Si l'appel API a réussi
 * @property {string} message - Message de réponse
 * @property {*} data - Données de réponse (optionnel)
 */
