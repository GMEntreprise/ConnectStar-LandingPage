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
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Pourquoi ConnectStar existe ? Une Révélation Divine
              </h3>
            </div>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed opacity-95">
              <p className="font-medium text-amber-200">
                Au début de l'année 2025, Dieu m'a parlé sur WhatsApp.
              </p>
              
              <p>
                Il m'a dit : <span className="font-semibold italic">"Mitch, WhatsApp vend les données des gens. 
                Et cela ne s'arrêtera pas là."</span>
              </p>
              
              <p>
                Alors je lui ai demandé : <span className="italic">"Seigneur, que veux-tu que je fasse ?"</span><br/>
                Il m'a répondu : <span className="font-semibold">"Je veux que tu développes une application comme WhatsApp, 
                mais pour les chrétiens. Je veux que mon peuple arrête d'utiliser WhatsApp."</span>
              </p>
              
              <p>
                J'ai dit : <span className="italic">"D'accord Seigneur, donne-moi l'intelligence pour la créer."</span><br/>
                Puis j'ai demandé : <span className="italic">"Seigneur, comment s'appellera l'application ?"</span><br/>
                Il m'a répondu : <span className="font-semibold text-amber-300">"ConnectStar."</span>
              </p>
              
              <p>
                Surpris, j'ai demandé : <span className="italic">"Mais Seigneur, que signifie ConnectStar ?"</span><br/>
                Il m'a rappelé : <span className="font-semibold">"Quand j'ai parlé à Abraham, je lui ai dit : 
                regarde le ciel et compte les étoiles. Voilà ce que veut dire ConnectStar : 
                Connectés jusqu'aux extrémités du monde."</span>
              </p>
              
              <p className="font-medium">
                Ainsi, Dieu m'a inspiré et guidé dans la création de cette application.
                Mon objectif à long terme est que tous les chrétiens qui connaissent et servent Jésus 
                quittent WhatsApp, pour se rassembler sur ConnectStar.
              </p>
              
              <p>
                Nous savons que dans les temps à venir, plus rien ne sera vraiment sécurisé. 
                Si, comme moi, vous désirez changer les choses, rejoignez cette nouvelle aventure 
                et contribuez à l'améliorer.
              </p>
              
              <p className="text-sm opacity-90">
                L'application sera en version bêta : certaines choses devront être perfectionnées, 
                alors n'hésitez pas à me contacter pour partager vos suggestions.
              </p>
            </div>
            
            <div className="text-center mt-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6">
                <p className="text-lg font-medium italic mb-2">
                  "Regarde vers le ciel, et compte les étoiles, si tu peux les compter"
                </p>
                <p className="text-sm text-amber-300">- Genèse 15:5</p>
                <div className="mt-4 pt-4 border-t border-white/30">
                  <p className="font-semibold text-base">Edouard GM</p>
                  <p className="text-sm opacity-90">Fondateur de ConnectStar</p>
                </div>
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