import React from 'react';
import { ArrowRight, Smartphone, Heart } from 'lucide-react';

const backgroundPatternUrl = "data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%234F46E5\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const Hero = () => {
  const scrollToSignup = () => {
    const element = document.getElementById('signup');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute inset-0 bg-[url('${backgroundPatternUrl}')] bg-repeat`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
            <Heart className="w-4 h-4" />
            <span>Bientôt disponible sur iOS & Android</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Connectez-vous dans la
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500 ml-4">
              Foi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            ConnectStar est la première messagerie chrétienne moderne avec la Bible intégrée. 
            Échangez, priez ensemble et grandissez spirituellement dans un espace sûr et inspirant.
          </p>

          {/* Value Proposition */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12 text-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">Bible intégrée</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">Sécurisé & privé</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">Communauté bienveillante</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={scrollToSignup}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Rejoindre la liste d'attente</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <div className="flex items-center space-x-2 text-gray-600">
              <Smartphone className="w-5 h-5" />
              <span className="text-sm">Gratuit • iOS & Android • 2025</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center text-gray-500">
            <p className="text-sm mb-4">Déjà <span className="font-semibold text-blue-600">2,847</span> personnes inscrites</p>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
              <span className="text-xs ml-2">+2847 autres...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;