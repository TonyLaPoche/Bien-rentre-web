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
    terms: {
      title: 'Conditions d\'utilisation',
      subtitle: 'Dernière mise à jour : Décembre 2024',
      object: {
        title: '1. Objet du service',
        content: 'Bien-Rentré est une application mobile conçue pour améliorer la sécurité des déplacements nocturnes. L\'application permet aux utilisateurs de partager leur position GPS en temps réel avec des contacts de confiance préalablement sélectionnés, offrant ainsi une tranquillité d\'esprit lors des retours de soirée.'
      },
      usage: {
        title: '2. Conditions d\'utilisation',
        age: {
          title: 'Âge minimum',
          content: 'Pour utiliser Bien-Rentré, vous devez avoir au moins 16 ans. Si vous avez moins de 16 ans, l\'utilisation de l\'application est strictement interdite.'
        },
        responsibility: {
          title: 'Usage responsable',
          content: 'Bien-Rentré n\'est pas un système d\'alerte d\'urgence officiel. En cas de danger imminent, contactez immédiatement les services d\'urgence appropriés (112, 911, etc.). L\'application ne remplace pas les mesures de sécurité personnelles.'
        }
      },
      features: {
        title: '3. Fonctionnalités et limitations',
        sharing: {
          title: 'Partage de position',
          content: 'L\'application partage uniquement la géolocalisation GPS avec les contacts explicitement autorisés par l\'utilisateur. Aucune autre donnée personnelle n\'est transmise automatiquement.'
        },
        limitations: 'L\'application nécessite une connexion internet active et l\'autorisation d\'accès à la géolocalisation. En cas de perte de signal GPS ou de connexion, l\'application notifiera automatiquement le contact désigné.'
      },
      property: {
        title: '4. Propriété intellectuelle',
        content: 'L\'application Bien-Rentré, son nom, son logo, et tous les contenus associés sont la propriété exclusive de leurs développeurs. Toute reproduction, distribution ou utilisation commerciale sans autorisation préalable est strictement interdite.'
      },
      data: {
        title: '5. Protection des données',
        content: 'Nous nous engageons à protéger vos données personnelles conformément au RGPD. Pour plus de détails sur notre politique de confidentialité, <a href="/#/privacy" style="color: #6366f1;">cliquez ici</a>.'
      },
      availability: {
        title: '6. Disponibilité du service',
        content: 'Bien-Rentré s\'efforce de maintenir un service fiable, mais ne peut garantir une disponibilité 100% du temps. L\'application peut être temporairement indisponible pour maintenance ou en cas de problème technique.'
      },
      modifications: {
        title: '7. Modifications des conditions',
        content: 'Nous nous réservons le droit de modifier ces conditions d\'utilisation à tout moment. Les utilisateurs seront informés des changements majeurs via l\'application ou par email. L\'utilisation continue de l\'application après modification constitue l\'acceptation des nouvelles conditions.'
      },
      resiliation: {
        title: '8. Résiliation',
        content: 'Vous pouvez cesser d\'utiliser Bien-Rentré à tout moment. La suppression de l\'application entraînera automatiquement l\'arrêt de tout partage de données.'
      },
      law: {
        title: '9. Droit applicable',
        content: 'Ces conditions d\'utilisation sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents français.'
      },
      contact: {
        title: '10. Contact',
        content: 'Pour toute question concernant ces conditions d\'utilisation, contactez-nous via le formulaire de contact de notre site web ou par email à l\'adresse indiquée dans notre politique de confidentialité.'
      },
      questions: {
        title: 'Des questions ?',
        content: 'N\'hésitez pas à nous contacter pour toute clarification concernant ces conditions d\'utilisation.'
      },
      contactLink: 'Nous contacter'
    },
    privacy: {
      title: 'Politique de confidentialité',
      subtitle: 'Dernière mise à jour : Décembre 2024',
      controller: {
        title: '1. Responsable du traitement',
        content: 'Bien-Rentré est développé et maintenu par nos équipes. Pour toute question concernant le traitement de vos données personnelles, vous pouvez nous contacter via le formulaire de contact de notre site web.'
      },
      data: {
        title: '2. Données collectées',
        location: {
          title: 'Données de géolocalisation',
          content: 'Nous collectons votre position GPS en temps réel uniquement lorsque vous activez le partage avec un contact de confiance. Ces données sont temporairement stockées pendant la durée de la session active.'
        },
        contact: {
          title: 'Informations de contact',
          content: 'Lors de l\'utilisation du formulaire de contact de notre site web, nous collectons votre adresse email et le contenu de votre message. Ces données sont utilisées uniquement pour répondre à votre demande.'
        },
        note: 'Nous ne collectons aucune autre donnée personnelle sans votre consentement explicite.'
      },
      purpose: {
        title: '3. Finalités du traitement',
        content: 'Vos données sont traitées uniquement dans le cadre suivant :',
        list1: 'Fournir le service de partage de position en temps réel',
        list2: 'Vous permettre de contacter notre équipe de support',
        list3: 'Améliorer et maintenir la sécurité de notre application'
      },
      legal: {
        title: '4. Base légale',
        content: 'Le traitement de vos données repose sur :',
        list1: 'Votre consentement explicite pour l\'utilisation de l\'application',
        list2: 'L\'exécution du contrat de service que vous avez accepté',
        list3: 'Notre intérêt légitime à assurer la sécurité de nos utilisateurs'
      },
      recipients: {
        title: '5. Destinataires des données',
        content: 'Vos données de géolocalisation sont partagées exclusivement avec les contacts que vous avez explicitement désignés dans l\'application. Aucun autre partage n\'est effectué sans votre autorisation préalable.',
        support: 'Les informations de contact (email et message) sont accessibles uniquement à notre équipe de support pour traiter vos demandes.'
      },
      retention: {
        title: '6. Durée de conservation',
        content: 'Données de géolocalisation : Supprimées automatiquement à la fin de chaque session de partage ou au maximum après 24 heures d\'inactivité. Données de contact : Conservées pendant 2 ans maximum après traitement de votre demande, puis supprimées automatiquement.',
        location: {
          title: 'Données de géolocalisation',
          content: 'Supprimées automatiquement à la fin de chaque session de partage ou au maximum après 24 heures d\'inactivité.'
        },
        contact: {
          title: 'Données de contact',
          content: 'Conservées pendant 2 ans maximum après traitement de votre demande, puis supprimées automatiquement.'
        }
      },
      rights: {
        title: '7. Droits des utilisateurs',
        content: 'Conformément au RGPD, vous disposez des droits suivants :',
        list1: '<strong>Droit d\'accès :</strong> Connaître les données que nous détenons sur vous',
        list2: '<strong>Droit de rectification :</strong> Corriger des données inexactes',
        list3: '<strong>Droit à l\'effacement :</strong> Supprimer vos données personnelles',
        list4: '<strong>Droit à la portabilité :</strong> Récupérer vos données dans un format exploitable',
        list5: '<strong>Droit d\'opposition :</strong> Refuser certains traitements',
        contact: 'Pour exercer ces droits, contactez-nous via notre formulaire de contact.'
      },
      security: {
        title: '8. Sécurité des données',
        content: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, altération ou divulgation.',
        encryption: 'Toutes les communications sont chiffrées et les données sensibles sont stockées de manière sécurisée.'
      },
      contact: {
        title: '9. Contact',
        content: 'Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :',
        list1: 'Via le formulaire de contact de notre site web',
        list2: 'Par email : [votre-email@domaine.com]',
        response: 'Nous nous engageons à répondre à votre demande dans un délai de 30 jours maximum.'
      },
      questions: {
        title: 'Des questions sur vos données ?',
        content: 'N\'hésitez pas à nous contacter pour toute question concernant la protection de vos données personnelles.'
      },
      contactLink: 'Nous contacter'
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
    terms: {
      title: 'Terms of Use',
      subtitle: 'Last updated: December 2024',
      object: {
        title: '1. Service Purpose',
        content: 'Bien-Rentré is a mobile application designed to improve the safety of nighttime travel. The application allows users to share their GPS location in real-time with pre-selected trusted contacts, thus providing peace of mind during evening returns.'
      },
      usage: {
        title: '2. Terms of Use',
        age: {
          title: 'Minimum Age',
          content: 'To use Bien-Rentré, you must be at least 16 years old. If you are under 16, the use of the application is strictly prohibited.'
        },
        responsibility: {
          title: 'Responsible Use',
          content: 'Bien-Rentré is not an official emergency alert system. In case of imminent danger, immediately contact the appropriate emergency services (112, 911, etc.). The application does not replace personal safety measures.'
        }
      },
      features: {
        title: '3. Features and Limitations',
        sharing: {
          title: 'Location Sharing',
          content: 'The application only shares GPS location with contacts explicitly authorized by the user. No other personal data is transmitted automatically.'
        },
        limitations: 'The application requires an active internet connection and authorization to access geolocation. In case of GPS signal or connection loss, the application will automatically notify the designated contact.'
      },
      property: {
        title: '4. Intellectual Property',
        content: 'The Bien-Rentré application, its name, logo, and all associated content are the exclusive property of their developers. Any reproduction, distribution or commercial use without prior authorization is strictly prohibited.'
      },
      data: {
        title: '5. Data Protection',
        content: 'We are committed to protecting your personal data in accordance with GDPR. For more details about our privacy policy, <a href="/#/privacy" style="color: #6366f1;">click here</a>.'
      },
      availability: {
        title: '6. Service Availability',
        content: 'Bien-Rentré strives to maintain a reliable service, but cannot guarantee 100% availability. The application may be temporarily unavailable for maintenance or in case of technical issues.'
      },
      modifications: {
        title: '7. Terms Modifications',
        content: 'We reserve the right to modify these terms of use at any time. Users will be informed of major changes via the application or by email. Continued use of the application after modification constitutes acceptance of the new terms.'
      },
      resiliation: {
        title: '8. Termination',
        content: 'You can stop using Bien-Rentré at any time. Deleting the application will automatically stop all data sharing.'
      },
      law: {
        title: '9. Applicable Law',
        content: 'These terms of use are governed by French law. Any dispute will be submitted to the competent French courts.'
      },
      contact: {
        title: '10. Contact',
        content: 'For any questions regarding these terms of use, contact us through the contact form on our website or by email at the address indicated in our privacy policy.'
      },
      questions: {
        title: 'Questions?',
        content: 'Don\'t hesitate to contact us for any clarification regarding these terms of use.'
      },
      contactLink: 'Contact Us'
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Last updated: December 2024',
      controller: {
        title: '1. Data Controller',
        content: 'Bien-Rentré is developed and maintained by our teams. For any questions regarding the processing of your personal data, you can contact us through the contact form on our website.'
      },
      data: {
        title: '2. Data Collected',
        location: {
          title: 'Geolocation Data',
          content: 'We collect your GPS position in real-time only when you activate sharing with a trusted contact. This data is temporarily stored during the active session duration.'
        },
        contact: {
          title: 'Contact Information',
          content: 'When using the contact form on our website, we collect your email address and message content. This data is used solely to respond to your request.'
        },
        note: 'We do not collect any other personal data without your explicit consent.'
      },
      purpose: {
        title: '3. Processing Purposes',
        content: 'Your data is processed only within the following framework:',
        list1: 'Provide real-time location sharing service',
        list2: 'Allow you to contact our support team',
        list3: 'Improve and maintain application security'
      },
      legal: {
        title: '4. Legal Basis',
        content: 'The processing of your data is based on:',
        list1: 'Your explicit consent for application use',
        list2: 'The execution of the service contract you accepted',
        list3: 'Our legitimate interest in ensuring user safety'
      },
      recipients: {
        title: '5. Data Recipients',
        content: 'Your geolocation data is shared exclusively with contacts you have explicitly designated in the application. No other sharing is performed without your prior authorization.',
        support: 'Contact information (email and message) is accessible only to our support team to process your requests.'
      },
      retention: {
        title: '6. Retention Period',
        content: 'Geolocation Data: Automatically deleted at the end of each sharing session or at most after 24 hours of inactivity. Contact Data: Kept for a maximum of 2 years after processing your request, then automatically deleted.',
        location: {
          title: 'Geolocation Data',
          content: 'Automatically deleted at the end of each sharing session or at most after 24 hours of inactivity.'
        },
        contact: {
          title: 'Contact Data',
          content: 'Kept for a maximum of 2 years after processing your request, then automatically deleted.'
        }
      },
      rights: {
        title: '7. User Rights',
        content: 'In accordance with GDPR, you have the following rights:',
        list1: '<strong>Right of access:</strong> Know what data we hold about you',
        list2: '<strong>Right of rectification:</strong> Correct inaccurate data',
        list3: '<strong>Right to erasure:</strong> Delete your personal data',
        list4: '<strong>Right to portability:</strong> Retrieve your data in a usable format',
        list5: '<strong>Right to object:</strong> Refuse certain processing',
        contact: 'To exercise these rights, contact us through our contact form.'
      },
      security: {
        title: '8. Data Security',
        content: 'We implement appropriate technical and organizational measures to protect your personal data against any unauthorized access, loss, alteration or disclosure.',
        encryption: 'All communications are encrypted and sensitive data is stored securely.'
      },
      contact: {
        title: '9. Contact',
        content: 'For any questions regarding this privacy policy or to exercise your rights, contact us:',
        list1: 'Through the contact form on our website',
        list2: 'By email: [your-email@domain.com]',
        response: 'We commit to responding to your request within a maximum period of 30 days.'
      },
      questions: {
        title: 'Questions about your data?',
        content: 'Don\'t hesitate to contact us for any questions regarding the protection of your personal data.'
      },
      contactLink: 'Contact Us'
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
