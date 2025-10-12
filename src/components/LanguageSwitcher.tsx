import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200 text-gray-700 hover:text-blue-600 group"
      aria-label="Change language"
    >
      <Languages className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" />
      <span className="font-medium text-sm uppercase">
        {i18n.language === 'fr' ? 'EN' : 'FR'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
