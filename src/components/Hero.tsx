import { ArrowRight, Heart, Smartphone } from "lucide-react";
import { useMemo } from "react";
import { useBrevoContacts } from "../hooks/useBrevoContacts";
import DynamicCounter from "./DynamicCounter";

const backgroundPatternUrl =
  "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const Hero = () => {
  const { data: contactsData } = useBrevoContacts();

  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const avatars = useMemo(() => {
    const contacts = contactsData || [];
    const colors = ["3b82f6", "8b5cf6", "10b981", "f59e0b", "ef4444"];

    return contacts.slice(0, 4).map((contact, index) => {
      const username = contact.email.split("@")[0];
      const displayName = username.charAt(0).toUpperCase() + username.slice(1);

      return {
        email: contact.email,
        displayName,
        src: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          displayName
        )}&background=${
          colors[index % colors.length]
        }&color=fff&size=64&rounded=true`,
      };
    });
  }, [contactsData]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={`absolute inset-0 bg-[url('${backgroundPatternUrl}')] bg-repeat`}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-pulse">
            <Heart className="w-4 h-4" />
            <span>Bientôt disponible sur iOS & Android</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Messagerie Chrétienne Moderne avec{" "}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
              Bible Intégrée
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            ConnectStar est la première messagerie chrétienne moderne avec la
            Bible intégrée. Échangez, priez ensemble et grandissez
            spirituellement dans un espace sûr et inspirant.
          </p>

          {/* Value Proposition */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-8 mb-8 sm:mb-12 text-gray-700">
            {[
              "Bible intégrée",
              "Sécurisé & privé",
              "Communauté bienveillante",
            ].map((text, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-sm sm:text-base">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10 sm:mb-12">
            <button
              onClick={scrollToSignup}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Rejoindre la liste d&apos;attente</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <div className="flex items-center space-x-2 text-gray-600 text-xs sm:text-sm">
              <Smartphone className="w-5 h-5" />
              <span>Gratuit • iOS & Android • 2025</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center text-gray-500">
            <p className="text-sm sm:text-base mb-4">
              Déjà{" "}
              <DynamicCounter
                className="font-semibold text-blue-600"
                fallbackCount={2847}
              />{" "}
              personnes inscrites
            </p>
            <div className="flex items-center justify-center space-x-1">
              <div className="flex -space-x-2">
                {avatars.length > 0
                  ? avatars.map((avatar, index) => (
                      <img
                        key={index}
                        src={avatar.src}
                        alt={avatar.displayName}
                        className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    ))
                  : [...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-600 font-medium">+∞</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
