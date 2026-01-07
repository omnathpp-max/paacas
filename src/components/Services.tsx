import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Globe,
  ClipboardCheck,
  Rocket,
  TrendingUp,
  Users2,
  FileCheck,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Valuation',
    slug: 'valuation',
    description:
      'Business valuation for sale value, partner ownership, taxation, FEMA compliance, and M&A transactions.',
  },
  {
    icon: Globe,
    title: 'International Advisory',
    slug: 'international-advisory',
    description:
      'Transaction advisory, tax advisory for multinationals, transfer pricing, and cross-border tax planning.',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit & Assurance',
    slug: 'audit-assurance',
    description:
      'Comprehensive statutory audits, internal audits, and assurance services ensuring compliance and transparency.',
  },
  {
    icon: Rocket,
    title: 'Start-up & Virtual CFO',
    slug: 'startup-virtual-cfo',
    description:
      'Complete finance and accounting solutions for startups with remote CFO services and regulatory compliance.',
  },
  {
    icon: TrendingUp,
    title: 'Equity Funding & Debt Syndication',
    slug: 'equity-funding-debt-syndication',
    description:
      'End-to-end syndication services from strategic planning to fund floating with Rs 200+ crores in deals closed.',
  },
  {
    icon: Users2,
    title: 'Management Consultancy',
    slug: 'management-consultancy',
    description:
      'Finance shared services, outsourcing, strategy transformation, and business performance management.',
  },
  {
    icon: FileCheck,
    title: 'Regulatory & Compliance',
    slug: 'regulatory-compliance',
    description:
      'Income Tax, GST, Companies Act compliance, ROC filings, and secretarial services.',
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
            <span className="text-gradient-brand">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From valuation and international advisory to startup support, we provide end-to-end 
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
              <div className="w-14 h-14 bg-brand-gradient rounded-xl flex items-center justify-center mb-6 shadow-brand group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-1 text-accent font-medium hover:gap-2 transition-all"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
