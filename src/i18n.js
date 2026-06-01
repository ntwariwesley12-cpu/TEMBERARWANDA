import { reactive, computed } from 'vue';

const messages = {
  en: {
    navbar: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      gallery: 'Gallery',
      photos: 'Photos',
      videos: 'Videos',
      destinations: 'Destinations',
      contact: 'Contact Us',
    },
    footer: {
      brand: 'TEMBERURWANDA',
      tagline: 'Discover the beauty of the land of a thousand hills',
      quickLinks: 'Quick Links',
      destinations: 'Destinations',
      contactInfo: 'Contact Info',
      copyright: '©2026 Visit Rwanda. All rights reserved',
    },
  },
  fr: {
    navbar: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      gallery: 'Galerie',
      photos: 'Photos',
      videos: 'Vidéos',
      destinations: 'Destinations',
      contact: 'Contactez-nous',
    },
    footer: {
      brand: 'TEMBERURWANDA',
      tagline: 'Découvrez la beauté du pays des mille collines',
      quickLinks: 'Liens rapides',
      destinations: 'Destinations',
      contactInfo: 'Info Contact',
      copyright: '©2026 Visit Rwanda. Tous droits réservés',
    },
  },
  rw: {
    navbar: {
      home: 'Urugo',
      about: 'Ibyerekeye',
      services: 'Serivisi',
      gallery: 'Galerie',
      photos: 'Amafoto',
      videos: 'Videwo',
      destinations: 'Amahanga',
      contact: 'Twandikire',
    },
    footer: {
      brand: 'TEMBERURWANDA',
      tagline: 'Menya ubwiza bw’igihugu cy’imisozi igihumbi',
      quickLinks: 'Aho wajya',
      destinations: 'Amahanga',
      contactInfo: 'Aderesi',
      copyright: '©2026 Visit Rwanda. Uburenganzira bwose burabitswe',
    },
  },
  es: {
    navbar: {
      home: 'Inicio',
      about: 'Acerca',
      services: 'Servicios',
      gallery: 'Galería',
      photos: 'Fotos',
      videos: 'Videos',
      destinations: 'Destinos',
      contact: 'Contáctanos',
    },
    footer: {
      brand: 'TEMBERURWANDA',
      tagline: 'Descubre la belleza de la tierra de las mil colinas',
      quickLinks: 'Enlaces rápidos',
      destinations: 'Destinos',
      contactInfo: 'Información',
      copyright: '©2026 Visit Rwanda. Todos los derechos reservados',
    },
  },
};

const state = reactive({ locale: 'en' });
const current = computed(() => messages[state.locale] || messages.en);

const availableLocales = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'rw', label: 'Kinyarwanda' },
  { code: 'es', label: 'Español' },
];

function t(path) {
  const keys = path.split('.');
  let result = current.value;
  for (const key of keys) {
    result = result?.[key];
    if (result == null) return path;
  }
  return result;
}

export { state as i18nState, current, t, availableLocales };
