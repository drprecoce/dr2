import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="section-container pb-[150px]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <a 
            href="https://payment.ticto.app/O946E8E76" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gold-button inline-block"
          >
            Quero Resolver Meu Problema Agora!
          </a>
        </div>
        
        <p className="text-xl font-bold mb-6">
          Você merece se sentir completo novamente. Faça isso por você.
        </p>
        
        <div className="text-sm text-gray-500 mt-12">
          <p>© 2025 Método Dr. Precoce. Todos os direitos reservados.</p>
          <p className="mt-2">
            Os resultados podem variar de pessoa para pessoa. Este produto não substitui 
            orientação médica profissional. Consulte seu médico antes de iniciar qualquer programa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;