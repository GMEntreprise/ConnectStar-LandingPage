import { BookOpen, Heart, Home, Info, Mail, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo-connectStar.webp";
import DynamicCounter from "./DynamicCounter";
import { StatsBar } from "./StatsBar";

const Footer = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img src={logo} alt="ConnectStar" />
              </div>
              <span className="text-2xl font-bold">ConnectStar</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="w-4 h-4" />
              <span className="text-sm">
                {t("footer.tagline")}
              </span>
            </div>
          </div>

          {/* Quick Links / Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.sections.navigation")}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Home className="w-4 h-4" />
                  <span>{t("footer.links.features")}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("vision")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{t("footer.links.vision")}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("faq")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Info className="w-4 h-4" />
                  <span>{t("footer.links.faq")}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("signup")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Users className="w-4 h-4" />
                  <span>{t("footer.links.signup")}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.sections.contact")}</h3>

            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-400 " />
              <a
                href="mailto:connectstart.contact@gmail.com"
                className="flex items-center  text-gray-300 hover:text-purple-600 transition-colors duration-200"
              >
                connectstart.contact@gmail.com
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">
                {t("footer.sections.support")}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t("footer.supportDescription")}
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
              label: t("footer.stats.signups"),
            },
            { value: "100%", label: t("footer.stats.security") },
            { value: "100%", label: t("footer.stats.satisfaction") },
            { value: "2025", label: t("footer.stats.launch") },
          ]}
          className="text-blue-400"
        />

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {t("footer.copyright", { year: currentYear })}
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1"
              >
                <Info className="w-4 h-4" />
                <span>{t("footer.legal.privacy")}</span>
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1"
              >
                <Info className="w-4 h-4" />
                <span>{t("footer.legal.terms")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm italic">
            {t("footer.quote")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
