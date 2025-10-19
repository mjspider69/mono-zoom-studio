import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const industries = [
  'E-Commerce', 'Healthcare', 'Real Estate', 'Education',
  'Technology', 'Fashion', 'Food & Beverage', 'Finance'
];

const clients = [
  'TechCorp Global', 'StyleHub Fashion', 'HealthFirst Clinic', 'EduTech Solutions',
  'RealEstate Pro', 'FoodieDelight', 'FinanceHub', 'GreenEnergy Co'
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp Global',
    text: 'gumming4u transformed our digital presence. Their strategic approach increased our leads by 300%.'
  },
  {
    name: 'Michael Chen',
    company: 'StyleHub Fashion',
    text: 'Outstanding creativity and execution. The team delivered beyond our expectations every time.'
  },
  {
    name: 'Emily Rodriguez',
    company: 'HealthFirst Clinic',
    text: 'Professional, innovative, and results-driven. Our best marketing partner by far.'
  }
];

interface HeroSectionProps {
  onExplore?: () => void;
}

export const HeroSection = ({ onExplore }: HeroSectionProps) => {
  const handleExploreClick = () => {
    if (onExplore) {
      onExplore();
    } else {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: scrollHeight * 0.2, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-screen min-h-screen bg-black overflow-y-auto">
      {/* Hero Intro */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center space-y-8 px-4">
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight">
            Welcome to gumming4u
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Transform Ordinary Ideas Into Extraordinary Outcomes
          </p>
          <Button 
            onClick={handleExploreClick}
            size="lg"
            className="text-lg px-8 py-6 bg-white text-black hover:bg-gray-200 transition-all"
          >
            Explore More
          </Button>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <Card key={industry} className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                <h3 className="text-xl text-white font-light">{industry}</h3>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Our Clients */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12">
            Our Clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <Card key={client} className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                <h3 className="text-lg text-white font-light">{client}</h3>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-8 bg-white/5 border-white/10">
                <p className="text-white/90 italic mb-6">"{testimonial.text}"</p>
                <div className="text-white">
                  <p className="font-light">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
