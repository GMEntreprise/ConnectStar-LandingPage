import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img
                className="ml-1 h-6"
                src="/assets/logo-connectStar.webp"
                alt="ConnectStar"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">ConnectStar</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Ma Vision
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("signup")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Rejoindre la liste
            </button>
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-100 py-4 space-y-4 shadow-md">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-4"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-4"
            >
              Ma Vision
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-4"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("signup")}
              className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md mt-4 mx-4"
            >
              Rejoindre la liste
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
