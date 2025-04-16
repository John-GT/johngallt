import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

const HeroSection = ({ onContactClick, onServicesClick }: HeroSectionProps) => {
  return (
    <section id="home" className="hero-gradient pt-20 pb-24 relative overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Automação com <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600">Inteligência Artificial</span> para o seu negócio
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              Transforme seu atendimento ao cliente e qualificação de leads com soluções avançadas de IA integradas ao WhatsApp e Instagram.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={onContactClick}
                className="bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold px-8 py-6 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Fale com um especialista
              </Button>
              <Button
                onClick={onServicesClick}
                variant="outline"
                className="bg-white text-primary-600 border border-primary-600 font-semibold px-8 py-6 h-auto rounded-lg hover:bg-primary-50 transition-all"
              >
                Conheça os serviços
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center text-primary-600">C</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-accent-100 flex items-center justify-center text-accent-600">M</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary-100 flex items-center justify-center text-secondary-600">J</div>
              </div>
              <p className="text-sm text-neutral-600">
                <span className="font-bold">+45 clientes</span> transformaram seus negócios
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-accent-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="relative">
                <div className="rounded-lg shadow-2xl relative z-10 bg-white p-6 aspect-square flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-40 w-40 text-primary-200">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-24 w-24 text-primary-500">
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <circle cx="12" cy="5" r="2" />
                      <path d="M12 7v4" />
                      <line x1="8" y1="16" x2="8" y2="16" />
                      <line x1="16" y1="16" x2="16" y2="16" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -right-10 -bottom-10 z-20 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                        <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-medium">WhatsApp integrado</p>
                      <p className="text-xs text-neutral-500">Automatize o atendimento</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-10 -top-10 z-20 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl text-purple-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-medium">Instagram conectado</p>
                      <p className="text-xs text-neutral-500">Resposta automática</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
