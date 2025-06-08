import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="section-container pt-8 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">Transe a noite toda:</span>{' '}
            <span className="text-custom-gold"> e recupere a sua Potência na cama em apenas 7 Dias!</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8">
            Um método sigiloso e comprovado que elimina a impotência e a ejaculação precoce, 
            sem remédios ou constrangimentos.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-custom-gold rounded-full mr-2"></div>
              <p className="font-semibold">Dure 4x mais tempo na transando</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-custom-gold rounded-full mr-2"></div>
              <p className="font-semibold">Sigilo absoluto do nosso aplicativo</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-custom-gold rounded-full mr-2"></div>
              <p className="font-semibold">Faça as mulheres comerem em sua mão</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <img 
            src="https://drprecoce.com/wp-content/uploads/2024/02/Mockup-Iphone.png" 
            alt="Método Dr. Precoce App" 
            className="max-w-full h-auto object-contain max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
