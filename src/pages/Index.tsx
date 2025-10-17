import { useState, useEffect } from 'react';
import { Scene3D } from '@/components/Scene3D';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNavigate = (section: number) => {
    // Scroll to the appropriate position (20% per section)
    const targetScroll = section * 0.2;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: targetScroll * scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollProgress = scrollPosition / scrollHeight;
      
      // Determine which section we're closest to
      const section = Math.round(scrollProgress * 4);
      setCurrentSection(Math.min(section, 4));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Scene3D />
      <Navigation onNavigate={handleNavigate} currentSection={currentSection} />
      
      {/* Scroll hint */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-foreground/60 text-sm uppercase tracking-wider animate-pulse">
        Scroll to Zoom
      </div>
    </div>
  );
};

export default Index;
