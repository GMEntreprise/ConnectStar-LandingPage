import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, Mail, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PrivacyProps {
  onBack?: () => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onBack }) => {
  const { t } = useTranslation('legal');

  const section1Items1 = t('privacy.section1.items1', { returnObjects: true }) as string[];
  const section1Items2 = t('privacy.section1.items2', { returnObjects: true }) as string[];
  const section2Items = t('privacy.section2.items', { returnObjects: true }) as string[];
  const section2Warnings = t('privacy.section2.warnings', { returnObjects: true }) as string[];
  const section3Items = t('privacy.section3.items', { returnObjects: true }) as string[];
  const section4Items = t('privacy.section4.items', { returnObjects: true }) as string[];

  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('privacy.backButton')}
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('privacy.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('privacy.updated')}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-blue-900">{t('privacy.intro.title')}</h3>
          </div>
          <p className="text-blue-800 leading-relaxed">
            {t('privacy.intro.content')}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Collecte des données */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{t('privacy.section1.title')}</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p><strong>{t('privacy.section1.subtitle1')}</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                {section1Items1.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p><strong>{t('privacy.section1.subtitle2')}</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                {section1Items2.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Utilisation des données */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{t('privacy.section2.title')}</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>{t('privacy.section2.intro')}</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                {section2Items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
                <p className="text-red-800 font-medium">
                  {section2Warnings.map((warning, index) => (
                    <React.Fragment key={index}>
                      {warning}
                      {index < section2Warnings.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>

          {/* Sécurité */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{t('privacy.section3.title')}</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                {section3Items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Droits des utilisateurs */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{t('privacy.section4.title')}</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>{t('privacy.section4.intro')}</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                {section4Items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">{t('privacy.section5.title')}</h3>
            </div>
            <div className="text-gray-700">
              <p>{t('privacy.section5.intro')}</p>
              <p className="mt-2">
                {t('privacy.section5.email')} <a href="mailto:connectstart.contact@gmail.com" className="text-blue-600 hover:underline">connectstart.contact@gmail.com</a>
              </p>
              <p className="mt-2">
                {t('privacy.section5.founder')}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            {t('privacy.footer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
