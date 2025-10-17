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
          OUR STORY
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Gumming4U, founded by Aryaan Alam in 2023, is more than just a marketing firm—it embodies a vision of inclusivity and creativity in the marketing landscape.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
            We emerged from a desire to create a workspace where young, innovative minds can thrive, regardless of their academic backgrounds. Under the guidance of Isaac Vivian and Aryaan Alam, we've become one of Chennai's fastest-growing marketing agencies.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
            Our mission is clear: to transform ordinary ideas into extraordinary outcomes through strategic digital marketing, cutting-edge technology, and a relentless focus on client success.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-light mb-2">100+</div>
              <div className="text-sm uppercase tracking-wider opacity-70">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">50+</div>
              <div className="text-sm uppercase tracking-wider opacity-70">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">2023</div>
              <div className="text-sm uppercase tracking-wider opacity-70">Established</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
