import React from 'react';
import { BookOpen, MessageSquare, Gift, Shield, Heart, Download } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Bible Intégrée",
      description: "Accédez à la Bible directement dans vos conversations. Partagez des versets, méditez ensemble et enrichissez vos échanges spirituels.",
      highlight: true
    },
    {
      icon: MessageSquare,
      title: "Messagerie Moderne",
      description: "Interface fluide et intuitive inspirée des meilleures apps de messagerie. Messages instantanés, groupes, partage de médias.",
      highlight: false
    },
    {
      icon: Gift,
      title: "Fonctionnalité Surprise 🎁",
      description: "Une innovation révolutionnaire développée spécialement pour ConnectStar que nous dévoilerons bientôt. Préparez-vous à être émerveillés !",
      highlight: false
    },
    {
      icon: Shield,
      title: "Sécurité Totale",
      description: "Chiffrement bout-à-bout, authentification sécurisée et modération bienveillante pour un environnement sain.",
      highlight: false
    },
    {
      icon: Heart,
      title: "Prière Collective",
      description: "Organisez des temps de prière, partagez vos intentions et soutenez-vous mutuellement dans la foi.",
      highlight: false
    },
    {
      icon: Download,
      title: "Accès Hors Ligne",
      description: "Consultez vos conversations et la Bible même sans connexion internet. Idéal pour les temps de méditation et de retraite.",
      highlight: false
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Application Chrétienne avec Bible Intégrée - Fonctionnalités
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ConnectStar combine la modernité des meilleures apps de messagerie avec les valeurs et besoins de la communauté chrétienne.
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
                      UNIQUE
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
                Et bien plus de fonctionnalités à découvrir...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;