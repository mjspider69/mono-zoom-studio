import { Target, Share2, Code, FileText, Camera, TrendingUp } from 'lucide-react';

export const Scene5_Solutions = () => {
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

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white px-8 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light text-center mb-12 drop-shadow-[0_0_25px_rgba(0,0,0,0.3)]">
          Scene 5: Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <Icon className="w-10 h-10 mb-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.2)]" />
                <h3 className="text-xl font-light mb-3 drop-shadow-[0_0_15px_rgba(0,0,0,0.15)]">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
