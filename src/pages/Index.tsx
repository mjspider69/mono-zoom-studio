import { Scene3D } from '@/components/Scene3D';
import { FloatingNavigation } from '@/components/FloatingNavigation';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="relative">
      <Scene3D />
      <Toaster />

      {/* Scroll hint */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] text-sm uppercase tracking-wider animate-pulse pointer-events-none">
        Scroll to Travel
      </div>
    </div>
  );
};

export default Index;
