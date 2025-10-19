import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export const AboutSection = () => {
  const handleManifestoClick = () => {
    toast({
      title: "Our Manifesto",
      description: "We believe in transforming ordinary ideas into extraordinary outcomes through creativity and innovation.",
    });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-light text-foreground tracking-tight">
          Inside the Lens: Our Story
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          gumming4u is a digital marketing agency dedicated to crafting exceptional 
          digital experiences. Founded by visionaries Aryaan Alam and Isaac Vivian, 
          we transform brands through strategic creativity and cutting-edge technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="space-y-2">
            <h3 className="text-3xl font-light">100+</h3>
            <p className="text-muted-foreground">Projects Delivered</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-light">50+</h3>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-light">2018</h3>
            <p className="text-muted-foreground">Year Founded</p>
          </div>
        </div>
        <Button 
          onClick={handleManifestoClick}
          size="lg"
          className="mt-8 text-lg px-8 py-6"
        >
          Read Our Manifesto
        </Button>
      </div>
    </div>
  );
};
