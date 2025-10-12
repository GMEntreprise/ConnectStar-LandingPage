import {
  ChevronDown,
  ChevronUp,
  Cross,
  DollarSign,
  HelpCircle,
  Mail,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation("home");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (index: string) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqCategories = t("faq.categories", { returnObjects: true }) as Record<
    string,
    {
      title: string;
      questions: Array<{ question: string; answer: string }>;
    }
  >;

  const categories = [
    {
      title: faqCategories.divine.title,
      icon: Cross,
      color: "text-blue-600",
      faqs: faqCategories.divine.questions,
    },
    {
      title: faqCategories.app.title,
      icon: Smartphone,
      color: "text-green-600",
      faqs: faqCategories.app.questions,
    },
    {
      title: faqCategories.support.title,
      icon: DollarSign,
      color: "text-purple-600",
      faqs: faqCategories.support.questions,
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("faq.header.title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {t("faq.header.description")}
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {categories.map((cat, catIndex) => {
            const CategoryIcon = cat.icon;
            return (
              <div key={catIndex}>
                <div className="flex items-center mb-6">
                  <div
                    className={`w-8 h-8 rounded-lg ${cat.color} bg-opacity-10 flex items-center justify-center mr-3`}
                  >
                    <CategoryIcon className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <h3 className={`text-xl font-semibold ${cat.color}`}>
                    {cat.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {cat.faqs.map((faq, index) => {
                    const globalIndex = `${catIndex}-${index}`;
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <div
                        key={globalIndex}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="text-lg font-medium text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-5">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            {t("faq.cta.text")}
          </p>
          <a
            href="mailto:connectstart.contact@gmail.com"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            {t("faq.cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
