import React from 'react';
import { Clock } from 'lucide-react';

const UrgencySection: React.FC = () => {
  return (
    <section className="section-container bg-custom-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Quanto Tempo Você Vai Continuar Sofrendo?</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <Clock className="text-custom-gold h-32 w-32 md:h-48 md:w-48 animate-pulse-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-custom-gold text-2xl font-bold">AGORA</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-6">
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border-l-4 border-custom-gold">
              <p className="text-lg md:text-xl">Cada noite perdida é um golpe na sua masculinidade.</p>
            </div>
            
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border-l-4 border-custom-gold">
              <p className="text-lg md:text-xl">Você já tentou de tudo: pílulas, promessas milagrosas, métodos caros… e nada funcionou.</p>
            </div>
            
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border-l-4 border-custom-gold">
              <p className="text-lg md:text-xl">O problema não é você. É que você ainda não encontrou a solução certa.</p>
            </div>
            
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border-l-4 border-custom-gold">
              <p className="text-lg md:text-xl">Se você não agir agora, o que te espera é mais frustração, mais vergonha, mais noites sem confiança.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;