import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.jpg';

export const HeroSection = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img src={logo} alt="Gumming4U" className="h-32 mx-auto mb-8 object-contain" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-9xl font-light mb-6 tracking-tight"
        >
          GUMMING4U
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-light text-muted-foreground mb-12"
        >
          Transform Ordinary Ideas Into Extraordinary Outcomes
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ChevronDown className="mx-auto w-8 h-8 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};
