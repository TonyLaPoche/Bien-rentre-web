import { createI18n } from 'vue-i18n'

const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage
  return lang.startsWith('fr') ? 'fr' : 'en'
}

const getSavedLanguage = () => {
  return localStorage.getItem('bien-rentre-language') || getBrowserLanguage()
}

export const messages = {
  fr: {
    nav: {
      home: 'Accueil',
      features: 'Fonctionnalités',
      support: 'Modèle économique',
      faq: 'FAQ',
      contact: 'Contact',
      terms: 'CGU',
      privacy: 'Confidentialité',
      cgv: 'CGV',
    },
    legal: {
      backHome: 'Retour à l\'accueil',
      updatedAt: 'Dernière mise à jour: mars 2026',
      complianceNote:
        'Ce texte est une base opérationnelle. Une validation finale par un juriste est recommandée avant ouverture commerciale publique.',
    },
    termsPage: {
      title: 'Conditions générales d\'utilisation (CGU)',
      sections: {
        object: {
          title: '1. Objet du service',
          content:
            'Bien-Rentré est une application mobile qui facilite le suivi de retour en sécurité via un code de partage, une carte en temps réel et une notification d\'arrivée.',
        },
        access: {
          title: '2. Conditions d\'accès',
          list1: 'Création d\'un compte par email/mot de passe',
          list2: 'Acceptation des présentes CGU et de la politique de confidentialité',
          list3: 'Activation des permissions nécessaires (localisation, notifications)',
        },
        operation: {
          title: '3. Fonctionnement principal',
          content1:
            'Le partant crée un trajet (adresse de retour + mode de transport), génère un code et le partage. Le suiveur saisit ce code pour suivre le trajet en temps réel et recevoir une notification à l\'arrivée.',
          content2:
            'Bien-Rentré n\'est pas un service de secours et ne remplace pas l\'appel aux services d\'urgence en cas de danger.',
        },
        limits: {
          title: '4. Disponibilité et limitations',
          content:
            'Le service dépend de la qualité du réseau, du GPS, de l\'état du téléphone et des autorisations système. Une interruption temporaire peut survenir (maintenance, indisponibilité tiers, etc.).',
        },
        accounts: {
          title: '5. Comptes utilisateurs',
          content:
            'L\'utilisateur est responsable de la confidentialité de ses identifiants. Tout usage frauduleux peut entraîner la suspension du compte.',
        },
        economics: {
          title: '6. Modèle économique',
          content:
            'Un modèle freemium/premium est en place. Détails sur la page modèle économique et les CGV.',
        },
        ip: {
          title: '7. Propriété intellectuelle',
          content:
            'Les éléments du service Bien-Rentré (marque, interface, contenus, code non open source) sont protégés.',
        },
        law: {
          title: '8. Droit applicable',
          content: 'Les présentes CGU sont régies par le droit français.',
        },
        compliance: {
          title: '9. Mise en conformité',
          content:
            'Ce texte est une base opérationnelle. Une validation finale par un juriste est recommandée avant l\'ouverture commerciale publique.',
        },
      },
    },
    privacyPage: {
      title: 'Politique de confidentialité',
      sections: {
        controller: {
          title: '1. Responsable du traitement',
          content:
            'Le responsable du traitement est l\'éditeur de l\'application Bien-Rentré. Contact: contact{\'@\'}antoineterrade.com',
        },
        data: {
          title: '2. Données traitées',
          list1: 'Données de compte (email, identifiant utilisateur)',
          list2: 'Données de profil (nom, téléphone, adresse si renseignés)',
          list3: 'Données de trajet (code, statut, positions de suivi)',
          list4: 'Données techniques (token de notifications, logs applicatifs minimaux)',
          note: 'L\'application ne lit plus le carnet de contacts du téléphone.',
        },
        purposes: {
          title: '3. Finalités',
          list1: 'Fournir le suivi de trajet en temps réel',
          list2: 'Notifier l\'arrivée du partant au suiveur',
          list3: 'Sécuriser l\'accès au service et prévenir la fraude',
          list4: 'Gérer la relation support utilisateur',
        },
        legalBasis: {
          title: '4. Bases légales',
          list1: 'Exécution du service demandé par l\'utilisateur',
          list2: 'Consentement pour la localisation et les notifications',
          list3: 'Intérêt légitime de sécurité et de prévention d\'abus',
        },
        recipients: {
          title: '5. Destinataires',
          content:
            'Les données sont hébergées sur l\'infrastructure Firebase (Google Cloud) et partagées uniquement avec les utilisateurs concernés par un trajet (partant/suiveur) selon les règles d\'accès applicatives.',
        },
        retention: {
          title: '6. Durées de conservation',
          list1: 'Données de compte: pendant la durée du compte',
          list2: 'Données de trajet: durée nécessaire au service et au support technique',
          list3: 'Données de contact support: durée de traitement de la demande',
          note:
            'Les durées exactes pourront être affinées avant ouverture commerciale grand public.',
        },
        rights: {
          title: '7. Droits RGPD',
          content1:
            'Vous pouvez exercer vos droits d\'accès, rectification, effacement, limitation, opposition et portabilité en écrivant à contact{\'@\'}antoineterrade.com.',
          content2: 'Vous pouvez aussi introduire une réclamation auprès de la CNIL.',
        },
        security: {
          title: '8. Sécurité',
          content:
            'Des mesures techniques et organisationnelles sont mises en place pour protéger les données: contrôle d\'accès, règles Firestore, authentification, chiffrement en transit.',
        },
        compliance: {
          title: '9. Transparence et conformité',
          content:
            'Cette politique est alignée avec l\'état actuel de l\'application (test interne). Une revue juridique finale est recommandée avant lancement public.',
        },
      },
    },
    cgvPage: {
      title: 'Conditions générales de vente (CGV)',
      sections: {
        object: {
          title: '1. Objet',
          content:
            'Les présentes CGV encadrent les futures offres payantes de l\'application Bien-Rentré. A date, l\'application est en test interne et les fonctionnalités payantes ne sont pas encore ouvertes au public.',
        },
        products: {
          title: '2. Produits et services concernés',
          intro: 'Le modèle repose sur des trajets mensuels et le partage de code :',
          list1: 'Freemium : 5 trajets par mois (suivre reste illimité)',
          list2: 'Premium : trajets illimités, code partageable 1 à 5 personnes (~4,90 €/mois)',
          list3: 'Historique étendu pour les comptes Premium (90 jours vs 7 jours)',
          note:
            'Les modalités définitives (prix finaux, taxes, durée d\'engagement) seront précisées au moment de l\'ouverture commerciale.',
        },
        payment: {
          title: '3. Commande et paiement',
          content:
            'Les paiements seront réalisés via les stores mobiles (Google Play / App Store) selon leurs propres conditions générales et politiques de remboursement.',
        },
        withdrawal: {
          title: '4. Droit de rétractation et remboursements',
          content:
            'Les achats numériques in-app sont régis par les politiques de remboursement des plateformes de distribution. Les demandes de remboursement seront traitées selon ces règles.',
        },
        duration: {
          title: '5. Durée, résiliation, suspension',
          content:
            'Les abonnements, lorsqu\'ils seront activés, seront gérés via les stores. L\'utilisateur pourra les résilier depuis son compte store. L\'éditeur peut suspendre un compte en cas d\'usage frauduleux.',
        },
        liability: {
          title: '6. Responsabilité',
          content:
            'Bien-Rentré est une solution d\'accompagnement et de réassurance. L\'application ne remplace pas les services d\'urgence officiels.',
        },
        contact: {
          title: '7. Contact',
          content: 'Pour toute question commerciale: contact{\'@\'}antoineterrade.com',
        },
        compliance: {
          title: '8. Clause de conformité',
          content:
            'Ce document constitue une base de travail opérationnelle. Une validation finale par un professionnel du droit est recommandée avant ouverture commerciale publique.',
        },
      },
    },
    hero: {
      title: 'Bien-Rentré',
      subtitle: 'Le suivi de retour simple et rassurant',
      description:
        'Créez un trajet, partagez un code, suivez en direct et recevez une notification d\'arrivée. L\'application est actuellement testable en test interne.',
      support: 'Voir le modèle économique',
      learnMore: 'En savoir plus',
    },
    features: {
      title: 'Fonctionnalités',
      subtitle: 'Un parcours fluide pour le partant et le suiveur',
      items: {
        download: {
          title: 'Créer un trajet',
          description:
            'Le partant choisit son adresse de retour et son moyen de transport, puis génère un code de suivi.',
        },
        chooseContacts: {
          title: 'Partager un code',
          description:
            'Le code se partage simplement via SMS, WhatsApp ou copier-coller. Aucun carnet de contacts requis.',
        },
        activate: {
          title: 'Suivre en direct',
          description:
            'Le suiveur entre le code et visualise la progression sur la carte en temps réel.',
        },
        safeReturn: {
          title: 'Notification d\'arrivée',
          description:
            'Le suiveur est automatiquement notifié quand le partant arrive dans sa zone de sécurité.',
        },
      },
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Questions fréquentes sur l\'état actuel du projet',
      questions: {
        emergency: {
          question: 'Bien-Rentré remplace-t-il les services d\'urgence ?',
          answer:
            'Non. Bien-Rentré est un service de réassurance et de suivi de trajet. En cas de danger immédiat, il faut contacter les services d\'urgence.',
        },
        offline: {
          question: 'Le suivi fonctionne-t-il hors ligne ?',
          answer:
            'Le suivi en temps réel nécessite une connexion réseau côté partant et suiveur.',
        },
        contacts: {
          question: 'Faut-il ajouter des contacts de confiance ?',
          answer:
            'Non. Le flux actuel est volontairement simplifié: code de suivi uniquement, sans gestion de contacts/favoris.',
        },
        emergencyActivation: {
          question: 'La fonction "Tout va bien ?" est-elle active ?',
          answer:
            'Non, cette fonction a été retirée du POC pour concentrer l\'expérience sur le suivi et la notification d\'arrivée.',
        },
        networkLoss: {
          question: 'Que se passe-t-il si le réseau est instable ?',
          answer:
            'La mise à jour de position peut ralentir. Dès que la connexion revient, les données de suivi reprennent.',
        },
        storageDuration: {
          question: 'Combien de temps les données sont-elles conservées ?',
          answer:
            'Les données sont conservées pour faire fonctionner le service, avec une politique de minimisation en cours de finalisation avant ouverture publique.',
        },
        compatibility: {
          question: 'L\'application est-elle déjà publique ?',
          answer:
            'Pas encore. L\'application est actuellement testée en test interne.',
        },
        dualRole: {
          question: 'Peut-on être partant puis suiveur ?',
          answer:
            'Oui, un même compte peut lancer un trajet et également suivre un autre trajet via code.',
        },
        sharingInitiation: {
          question: 'Comment démarrer un partage ?',
          answer:
            'Depuis l\'écran Départ: adresse de retour + transport + génération du code + démarrage du trajet.',
        },
        economic: {
          question: 'Quel modèle économique est prévu ?',
          answer:
            'Freemium : 5 trajets/mois, code usage unique (1 suiveur). Premium : illimité, code multi-personnes (jusqu\'à 5), historique 90 jours.',
        },
        dataProtection: {
          question: 'Comment les données sont-elles protégées ?',
          answer:
            'Accès authentifié, règles Firestore, séparation des rôles partant/suiveur, et politique RGPD alignée sur l\'état actuel de l\'application.',
        },
        accuracy: {
          question: 'La position est-elle réellement mise à jour ?',
          answer:
            'Oui. Le suiveur reçoit des mises à jour en temps réel et peut aussi effectuer un rafraîchissement manuel.',
        },
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Une question produit, test interne ou juridique ?',
      intro:
        'Le formulaire de contact a été retiré. Pour participer aux tests, merci de m\'envoyer directement un email avec les informations demandées ci-dessous.',
      requiredInfoTitle: 'Informations à indiquer dans votre mail',
      requiredInfo1: 'Type de téléphone utilisé (marque + modèle + OS si possible)',
      requiredInfo2: 'Cas de figure où Bien-Rentré vous semble pertinent',
      emailTitle: 'Adresses email de contact',
      volunteerTitle: 'Développement bénévole',
      volunteerContent:
        'Je développe actuellement seul cette application, sur mon temps libre, car ce projet me tient énormément à coeur. Les testeurs qui participent avant la mise en ligne publique sont des bénévoles.',
      freeTitle: 'Aucune participation financière demandée',
      freeContent:
        'Important: avant l\'ouverture publique de l\'application, un testeur n\'aura jamais à débourser le moindre centime pour quoi que ce soit.',
      sideTitle: 'Tests internes en cours',
      sideDesc:
        'Envoyez un email avec votre contexte de test et votre type de téléphone pour rejoindre la phase de test.',
    },
    support: {
      title: 'Modèle économique',
      subtitle: 'Feuille de route avant ouverture publique',
      description:
        'La page Patreon a été fermée. Le financement projeté est désormais intégré au produit via un modèle freemium/premium.',
      status: {
        title: 'Etat du produit',
        description: 'L\'application est actuellement en test interne.',
      },
      product: {
        title: 'Fonctionnel aujourd\'hui',
        description:
          'Trajet par code, suivi en direct, notification d\'arrivée, authentification email et gestion quota déjà en place.',
      },
      patreon: {
        title: 'Fin du Patreon',
        description:
          'Le Patreon a été fermé. L\'énergie est concentrée sur un modèle in-app cohérent avec l\'usage réel.',
      },
      economic: {
        title: 'Monétisation projetée',
        subtitle: 'Simple, lisible et alignée avec les coûts serveurs',
        description:
          'La sécurité de base reste gratuite. Le Premium finance le partage multi-personnes et l\'historique étendu.',
        freemium: {
          title: 'Freemium',
          content: '5 trajets/mois, code à usage unique (1 personne). Suivre : illimité.',
        },
        premium: {
          title: 'Premium',
          content: 'Trajets illimités, code 1 à 5 personnes, historique 90 jours (~4,90 €/mois).',
        },
        packs: {
          title: 'Multi-suiveurs',
          content: 'Le partant Premium règle le nombre d\'utilisations du code (1 à 5).',
        },
        fairness: {
          title: 'Équité',
          content: '1 proche rassuré gratuitement. Au-delà : Premium.',
        },
      },
      cta: {
        title: 'Participer à la phase de test',
        description: 'Vous souhaitez suivre le projet ou remonter des retours terrain ?',
        button: 'Nous contacter',
      },
    },
    footer: {
      copyright: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      support: 'Business model',
      faq: 'FAQ',
      contact: 'Contact',
      terms: 'Terms',
      privacy: 'Privacy',
      cgv: 'Sales terms',
    },
    legal: {
      backHome: 'Back to home',
      updatedAt: 'Last update: March 2026',
      complianceNote:
        'This text is an operational draft. Final validation by a legal professional is recommended before public commercial launch.',
    },
    termsPage: {
      title: 'Terms of Use',
      sections: {
        object: {
          title: '1. Service purpose',
          content:
            'Bien-Rentré is a mobile app designed to support safe return tracking through a share code, a live map and an arrival notification.',
        },
        access: {
          title: '2. Access conditions',
          list1: 'Account creation with email/password',
          list2: 'Acceptance of Terms of Use and Privacy Policy',
          list3: 'Activation of required permissions (location, notifications)',
        },
        operation: {
          title: '3. Core operation',
          content1:
            'The traveler creates a trip (return address + transport mode), generates a code and shares it. The follower enters the code to track the trip in real time and receive an arrival notification.',
          content2:
            'Bien-Rentré is not an emergency service and does not replace emergency calls in dangerous situations.',
        },
        limits: {
          title: '4. Availability and limitations',
          content:
            'Service quality depends on network, GPS, phone state and system permissions. Temporary interruptions may occur (maintenance, third-party downtime, etc.).',
        },
        accounts: {
          title: '5. User accounts',
          content:
            'Users are responsible for protecting their credentials. Fraudulent use may lead to account suspension.',
        },
        economics: {
          title: '6. Business model',
          content:
            'A freemium/premium points model is planned. Commercial details are described in the Sales Terms page.',
        },
        ip: {
          title: '7. Intellectual property',
          content:
            'Bien-Rentré service elements (brand, interface, content, non-open-source code) are protected.',
        },
        law: {
          title: '8. Applicable law',
          content: 'These Terms are governed by French law.',
        },
        compliance: {
          title: '9. Compliance note',
          content:
            'This text is an operational draft. Final legal review is recommended before public commercial launch.',
        },
      },
    },
    privacyPage: {
      title: 'Privacy Policy',
      sections: {
        controller: {
          title: '1. Data controller',
          content:
            'The data controller is the publisher of the Bien-Rentré application. Contact: contact{\'@\'}antoineterrade.com',
        },
        data: {
          title: '2. Processed data',
          list1: 'Account data (email, user id)',
          list2: 'Profile data (name, phone, address if provided)',
          list3: 'Trip data (code, status, tracking positions)',
          list4: 'Technical data (notification token, minimal app logs)',
          note: 'The application no longer reads the phone contact list.',
        },
        purposes: {
          title: '3. Purposes',
          list1: 'Provide real-time trip tracking',
          list2: 'Notify follower when traveler arrives',
          list3: 'Secure service access and prevent abuse',
          list4: 'Handle user support requests',
        },
        legalBasis: {
          title: '4. Legal basis',
          list1: 'Performance of requested service',
          list2: 'Consent for location and notifications',
          list3: 'Legitimate interest for security and abuse prevention',
        },
        recipients: {
          title: '5. Recipients',
          content:
            'Data is hosted on Firebase infrastructure (Google Cloud) and shared only with users involved in a trip (traveler/follower) according to access rules.',
        },
        retention: {
          title: '6. Retention periods',
          list1: 'Account data: while account exists',
          list2: 'Trip data: as needed for service and technical support',
          list3: 'Support contact data: for request processing duration',
          note:
            'Exact retention periods may be refined before public commercial launch.',
        },
        rights: {
          title: '7. GDPR rights',
          content1:
            'You may exercise your rights of access, rectification, erasure, restriction, objection and portability by contacting contact{\'@\'}antoineterrade.com.',
          content2: 'You may also lodge a complaint with your data protection authority.',
        },
        security: {
          title: '8. Security',
          content:
            'Technical and organizational measures are implemented: access control, Firestore rules, authentication and encryption in transit.',
        },
        compliance: {
          title: '9. Transparency and compliance',
          content:
            'This policy reflects the current app state (internal testing). A final legal review is recommended before public launch.',
        },
      },
    },
    cgvPage: {
      title: 'Sales Terms (CGV)',
      sections: {
        object: {
          title: '1. Scope',
          content:
            'These sales terms define future paid offers of the Bien-Rentré app. At present, the app is in internal testing and paid features are not publicly available yet.',
        },
        products: {
          title: '2. Products and services',
          intro: 'The planned model is based on trip points:',
          list1: 'Freemium: 5 trips per month (following stays unlimited)',
          list2: 'Premium: unlimited trips, code shareable with 1 to 5 people (~€4.90/month)',
          list3: 'Extended history for Premium accounts (90 days vs 7 days)',
          note:
            'Final terms (final prices, taxes, commitment duration) will be published at commercial launch.',
        },
        payment: {
          title: '3. Order and payment',
          content:
            'Payments will be processed through mobile stores (Google Play / App Store), according to their own terms and refund policies.',
        },
        withdrawal: {
          title: '4. Withdrawal and refunds',
          content:
            'In-app digital purchases are governed by the distribution platforms refund policies. Refund requests are handled under those policies.',
        },
        duration: {
          title: '5. Duration, cancellation, suspension',
          content:
            'Subscriptions, when enabled, will be managed through stores. Users may cancel from their store account. The publisher may suspend accounts in case of fraudulent usage.',
        },
        liability: {
          title: '6. Liability',
          content:
            'Bien-Rentré is a support and reassurance service and does not replace official emergency services.',
        },
        contact: {
          title: '7. Contact',
          content: 'For commercial questions: contact{\'@\'}antoineterrade.com',
        },
        compliance: {
          title: '8. Compliance clause',
          content:
            'This document is an operational draft. Final validation by a legal professional is recommended before public commercial launch.',
        },
      },
    },
    hero: {
      title: 'Bien-Rentré',
      subtitle: 'Simple and reassuring return tracking',
      description:
        'Create a trip, share a code, track live and receive an arrival notification. The app is currently available in internal testing.',
      support: 'View business model',
      learnMore: 'Learn more',
    },
    features: {
      title: 'Features',
      subtitle: 'A smooth flow for both traveler and follower',
      items: {
        download: {
          title: 'Create a trip',
          description: 'The traveler chooses a destination and transport mode, then generates a tracking code.',
        },
        chooseContacts: {
          title: 'Share a code',
          description: 'Share through SMS, WhatsApp or copy/paste. No contact list management required.',
        },
        activate: {
          title: 'Track live',
          description: 'The follower enters the code and watches live progress on the map.',
        },
        safeReturn: {
          title: 'Arrival notification',
          description: 'The follower is automatically notified when the traveler reaches the safety zone.',
        },
      },
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Frequently asked questions',
      questions: {
        emergency: {
          question: 'Does Bien-Rentré replace emergency services?',
          answer: 'No. It is a reassurance and tracking service, not an emergency service replacement.',
        },
        offline: {
          question: 'Does tracking work offline?',
          answer: 'Live tracking requires an internet connection for both traveler and follower.',
        },
        contacts: {
          question: 'Do I need trusted contacts?',
          answer: 'No. The current flow is code-based and does not rely on contact/favorite management.',
        },
        emergencyActivation: {
          question: 'Is the "Are you okay?" feature available?',
          answer: 'No. It was removed from the current POC scope.',
        },
        networkLoss: {
          question: 'What if network quality drops?',
          answer: 'Position updates may slow down and resume as soon as connection is restored.',
        },
        storageDuration: {
          question: 'How long is data stored?',
          answer: 'Data retention is minimized for service operation and being finalized before public launch.',
        },
        compatibility: {
          question: 'Is the app public already?',
          answer: 'Not yet. The app is currently in internal testing.',
        },
        dualRole: {
          question: 'Can one account be both traveler and follower?',
          answer: 'Yes. The same account can start a trip and follow another one.',
        },
        sharingInitiation: {
          question: 'How do I start sharing?',
          answer: 'On the Start screen: choose return address, transport mode, generate code, then start trip.',
        },
        economic: {
          question: 'What business model is planned?',
          answer:
            'Freemium 3 trips/month, Premium 10 trips/month (target 4.90 EUR/month), 31-point cap and optional packs.',
        },
        dataProtection: {
          question: 'How is data protected?',
          answer: 'Authenticated access, Firestore rules, and GDPR-aligned legal pages.',
        },
        accuracy: {
          question: 'Is location really updated in real time?',
          answer: 'Yes, and the follower can also trigger a manual refresh.',
        },
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Product, testing or legal question?',
      intro:
        'The contact form has been removed. To join testing, please send me an email directly with the requested information below.',
      requiredInfoTitle: 'Information to include in your email',
      requiredInfo1: 'Phone type used (brand + model + OS if possible)',
      requiredInfo2: 'Use case where Bien-Rentré seems relevant to you',
      emailTitle: 'Contact email addresses',
      volunteerTitle: 'Volunteer development',
      volunteerContent:
        'I am currently the only developer working on this app, in my free time, because this project matters deeply to me. Testers joining before public release are volunteers.',
      freeTitle: 'No payment ever required',
      freeContent:
        'Important: before public launch, a tester will never have to pay anything for any reason.',
      sideTitle: 'Internal testing in progress',
      sideDesc:
        'Send an email with your testing context and phone type to join the testing phase.',
    },
    support: {
      title: 'Business model',
      subtitle: 'Roadmap before public launch',
      description:
        'The Patreon page has been closed. The projected funding model is now integrated in-app through freemium/premium.',
      status: {
        title: 'Product status',
        description: 'The app is currently in internal testing.',
      },
      product: {
        title: 'Already implemented',
        description: 'Code-based sharing, live tracking, arrival notification, email auth and quota management.',
      },
      patreon: {
        title: 'Patreon closure',
        description: 'Patreon was closed to focus on a clear in-app monetization strategy.',
      },
      economic: {
        title: 'Projected monetization',
        subtitle: 'Simple and aligned with infrastructure costs',
        description: 'Core safety stays free. Premium unlocks multi-follower sharing and extended history.',
        freemium: {
          title: 'Freemium',
          content: '5 trips/month, single-use code (1 person). Following: unlimited.',
        },
        premium: {
          title: 'Premium',
          content: 'Unlimited trips, code for 1 to 5 people, 90-day history (~€4.90/month).',
        },
        packs: {
          title: 'Multi-follower',
          content: 'Premium travelers set how many people can use the code (1 to 5).',
        },
        fairness: {
          title: 'Fairness',
          content: 'One trusted follower stays free. Beyond that: Premium.',
        },
      },
      cta: {
        title: 'Join the test phase',
        description: 'Want to follow progress or share field feedback?',
        button: 'Contact us',
      },
    },
    footer: {
      copyright: 'All rights reserved.',
    },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: getSavedLanguage(),
  fallbackLocale: 'fr',
  messages,
})
