import React from 'react';
import { Quote, Star } from 'lucide-react';
import DynamicCounter from './DynamicCounter';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie D.",
      role: "Responsable de groupe de jeunes",
      content: "Enfin une messagerie qui correspond à nos valeurs ! J'ai hâte de pouvoir organiser nos études bibliques plus facilement.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Pasteur Jean-Luc M.",
      role: "Église évangélique de Lyon",
      content: "Le concept de Bible intégrée est révolutionnaire. Cela va transformer la façon dont nous échangeons sur la Parole.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sarah K.",
      role: "Étudiante en théologie",
      content: "Une app qui allie technologie moderne et spiritualité, c'est exactement ce dont notre génération a besoin !",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
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
            Des leaders spirituels et membres de communautés chrétiennes partagent leur enthousiasme pour ConnectStar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100">
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-blue-400" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <DynamicCounter className="text-3xl font-bold text-blue-600 mb-2" />
            <div className="text-gray-600">Inscrits en liste d'attente</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Communautés partenaires</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-600">Dénominations représentées</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Taux de satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;