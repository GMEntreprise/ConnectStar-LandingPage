import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonFr from '../locales/fr/common.json';
import commonEn from '../locales/en/common.json';
import homeFr from '../locales/fr/home.json';
import homeEn from '../locales/en/home.json';
import legalFr from '../locales/fr/legal.json';
import legalEn from '../locales/en/legal.json';
import donationsFr from '../locales/fr/donations.json';
import donationsEn from '../locales/en/donations.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        common: commonFr,
        home: homeFr,
        legal: legalFr,
        donations: donationsFr,
      },
      en: {
        common: commonEn,
        home: homeEn,
        legal: legalEn,
        donations: donationsEn,
      },
    },
    fallbackLng: 'fr',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n;
