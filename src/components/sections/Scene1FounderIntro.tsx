import { AnimatedCard } from '@/components/AnimatedCard';
import { useTextReveal } from '@/hooks/useScrollAnimation';

export const Scene1FounderIntro = () => {
  const titleRef = useTextReveal(true);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-light text-black tracking-tight text-center mb-8 drop-shadow-[0_0_35px_rgba(0,0,0,0.3)]">
          Meet Our Founder
        </h2>
        
        <AnimatedCard className="p-8 bg-white border-2 border-gray-200">
          <h3 className="text-3xl font-light mb-2 text-black drop-shadow-[0_0_15px_rgba(0,0,0,0.2)]">Aryaan Alam</h3>
          <p className="text-gray-600 mb-4 text-lg drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">Founder & Managing Director</p>
          <p className="text-gray-700 leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Visionary leader with a passion for innovation and strategic thinking. Aryaan drives the company's growth 
            and ensures excellence in every project, transforming digital landscapes for businesses across industries.
          </p>
        </AnimatedCard>

        <AnimatedCard className="p-8 bg-white border-2 border-gray-200">
          <h3 className="text-3xl font-light mb-4 text-black drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]">Company Story</h3>
          <p className="text-gray-700 leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Founded in 2018, gumming4u emerged from a vision to revolutionize digital marketing. What started as a 
            small team of passionate creatives has grown into a full-service agency serving clients across 8+ industries. 
            Our journey has been marked by innovation, dedication, and a commitment to delivering extraordinary outcomes 
            for every client.
          </p>
        </AnimatedCard>
      </div>
    </div>
  );
};
