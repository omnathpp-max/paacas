import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, Users, Lightbulb, HeartHandshake, Award } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Trusted Expertise',
    description: 'Over 45 years of experience in providing reliable chartered accountancy services.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We understand the importance of deadlines and ensure prompt service delivery.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Your success is our priority. We tailor solutions to meet your unique needs.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We stay updated with latest regulations to provide cutting-edge financial advice.',
  },
  {
    icon: HeartHandshake,
    title: 'Ethical Practice',
    description: 'Integrity and transparency are the foundations of our practice.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Trusted by 1000+ clients across various industries and sectors.',
  },
];

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mt-3 mb-6">
            The PAA & Associates{' '}
            <span className="text-gradient-gold">Advantage</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            What sets us apart is our unwavering commitment to excellence, 
            backed by decades of experience and a passion for client success.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>

              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                {reason.title}
              </h3>

              <p className="text-primary-foreground/60 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
