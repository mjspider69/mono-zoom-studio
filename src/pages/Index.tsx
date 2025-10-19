import { Scene3D } from '@/components/Scene3D';
import { FloatingNavigation } from '@/components/FloatingNavigation';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="relative">
      <Scene3D />
      <FloatingNavigation />
      <Toaster />
      
      {/* Scroll hint */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-foreground/60 text-sm uppercase tracking-wider animate-pulse pointer-events-none">
        Scroll to Travel
      </div>
    </div>
  );
};

export default Index;
