import type { LegalPage } from "@/types";

export const legalPages: LegalPage[] = [
  {
    type: "privacy",
    slug: "privacy",
    title: "Privacy Policy",
    effectiveDate: "April 27, 2026",
    summary:
      "This policy explains how Nouah Labs and the apps we publish collect, use, protect, retain, and delete personal information.",
    contactEmail: "privacy@nouahlabs.com",
    sections: [
      {
        heading: "Information we collect",
        body:
          "Depending on the app or service, we may collect account details, contact information, profile details, device information, diagnostics, app activity, support messages, and content you choose to submit.",
      },
      {
        heading: "How we use information",
        body:
          "We use information to provide app functionality, authenticate users, operate support, improve reliability, prevent abuse, respond to legal requests, and communicate important service updates.",
      },
      {
        heading: "Sharing and processors",
        body:
          "We do not sell personal information. We may share limited information with service providers that help us host, analyze, secure, or support the apps, and only for the purposes described in this policy.",
      },
      {
        heading: "Retention and deletion",
        body:
          "We retain information only as long as needed for the app, legal, safety, fraud-prevention, and support purposes. Users can request account and data deletion from the account deletion page.",
      },
      {
        heading: "Contact",
        body:
          "Questions about privacy practices can be sent to privacy@nouahlabs.com. App-specific pages list the exact links used for store listings and OAuth configuration.",
      },
    ],
  },
  {
    type: "terms",
    slug: "terms",
    title: "Terms of Service",
    effectiveDate: "April 27, 2026",
    summary:
      "These terms define the rules for using Nouah Labs websites, mobile apps, web apps, and support services.",
    contactEmail: "legal@nouahlabs.com",
    sections: [
      {
        heading: "Use of services",
        body:
          "You may use Nouah Labs services only in lawful ways and only according to the rules shown in the relevant app, store listing, and these terms.",
      },
      {
        heading: "Accounts",
        body:
          "You are responsible for the accuracy of account information and for keeping your credentials secure. We may restrict accounts that violate these terms or create safety risks.",
      },
      {
        heading: "Prohibited behavior",
        body:
          "Do not misuse the services, attempt unauthorized access, interfere with service operation, infringe intellectual property rights, harass others, or submit illegal or harmful content.",
      },
      {
        heading: "Availability",
        body:
          "We work to keep services reliable, but features may change, pause, or end as products evolve. We are not responsible for interruptions outside our reasonable control.",
      },
      {
        heading: "Contact",
        body:
          "Questions about these terms can be sent to legal@nouahlabs.com.",
      },
    ],
  },
  {
    type: "ugc-policy",
    slug: "ugc-policy",
    title: "User-Generated Content Policy",
    effectiveDate: "April 27, 2026",
    summary:
      "This policy applies to Nouah Labs apps that allow users to post, send, upload, share, or display content to other users.",
    contactEmail: "support@nouahlabs.com",
    sections: [
      {
        heading: "Objectionable content",
        body:
          "Users may not submit content that is illegal, exploitative, sexually abusive, hateful, threatening, harassing, bullying, deceptive, spammy, or otherwise unsafe for the service.",
      },
      {
        heading: "Moderation",
        body:
          "Nouah Labs may review reports, remove content, restrict accounts, preserve evidence when legally required, and escalate urgent safety issues to appropriate channels.",
      },
      {
        heading: "Reporting and blocking",
        body:
          "Apps with social or sharing features should include in-app reporting and blocking. Non-users and users without app access can use the public report page.",
      },
      {
        heading: "Child safety",
        body:
          "Apps intended for minors must include age-appropriate safety reminders and must not allow content or behavior that facilitates exploitation, abuse, harassment, or unsafe contact.",
      },
    ],
  },
  {
    type: "account-deletion",
    slug: "account-deletion",
    title: "Account and Data Deletion",
    effectiveDate: "April 27, 2026",
    summary:
      "Use this page to request deletion of an account and associated personal data from a Nouah Labs app.",
    contactEmail: "privacy@nouahlabs.com",
    sections: [
      {
        heading: "What can be deleted",
        body:
          "Deletion requests cover the account and personal data associated with that account, subject to limited retention required for security, fraud prevention, legal obligations, dispute handling, and transaction records.",
      },
      {
        heading: "What we need",
        body:
          "Provide the app name, account email or phone number, and any details needed to identify the account. Do not send passwords or one-time codes.",
      },
      {
        heading: "Processing",
        body:
          "We will review the request, verify ownership when needed, and complete eligible deletion requests within a reasonable period.",
      },
    ],
  },
  {
    type: "report-policy",
    slug: "report-policy",
    title: "Report Content or Safety Issue",
    effectiveDate: "April 27, 2026",
    summary:
      "Use this page to report objectionable content, abusive users, illegal content, safety concerns, or policy violations in a Nouah Labs app.",
    contactEmail: "support@nouahlabs.com",
    sections: [
      {
        heading: "What to report",
        body:
          "Reports can cover abusive behavior, illegal content, child safety concerns, harassment, impersonation, scams, privacy concerns, intellectual property complaints, or other policy violations.",
      },
      {
        heading: "Review process",
        body:
          "We review reports based on severity, available evidence, applicable law, and the product policy. Actions may include removing content, restricting users, preserving evidence, or contacting the reporter for more information.",
      },
      {
        heading: "Urgent risk",
        body:
          "If there is immediate danger, contact local emergency services first. The report form is not an emergency service.",
      },
    ],
  },
];

