import { AnimatedCard } from '@/components/AnimatedCard';
import { useTextReveal, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const industries = [
  'E-Commerce', 'Healthcare', 'Real Estate', 'Education',
  'Technology', 'Fashion', 'Food & Beverage', 'Finance'
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

export const Scene3ClientsSuccess = () => {
  const titleRef = useTextReveal(true);
  const industriesRef = useStaggerAnimation(true, '.industry-card');
  const testimonialsRef = useStaggerAnimation(true, '.testimonial-card');

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white px-4 overflow-y-auto">
      <div className="max-w-6xl mx-auto py-12 space-y-12">
        <div ref={industriesRef}>
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-light text-black text-center mb-8 drop-shadow-[0_0_25px_rgba(0,0,0,0.3)]">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {industries.map((industry) => (
              <AnimatedCard key={industry} className="industry-card p-4 bg-gray-50 border-2 border-gray-200 hover:bg-gray-100 transition-all">
                <h3 className="text-lg text-black font-light text-center drop-shadow-[0_0_15px_rgba(0,0,0,0.2)]">{industry}</h3>
              </AnimatedCard>
            ))}
          </div>
        </div>

        <div ref={testimonialsRef}>
          <h3 className="text-3xl font-light text-black text-center mb-8 drop-shadow-[0_0_25px_rgba(0,0,0,0.3)]">Client Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <AnimatedCard key={testimonial.name} className="testimonial-card p-6 bg-gray-50 border-2 border-gray-200">
                <p className="text-gray-800 drop-shadow-[0_0_15px_rgba(0,0,0,0.2)] italic mb-4">"{testimonial.text}"</p>
                <div className="text-black">
                  <p className="font-light drop-shadow-[0_0_12px_rgba(0,0,0,0.2)]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">{testimonial.company}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
