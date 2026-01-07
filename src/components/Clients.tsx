import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2 } from 'lucide-react';

const clients = [
  'Meenakshi Mission Hospital & Research Centre',
  'CredAvenue',
  'Mad Street Den',
  'Freightify',
  'Carboline',
  'Fleet Studio',
  'IntellectFaces',
  'HortGrow',
  'Eleventh Dimension',
  'Progressio Venture Partners',
  'CMS Group',
  'ConnectIcons',
  'CODPOD',
  'Jintex',
  'WORKez',
  'Score Training',
];

export const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="clients" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Clients
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-6">
            Trusted By{' '}
            <span className="text-gradient-brand">Leading Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From startups to established enterprises, we've helped businesses across industries 
            achieve their financial goals.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="bg-card rounded-xl p-6 shadow-elegant border border-border/50 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <p className="font-medium text-foreground text-sm leading-tight">{client}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
