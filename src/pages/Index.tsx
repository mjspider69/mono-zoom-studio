import { useState, useCallback } from 'react';
import { Scene3D } from '@/components/Scene3D';
import { Toaster } from '@/components/ui/toaster';

const SECTION_SCROLL_HEIGHTS = [
  0,          // Home (0/15)
  0.067,      // About (1/15) - expanded for better scroll visibility
  0.133,      // Solutions (2/15) - expanded
  0.2,        // Projects (3/15) - expanded
  0.267,      // Contact (4/15) - expanded for final padding
];

const Index = () => {
  const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

  const handleNavigate = useCallback((sectionIndex: number) => {
    if (!scrollRef) return;

    const scrollHeight = scrollRef.scrollHeight - window.innerHeight;
    const targetScroll = SECTION_SCROLL_HEIGHTS[sectionIndex] * scrollHeight;
    scrollRef.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }, [scrollRef]);

  const handleExplore = useCallback(() => {
    handleNavigate(1);
  }, [handleNavigate]);

  return (
    <div
      ref={setScrollRef}
      className="relative w-screen h-screen overflow-y-scroll overflow-x-hidden"
    >
      <Scene3D onExplore={handleExplore} onNavigate={handleNavigate} />
      <Toaster />

      {/* Scroll hint */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-foreground/60 text-sm uppercase tracking-wider animate-pulse pointer-events-none">
        Scroll to Travel
      </div>
    </div>
  );
};

export default Index;
