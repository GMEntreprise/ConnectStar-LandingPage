import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Heart,
  Shield,
  BookOpen,
  Users,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Star,
} from 'lucide-react';
import ImpactCounter from './ImpactCounter';
import TransparencySection from './TransparencySection';
import HelloAssoEmbed from './HelloAssoEmbed';
import { StatsBar } from './StatsBar';

const Donations: React.FC = () => {
  const { t } = useTranslation('donations');
  const navigate = useNavigate();

  const [openFaqItems, setOpenFaqItems] = useState<number[]>([]);

  const reasons = [
    {
      icon: Users,
      title: t('why.reasons.0.title'),
      description: t('why.reasons.0.description'),
    },
    {
      icon: BookOpen,
      title: t('why.reasons.1.title'),
      description: t('why.reasons.1.description'),
    },
    {
      icon: Shield,
      title: t('why.reasons.2.title'),
      description: t('why.reasons.2.description'),
    },
  ];

  const testimonials = [
    {
      name: t('testimonials.items.0.name'),
      role: t('testimonials.items.0.role'),
      text: t('testimonials.items.0.text'),
      rating: 5,
    },
    {
      name: t('testimonials.items.1.name'),
      role: t('testimonials.items.1.role'),
      text: t('testimonials.items.1.text'),
      rating: 5,
    },
    {
      name: t('testimonials.items.2.name'),
      role: t('testimonials.items.2.role'),
      text: t('testimonials.items.2.text'),
      rating: 5,
    },
  ];

  const faqItems = Array.from({ length: 6 }, (_, i) => ({
    question: t(`faq.items.${i}.question`),
    answer: t(`faq.items.${i}.answer`),
  }));

  const toggleFaqItem = (index: number) => {
    setOpenFaqItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Heart className="w-4 h-4 text-red-500" />
              <span>{t('hero.badge')}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 inline-block shadow-sm border border-blue-100">
              <p className="text-lg font-medium italic text-gray-700 mb-2">
                "{t('hero.verse')}"
              </p>
              <p className="text-sm text-blue-600 font-semibold">
                {t('hero.verseReference')}
              </p>
            </div>
          </div>

          <ImpactCounter
            count={847}
            prefix={t('impact.counter.prefix')}
            suffix={t('impact.counter.suffix')}
          />

          <HelloAssoEmbed
            formUrl=""
            className="mb-8"
          />

          <StatsBar
            stats={[
              {
                value: t('impact.stats.0.value'),
                label: t('impact.stats.0.label'),
              },
              {
                value: t('impact.stats.1.value'),
                label: t('impact.stats.1.label'),
              },
              {
                value: t('impact.stats.2.value'),
                label: t('impact.stats.2.label'),
              },
            ]}
            className="text-gray-700 mb-16"
            gridCols="grid-cols-3"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('why.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TransparencySection />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('testimonials.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-4 text-center flex items-center justify-center">
              <Shield className="w-5 h-5 mr-2" />
              {t('trust.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-green-800">
              {(t('trust.items', { returnObjects: true }) as string[]).map(
                (item, i) => (
                  <div key={i} className="flex items-center">
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('faq.title')}
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaqItems.includes(index);
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-blue-300 transition-colors"
                >
                  <button
                    onClick={() => toggleFaqItem(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-8">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <Heart className="w-5 h-5" />
              <span>{t('cta.button')}</span>
            </button>
            <p className="text-blue-100 text-sm">{t('cta.alternative')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;
