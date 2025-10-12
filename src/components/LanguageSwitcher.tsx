import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === 'fr' ? 'fr' : 'en';

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200 text-gray-700 hover:text-blue-600 group"
      aria-label="Change language"
      title={currentLang === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <span className="text-lg transition-transform duration-200 group-hover:scale-110">
        {currentLang === 'fr' ? '🇫🇷' : '🇬🇧'}
      </span>
      <span className="font-medium text-sm uppercase">
        {currentLang === 'fr' ? 'FR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
