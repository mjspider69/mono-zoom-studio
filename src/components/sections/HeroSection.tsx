import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const handleExploreClick = () => {
    // Scroll to the About section (20% of total scroll)
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: scrollHeight * 0.2, behavior: 'smooth' });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="text-center space-y-8 px-4">
        <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight">
          Welcome to gumming4u
        </h1>
        <Button 
          onClick={handleExploreClick}
          size="lg"
          className="text-lg px-8 py-6 bg-white text-black hover:bg-gray-200 transition-all"
        >
          Explore More
        </Button>
      </div>
    </div>
  );
};
