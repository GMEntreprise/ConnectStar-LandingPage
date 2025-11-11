import React from 'react';
import { Server, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const iconMap = {
  0: Server,
  1: Code,
};

const TransparencySection: React.FC = () => {
  const { t } = useTranslation('donations');

  const breakdown = [
    {
      percentage: t('transparency.breakdown.0.percentage'),
      title: t('transparency.breakdown.0.title'),
      description: t('transparency.breakdown.0.description'),
    },
    {
      percentage: t('transparency.breakdown.1.percentage'),
      title: t('transparency.breakdown.1.title'),
      description: t('transparency.breakdown.1.description'),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('transparency.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('transparency.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {breakdown.map((item, index) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                      {item.percentage}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
