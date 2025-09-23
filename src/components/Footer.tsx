import { Heart, Mail, MessageSquare } from "lucide-react";
import DynamicCounter from "./DynamicCounter";
import { StatsBar } from "./StatsBar";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <MessageSquare className="w-20 h-20 text-white" />
                <img
                  className=""
                  src="/assets/connectStar-logo.png"
                  alt="ConnectStar"
                />
              </div>
              <span className="text-2xl font-bold">ConnectStar</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              La première messagerie chrétienne moderne avec la Bible intégrée.
              Connectez-vous dans la foi, grandissez ensemble spirituellement.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="w-4 h-4" />
              <span className="text-sm">
                Fait avec amour pour la communauté chrétienne
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Fonctionnalités
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("vision")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Ma Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("faq")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("signup")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Inscription
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <a
                  href="mailto:connectstart.contact@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  connectstart.contact@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">
                SUPPORT & COMMUNAUTÉ
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Je suis là pour vous accompagner dans votre découverte de
                ConnectStar.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}

        <StatsBar
          showBorder
          stats={[
            {
              value: <DynamicCounter className="text-blue-400" />,
              label: "Inscrits en attente",
            },
            { value: "100%", label: "Sécurisé et sans vente de données" },
            { value: "100%", label: "Taux de satisfaction" },
            { value: "2025", label: "Année de lancement" },
          ]}
          className="text-blue-400"
        />

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ConnectStar. Tous droits réservés. • Développé
              avec passion pour la communauté chrétienne.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm italic">
            "Car là où deux ou trois sont rassemblés en mon nom, je suis au
            milieu d'eux." - Matthieu 18:20
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
