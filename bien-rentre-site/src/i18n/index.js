import { createI18n } from 'vue-i18n'

// Détection automatique de la langue
const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage
  return lang.startsWith('fr') ? 'fr' : 'en'
}

// Récupération de la langue sauvegardée
const getSavedLanguage = () => {
  return localStorage.getItem('bien-rentre-language') || getBrowserLanguage()
}

export const messages = {
  fr: {
    nav: {
      home: 'Accueil',
      features: 'Fonctionnalités',
      contact: 'Contact',
      terms: 'Conditions d\'utilisation',
      privacy: 'Politique de confidentialité'
    },
    hero: {
      title: 'Bien-Rentré',
      subtitle: 'L\'application qui veille sur vos retours de soirée',
      description: 'Partagez votre position en temps réel avec vos contacts de confiance. Sécurité et tranquillité d\'esprit garantie.',
      download: 'Télécharger',
      learnMore: 'En savoir plus'
    },
    features: {
      title: 'Fonctionnalités',
      subtitle: 'Tout ce dont vous avez besoin pour rentrer en sécurité',
      items: {
        download: {
          title: 'Téléchargement',
          description: 'Téléchargez Bien-Rentré sur votre smartphone depuis l\'App Store ou Google Play.'
        },
        chooseContacts: {
          title: 'Choisissez vos contacts',
          description: 'Sélectionnez une personne de confiance qui pourra suivre votre trajet en temps réel.'
        },
        activate: {
          title: 'Activez le partage',
          description: 'Générez un code unique et partagez-le avec votre contact pour commencer la session.'
        },
        safeReturn: {
          title: 'Rentrez en sécurité',
          description: 'Votre contact suit votre trajet en temps réel et reçoit une notification à votre arrivée.'
        }
      }
    },
    howItWorks: {
      title: 'Comment ça marche',
      subtitle: 'Simple, rapide et efficace'
    },
    faq: {
      title: 'Questions fréquentes',
      subtitle: 'Tout ce que vous devez savoir sur Bien-Rentré',
      questions: {
        emergency: {
          question: 'Est-ce que Bien-Rentré est un système d\'alerte d\'urgence ?',
          answer: 'Non, Bien-Rentré n\'est pas un système d\'alerte d\'urgence officiel. C\'est un outil de prévention qui permet de partager votre position avec des contacts de confiance pour des déplacements nocturnes. En cas d\'urgence réelle, contactez immédiatement les services d\'urgence appropriés (112, 911, etc.).'
        },
        dataProtection: {
          question: 'Comment mes données de localisation sont-elles protégées ?',
          answer: 'Vos données de géolocalisation ne sont partagées qu\'avec les contacts que vous avez explicitement autorisés. Elles sont chiffrées et stockées temporairement pendant la session active. Nous respectons pleinement le RGPD et nos pratiques sont détaillées dans notre politique de confidentialité.'
        },
        offline: {
          question: 'L\'application fonctionne-t-elle hors ligne ?',
          answer: 'Bien-Rentré nécessite une connexion internet pour partager la géolocalisation en temps réel. Cependant, l\'application peut détecter la perte de connexion et notifier votre contact en cas d\'interruption du signal GPS.'
        },
        contacts: {
          question: 'Combien de contacts puis-je ajouter ?',
          answer: 'Dans la version gratuite, vous pouvez ajouter jusqu\'à 3 contacts de confiance. La version premium permet un nombre illimité de contacts simultanés.'
        },
        accuracy: {
          question: 'Quelle est la précision de la géolocalisation ?',
          answer: 'L\'application utilise le GPS intégré de votre smartphone avec une précision généralement de 5 à 10 mètres. La précision peut varier selon les conditions météorologiques et la couverture réseau.'
        }
      }
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Vous avez des questions ? N\'hésitez pas à nous contacter.',
      form: {
        title: 'Titre',
        message: 'Message',
        email: 'Adresse email',
        send: 'Envoyer',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi. Veuillez réessayer.'
      }
    },
    footer: {
      copyright: 'Tous droits réservés.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      contact: 'Contact',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy'
    },
    hero: {
      title: 'Bien-Rentré',
      subtitle: 'The app that watches over your late-night returns',
      description: 'Share your real-time location with your trusted contacts. Guaranteed security and peace of mind.',
      download: 'Download',
      learnMore: 'Learn More'
    },
    features: {
      title: 'Features',
      subtitle: 'Everything you need to return safely',
      items: {
        download: {
          title: 'Download',
          description: 'Download Bien-Rentré on your smartphone from the App Store or Google Play.'
        },
        chooseContacts: {
          title: 'Choose your contacts',
          description: 'Select a trusted person who can follow your route in real time.'
        },
        activate: {
          title: 'Activate sharing',
          description: 'Generate a unique code and share it with your contact to start the session.'
        },
        safeReturn: {
          title: 'Return safely',
          description: 'Your contact follows your route in real time and receives a notification upon your arrival.'
        }
      }
    },
    howItWorks: {
      title: 'How it works',
      subtitle: 'Simple, fast and effective'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about Bien-Rentré',
      questions: {
        emergency: {
          question: 'Is Bien-Rentré an emergency alert system?',
          answer: 'No, Bien-Rentré is not an official emergency alert system. It is a prevention tool that allows you to share your position with trusted contacts for nighttime travel. In case of real emergency, immediately contact the appropriate emergency services (112, 911, etc.).'
        },
        dataProtection: {
          question: 'How is my location data protected?',
          answer: 'Your location data is only shared with contacts you have explicitly authorized. It is encrypted and temporarily stored during the active session. We fully comply with GDPR and our practices are detailed in our privacy policy.'
        },
        offline: {
          question: 'Does the app work offline?',
          answer: 'Bien-Rentré requires an internet connection to share real-time geolocation. However, the app can detect connection loss and notify your contact in case of GPS signal interruption.'
        },
        contacts: {
          question: 'How many contacts can I add?',
          answer: 'In the free version, you can add up to 3 trusted contacts. The premium version allows unlimited simultaneous contacts.'
        },
        accuracy: {
          question: 'What is the geolocation accuracy?',
          answer: 'The app uses your smartphone\'s built-in GPS with accuracy generally between 5 to 10 meters. Accuracy may vary depending on weather conditions and network coverage.'
        }
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Do you have questions? Don\'t hesitate to contact us.',
      form: {
        title: 'Title',
        message: 'Message',
        email: 'Email address',
        send: 'Send',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.'
      }
    },
    footer: {
      copyright: 'All rights reserved.'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: getSavedLanguage(),
  fallbackLocale: 'fr',
  messages
})
