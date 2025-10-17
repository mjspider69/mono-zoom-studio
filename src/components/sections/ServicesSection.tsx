import { motion } from 'framer-motion';
import { Share2, Globe, FileText, Video, Mail, PenTool, Zap, Package } from 'lucide-react';

const services = [
  {
    icon: Share2,
    title: 'Social Media Handling',
    description: 'Expert management of social platforms to enhance engagement and brand presence'
  },
  {
    icon: Package,
    title: 'Turnkey Projects',
    description: 'Complete solutions from concept to execution, ensuring seamless project delivery'
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom websites tailored for user experience and performance'
  },
  {
    icon: FileText,
    title: 'Content Creation',
    description: 'High-quality content that resonates with target audiences across various formats'
  },
  {
    icon: Video,
    title: 'Reels & Photoshoots',
    description: 'Professional videography and photography services to capture brand stories visually'
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Targeted campaigns that drive engagement and conversions'
  },
  {
    icon: PenTool,
    title: 'Copywriting',
    description: 'Persuasive writing that effectively communicates brand messages'
  },
  {
    icon: Zap,
    title: 'AI Automation',
    description: 'Streamlining processes to enhance efficiency and productivity'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
