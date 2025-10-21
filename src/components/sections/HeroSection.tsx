import { AnimatedButton } from '@/components/AnimatedButton';
import { useTextReveal } from '@/hooks/useScrollAnimation';

export const HeroSection = () => {
  const titleRef = useTextReveal(true);

  const handleExploreClick = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: scrollHeight * 0.2, behavior: 'smooth' });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="text-center space-y-8 px-4">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-light text-white tracking-tight">
          Welcome to gumming4u
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Transform Ordinary Ideas Into Extraordinary Outcomes
        </p>
        <AnimatedButton 
          onClick={handleExploreClick}
          size="lg"
          className="text-lg px-8 py-6 bg-white text-black hover:bg-gray-200 transition-all"
        >
          Explore More
        </AnimatedButton>
      </div>
    </div>
  );
};
