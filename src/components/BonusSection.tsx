import React from 'react';
import { Gift } from 'lucide-react';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      id: 1,
      title: "Guia Nutricional Afrodisíaco",
      description: "Alimentos que potencializam sua performance na cama",
      originalPrice: 97,
      currentPrice: 0,
    },
    {
      id: 2,
      title: "Exercícios Secretos para Durar Mais",
      description: "Técnicas exclusivas para controle e resistência",
      originalPrice: 97,
      currentPrice: 0,
    },
    {
      id: 3,
      title: "Posições para Máximo Prazer",
      description: "As melhores posições para impressionar sua parceira",
      originalPrice: 97,
      currentPrice: 0,
    },
    {
      id: 4,
      title: "Conquiste Qualquer Mulher por Conversar no Instagram",
      description: "Do oi ao eu te amo, o guia completo para conquista feminina",
      originalPrice: 97,
      currentPrice: 0,
    },
  ];

  return (
    <section className="section-container bg-custom-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Bônus Exclusivos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-gradient-to-br from-gray-900 to-custom-black p-6 rounded-lg border border-custom-gold 
                         hover:shadow-lg hover:shadow-custom-gold/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Gift className="text-custom-gold h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">{bonus.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4">{bonus.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-gray-400 line-through mr-2">R${bonus.originalPrice}</span>
                  <span className="text-custom-gold font-bold text-xl">R${bonus.currentPrice}</span>
                </div>
                
                <div className="bg-custom-gold text-custom-black px-3 py-1 rounded-full text-sm font-bold">
                  GRÁTIS
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-xl font-semibold">
            Valor total dos bônus: <span className="text-custom-gold">R$388</span>
          </p>
          <p className="text-lg mt-2">
            Você recebe TUDO GRÁTIS ao adquirir o Método Dr. Precoce hoje!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;