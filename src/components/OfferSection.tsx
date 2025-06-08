import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const OfferSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="section-container bg-gray-900 bg-opacity-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Dure mais na cama e transe 30, 40, 50 minutos sem parar!</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle2 className="text-custom-gold h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg">Acesso vitalício ao Método Dr. Precoce, com vídeos, plano nutricional afrodisíaco e suporte opcional.</p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="text-custom-gold h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg">Guia Nutricional Afrodisíaco - Para potencializar sua performance.</p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="text-custom-gold h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg">Exercícios Secretos para Durar Mais - Técnicas exclusivas para controle.</p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="text-custom-gold h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg">Guia para conseguir conquistar uma mulher de 22 aninhos  .</p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="text-custom-gold h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg">Conquiste Qualquer Mulher por Conversar no Instagram - Do oi ao eu te amo.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-full bg-custom-black p-8 rounded-lg border border-custom-gold">
              <div className="text-center mb-4">
                <p className="text-lg mb-2">Oferta especial. Seja homem, decida agora:</p>
                <div className="bg-custom-gold text-custom-black py-2 px-4 rounded-lg inline-block">
                  <span className="font-bold text-xl">
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-sm mt-2 text-red-500">
                  ⚠️ O preço aumentará para R$397 quando esse tempo acabar!
                </p>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-gray-400 text-lg line-through">De R$397</p>
                <p className="text-custom-gold text-4xl font-bold">Por R$19,90</p>
                <p className="text-gray-400 text-sm mt-1">Pagamento único</p>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-center mb-4">
                  <ShieldCheck className="text-custom-gold h-16 w-16" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg">Garantia de 30 dias</p>
                  <p className="text-sm text-gray-300">Se não funcionar na primeira transa, devolvemos seu dinheiro</p>
                </div>
              </div>
              
              <a 
                href="https://payment.ticto.app/O2FF80A38" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="gold-button block text-center"
              >
                Adquirir agora!
              </a>
              
              <p className="text-center text-sm mt-4 text-gray-400">
                Pagamento 100% seguro e acesso imediato
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl mb-6">
            Pare de ser um broxa. Por menos de R$1 por dia, você vai recuperar sua potência na cama.
          </p>
          <p className="text-xl font-bold text-custom-gold">
            Não espere mais uma noite de frustração. É agora ou nunca!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
