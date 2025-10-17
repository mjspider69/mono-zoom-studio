import { useState, useEffect } from 'react';
import { Scene3D } from '@/components/Scene3D';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNavigate = (section: number) => {
    // Scroll to the appropriate position
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = (section / 4) * scrollHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollProgress = scrollPosition / scrollHeight;
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
    </div>
  );
};

export default Index;
