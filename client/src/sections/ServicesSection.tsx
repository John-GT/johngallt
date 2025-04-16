import { useRef, useState } from 'react';
import ServiceCard from '@/components/layout/ServiceCard';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Instagram, 
  Bot, 
  BarChart2, 
  Globe, 
  Database 
} from 'lucide-react';

interface ServicesSectionProps {
  onContactClick: () => void;
}

const ServicesSection = ({ onContactClick }: ServicesSectionProps) => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  const services = [
    {
      icon: MessageCircle,
      title: "Automação de WhatsApp",
      description: "Atendimento automático via WhatsApp com IA que entende as perguntas dos clientes e fornece respostas precisas sem intervenção humana.",
      features: [
        "Chatbots personalizados",
        "Qualificação automática de leads",
        "Integração com CRM"
      ],
      iconClass: "text-primary-500",
      bgClass: "bg-primary-50"
    },
    {
      icon: Instagram,
      title: "Integração com Instagram",
      description: "Respostas automáticas para mensagens diretas no Instagram, captura de leads e gerenciamento de campanhas.",
      features: [
        "Resposta automática em DMs",
        "Análise de engajamento",
        "Captura e qualificação de leads"
      ],
      iconClass: "text-accent-500",
      bgClass: "bg-accent-50"
    },
    {
      icon: Bot,
      title: "Agentes de IA para Vendas",
      description: "SDRs virtuais que qualificam leads, agendam reuniões e mantêm sua pipeline de vendas sempre ativa.",
      features: [
        "Qualificação avançada de leads",
        "Agendamento automático de reuniões",
        "Follow-ups inteligentes"
      ],
      iconClass: "text-secondary-500",
      bgClass: "bg-secondary-50"
    },
    {
      icon: BarChart2,
      title: "Automação de Marketing",
      description: "Campanhas de marketing automatizadas com segmentação inteligente e personalização baseada em IA.",
      features: [
        "Campanhas multi-canal",
        "Segmentação baseada em IA",
        "Otimização automática de resultados"
      ],
      iconClass: "text-primary-500",
      bgClass: "bg-primary-50"
    },
    {
      icon: Globe,
      title: "Websites com IA",
      description: "Sites personalizados com chatbots e assistentes de voz integrados para melhorar a experiência e conversão.",
      features: [
        "Design personalizado",
        "Chatbot integrado",
        "Assistente de voz"
      ],
      iconClass: "text-accent-500",
      bgClass: "bg-accent-50"
    },
    {
      icon: Database,
      title: "Integração com CRM",
      description: "Conecte todos os canais de comunicação ao seu CRM para uma visão unificada do cliente e automação de processos.",
      features: [
        "Centralização de dados",
        "Automação de fluxos de trabalho",
        "Insights baseados em dados"
      ],
      iconClass: "text-secondary-500",
      bgClass: "bg-secondary-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções Inteligentes para o seu Negócio</h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Automatize processos, qualifique leads e melhore o atendimento ao cliente com nossas soluções personalizadas de IA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={servicesRef}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onViewportEnter={() => setVisibleServices(prev => [...prev, index])}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                iconClass={service.iconClass}
                bgClass={service.bgClass}
                onContactClick={onContactClick}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
