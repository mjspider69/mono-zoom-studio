import { AnimatedButton } from '@/components/AnimatedButton';
import { AnimatedCard } from '@/components/AnimatedCard';
import { useTextReveal, useStaggerAnimation } from '@/hooks/useScrollAnimation';

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

export const HeroSection = () => {
  const titleRef = useTextReveal(true);
  const industriesRef = useStaggerAnimation(true, '.industry-card');
  const clientsRef = useStaggerAnimation(true, '.client-card');
  const testimonialsRef = useStaggerAnimation(true, '.testimonial-card');

  const handleExploreClick = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: scrollHeight * 0.2, behavior: 'smooth' });
  };

  return (
    <div className="w-screen min-h-screen bg-black overflow-y-auto">
      {/* Hero Intro */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center space-y-8 px-4">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-light text-white tracking-tight drop-shadow-[0_0_40px_rgba(255,255,255,1)] animate-pulse-glow">
            Welcome to gumming4u
          </h1>
          <p className="text-xl text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.9)] max-w-2xl mx-auto">
            Transform Ordinary Ideas Into Extraordinary Outcomes
          </p>
          <AnimatedButton
            onClick={handleExploreClick}
            size="lg"
            className="text-lg px-8 py-6 bg-white text-black hover:bg-gray-200 transition-all drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          >
            Explore More
          </AnimatedButton>
        </div>
      </div>

      {/* Industries We Serve */}
      <div ref={industriesRef} className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12 drop-shadow-[0_0_35px_rgba(255,255,255,1)]">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <AnimatedCard key={industry} className="industry-card p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                <h3 className="text-xl text-white font-light drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]">{industry}</h3>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>

      {/* Our Clients */}
      <div ref={clientsRef} className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12 drop-shadow-[0_0_35px_rgba(255,255,255,1)]">
            Our Clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <AnimatedCard key={client} className="client-card p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                <h3 className="text-lg text-white font-light drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]">{client}</h3>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div ref={testimonialsRef} className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12 drop-shadow-[0_0_35px_rgba(255,255,255,1)]">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <AnimatedCard key={testimonial.name} className="testimonial-card p-8 bg-white/5 border-white/10">
                <p className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] italic mb-6">"{testimonial.text}"</p>
                <div className="text-white">
                  <p className="font-light drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">{testimonial.name}</p>
                  <p className="text-sm text-white/80 drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">{testimonial.company}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
