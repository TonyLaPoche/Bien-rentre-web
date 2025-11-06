// Initialisation EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // À remplacer par votre clé publique EmailJS
})();

// Variables globales
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const modalClose = document.querySelector('.modal-close');
let isSubmitting = false;

// Navigation mobile
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Fermer le menu mobile lors du clic sur un lien
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Smooth scroll pour les liens d'ancrage
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Ajustement pour la navbar fixe

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            // Fermer tous les autres items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle l'item actuel
            item.classList.toggle('active');
        });
    });
}

// Validation du formulaire
function validateForm() {
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const privacy = document.getElementById('privacy');
    let isValid = true;

    // Reset des erreurs
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('.form-group').forEach(el => {
        el.classList.remove('error', 'success');
    });

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, 'L\'email est requis');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError(email, 'Veuillez entrer un email valide');
        isValid = false;
    } else {
        showSuccess(email);
    }

    // Validation sujet
    if (!subject.value.trim()) {
        showError(subject, 'Le sujet est requis');
        isValid = false;
    } else {
        showSuccess(subject);
    }

    // Validation message
    if (!message.value.trim()) {
        showError(message, 'Le message est requis');
        isValid = false;
    } else if (message.value.length < 10) {
        showError(message, 'Le message doit contenir au moins 10 caractères');
        isValid = false;
    } else if (message.value.length > 1000) {
        showError(message, 'Le message ne peut pas dépasser 1000 caractères');
        isValid = false;
    } else {
        showSuccess(message);
    }

    // Validation privacy
    if (!privacy.checked) {
        showError(privacy, 'Vous devez accepter la politique de confidentialité');
        isValid = false;
    }

    return isValid;
}

function showError(element, message) {
    const formGroup = element.closest('.form-group');
    formGroup.classList.add('error');
    formGroup.classList.remove('success');

    const errorDiv = document.createElement('span');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;

    // Supprimer les erreurs existantes
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    formGroup.appendChild(errorDiv);
}

function showSuccess(element) {
    const formGroup = element.closest('.form-group');
    formGroup.classList.add('success');
    formGroup.classList.remove('error');

    // Supprimer les erreurs existantes
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

// Gestion du formulaire de contact
function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        if (isSubmitting) return;

        // Validation
        if (!validateForm()) {
            return;
        }

        // Préparation des données
        const formData = {
            from_name: document.getElementById('name').value.trim() || 'Anonyme',
            from_email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim(),
            to_email: 'contact@bienrentre.app'
        };

        // État de soumission
        isSubmitting = true;
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.classList.add('loading');
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;

        try {
            // Configuration EmailJS - À adapter selon votre service
            const result = await emailjs.send(
                'YOUR_SERVICE_ID', // Remplacez par votre Service ID EmailJS
                'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID EmailJS
                {
                    from_name: formData.from_name,
                    from_email: formData.from_email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: formData.to_email
                }
            );

            if (result.status === 200) {
                // Succès
                showSuccessModal();
                contactForm.reset();
                document.querySelectorAll('.form-group').forEach(el => {
                    el.classList.remove('error', 'success');
                });
            } else {
                throw new Error('Erreur lors de l\'envoi');
            }
        } catch (error) {
            console.error('Erreur EmailJS:', error);
            alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement à contact@bienrentre.app');
        } finally {
            // Reset du bouton
            isSubmitting = false;
            submitBtn.classList.remove('loading');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Modal de succès
function showSuccessModal() {
    if (successModal) {
        successModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function hideSuccessModal() {
    if (successModal) {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Gestion des événements du modal
function initModal() {
    if (modalClose) {
        modalClose.addEventListener('click', hideSuccessModal);
    }

    if (successModal) {
        successModal.addEventListener('click', function(e) {
            if (e.target === successModal) {
                hideSuccessModal();
            }
        });
    }

    // Fermeture avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && successModal.style.display === 'block') {
            hideSuccessModal();
        }
    });
}

// Animation au scroll
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const animateElements = document.querySelectorAll('.feature-card, .step, .faq-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initSmoothScroll();
    initFAQ();
    initContactForm();
    initModal();
    initScrollAnimation();
    initNavbarScroll();
});

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// Service Worker pour PWA (optionnel, pour le cache offline)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('SW registered: ', registration);
        //     })
        //     .catch(function(registrationError) {
        //         console.log('SW registration failed: ', registrationError);
        //     });
    });
}
