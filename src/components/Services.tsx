import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Calculator,
  FileCheck,
  TrendingUp,
  Building2,
  Gavel,
  FileText,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Audit & Assurance',
    description:
      'Comprehensive statutory audits, internal audits, and assurance services ensuring compliance and transparency.',
  },
  {
    icon: FileCheck,
    title: 'Tax Advisory',
    description:
      'Expert guidance on direct & indirect taxation, GST compliance, tax planning, and representation before authorities.',
  },
  {
    icon: TrendingUp,
    title: 'Business Advisory',
    description:
      'Strategic business consulting, financial planning, and growth advisory to help your business thrive.',
  },
  {
    icon: Building2,
    title: 'Company Formation',
    description:
      'Complete assistance in company registration, LLP formation, partnership deeds, and regulatory compliance.',
  },
  {
    icon: Gavel,
    title: 'Legal Compliance',
    description:
      'ROC filings, secretarial services, FEMA compliance, and regulatory adherence for businesses.',
  },
  {
    icon: FileText,
    title: 'Accounting Services',
    description:
      'Bookkeeping, financial statements, MIS reports, and comprehensive accounting solutions.',
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-6">
            Comprehensive Financial{' '}
            <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From audit and taxation to business advisory, we provide end-to-end 
            chartered accountancy services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card rounded-2xl p-8 shadow-elegant hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-14 h-14 bg-gold-gradient rounded-xl flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-accent font-medium hover:gap-2 transition-all"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
