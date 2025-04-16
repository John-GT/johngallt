import { useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/sections/HeroSection';
import PartnersSection from '@/sections/PartnersSection';
import ServicesSection from '@/sections/ServicesSection';
import WhatsappIntegrationSection from '@/sections/WhatsappIntegrationSection';
import BenefitsSection from '@/sections/BenefitsSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import CTASection from '@/sections/CTASection';
import ContactSection from '@/sections/ContactSection';
import { motion } from 'framer-motion';

const Home = () => {
  const contactRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-neutral-800 overflow-x-hidden">
      <Header />
      
      <main>
        <HeroSection onContactClick={scrollToContact} onServicesClick={scrollToServices} />
        <PartnersSection />
        <ServicesSection onContactClick={scrollToContact} />
        <WhatsappIntegrationSection onContactClick={scrollToContact} />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection onContactClick={scrollToContact} />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
