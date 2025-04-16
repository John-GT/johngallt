import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  iconClass: string;
  bgClass: string;
  onContactClick: () => void;
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  iconClass, 
  bgClass,
  onContactClick 
}: ServiceCardProps) => {
  return (
    <div className="service-card bg-white rounded-xl shadow-lg p-6 border border-neutral-100 hover:border-primary-200">
      <div className={`w-16 h-16 ${bgClass} rounded-lg flex items-center justify-center mb-6`}>
        <Icon className={`text-3xl ${iconClass}`} size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-600 mb-6">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="text-secondary-500 mt-1 mr-2 h-4 w-4" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        onClick={onContactClick}
        variant="link" 
        className="text-primary-600 font-medium flex items-center group p-0"
      >
        Saiba mais 
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </Button>
    </div>
  );
};

export default ServiceCard;
