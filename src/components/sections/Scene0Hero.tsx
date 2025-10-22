import { AnimatedButton } from '@/components/AnimatedButton';

export const Scene0Hero = () => {
  const handleExploreClick = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: scrollHeight * (1/7), behavior: 'smooth' });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div className="text-center space-y-8 px-4">
        <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight drop-shadow-[0_0_40px_rgba(255,255,255,1)] animate-pulse-glow">
          Welcome to gumming4u
        </h1>
        <p className="text-xl text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.9)] max-w-2xl mx-auto">
          Transform Ordinary Ideas Into Extraordinary Outcomes
        </p>
        <AnimatedButton
          onClick={handleExploreClick}
          size="lg"
          className="text-lg px-8 py-6 bg-white text-black hover:bg-gray-200 transition-all drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
        >
          Explore More
        </AnimatedButton>
      </div>
    </div>
  );
};
