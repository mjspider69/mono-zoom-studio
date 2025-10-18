import { useState } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  onNavigate: (section: number) => void;
  currentSection: number;
}

const sections = ['Home', 'About', 'Solutions', 'Projects', 'Contact'];

export const Navigation = ({ onNavigate, currentSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-8 right-8 z-50 hidden md:block">
        <div className="space-y-2">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => onNavigate(index)}
              className="block text-right group"
            >
              <span className={`text-sm uppercase tracking-wider transition-all duration-300 ${
                currentSection === index 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}>
                {section}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-8 right-8 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground"
        >
          <div className="space-y-2">
            <span className={`block h-0.5 w-8 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block h-0.5 w-8 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-8 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 right-0 bg-background border border-border p-6 space-y-4"
          >
            {sections.map((section, index) => (
              <button
                key={section}
                onClick={() => {
                  onNavigate(index);
                  setIsOpen(false);
                }}
                className={`block text-sm uppercase tracking-wider transition-colors ${
                  currentSection === index 
                    ? 'text-foreground font-medium' 
                    : 'text-muted-foreground'
                }`}
              >
                {section}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Section Indicators */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 space-y-4">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`block w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-foreground scale-150' 
                : 'bg-muted-foreground hover:bg-foreground'
            }`}
          />
        ))}
      </div>
    </>
  );
};
