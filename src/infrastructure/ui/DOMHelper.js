/**
 * Utilitaires pour la manipulation du DOM
 * Couche d'abstraction pour les opérations DOM
 * @class
 */
export class DOMHelper {
    /**
     * Récupère un élément par son sélecteur
     * @param {string} selector
     * @returns {Element|null}
     */
    static getElement(selector) {
        return document.querySelector(selector);
    }

    /**
     * Récupère plusieurs éléments par leur sélecteur
     * @param {string} selector
     * @returns {NodeList}
     */
    static getElements(selector) {
        return document.querySelectorAll(selector);
    }

    /**
     * Crée un élément HTML
     * @param {string} tagName
     * @param {Object} attributes
     * @param {string} textContent
     * @returns {Element}
     */
    static createElement(tagName, attributes = {}, textContent = '') {
        const element = document.createElement(tagName);

        // Ajouter les attributs
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === 'className') {
                element.className = value;
            } else if (key === 'style' && typeof value === 'object') {
                Object.assign(element.style, value);
            } else {
                element.setAttribute(key, value);
            }
        });

        // Ajouter le contenu texte
        if (textContent) {
            element.textContent = textContent;
        }

        return element;
    }

    /**
     * Ajoute une classe CSS à un élément
     * @param {Element} element
     * @param {string} className
     */
    static addClass(element, className) {
        if (element && className) {
            element.classList.add(className);
        }
    }

    /**
     * Supprime une classe CSS d'un élément
     * @param {Element} element
     * @param {string} className
     */
    static removeClass(element, className) {
        if (element && className) {
            element.classList.remove(className);
        }
    }

    /**
     * Bascule une classe CSS sur un élément
     * @param {Element} element
     * @param {string} className
     */
    static toggleClass(element, className) {
        if (element && className) {
            element.classList.toggle(className);
        }
    }

    /**
     * Vérifie si un élément a une classe CSS
     * @param {Element} element
     * @param {string} className
     * @returns {boolean}
     */
    static hasClass(element, className) {
        return element && className ? element.classList.contains(className) : false;
    }

    /**
     * Définit le texte d'un élément
     * @param {Element} element
     * @param {string} text
     */
    static setText(element, text) {
        if (element) {
            element.textContent = text;
        }
    }

    /**
     * Définit le HTML d'un élément
     * @param {Element} element
     * @param {string} html
     */
    static setHTML(element, html) {
        if (element) {
            element.innerHTML = html;
        }
    }

    /**
     * Récupère la valeur d'un champ de formulaire
     * @param {Element} element
     * @returns {string}
     */
    static getValue(element) {
        return element ? element.value : '';
    }

    /**
     * Définit la valeur d'un champ de formulaire
     * @param {Element} element
     * @param {string} value
     */
    static setValue(element, value) {
        if (element) {
            element.value = value;
        }
    }

    /**
     * Vérifie si un élément est coché (checkbox/radio)
     * @param {Element} element
     * @returns {boolean}
     */
    static isChecked(element) {
        return element ? element.checked : false;
    }

    /**
     * Définit l'état coché d'un élément
     * @param {Element} element
     * @param {boolean} checked
     */
    static setChecked(element, checked) {
        if (element) {
            element.checked = checked;
        }
    }

    /**
     * Cache un élément
     * @param {Element} element
     */
    static hide(element) {
        if (element) {
            element.style.display = 'none';
        }
    }

    /**
     * Affiche un élément
     * @param {Element} element
     * @param {string} display
     */
    static show(element, display = 'block') {
        if (element) {
            element.style.display = display;
        }
    }

    /**
     * Bascule la visibilité d'un élément
     * @param {Element} element
     * @param {string} display
     */
    static toggleVisibility(element, display = 'block') {
        if (element) {
            element.style.display = element.style.display === 'none' ? display : 'none';
        }
    }

    /**
     * Ajoute un écouteur d'événement
     * @param {Element} element
     * @param {string} event
     * @param {Function} handler
     * @param {Object} options
     */
    static addEventListener(element, event, handler, options = {}) {
        if (element && event && handler) {
            element.addEventListener(event, handler, options);
        }
    }

    /**
     * Supprime un écouteur d'événement
     * @param {Element} element
     * @param {string} event
     * @param {Function} handler
     * @param {Object} options
     */
    static removeEventListener(element, event, handler, options = {}) {
        if (element && event && handler) {
            element.removeEventListener(event, handler, options);
        }
    }

    /**
     * Effectue un scroll fluide vers un élément
     * @param {Element} element
     * @param {Object} options
     */
    static scrollTo(element, options = {}) {
        if (element) {
            const defaultOptions = {
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            };

            element.scrollIntoView({ ...defaultOptions, ...options });
        }
    }

    /**
     * Récupère les données d'un formulaire
     * @param {HTMLFormElement} form
     * @returns {Object}
     */
    static getFormData(form) {
        if (!form) return {};

        const data = {};
        const formData = new FormData(form);

        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        return data;
    }

    /**
     * Définit les données d'un formulaire
     * @param {HTMLFormElement} form
     * @param {Object} data
     */
    static setFormData(form, data) {
        if (!form || !data) return;

        Object.entries(data).forEach(([key, value]) => {
            const element = form.querySelector(`[name="${key}"]`);
            if (element) {
                if (element.type === 'checkbox') {
                    element.checked = Boolean(value);
                } else {
                    element.value = value;
                }
            }
        });
    }

    /**
     * Réinitialise un formulaire
     * @param {HTMLFormElement} form
     */
    static resetForm(form) {
        if (form) {
            form.reset();
        }
    }

    /**
     * Affiche un message d'erreur pour un champ
     * @param {Element} fieldElement
     * @param {string} message
     */
    static showFieldError(fieldElement, message) {
        if (!fieldElement) return;

        // Trouver ou créer le conteneur d'erreur
        let errorElement = fieldElement.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = this.createElement('span', { className: 'error-message' });
            fieldElement.parentNode.appendChild(errorElement);
        }

        errorElement.textContent = message;
        this.addClass(fieldElement.closest('.form-group'), 'error');
    }

    /**
     * Masque le message d'erreur d'un champ
     * @param {Element} fieldElement
     */
    static hideFieldError(fieldElement) {
        if (!fieldElement) return;

        const errorElement = fieldElement.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }

        this.removeClass(fieldElement.closest('.form-group'), 'error');
        this.removeClass(fieldElement.closest('.form-group'), 'success');
    }

    /**
     * Affiche un indicateur de succès pour un champ
     * @param {Element} fieldElement
     */
    static showFieldSuccess(fieldElement) {
        if (!fieldElement) return;

        this.hideFieldError(fieldElement);
        this.addClass(fieldElement.closest('.form-group'), 'success');
    }
}
