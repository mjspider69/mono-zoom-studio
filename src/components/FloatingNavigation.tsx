import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const sections = [
  { name: 'Home', position: 0 },
  { name: 'About', position: 0.2 },
  { name: 'Services', position: 0.4 },
  { name: 'Projects', position: 0.6 },
  { name: 'Contact', position: 0.8 },
];

export const FloatingNavigation = () => {
  const [currentSection, setCurrentSection] = useState(0);

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

  const handleNavigate = (position: number) => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: position * scrollHeight, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-1/2 right-8 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section.name}
            onClick={() => handleNavigate(section.position)}
            className="group flex items-center gap-3"
          >
            <span
              className={cn(
                "text-xs uppercase tracking-wider transition-all opacity-0 group-hover:opacity-100",
                currentSection === index ? "opacity-100 text-foreground" : "text-muted-foreground"
              )}
            >
              {section.name}
            </span>
            <div
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentSection === index
                  ? "bg-foreground scale-125"
                  : "bg-muted-foreground/50 hover:bg-foreground/70"
              )}
            />
          </button>
        ))}
      </div>
    </nav>
  );
};
