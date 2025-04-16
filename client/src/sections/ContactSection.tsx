import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // This would normally send data to the server
      // For this example, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
              <p className="text-neutral-600 text-lg mb-8">
                Estou pronto para ajudar seu negócio a crescer com soluções personalizadas de automação e inteligência artificial.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                    <p className="text-neutral-600">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-neutral-600">contato@iaautomation.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <p className="text-neutral-600">(11) 99999-9999</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">Siga-me nas redes sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-primary-50 hover:text-primary-500 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-primary-50 hover:text-primary-500 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-primary-50 hover:text-primary-500 transition-colors">
                    <Youtube size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-primary-50 hover:text-primary-500 transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-100">
                <h3 className="text-2xl font-bold mb-6">Agende uma Consulta</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <Label htmlFor="name" className="block text-neutral-700 font-medium mb-2">Nome</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="email" className="block text-neutral-700 font-medium mb-2">Email</Label>
                    <Input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">Telefone</Label>
                    <Input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                      placeholder="(XX) XXXXX-XXXX"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="service" className="block text-neutral-700 font-medium mb-2">Serviço de Interesse</Label>
                    <Select value={formData.service} onValueChange={handleSelectChange}>
                      <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="whatsapp">Automação de WhatsApp</SelectItem>
                        <SelectItem value="instagram">Integração com Instagram</SelectItem>
                        <SelectItem value="ai-agent">Agentes de IA para Vendas</SelectItem>
                        <SelectItem value="marketing">Automação de Marketing</SelectItem>
                        <SelectItem value="website">Website com IA</SelectItem>
                        <SelectItem value="crm">Integração com CRM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="message" className="block text-neutral-700 font-medium mb-2">Mensagem</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                      placeholder="Conte um pouco sobre seu negócio e suas necessidades..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold py-3 px-6 h-auto rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
