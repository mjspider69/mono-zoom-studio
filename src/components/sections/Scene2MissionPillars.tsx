import { AnimatedCard } from '@/components/AnimatedCard';
import { useTextReveal, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const pillars = [
  { title: 'Innovation', description: 'Pushing boundaries with creative solutions' },
  { title: 'Collaboration', description: 'Working together to achieve excellence' },
  { title: 'Excellence', description: 'Delivering quality in every project' }
];

export const Scene2MissionPillars = () => {
  const titleRef = useTextReveal(true);
  const pillarsRef = useStaggerAnimation(true, '.pillar-card');

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-light text-white tracking-tight mb-8 drop-shadow-[0_0_35px_rgba(255,255,255,1)]">
            Our Mission
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]">
            To empower businesses through strategic digital marketing, creative excellence, and cutting-edge technology, 
            transforming ordinary ideas into extraordinary outcomes.
          </p>
        </div>

        <div ref={pillarsRef}>
          <h3 className="text-3xl font-light text-center mb-8 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]">Three Pillars</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <AnimatedCard key={pillar.title} className="pillar-card p-6 bg-white/10 border-white/20 text-center">
                <h4 className="text-2xl font-light mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">{pillar.title}</h4>
                <p className="text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">{pillar.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
