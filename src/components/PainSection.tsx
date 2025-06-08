import React from 'react';

const PainSection: React.FC = () => {
  return (
    <section id="pain-section" className="section-container bg-opacity-50 bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">Você está cansado de depender de azulzinho?</h2>
        
        <div className="bg-black p-8 rounded-lg shadow-lg border border-custom-gold border-opacity-30">
          <div className="space-y-6">
            <div className="pain-point">
              <p className="text-lg md:text-xl">Aquele aperto no peito quando você sabe que vai falhar de novo.</p>
            </div>
            
            <div className="pain-point">
              <p className="text-lg md:text-xl">A vergonha de não satisfazer sua parceira, e ela te trocar por outro mais novo.</p>
            </div>
            
            <div className="pain-point">
              <p className="text-lg md:text-xl">As pílulas que não funcionam mais, os efeitos colaterais que te derrubam.</p>
            </div>
            
            <div className="pain-point">
              <p className="text-lg md:text-xl">A insegurança que destrói sua autoestima e abala sua vida sexual.</p>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center">
            <img 
              src="https://drprecoce.com/wp-content/uploads/2025/05/IMAGEM.webp" 
              alt="Homem frustrado" 
              className="max-w-full h-auto rounded-lg shadow-xl max-h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection
