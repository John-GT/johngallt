import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    { name: "WhatsApp", icon: "message-circle" },
    { name: "Instagram", icon: "instagram" },
    { name: "Google IA", icon: "search" },
    { name: "ChatGPT", icon: "message-square" },
    { name: "Analytics", icon: "bar-chart" },
  ];

  return (
    <section className="py-10 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-neutral-500 mb-8">Tecnologias que utilizamos</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 mr-2 text-neutral-600" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {partner.icon === "message-circle" && (
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                )}
                {partner.icon === "instagram" && (
                  <>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </>
                )}
                {partner.icon === "search" && (
                  <>
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </>
                )}
                {partner.icon === "message-square" && (
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                )}
                {partner.icon === "bar-chart" && (
                  <>
                    <line x1="12" y1="20" x2="12" y2="10"></line>
                    <line x1="18" y1="20" x2="18" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                  </>
                )}
              </svg>
              <span className="text-neutral-600 font-medium">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
