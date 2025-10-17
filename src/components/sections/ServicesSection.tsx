import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Brand Strategy',
    description: 'Comprehensive brand development and positioning strategies'
  },
  {
    icon: Target,
    title: 'Digital Marketing',
    description: 'Multi-channel campaigns that drive engagement and conversions'
  },
  {
    icon: TrendingUp,
    title: 'Growth Analytics',
    description: 'Data-driven insights to optimize performance and ROI'
  },
  {
    icon: Megaphone,
    title: 'Social Media',
    description: 'Strategic content creation and community management'
  }
];

export const ServicesSection = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-background text-foreground px-8 overflow-y-auto py-20">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-light mb-16 tracking-tight"
        >
          SERVICES
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-border p-8 hover:bg-card transition-colors duration-300"
            >
              <service.icon className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-light mb-4 tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
