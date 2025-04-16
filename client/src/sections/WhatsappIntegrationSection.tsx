import { motion } from 'framer-motion';
import { MessageSquare, UserCheck, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsappIntegrationSectionProps {
  onContactClick: () => void;
}

const WhatsappIntegrationSection = ({ onContactClick }: WhatsappIntegrationSectionProps) => {
  const features = [
    {
      icon: MessageSquare,
      title: "Respostas Inteligentes",
      description: "Nossa IA entende as dúvidas dos clientes e responde com precisão como um humano.",
      bgClass: "bg-primary-50",
      iconClass: "text-primary-500"
    },
    {
      icon: UserCheck,
      title: "Qualificação de Leads",
      description: "Identifique automaticamente os leads mais promissores e direcione para a equipe de vendas.",
      bgClass: "bg-accent-50",
      iconClass: "text-accent-500"
    },
    {
      icon: PieChart,
      title: "Análise de Conversas",
      description: "Extraia insights valiosos das conversas e melhore continuamente suas estratégias.",
      bgClass: "bg-secondary-50",
      iconClass: "text-secondary-500"
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative rounded-lg shadow-xl overflow-hidden bg-white p-4">
              <div className="absolute top-0 left-0 w-full h-8 bg-green-500 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="pt-10 h-[400px] flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 p-2">
                  <div className="flex justify-end">
                    <div className="bg-neutral-100 p-3 rounded-lg rounded-tr-none max-w-[70%]">
                      <p className="text-sm">Olá! Gostaria de saber mais sobre automação com IA.</p>
                      <span className="text-xs text-neutral-500 flex justify-end mt-1">14:22</span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-green-100 p-3 rounded-lg rounded-tl-none max-w-[70%]">
                      <p className="text-sm">Olá! Tudo bem? Claro, posso te ajudar com informações sobre nossa automação com IA. O que você gostaria de saber especificamente?</p>
                      <span className="text-xs text-neutral-500 flex justify-end mt-1">14:23</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-neutral-100 p-3 rounded-lg rounded-tr-none max-w-[70%]">
                      <p className="text-sm">Quero entender como funciona a integração com WhatsApp para minha empresa.</p>
                      <span className="text-xs text-neutral-500 flex justify-end mt-1">14:25</span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-green-100 p-3 rounded-lg rounded-tl-none max-w-[70%]">
                      <p className="text-sm">Nossa solução de WhatsApp permite atender centenas de clientes simultaneamente. O sistema usa IA para entender as mensagens e responder automaticamente, qualificando leads e direcionando apenas os casos que precisam de atenção humana para sua equipe.</p>
                      <span className="text-xs text-neutral-500 flex justify-end mt-1">14:26</span>
                    </div>
                  </div>
                </div>
                <div className="border-t p-3 flex">
                  <input 
                    type="text" 
                    placeholder="Digite uma mensagem..." 
                    className="flex-1 bg-neutral-100 rounded-full px-4 py-2 mr-2"
                  />
                  <button className="rounded-full bg-green-500 w-10 h-10 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13"></path>
                      <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforme seu WhatsApp em uma Máquina de Vendas</h2>
            <p className="text-neutral-600 text-lg mb-8">
              Nossa automação de WhatsApp permite que você atenda centenas de clientes simultaneamente, qualifique leads e feche negócios 24 horas por dia, 7 dias por semana.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`feature-icon mr-4 w-12 h-12 ${feature.bgClass} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className={`${feature.iconClass} text-xl`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-10">
              <Button 
                onClick={onContactClick}
                className="bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold px-8 py-4 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Quero automatizar meu WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappIntegrationSection;
