import React from 'react';
import { FileText, Users, AlertTriangle, Gavel, Heart, Cross } from 'lucide-react';

const Terms = () => {
  return (
    <section id="terms" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conditions d'Utilisation
          </h2>
          <p className="text-lg text-gray-600">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Cross className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-blue-900">Mission Divine</h3>
          </div>
          <p className="text-blue-800 leading-relaxed">
            ConnectStar est née d'une révélation divine pour créer un espace sûr où les chrétiens peuvent 
            communiquer, prier et grandir spirituellement ensemble. En utilisant ConnectStar, vous acceptez 
            de respecter nos valeurs chrétiennes et ces conditions d'utilisation.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Acceptation */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">1. Acceptation des Conditions</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                En vous inscrivant à ConnectStar ou en utilisant notre application, vous acceptez 
                d'être lié par ces conditions d'utilisation et notre politique de confidentialité.
              </p>
              <p>
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ConnectStar.
              </p>
            </div>
          </div>

          {/* Utilisation appropriée */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">2. Utilisation Appropriée</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p><strong>ConnectStar est conçue pour :</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>La communication entre chrétiens</li>
                <li>Le partage de versets bibliques et méditations</li>
                <li>L'organisation de prières collectives</li>
                <li>L'édification spirituelle mutuelle</li>
                <li>La communion fraternelle</li>
              </ul>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-800 font-medium">
                  ⚠️ L'application est en version bêta et peut contenir des bugs. 
                  Nous travaillons constamment à l'améliorer avec vos retours.
                </p>
              </div>
            </div>
          </div>

          {/* Comportements interdits */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">3. Comportements Interdits</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Il est strictement interdit d'utiliser ConnectStar pour :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Diffuser du contenu offensant, haineux ou inapproprié</li>
                <li>Harceler, menacer ou intimider d'autres utilisateurs</li>
                <li>Partager du contenu contraire aux valeurs chrétiennes</li>
                <li>Spam ou sollicitation commerciale non autorisée</li>
                <li>Violer les droits d'auteur ou la propriété intellectuelle</li>
                <li>Diffuser de fausses informations ou doctrines</li>
                <li>Activités illégales ou nuisant à la communauté</li>
              </ul>
            </div>
          </div>

          {/* Modération */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">4. Modération Bienveillante</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                ConnectStar pratique une modération bienveillante pour maintenir un environnement sain :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Signalement communautaire de contenus inappropriés</li>
                <li>Intervention humaine pour résoudre les conflits</li>
                <li>Avertissements avant sanctions</li>
                <li>Suspensions temporaires ou permanentes si nécessaire</li>
                <li>Restauration de comptes après amendement sincère</li>
              </ul>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Gavel className="w-6 h-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">5. Propriété Intellectuelle</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>ConnectStar et tous ses éléments restent propriété d'Edouard GM</li>
                <li>La Bible intégrée utilise des traductions libres de droits</li>
                <li>Vous conservez les droits sur vos messages personnels</li>
                <li>Les contenus partagés publiquement peuvent être modérés</li>
                <li>Respect des droits d'auteur pour tous les partages</li>
              </ul>
            </div>
          </div>

          {/* Responsabilités */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">6. Limitations de Responsabilité</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                ConnectStar est développée avec passion pour le Corps du Christ, mais :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>L'application est fournie "en l'état" en version bêta</li>
                <li>Nous ne garantissons pas un service sans interruption</li>
                <li>Les utilisateurs sont responsables de leurs interactions</li>
                <li>Nous ne sommes pas responsables des contenus tiers</li>
                <li>L'utilisation se fait à vos propres risques</li>
              </ul>
            </div>
          </div>

          {/* Modifications */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">7. Modifications des Conditions</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                Nous nous réservons le droit de modifier ces conditions pour améliorer ConnectStar :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Notification des changements majeurs par email</li>
                <li>Période de grâce pour accepter les nouvelles conditions</li>
                <li>Possibilité de supprimer votre compte si désaccord</li>
                <li>Mise à jour transparente sur notre site web</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">8. Contact et Support</h3>
            </div>
            <div className="text-gray-700">
              <p>Pour toute question concernant ces conditions :</p>
              <p className="mt-2">
                📧 Email : <a href="mailto:connectstart.contact@gmail.com" className="text-blue-600 hover:underline">connectstart.contact@gmail.com</a>
              </p>
              <p className="mt-2">
                👨‍💻 Fondateur : Edouard GM
              </p>
              <p className="mt-4 font-medium text-green-800">
                Nous sommes là pour vous accompagner dans cette aventure spirituelle ! 🙏
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Ces conditions d'utilisation régissent votre relation avec ConnectStar. 
            En cas de conflit, la résolution se fera dans un esprit chrétien de réconciliation.
          </p>
          <p className="text-sm text-blue-600 font-medium">
            "Car là où deux ou trois sont rassemblés en mon nom, je suis au milieu d'eux." - Matthieu 18:20
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;