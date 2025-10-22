import { AnimatedCard } from '@/components/AnimatedCard';
import { useTextReveal, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { Target, Share2, Code, FileText, Camera, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Strategic campaigns to generate high-quality leads and drive conversions.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build brand awareness across all major social platforms.',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom web and mobile applications with cutting-edge technology.',
  },
  {
    icon: FileText,
    title: 'Content Creation',
    description: 'Compelling, SEO-optimized content that engages your audience.',
  },
  {
    icon: Camera,
    title: 'Photography & Videography',
    description: 'Professional visual content production and brand films.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns optimized for maximum ROI.',
  },
];

export const Scene5Solutions = () => {
  const titleRef = useTextReveal(true);
  const servicesRef = useStaggerAnimation(true, '.service-card');

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-light text-black tracking-tight text-center mb-12 drop-shadow-[0_0_35px_rgba(0,0,0,0.3)]">
          Our Solutions
        </h2>
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <AnimatedCard key={service.title} className="service-card p-6 bg-gray-50 border-2 border-gray-200 hover:bg-gray-100 transition-colors">
                <div className="space-y-3">
                  <Icon className="w-10 h-10 text-black drop-shadow-[0_0_15px_rgba(0,0,0,0.2)]" />
                  <h3 className="text-xl font-light text-black drop-shadow-[0_0_15px_rgba(0,0,0,0.2)]">{service.title}</h3>
                  <p className="text-gray-700 text-sm drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">{service.description}</p>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};
