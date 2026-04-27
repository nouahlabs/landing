import type { Locale } from "@/i18n/config";

export function getComplianceCopy(locale: Locale) {
  if (locale === "fr") {
    return {
      legal: {
        eyebrow: "Legal",
        effective: "Date d'effet",
        contact: "Contact",
        support: "Support",
        accountDeletion: "Suppression de compte",
        report: "Signaler",
        canonicalNote:
          "Pour les consoles App Store, Google Play et OAuth, utilisez les URLs canoniques en /en/ sauf si une fiche localisee l'exige.",
      },
      support: {
        eyebrow: "Support",
        title: "Support Nouah Labs",
        body:
          "Utilisez ce formulaire pour une question produit, un probleme de compte, une demande de store review ou un besoin d'assistance.",
        emailFallback: "Vous pouvez aussi ecrire directement a",
        subject: "Nouvelle demande support Nouah Labs",
        categoryLabel: "Categorie",
        categories: [
          "Probleme de compte",
          "Probleme technique",
          "Facturation ou achat",
          "Store review",
          "Autre",
        ],
      },
      deletion: {
        eyebrow: "Confidentialite",
        title: "Demander la suppression d'un compte",
        body:
          "Indiquez l'application, l'identifiant du compte et les donnees concernees. N'envoyez pas de mot de passe ni de code.",
        subject: "Demande de suppression de compte Nouah Labs",
      },
      report: {
        eyebrow: "Signalement",
        title: "Signaler un contenu, un utilisateur ou un probleme de securite",
        body:
          "Utilisez ce formulaire pour signaler un contenu problematique, un utilisateur abusif, un risque pour les enfants, une fraude ou un contenu illegal.",
        subject: "Signalement UGC Nouah Labs",
        categoryLabel: "Type de signalement",
        categories: [
          "Contenu abusif",
          "Utilisateur abusif",
          "Contenu illegal",
          "Securite enfant",
          "Harcelement ou menace",
          "Confidentialite",
          "Autre",
        ],
      },
      app: {
        eyebrow: "Application",
        platform: "Plateformes",
        status: "Statut",
        storeLinks: "Liens store",
        complianceLinks: "Liens de conformite",
        oauth: "OAuth et domaines",
        redirectUrls: "URLs de redirection",
        authorizedDomains: "Notes domaines autorises",
        noStoreLinks: "Les liens store seront ajoutes quand ils seront publics.",
        privacy: "Politique de confidentialite",
        terms: "Conditions d'utilisation",
        support: "Support",
        accountDeletion: "Suppression de compte",
        report: "Signaler",
        consoleNote:
          "Pour la configuration des consoles, utilisez des URLs canoniques explicites comme",
        backToWork: "Retour aux projets",
      },
      form: {
        appLabel: "Application",
        appPlaceholder: "Choisir une application",
        nameLabel: "Nom",
        namePlaceholder: "Votre nom",
        emailLabel: "E-mail",
        messageLabel: "Details",
        messagePlaceholder:
          "Ajoutez les informations utiles pour traiter la demande.",
        accountLabel: "Identifiant du compte",
        accountPlaceholder: "E-mail, telephone ou identifiant utilisateur",
        contentUrlLabel: "Lien ou identifiant du contenu",
        contentUrlPlaceholder: "URL, profil, message, capture ou reference",
        sending: "Envoi...",
        send: "Envoyer",
        success: "Votre demande a ete envoyee. Nous repondrons bientot.",
        failure:
          "La demande n'a pas pu etre envoyee. Ecrivez directement a support@nouahlabs.com.",
        setupError:
          "Le formulaire n'est pas encore configure. Ajoutez un endpoint Formspree.",
      },
    };
  }

  return {
    legal: {
      eyebrow: "Legal",
      effective: "Effective date",
      contact: "Contact",
      support: "Support",
      accountDeletion: "Account deletion",
      report: "Report",
      canonicalNote:
        "For App Store, Google Play, and OAuth console fields, use canonical /en/ URLs unless a localized store listing requires otherwise.",
    },
    support: {
      eyebrow: "Support",
      title: "Nouah Labs Support",
      body:
        "Use this form for product questions, account issues, app review support, or help with a Nouah Labs app.",
      emailFallback: "You can also email",
      subject: "New Nouah Labs support request",
      categoryLabel: "Category",
      categories: [
        "Account issue",
        "Technical issue",
        "Billing or purchase",
        "Store review",
        "Other",
      ],
    },
    deletion: {
      eyebrow: "Privacy",
      title: "Request account deletion",
      body:
        "Tell us the app, account identifier, and data involved. Do not send passwords or one-time codes.",
      subject: "Nouah Labs account deletion request",
    },
    report: {
      eyebrow: "Report",
      title: "Report content, a user, or a safety issue",
      body:
        "Use this form to report objectionable content, abusive users, child safety concerns, scams, illegal content, or policy violations.",
      subject: "Nouah Labs UGC report",
      categoryLabel: "Report type",
      categories: [
        "Objectionable content",
        "Abusive user",
        "Illegal content",
        "Child safety",
        "Harassment or threat",
        "Privacy concern",
        "Other",
      ],
    },
    app: {
      eyebrow: "App",
      platform: "Platforms",
      status: "Status",
      storeLinks: "Store links",
      complianceLinks: "Compliance links",
      oauth: "OAuth and domains",
      redirectUrls: "Redirect URLs",
      authorizedDomains: "Authorized domain notes",
      noStoreLinks: "Store links will be added when they are public.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      support: "Support",
      accountDeletion: "Account Deletion",
      report: "Report",
      consoleNote:
        "For console setup, use explicit canonical URLs such as",
      backToWork: "Back to work",
    },
    form: {
      appLabel: "App",
      appPlaceholder: "Select an app",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      messageLabel: "Details",
      messagePlaceholder:
        "Add the details needed to review and respond to the request.",
      accountLabel: "Account identifier",
      accountPlaceholder: "Email, phone, or user ID",
      contentUrlLabel: "Content link or identifier",
      contentUrlPlaceholder: "URL, profile, message, screenshot, or reference",
      sending: "Sending...",
      send: "Submit",
      success: "Your request was sent. We will review it and reply soon.",
      failure:
        "The request could not be sent. Please email support@nouahlabs.com directly.",
      setupError:
        "This form is not configured yet. Add a Formspree endpoint.",
    },
  };
}
