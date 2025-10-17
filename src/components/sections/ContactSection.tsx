import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will be connected to backend later
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-background text-foreground px-8 overflow-y-auto py-20">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-light mb-16 tracking-tight"
        >
          CONTACT
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Name" 
                  className="bg-transparent border-foreground/20 focus:border-foreground"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-foreground/20 focus:border-foreground"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Message" 
                  rows={6}
                  className="bg-transparent border-foreground/20 focus:border-foreground resize-none"
                />
              </div>
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-light text-lg mb-1">Email</h3>
                <p className="text-muted-foreground">hello@agency.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-light text-lg mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-light text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">
                  123 Creative Street<br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
