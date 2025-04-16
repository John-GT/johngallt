import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  onContactClick: () => void;
}

const CTASection = ({ onContactClick }: CTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio com IA?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Agende uma consulta gratuita e descubra como nossas soluções de automação podem impulsionar seus resultados.
          </p>
          <Button 
            onClick={onContactClick}
            className="bg-white text-primary-600 font-bold px-8 py-4 h-auto rounded-lg shadow-lg hover:bg-neutral-100 transition-all text-lg"
          >
            Agendar Consulta Gratuita
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
