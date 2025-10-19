import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Search, Share2, Code, FileText, Camera, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your visibility with strategic search engine optimization.',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Compelling content that engages and converts your audience.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build brand awareness across all major social platforms.',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom web and mobile solutions tailored to your needs.',
  },
  {
    icon: Camera,
    title: 'Photography & Videography',
    description: 'Professional visual content that tells your story.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that maximize your ROI.',
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
