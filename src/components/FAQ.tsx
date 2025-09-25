import { ChevronDown, ChevronUp, Cross, Smartphone, DollarSign, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (index: string) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const categories = [
    {
      title: "Vision Divine",
      icon: Cross,
      color: "text-blue-600",
      faqs: [
        {
          question: "Pourquoi Dieu vous a-t-il appelé à créer ConnectStar ?",
          answer:
            "Au début de l'année 2025, Dieu m'a parlé clairement sur WhatsApp qui vend les données de Son peuple. Il m'a dit : 'Mitch, je veux que tu développes une application pour les chrétiens.' ConnectStar est née de cette révélation divine pour protéger et unir le Corps du Christ.",
        },
        {
          question: "Que signifie le nom 'ConnectStar' ?",
          answer:
            "Dieu m'a rappelé sa promesse à Abraham : 'regarde le ciel et compte les étoiles.' ConnectStar signifie : Connectés jusqu'aux extrémités du monde. C'est une vision divine d'unité mondiale des chrétiens.",
        },
      ],
    },
    {
      title: "Application",
      icon: Smartphone,
      color: "text-green-600",
      faqs: [
        {
          question: "ConnectStar est-elle vraiment gratuite ?",
          answer:
            "Oui, ConnectStar sera toujours entièrement gratuite pour tous les utilisateurs. Aucun abonnement, aucun frais caché. C'est une mission divine, pas commerciale.",
        },
        {
          question: "Quelle est cette fonctionnalité surprise 🎁 ?",
          answer:
            "C'est une innovation révolutionnaire que j'ai développée spécialement pour ConnectStar ! Je ne peux pas encore la dévoiler, mais elle va transformer votre expérience spirituelle. Les premiers inscrits la découvriront en exclusivité.",
        },
        {
          question: "Quand l'application sera-t-elle disponible ?",
          answer:
            "ConnectStar sera lancée en version bêta fin d'année 2025. Les membres de la liste d'attente auront un accès prioritaire et testeront toutes les fonctionnalités en avant-première.",
        },
        {
          question: "L'application aura-t-elle des bugs en version bêta ?",
          answer:
            "Oui, comme toute application en développement. Contrairement à WhatsApp, je n'ai pas leur financement, mais avec votre aide et vos retours, nous perfectionnerons ConnectStar ensemble.",
        },
      ],
    },
    {
      title: "Soutien & Donations",
      icon: DollarSign,
      color: "text-purple-600",
      faqs: [
        {
          question:
            "Comment puis-je soutenir le développement de ConnectStar ?",
          answer:
            "ConnectStar est développée sans rémunération par passion pour le Corps du Christ. Vous pouvez nous aider par vos prières, en partageant le projet, et bientôt par des donations volontaires pour couvrir les coûts serveurs et accélérer le développement.",
        },
        {
          question: "Pourquoi avez-vous besoin de donations ?",
          answer:
            "Je développe ConnectStar gratuitement depuis des mois pour accomplir la parole de Dieu. Les donations aideront à payer les serveurs, améliorer l'infrastructure et permettre un développement plus rapide pour servir plus efficacement le Corps du Christ.",
        },
        {
          question: "ConnectStar peut-elle vraiment remplacer WhatsApp ?",
          answer:
            "C'est la vision que Dieu m'a donnée ! Mon objectif à long terme est que tous les chrétiens qui connaissent et servent Jésus quittent WhatsApp pour se rassembler sur ConnectStar. Ensemble, nous pouvons y arriver.",
        },
      ],
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
            Questions fréquentes
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Encore des questions ? Nous sommes là pour vous aider.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {categories.map((cat, catIndex) => {
            const CategoryIcon = cat.icon;
            return (
            <div key={catIndex}>
              <div className="flex items-center mb-6">
                <div className={`w-8 h-8 rounded-lg ${cat.color} bg-opacity-10 flex items-center justify-center mr-3`}>
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
          )})}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Vous n’avez pas trouvé la réponse ?
          </p>
          <a
            href="mailto:connectstart.contact@gmail.com"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors"
          >
            Contactez-nous directement
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
