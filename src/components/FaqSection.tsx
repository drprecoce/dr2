import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria dos homens começa a perceber mudanças significativas em apenas 7 dias, com resultados completos em 21 dias seguindo o método corretamente."
    },
    {
      id: 2,
      question: "O método envolve medicamentos ou suplementos?",
      answer: "Não. O Método Dr. Precoce é 100% natural, sem medicamentos, suplementos ou procedimentos invasivos. Trabalhamos com técnicas, exercícios e estratégias que seu corpo já tem capacidade de realizar."
    },
    {
      id: 3,
      question: "Como funciona o acesso ao método?",
      answer: "Após a compra, você receberá imediatamente acesso ao aplicativo exclusivo e todo o conteúdo do método. Tudo é digital e pode ser acessado de qualquer dispositivo com total sigilo."
    },
    {
      id: 4,
      question: "O que acontece se não funcionar para mim?",
      answer: "Oferecemos garantia de 30 dias. Se você seguir o método corretamente e não obtiver resultados, devolvemos 100% do seu dinheiro, sem questionamentos."
    },
    {
      id: 5,
      question: "Alguém vai saber que eu comprei isso?",
      answer: "Absolutamente não. Garantimos sigilo total. Na sua fatura do cartão aparecerá apenas uma descrição discreta, sem menção ao nome do produto. O aplicativo também tem recursos de privacidade avançados."
    },
    {
      id: 6,
      question: "Preciso de equipamentos especiais?",
      answer: "Não é necessário nenhum equipamento especial. O método foi desenvolvido para ser prático e discreto, utilizando apenas técnicas e exercícios que podem ser realizados em qualquer lugar."
    }
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-container bg-custom-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-gray-900 bg-opacity-60 rounded-lg overflow-hidden border border-gray-800"
            >
              <button
                className="w-full p-5 text-left flex justify-between items-center"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openId === faq.id ? (
                  <ChevronUp className="text-custom-gold h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-custom-gold h-5 w-5 flex-shrink-0" />
                )}
              </button>
              
              {openId === faq.id && (
                <div className="p-5 pt-0 border-t border-gray-800">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;