export const frenchLegalPages: LegalPage[] = [
  {
    type: "privacy",
    slug: "privacy",
    title: "Politique de confidentialite",
    effectiveDate: "27 avril 2026",
    summary:
      "Cette politique explique comment Nouah Labs et ses applications collectent, utilisent, protegent, conservent et suppriment les informations personnelles.",
    contactEmail: "privacy@nouahlabs.com",
    sections: [
      {
        heading: "Informations collectees",
        body:
          "Selon l'application ou le service, nous pouvons collecter des informations de compte, de contact, de profil, d'appareil, de diagnostic, d'activite, de support et le contenu que vous choisissez de soumettre.",
      },
      {
        heading: "Utilisation",
        body:
          "Nous utilisons ces informations pour fournir les fonctionnalites, authentifier les utilisateurs, assurer le support, ameliorer la fiabilite, prevenir les abus et communiquer les mises a jour importantes.",
      },
      {
        heading: "Partage",
        body:
          "Nous ne vendons pas les informations personnelles. Nous pouvons les partager avec des prestataires qui nous aident a heberger, analyser, securiser ou soutenir les applications.",
      },
      {
        heading: "Conservation et suppression",
        body:
          "Nous conservons les informations seulement le temps necessaire. Les utilisateurs peuvent demander la suppression de leur compte et de leurs donnees depuis la page de suppression.",
      },
    ],
  },
  {
    type: "terms",
    slug: "terms",
    title: "Conditions d'utilisation",
    effectiveDate: "27 avril 2026",
    summary:
      "Ces conditions definissent les regles d'utilisation des sites, applications mobiles, applications web et services de support Nouah Labs.",
    contactEmail: "legal@nouahlabs.com",
    sections: [
      {
        heading: "Utilisation des services",
        body:
          "Vous pouvez utiliser les services Nouah Labs uniquement de maniere licite et selon les regles indiquees dans l'application concernee et ces conditions.",
      },
      {
        heading: "Comptes",
        body:
          "Vous etes responsable de l'exactitude des informations de compte et de la securite de vos identifiants.",
      },
      {
        heading: "Comportements interdits",
        body:
          "N'utilisez pas les services pour acceder sans autorisation, perturber le service, harceler, enfreindre des droits ou soumettre du contenu illegal ou dangereux.",
      },
    ],
  },
  {
    type: "ugc-policy",
    slug: "ugc-policy",
    title: "Politique de contenu utilisateur",
    effectiveDate: "27 avril 2026",
    summary:
      "Cette politique s'applique aux applications Nouah Labs qui permettent aux utilisateurs de publier, envoyer, televerser, partager ou afficher du contenu a d'autres utilisateurs.",
    contactEmail: "support@nouahlabs.com",
    sections: [
      {
        heading: "Contenu interdit",
        body:
          "Les utilisateurs ne doivent pas soumettre de contenu illegal, abusif, sexuellement exploiteur, haineux, menacant, harcelant, trompeur, spam ou dangereux.",
      },
      {
        heading: "Moderation",
        body:
          "Nouah Labs peut examiner les signalements, retirer du contenu, restreindre des comptes et conserver des preuves lorsque la loi l'exige.",
      },
      {
        heading: "Signalement et blocage",
        body:
          "Les applications avec fonctions sociales doivent proposer le signalement et le blocage dans l'app. La page publique de signalement reste disponible.",
      },
    ],
  },
  {
    type: "account-deletion",
    slug: "account-deletion",
    title: "Suppression de compte et de donnees",
    effectiveDate: "27 avril 2026",
    summary:
      "Utilisez cette page pour demander la suppression d'un compte et des donnees personnelles associees dans une application Nouah Labs.",
    contactEmail: "privacy@nouahlabs.com",
    sections: [
      {
        heading: "Ce qui peut etre supprime",
        body:
          "Les demandes couvrent le compte et les donnees personnelles associees, sous reserve de certaines conservations limitees pour la securite, la loi ou les litiges.",
      },
      {
        heading: "Informations necessaires",
        body:
          "Indiquez le nom de l'application, l'e-mail ou le numero du compte et les details permettant de l'identifier. N'envoyez pas de mot de passe.",
      },
    ],
  },
  {
    type: "report-policy",
    slug: "report-policy",
    title: "Signaler un contenu ou un probleme de securite",
    effectiveDate: "27 avril 2026",
    summary:
      "Utilisez cette page pour signaler du contenu problematique, un utilisateur abusif, du contenu illegal ou un risque de securite dans une application Nouah Labs.",
    contactEmail: "support@nouahlabs.com",
    sections: [
      {
        heading: "Que signaler",
        body:
          "Vous pouvez signaler abus, contenu illegal, risque pour les enfants, harcelement, usurpation, arnaque, atteinte a la confidentialite ou violation de politique.",
      },
      {
        heading: "Traitement",
        body:
          "Nous examinons les signalements selon la gravite, les preuves disponibles, la loi applicable et la politique du produit.",
      },
    ],
  },
];
