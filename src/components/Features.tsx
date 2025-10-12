import React from 'react';
import { BookOpen, MessageSquare, Gift, Shield, Heart, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation('home');
  const features = [
    {
      icon: BookOpen,
      title: t("features.list.bible.title"),
      description: t("features.list.bible.description"),
      highlight: true
    },
    {
      icon: MessageSquare,
      title: t("features.list.messaging.title"),
      description: t("features.list.messaging.description"),
      highlight: false
    },
    {
      icon: Gift,
      title: t("features.list.surprise.title"),
      description: t("features.list.surprise.description"),
      highlight: false
    },
    {
      icon: Shield,
      title: t("features.list.security.title"),
      description: t("features.list.security.description"),
      highlight: false
    },
    {
      icon: Heart,
      title: t("features.list.prayer.title"),
      description: t("features.list.prayer.description"),
      highlight: false
    },
    {
      icon: Download,
      title: t("features.list.offline.title"),
      description: t("features.list.offline.description"),
      highlight: false
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("features.header.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("features.header.description")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  feature.highlight 
                    ? 'bg-gradient-to-br from-blue-50 to-amber-50 border-2 border-blue-200' 
                    : 'bg-gray-50 hover:bg-white border border-gray-200'
                }`}
              >
                {feature.highlight && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-blue-600 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {t("features.header.badge")}
                    </span>
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                  feature.highlight 
                    ? 'bg-gradient-to-br from-blue-600 to-amber-500' 
                    : 'bg-blue-100'
                }`}>
                  <IconComponent className={`w-6 h-6 ${
                    feature.highlight ? 'text-white' : 'text-blue-600'
                  }`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-amber-500 p-0.5 rounded-full">
            <div className="bg-white rounded-full px-8 py-3">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500 font-semibold">
                {t("features.cta")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;