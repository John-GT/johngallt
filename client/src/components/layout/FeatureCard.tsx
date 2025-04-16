import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgClass: string;
  iconColor: string;
}

const FeatureCard = ({ icon: Icon, title, description, iconBgClass, iconColor }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100 flex flex-col hover:shadow-lg transition-all feature-card">
      <div className={`feature-icon w-14 h-14 ${iconBgClass} rounded-full flex items-center justify-center mb-6`}>
        <Icon className={`text-2xl ${iconColor}`} size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-600 flex-grow">{description}</p>
    </div>
  );
};

export default FeatureCard;
