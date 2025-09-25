import React, { useState } from 'react';
import { CheckCircle, Gift, Mail } from 'lucide-react';
import EmailForm from './EmailForm';
import SignupCounter from './SignupCounter';

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="signup" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bienvenue dans l'aventure ConnectStar ! 🎉
            </h2>
            
            <p className="text-gray-600 mb-6">
              Votre inscription a été confirmée. Vous recevrez un email de bienvenue dans quelques minutes avec tous les détails sur le lancement.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-yellow-600 mr-2" />
                <h3 className="text-yellow-800 font-semibold">📧 Important - Vérifiez vos spams !</h3>
              </div>
              <p className="text-sm text-yellow-700 text-center">
                Ce message peut parfois arriver dans votre dossier spam ou courrier indésirable. 
                Pensez à ajouter <strong>connectstart.contact@gmail.com</strong> à vos contacts 
                pour recevoir toutes nos communications.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-100">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Gift className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Bonus Early Access</span>
              </div>
              <p className="text-sm text-gray-700">
                En tant qu'inscrit précoce, vous aurez accès à la version bêta et à des fonctionnalités exclusives !
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rejoignez la révolution de la messagerie chrétienne
            </h2>
            <p className="text-xl text-gray-600">
              Soyez parmi les premiers à découvrir ConnectStar
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm">Accès prioritaire à la bêta</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm">Fonctionnalités exclusives</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm">Participez au développement</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm">Badge "Founding Member"</span>
            </div>
          </div>

          {/* Form */}
          <EmailForm onSuccess={handleSuccess} />

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">
              📧 Pas de spam • 🔒 Données sécurisées • ❌ Désabonnement en un clic
            </p>
            <div className="text-xs text-gray-400">
              En vous inscrivant, vous acceptez de recevoir des mises à jour sur ConnectStar. 
              Vos données sont protégées selon notre politique de confidentialité.
            </div>
          </div>

          {/* Social Proof */}
          <SignupCounter />
        </div>
      </div>
    </section>
  );
};

export default Signup;