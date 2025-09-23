import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "ConnectStar est-elle vraiment gratuite ?",
      answer:
        "Oui, ConnectStar sera entièrement gratuite pour tous les utilisateurs. Notre mission est de faciliter la communion fraternelle, pas de générer des profits sur la foi.",
    },
    {
      question: "Quelles versions de la Bible seront disponibles ?",
      answer:
        "Nous intégrerons plusieurs traductions populaires : Louis Segond 1910, Semeur, Parole de Vie, TOB, et d'autres. Vous pourrez choisir votre version préférée dans les paramètres.",
    },
    {
      question: "Comment garantissez-vous la sécurité des conversations ?",
      answer:
        "ConnectStar utilise un chiffrement bout-à-bout pour toutes les communications, une authentification sécurisée via Supabase, et une modération bienveillante pour maintenir un environnement sain.",
    },
    {
      question: "Sera-t-il possible de créer des groupes privés ?",
      answer:
        "Absolument ! Vous pourrez créer des groupes privés pour votre église, votre groupe de jeunes, vos études bibliques ou tout autre projet spirituel avec contrôle total sur les membres.",
    },
    {
      question: "L'application fonctionne-t-elle hors ligne ?",
      answer:
        "Certaines fonctionnalités comme la lecture de la Bible seront accessibles hors ligne. Les messages seront synchronisés dès que vous retrouvez une connexion internet.",
    },
    {
      question: "Quand l'application sera-t-elle disponible ?",
      answer:
        "Nous prévoyons un lancement en 2025. Les personnes inscrites sur notre liste d'attente seront les premières informées et auront accès à la version bêta.",
    },
    {
      question: "ConnectStar est-elle liée à une dénomination particulière ?",
      answer:
        "Non, ConnectStar est interconfessionnelle. Nous accueillons tous les chrétiens, quelle que soit leur dénomination, dans le respect des différences théologiques.",
    },
    {
      question: "Comment puis-je contribuer au développement ?",
      answer:
        "Inscrivez-vous à notre liste d'attente pour participer à la version bêta. Nous chercherons aussi des testeurs et des contributeurs pour améliorer l'application.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur ConnectStar
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Une autre question ?</p>
          <a
            href="mailto:connectstart.contact@gmail.com"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Contactez-nous directement
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
