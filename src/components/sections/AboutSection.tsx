import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-foreground text-background px-8">
      <div className="max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-light mb-8 tracking-tight"
        >
          ABOUT
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            We are a forward-thinking digital marketing agency dedicated to transforming brands through innovative strategies and creative excellence.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
            Our team combines data-driven insights with artistic vision to deliver exceptional results that exceed expectations and drive measurable growth.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-light mb-2">50+</div>
              <div className="text-sm uppercase tracking-wider opacity-70">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">200+</div>
              <div className="text-sm uppercase tracking-wider opacity-70">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">15+</div>
              <div className="text-sm uppercase tracking-wider opacity-70">Awards</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
