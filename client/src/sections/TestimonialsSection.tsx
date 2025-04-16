import { motion } from 'framer-motion';
import TestimonialCard from '@/components/layout/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      company: "Agência de Marketing",
      testimonial: "A automação do WhatsApp revolucionou nosso atendimento ao cliente. Conseguimos responder muito mais rápido e qualificar leads de forma muito mais eficiente.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      company: "E-commerce de Moda",
      testimonial: "Nossa taxa de conversão aumentou em 35% depois que implementamos o chatbot de IA no nosso site. Os clientes adoram o atendimento instantâneo.",
      rating: 5
    },
    {
      name: "Juliana Costa",
      company: "Clínica Odontológica",
      testimonial: "Com a automação do Instagram e WhatsApp, nossa agenda está sempre cheia. O sistema de qualificação de leads nos ajuda a focar nos clientes mais promissores.",
      rating: 4.5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            Veja como nossas soluções de automação com IA estão transformando negócios.
          </p>
        </div>
        
        <div className="relative testimonials-slider">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <TestimonialCard 
                  name={testimonial.name}
                  company={testimonial.company}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
