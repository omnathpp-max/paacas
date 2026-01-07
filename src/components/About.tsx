import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Founded by CA P.K. Amarnath, CA P.K. Premnath & CA P.A. Aswin Kumaar',
  'Head Office in Madurai, Branch Office in Chennai',
  'Partners practicing since early 1980',
  'Comprehensive accounting & consulting services',
  'Strong ethical foundation & client-first approach',
  'Deep expertise in Indian taxation & compliance',
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-6">
              A Legacy of Trust & Excellence in{' '}
              <span className="text-gradient-gold">Financial Advisory</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              PAA & Associates, Chartered Accountants, was founded by three distinguished 
              partners who have been in practice since the early 1980s. With our head office 
              in Madurai led by CA P.K. Amarnath and a branch office in Chennai headed by 
              CA P.A. Aswin Kumaar, we offer comprehensive financial services across South India.
            </p>

            <div className="grid gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-navy-light transition-colors"
            >
              Learn More About Us
            </a>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-card rounded-2xl shadow-elegant p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gold-gradient rounded-xl flex items-center justify-center shadow-gold">
                    <span className="text-primary font-display font-bold text-2xl">CA</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      PAA & Associates
                    </h3>
                    <p className="text-muted-foreground">Chartered Accountants</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-secondary rounded-xl p-6 text-center">
                    <p className="text-3xl font-display font-bold text-accent">1980</p>
                    <p className="text-sm text-muted-foreground mt-1">Year Founded</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-6 text-center">
                    <p className="text-3xl font-display font-bold text-accent">3</p>
                    <p className="text-sm text-muted-foreground mt-1">Partner Experts</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "Our commitment to excellence and integrity has been the cornerstone 
                    of our practice for over four decades."
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
