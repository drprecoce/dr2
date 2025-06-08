import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="section-container pb-[150px]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <a 
            href="https://payment.ticto.app/O2FF80A38" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gold-button inline-block"
          >
            Adquirir o Método agora!
          </a>
        </div>
        
        <p className="text-xl font-bold mb-6">
          Chegou a hora de aguentar mulheres de 22 aninhos novamente.
        </p>
        
        <div className="text-sm text-gray-500 mt-12">
          <p>© 2025 Método Dr. Precoce. Todos os direitos reservados.</p>
          <p className="mt-2">
            Os resultados podem variar de pessoa para pessoa. Este produto não substitui 
            orientação médica profissiona.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
