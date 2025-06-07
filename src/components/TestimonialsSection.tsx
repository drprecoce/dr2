import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'André',
      age: 45,
      text: 'Eu achava que nunca mais seria o mesmo. Em 2 semanas, minha confiança voltou e minha esposa está surpresa!',
    },
    {
      id: 2,
      name: 'Rafael',
      age: 39,
      text: 'As pílulas me deixavam pior. O Método Dr. Precoce me deu controle e potência sem efeitos colaterais!',
    },
    {
      id: 3,
      name: 'Marcelo',
      age: 42,
      text: 'Não acreditei que funcionaria tão rápido. Comecei a ver resultados em apenas 7 dias, e agora sou outro homem na cama.',
    },
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">Homens Como Você Já Transformaram Suas Vidas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-custom-gold border-opacity-30 
                     hover:border-opacity-70 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-custom-gold h-5 w-5 fill-current" />
                ))}
              </div>
              <Quote className="text-custom-gold h-6 w-6 opacity-50" />
            </div>
            
            <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-custom-gold flex items-center justify-center text-custom-black font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.age} anos</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-xl font-semibold text-custom-gold">
          Você também pode transformar sua vida sexual. Comece agora!
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;