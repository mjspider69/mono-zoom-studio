import { AnimatedCard } from '@/components/AnimatedCard';
import { useTextReveal, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const industries = [
  'E-Commerce', 'Healthcare', 'Real Estate', 'Education',
  'Technology', 'Fashion', 'Food & Beverage', 'Finance'
];

export const IndustriesSection = () => {
  const titleRef = useTextReveal(true);
  const industriesRef = useStaggerAnimation(true, '.industry-card');

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-light text-white mb-12">
          Industries We Serve
        </h2>
        <div ref={industriesRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <AnimatedCard key={industry} className="industry-card p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
              <h3 className="text-xl text-white font-light">{industry}</h3>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
};
