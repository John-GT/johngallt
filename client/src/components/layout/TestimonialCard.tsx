import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard = ({ name, company, testimonial, rating }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center mb-4">
        {/* Use an avatar with initials instead of an image */}
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-neutral-500">{company}</p>
        </div>
      </div>
      <p className="text-neutral-700 mb-4">
        "{testimonial}"
      </p>
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i}
            className={`h-4 w-4 ${i < rating ? 'fill-current' : 'stroke-current fill-none'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
