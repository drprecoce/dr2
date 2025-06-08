import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section className="section-container bg-gray-900 bg-opacity-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">O Método Dr. Precoce é o único aplicativo no mundo que vai fazer você transar com 2 mulheres a noite toda</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Um Método sigiloso, criado para homens como você, que querem potencia em 7 dias.
            </p>
            
            <p className="text-lg mb-6">
              Esqueça remédios, clínicas constrangedoras ou métodos enganosos. Nosso método é natural, prático e definitivo.
            </p>
            
            <div className="bg-custom-black bg-opacity-70 p-6 rounded-lg border border-custom-gold border-opacity-30 mb-6">
              <p className="text-lg font-semibold mb-4">Com apenas 10 minutos por dia, 2x por semana, você vai:</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="text-custom-gold h-6 w-6 mr-2 flex-shrink-0 mt-1" />
                  <p>Eliminar a impotência e a ejaculação precoce.</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="text-custom-gold h-6 w-6 mr-2 flex-shrink-0 mt-1" />
                  <p>Recuperar o controle total na cama.</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="text-custom-gold h-6 w-6 mr-2 flex-shrink-0 mt-1" />
                  <p>Conseguir transar 30, 40 minuitos sem opara.</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg">
              Acesse pelo nosso app exclusivo, com sigilo total, e veja resultados em semanas.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="https://drprecoce.com/wp-content/uploads/2025/04/plan-alimentar.png" 
                alt="App Dr. Precoce" 
                className="max-h-[500px] object-contain"
              />
              <div className="absolute -bottom-4 -right-4 bg-custom-gold text-custom-black p-2 rounded-full font-bold transform rotate-12 shadow-lg animate-pulse-slow">
                Sigilo Total!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
