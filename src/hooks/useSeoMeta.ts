import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const seoConfig = {
  fr: {
    title: 'ConnectStar - Messagerie Chrétienne Moderne avec Bible Intégrée',
    description:
      'ConnectStar est la première messagerie chrétienne moderne avec la Bible intégrée. Échangez, priez ensemble et grandissez spirituellement dans un espace sûr et inspirant.',
    keywords:
      'messagerie chrétienne, Bible intégrée, application chrétienne, communauté chrétienne, prière collective, sécurité données, WhatsApp alternatif, chat chrétien',
    ogLocale: 'fr_FR',
  },
  en: {
    title: 'ConnectStar - Modern Christian Messaging with Integrated Bible',
    description:
      'ConnectStar is the first modern Christian messaging app with integrated Bible. Chat, pray together and grow spiritually in a safe and inspiring space.',
    keywords:
      'christian messaging, integrated Bible, christian app, christian community, collective prayer, data security, WhatsApp alternative, christian chat',
    ogLocale: 'en_US',
  },
};

export const useSeoMeta = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'fr' | 'en';

  useEffect(() => {
    const config = seoConfig[lang] || seoConfig.fr;

    document.documentElement.lang = lang;
    document.title = config.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', config.keywords);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', config.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', config.description);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', config.ogLocale);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', config.title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', config.description);
    }
  }, [lang]);
};
