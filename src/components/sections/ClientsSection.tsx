import { AnimatedCard } from '@/components/AnimatedCard';
import { useTextReveal, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const clients = [
  'TechCorp Global', 'StyleHub Fashion', 'HealthFirst Clinic', 'EduTech Solutions',
  'RealEstate Pro', 'FoodieDelight', 'FinanceHub', 'GreenEnergy Co'
];

export const ClientsSection = () => {
  const titleRef = useTextReveal(true);
  const clientsRef = useStaggerAnimation(true, '.client-card');

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-light text-white mb-12">
          Our Clients
        </h2>
        <div ref={clientsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client) => (
            <AnimatedCard key={client} className="client-card p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
              <h3 className="text-lg text-white font-light">{client}</h3>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
};
