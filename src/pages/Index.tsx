import { useState, useCallback } from 'react';
import { Scene3D } from '@/components/Scene3D';
import { Navigation } from '@/components/Navigation';
import { Toaster } from '@/components/ui/toaster';

const sections = [
  { name: 'Home', id: 0 },
  { name: 'About', id: 1 },
  { name: 'Solutions', id: 2 },
  { name: 'Projects', id: 3 },
  { name: 'Contact', id: 4 },
];

const SECTION_SCROLL_HEIGHTS = [
  0,      // Home
  0.22,   // About
  0.44,   // Solutions
  0.66,   // Projects
  0.88,   // Contact
];

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

  const handleNavigate = useCallback((sectionIndex: number) => {
    if (!scrollRef) return;

    const scrollHeight = scrollRef.scrollHeight - window.innerHeight;
    const targetScroll = SECTION_SCROLL_HEIGHTS[sectionIndex] * scrollHeight;
    scrollRef.scrollTo({ top: targetScroll, behavior: 'smooth' });
    setCurrentSection(sectionIndex);
  }, [scrollRef]);

  const handleExplore = useCallback(() => {
    handleNavigate(1);
  }, [handleNavigate]);

  const handleScroll = useCallback(() => {
    if (!scrollRef) return;

    const scrollHeight = scrollRef.scrollHeight - window.innerHeight;
    const scrollPosition = scrollRef.scrollTop;
    const scrollProgress = scrollPosition / scrollHeight;

    const sectionIndex = Math.round(scrollProgress * 4);
    setCurrentSection(Math.min(sectionIndex, 4));
  }, [scrollRef]);

  return (
    <div
      ref={setScrollRef}
      className="relative w-screen h-screen overflow-y-scroll overflow-x-hidden"
      onScroll={handleScroll}
    >
      <Scene3D onExplore={handleExplore} onNavigate={handleNavigate} />
      <Navigation onNavigate={handleNavigate} currentSection={currentSection} />
      <Toaster />

      {/* Scroll hint */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-foreground/60 text-sm uppercase tracking-wider animate-pulse pointer-events-none">
        Scroll to Travel
      </div>
    </div>
  );
};

export default Index;
