import React from 'react';
import { FileText, Users, AlertTriangle, Gavel, Heart, Cross, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TermsProps {
  onBack?: () => void;
}

const Terms: React.FC<TermsProps> = ({ onBack }) => {
  const { t } = useTranslation('legal');

  const section2Items = t('terms.section2.items', { returnObjects: true }) as string[];
  const section3Items = t('terms.section3.items', { returnObjects: true }) as string[];
  const section4Items = t('terms.section4.items', { returnObjects: true }) as string[];
  const section5Items = t('terms.section5.items', { returnObjects: true }) as string[];
  const section6Items = t('terms.section6.items', { returnObjects: true }) as string[];

  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('terms.backButton')}
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('terms.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('terms.updated')}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Cross className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-blue-900">{t('terms.intro.title')}</h3>
          </div>
          <p className="text-blue-800 leading-relaxed">
            {t('terms.intro.content')}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Acceptation */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{t('terms.section1.title')}</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>{t('terms.section1.p1')}</p>
              <p>{t('terms.section1.p2')}</p>
            </div>
          </div>

          {/* Utilisation appropriée */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{t('terms.section2.title')}</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p><strong>{t('terms.section2.subtitle')}</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                {section2Items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-800 font-medium">
                  {t('terms.section2.warning')}
                </p>
              </div>
            </div>
          </div>

          {/* Comportements interdits */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{t('terms.section3.title')}</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>{t('terms.section3.intro')}</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                {section3Items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modération */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{t('terms.section4.title')}</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>{t('terms.section4.intro')}</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                {section4Items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Gavel className="w-6 h-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{t('terms.section5.title')}</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                {section5Items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Responsabilités */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{t('terms.section6.title')}</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>{t('terms.section6.intro')}</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                {section6Items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{t('terms.section7.title')}</h3>
            </div>
            <div className="text-gray-700">
              <p>{t('terms.section7.intro')}</p>
              <p className="mt-2">
                {t('terms.section7.email')} <a href="mailto:connectstart.contact@gmail.com" className="text-blue-600 hover:underline">connectstart.contact@gmail.com</a>
              </p>
              <p className="mt-2">
                {t('terms.section7.founder')}
              </p>
              <p className="mt-4 font-medium text-green-800">
                {t('terms.section7.support')}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            {t('terms.footer1')}
          </p>
          <p className="text-sm text-blue-600 font-medium">
            {t('terms.footer2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
