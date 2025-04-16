import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <span className="text-accent-500 text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" y1="16" x2="8" y2="16" />
                <line x1="16" y1="16" x2="16" y2="16" />
              </svg>
            </span>
            <span className="font-bold text-xl text-neutral-800">IA Automation</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-neutral-600 hover:text-primary-500 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className="text-neutral-600 hover:text-primary-500 font-medium transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => handleNavClick('benefits')}
              className="text-neutral-600 hover:text-primary-500 font-medium transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')}
              className="text-neutral-600 hover:text-primary-500 font-medium transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-neutral-600 hover:text-primary-500 font-medium transition-colors"
            >
              Contato
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-neutral-500 hover:text-neutral-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-neutral-600 hover:text-primary-500 font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('services')}
                className="text-neutral-600 hover:text-primary-500 font-medium transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => handleNavClick('benefits')}
                className="text-neutral-600 hover:text-primary-500 font-medium transition-colors"
              >
                Benefícios
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')}
                className="text-neutral-600 hover:text-primary-500 font-medium transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-neutral-600 hover:text-primary-500 font-medium transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
