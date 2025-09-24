import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, Mail, ArrowLeft } from 'lucide-react';

interface PrivacyProps {
  onBack?: () => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onBack }) => {
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
            Retour à ConnectStar
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Politique de Confidentialité
          </h2>
          <p className="text-lg text-gray-600">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-blue-900">Notre Engagement</h3>
          </div>
          <p className="text-blue-800 leading-relaxed">
            ConnectStar a été créée sur une révélation divine pour protéger les données du peuple de Dieu. 
            Contrairement à WhatsApp et autres messageries, nous ne vendons JAMAIS vos données personnelles. 
            Votre vie privée spirituelle est sacrée.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Collecte des données */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">1. Données Collectées</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p><strong>Données d'inscription :</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Adresse email (pour la liste d'attente)</li>
                <li>Date d'inscription</li>
                <li>Source d'inscription (landing page)</li>
              </ul>
              
              <p><strong>Données d'utilisation future :</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Messages (chiffrés bout-à-bout)</li>
                <li>Contacts (stockés localement)</li>
                <li>Préférences spirituelles (Bible, prières)</li>
              </ul>
            </div>
          </div>

          {/* Utilisation des données */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">2. Utilisation des Données</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Nous utilisons vos données uniquement pour :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Vous informer du lancement de ConnectStar</li>
                <li>Vous donner un accès prioritaire à la version bêta</li>
                <li>Améliorer l'expérience utilisateur</li>
                <li>Assurer la sécurité de la plateforme</li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
                <p className="text-red-800 font-medium">
                  ❌ Nous ne vendons JAMAIS vos données à des tiers
                  <br />❌ Aucune publicité ciblée
                  <br />❌ Aucun tracking commercial
                </p>
              </div>
            </div>
          </div>

          {/* Sécurité */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">3. Sécurité et Chiffrement</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>Chiffrement bout-à-bout pour tous les messages</li>
                <li>Serveurs hébergés dans des pays respectant la vie privée</li>
                <li>Authentification sécurisée</li>
                <li>Pas de sauvegarde des clés de chiffrement</li>
                <li>Suppression automatique des messages temporaires</li>
              </ul>
            </div>
          </div>

          {/* Droits des utilisateurs */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">4. Vos Droits</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Vous avez le droit de :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Consulter toutes vos données personnelles</li>
                <li>Modifier ou corriger vos informations</li>
                <li>Supprimer votre compte à tout moment</li>
                <li>Exporter vos données</li>
                <li>Vous désinscrire de la liste d'attente</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">5. Contact</h3>
            </div>
            <div className="text-gray-700">
              <p>Pour toute question concernant cette politique de confidentialité :</p>
              <p className="mt-2">
                📧 Email : <a href="mailto:connectstart.contact@gmail.com" className="text-blue-600 hover:underline">connectstart.contact@gmail.com</a>
              </p>
              <p className="mt-2">
                👨‍💻 Fondateur : Edouard GM
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Cette politique peut être mise à jour pour refléter les améliorations de ConnectStar. 
            Les utilisateurs seront informés de tout changement majeur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;