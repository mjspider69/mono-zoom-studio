import { AnimatedCard } from '@/components/AnimatedCard';
import { useTextReveal, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const values = [
  'Integrity', 'Creativity', 'Customer Focus',
  'Quality', 'Accountability', 'Passion'
];

export const Scene4TeamValues = () => {
  const titleRef = useTextReveal(true);
  const valuesRef = useStaggerAnimation(true, '.value-card');

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-light text-white tracking-tight text-center mb-8 drop-shadow-[0_0_35px_rgba(255,255,255,1)]">
          The Team
        </h2>

        <AnimatedCard className="p-8 bg-white/10 border-white/20">
          <h3 className="text-3xl font-light mb-2 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">Isaac Vivian</h3>
          <p className="text-white/90 mb-4 text-lg drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">Marketing Director</p>
          <p className="text-white/80 leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
            Creative genius specializing in brand strategy and digital campaigns. Isaac leads our marketing initiatives 
            with creativity and precision, ensuring every campaign resonates with its target audience.
          </p>
        </AnimatedCard>

        <div ref={valuesRef}>
          <h3 className="text-3xl font-light text-center mb-8 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]">Our Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <AnimatedCard key={value} className="value-card p-6 bg-white/10 border-white/20 text-center">
                <p className="text-xl font-light text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">{value}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
