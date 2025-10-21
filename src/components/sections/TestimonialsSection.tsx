import { AnimatedCard } from '@/components/AnimatedCard';
import { useTextReveal, useStaggerAnimation } from '@/hooks/useScrollAnimation';

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

export const TestimonialsSection = () => {
  const titleRef = useTextReveal(true);
  const testimonialsRef = useStaggerAnimation(true, '.testimonial-card');

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-light text-white mb-12">
          Client Testimonials
        </h2>
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <AnimatedCard key={testimonial.name} className="testimonial-card p-8 bg-white/5 border-white/10">
              <p className="text-white/90 italic mb-6">"{testimonial.text}"</p>
              <div className="text-white">
                <p className="font-light">{testimonial.name}</p>
                <p className="text-sm text-white/60">{testimonial.company}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
};
