import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        "projects": "Projects",
        "writings": "Writings",
        "drawings": "Drawings",
        "contact": "Contact",
        "myWork": "My Work",
        "tagLine": "Developer, and even more.",
        "contactMe": "Contact Me",
        "explore": "Explore my latest projects in web and app development !",
        "noProjects": "No Projects",
        "all": "All",
        "web": "Websites",
        "app": "Apps",
        "checkItOut": "Check it out",
        "hook": "Feel free to reach out anytime for a project collaboration or any other inquiries !",
        "name": "Name",
        "lastName": "Last Name",
        "content": "Content",
        "cancel": "Cancel",
        "send": "Send",
        "submit": "Submit",
        "close": "Close",
        "save": "Save",
    }
  },
  fr: {
    translation: {
        "projects": "Projets",
        "writings": "Écrits",
        "drawings": "Dessins",
        "contact": "Contact",
        "myWork": "Mon Travail",
        "tagLine": "Développeur, et bien plus encore.",
        "contactMe": "Contactez-moi",
        "explore": "Découvrez mes derniers projets de développement web et d'application !",
        "noProjects": "Aucun projet",
        "all": "Tous",
        "web": "Sites",
        "app": "Applications",
        "checkItOut": "En voir plus",
        "hook": "N'hésitez pas à me contacter à tout moment pour une collaboration sur un projet ou toute autre demande !",
        "name": "Prénom",
        "lastName": "Nom de famille",
        "content": "Contenu",
        "cancel": "Annuler",
        "send": "Envoyer",
        "submit": "Envoyer",
        "close": "Fermer",
        "save": "Enregistrer",
    }
  }
};

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    interpolation: {
      escapeValue: false
    }
  });

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  localStorage.setItem('language', lng);
};

export default i18n;