import { motion } from 'framer-motion';
import FeatureCard from '@/components/layout/FeatureCard';
import { 
  Clock, 
  DollarSign, 
  Headphones, 
  TrendingUp, 
  Maximize, 
  Lightbulb 
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize tarefas repetitivas e libere sua equipe para se concentrar em atividades estratégicas.",
      iconBgClass: "bg-primary-50",
      iconColor: "text-primary-500"
    },
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Reduza custos operacionais ao automatizar processos e eliminar erros humanos.",
      iconBgClass: "bg-accent-50",
      iconColor: "text-accent-500"
    },
    {
      icon: Headphones,
      title: "Melhoria no Atendimento",
      description: "Ofereça atendimento instantâneo 24/7 e melhore a satisfação dos seus clientes.",
      iconBgClass: "bg-secondary-50",
      iconColor: "text-secondary-500"
    },
    {
      icon: TrendingUp,
      title: "Aumento nas Vendas",
      description: "Qualifique mais leads e converta mais clientes com processos automatizados e personalizados.",
      iconBgClass: "bg-primary-50",
      iconColor: "text-primary-500"
    },
    {
      icon: Maximize,
      title: "Escalabilidade",
      description: "Cresça seu negócio sem precisar aumentar proporcionalmente sua equipe.",
      iconBgClass: "bg-accent-50",
      iconColor: "text-accent-500"
    },
    {
      icon: Lightbulb,
      title: "Insights Valiosos",
      description: "Obtenha dados importantes sobre seus clientes para tomar melhores decisões estratégicas.",
      iconBgClass: "bg-secondary-50",
      iconColor: "text-secondary-500"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios da Automação com IA</h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Descubra como a automação inteligente pode transformar seu negócio e melhorar seus resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <FeatureCard 
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                iconBgClass={benefit.iconBgClass}
                iconColor={benefit.iconColor}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
