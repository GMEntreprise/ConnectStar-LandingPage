import React from 'react';
import { Heart, Users, BookOpen, Star, Globe, Lightbulb } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      icon: Heart,
      title: "Connecter les cœurs dans la foi",
      description: "Créer des liens authentiques entre croyants du monde entier, au-delà des frontières géographiques et dénominationnelles.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Rendre la Parole accessible",
      description: "Intégrer naturellement la Bible dans nos conversations quotidiennes pour nourrir notre croissance spirituelle.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Bâtir une communauté bienveillante",
      description: "Offrir un espace sûr où chacun peut partager, grandir et être encouragé dans son parcours de foi.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Unir l'Église universelle",
      description: "Rassembler tous les chrétiens dans une plateforme commune qui célèbre notre diversité dans l'unité.",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const values = [
    {
      icon: Star,
      title: "Authenticité",
      description: "Des échanges vrais et sincères, loin des artifices des réseaux sociaux traditionnels."
    },
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Un environnement où règnent l'amour, le respect et l'encouragement mutuel."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Allier technologie moderne et valeurs éternelles pour servir la communauté chrétienne."
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ma Vision pour ConnectStar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Imaginer une messagerie qui ne se contente pas de connecter les téléphones, 
            mais qui connecte véritablement les âmes dans la foi et l'amour du Christ.
          </p>
        </div>

        {/* Vision Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {visionPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${point.color} flex items-center justify-center mb-6`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Personal Message - Divine Calling */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Pourquoi ConnectStar existe ? Une Vision Divine
              </h3>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed opacity-95">
              <p className="italic">
                "En mars de cette année, Dieu m'a parlé avec clarté au sujet des risques que représentent 
                les messageries actuelles qui vendent les données de Son peuple..."
              </p>
              
              <p>
                <span className="font-semibold text-amber-300">"Mitch"</span>, m'a-t-Il dit, 
                <span className="font-semibold">"Je veux que tu crées une application de messagerie sécurisée 
                comme WhatsApp, mais pour Mon corps. Elle s'appellera ConnectStar."</span>
              </p>
              
              <p>
                Voici comment j'ai entrepris cette aventure sacrée. Cela fait des mois que je travaille 
                sans rémunération, dans le seul but d'accomplir la parole de Dieu. Car les temps qui viennent 
                révéleront bien plus que la simple vente de données.
              </p>
              
              <p className="font-medium">
                Si vous êtes comme moi et désirez voir le Corps du Christ grandir dans l'unité et la sécurité, 
                rejoignez cette mission divine. Ensemble, unis dans la foi, nous pouvons contribuer à cette 
                œuvre entièrement gratuite qui servira les générations futures de croyants.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                <p className="text-lg font-medium italic">
                  "Car là où deux ou trois sont rassemblés en mon nom, je suis au milieu d'eux."
                </p>
                <p className="text-sm mt-2 text-amber-300">- Matthieu 18:20</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Nos Valeurs Fondamentales
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Ces principes guident chaque décision dans le développement de ConnectStar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">
              Rejoignez cette vision
            </h4>
            <p className="text-gray-600 mb-6">
              ConnectStar n'est pas qu'une application, c'est un mouvement pour transformer 
              la façon dont nous vivons notre foi ensemble à l'ère numérique.
            </p>
            <button 
              onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Faire partie de l'aventure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;