import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Target, Share2, Code, FileText, Camera, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Strategic campaigns to generate high-quality leads and drive conversions through targeted marketing.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage audiences across all major social platforms with creative content.',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom web and mobile applications tailored to your business needs with cutting-edge technology.',
  },
  {
    icon: FileText,
    title: 'Content Creation',
    description: 'Compelling, SEO-optimized content that engages your audience and tells your brand story.',
  },
  {
    icon: Camera,
    title: 'Photography & Videography',
    description: 'Professional visual content production including product shoots, corporate videos, and brand films.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns optimized for maximum ROI across all digital channels.',
  },
];

export const SolutionsSection = () => {
  const handleViewDetails = (service: string) => {
    toast({
      title: service,
      description: "Our team will create a custom solution tailored to your needs.",
    });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-background px-4 py-12 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light text-foreground tracking-tight text-center mb-12">
          Shutter Speed: Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="p-6 bg-card hover:bg-muted/50 transition-colors">
                <div className="space-y-4">
                  <Icon className="w-10 h-10 text-foreground" />
                  <h3 className="text-xl font-light">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <Button 
                    onClick={() => handleViewDetails(service.title)}
                    variant="outline"
                    className="w-full"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
