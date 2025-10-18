import { motion } from 'framer-motion';
import { Target, Users, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Pushing boundaries with creative solutions that set new industry standards'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building strong partnerships with clients to achieve shared success'
  },
  {
    icon: TrendingUp,
    title: 'Excellence',
    description: 'Delivering exceptional results through dedication and expertise'
  }
];

const values = ['Integrity', 'Creativity', 'Accountability', 'Inclusivity', 'Innovation', 'Excellence'];

export const AboutSection = () => {
  return (
    <div className="w-screen h-screen bg-foreground text-background overflow-y-auto py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-light mb-12 tracking-tight"
        >
          ABOUT US
        </motion.h2>
        
        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-light mb-6">OUR STORY</h3>
          <p className="text-xl font-light leading-relaxed mb-4">
            Gumming4U, founded by Aryaan Alam in 2023, is more than just a marketing firm—it embodies a vision of inclusivity and creativity in the marketing landscape.
          </p>
          <p className="text-lg font-light leading-relaxed opacity-80">
            We emerged from a desire to create a workspace where young, innovative minds can thrive, regardless of their academic backgrounds. Under the guidance of Isaac Vivian and Aryaan Alam, we've become one of Chennai's fastest-growing marketing agencies.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 border border-background/20 p-8"
        >
          <h3 className="text-3xl font-light mb-4">OUR MISSION</h3>
          <p className="text-xl font-light leading-relaxed">
            To transform ordinary ideas into extraordinary outcomes through strategic digital marketing, cutting-edge technology, and a relentless focus on client success.
          </p>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-light mb-8">LEADERSHIP</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-background/20 p-8">
              <h4 className="text-2xl font-light mb-2">Aryaan Alam</h4>
              <p className="text-sm uppercase tracking-wider opacity-60 mb-4">Founder & Managing Director</p>
              <p className="font-light opacity-80">
                Visionary leader who established Gumming4U with a mission to democratize creative marketing and empower young talent.
              </p>
            </div>
            <div className="border border-background/20 p-8">
              <h4 className="text-2xl font-light mb-2">Isaac Vivian</h4>
              <p className="text-sm uppercase tracking-wider opacity-60 mb-4">Marketing Director</p>
              <p className="font-light opacity-80">
                Strategic mind driving innovative campaigns and building lasting client relationships across diverse industries.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-light mb-8">THREE PILLARS</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="border border-background/20 p-8"
              >
                <pillar.icon className="w-12 h-12 mb-4" />
                <h4 className="text-2xl font-light mb-4">{pillar.title}</h4>
                <p className="font-light opacity-80">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-8"
        >
          <h3 className="text-3xl font-light mb-8">OUR VALUES</h3>
          <div className="flex flex-wrap gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="border border-background/20 px-8 py-4"
              >
                <p className="text-xl font-light">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
