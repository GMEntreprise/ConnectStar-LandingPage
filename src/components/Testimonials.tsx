import { Quote, Star } from "lucide-react";
import DynamicCounter from "./DynamicCounter";
import { StatsBar } from "./StatsBar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Richard Garbin",
      role: "Président de l'assemblée connectée",
      content: `ConnectStar, enfin une application chrétienne de messages et d'appels. Elle sera équipée d'outils destinés aux chrétiens et, surtout, elle promet de ne pas partager les informations personnelles. Aucune de ses concurrentes, même les plus célèbres, ne propose cela. Je suis vraiment emballé à l'idée de découvrir tout cela.`,
      rating: 5,
      color: "8b5cf6",
    },
    {
      name: "Armand Kaczmarek",
      role: "Chef d'entreprise",
      content:
        "Je trouve le concept ConnectStar particulièrement nécessaire et judicieux pour les Chretiens. Notamment pour l’aspect confidentialité de nos données dans les temps qui arrivent. Bravo.",
      rating: 5,
      color: "10b981",
    },
    {
      name: "Marie Edouard",
      role: "Médecin Généraliste",
      content: `ConnectStar est une réelle révolution !
Une innovation prometteuse pour réunir et rassembler des millions de chrétiens.
ConnectStar s'avère prometteuse pour élargir le réseau sur la toile entre chrétiens.
À découvrir sans réserve !`,
      rating: 5,
      color: "3b82f6",
    },
    {
      name: "Emmanuel & Emmanuel  Arson",
      role: "Conducteur de louange",
      content: `Application chrétienne vraiment passionnante !!!
Un projet qui vient du cœur de Dieu et qui unifie l'Eglise !!! Je vous encourage a participer a ce nouveau concept !`,
      rating: 5,
      color: "3b82f6",
    },
    // {
    //   name: "Thaïs Casmmas",
    //   role: "Leader de louange",
    //   content: ``,
    //   rating: 5,
    //   color: "3b82f6",
    // },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font déjà confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des leaders spirituels et membres de communautés chrétiennes
            partagent leur enthousiasme pour ConnectStar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 min-h-[400px] flex flex-col"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-blue-400" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic flex-grow">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 mt-auto">
                <div className="rounded-full flex items-center justify-center">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                      testimonial.name
                    )}&background=${
                      testimonial.color
                    }&color=fff&size=48&rounded=true`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <DynamicCounter className="text-3xl font-bold text-blue-600 mb-2" />
            <div className="text-gray-600">Inscrits en liste d'attente</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Communautés partenaires</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">
              Sécurisé et sans vente de données
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Taux de satisfaction</div>
          </div>
        </div> */}
        <StatsBar
          showBorder
          stats={[
            {
              value: <DynamicCounter className="text-blue-600" />,
              label: "Inscrits en attente",
            },
            { value: "100%", label: "Sécurisé et sans vente de données" },
            { value: "100%", label: "Taux de satisfaction" },
            { value: "2025", label: "Année de lancement" },
          ]}
          className="text-blue-600"
        />
      </div>
    </section>
  );
};

export default Testimonials;
