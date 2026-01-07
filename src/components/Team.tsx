import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Briefcase } from 'lucide-react';

const partners = [
  {
    name: 'CA P K Premnath',
    role: 'Partner',
    description: 'A second generation Chartered Accountant practicing since 1977. Enormous experience in Statutory Audits, Tax Audits, project reports, and management consultancy.',
  },
  {
    name: 'CA P K Amarnath',
    role: 'Partner',
    description: 'A second generation Chartered Accountant practicing since 1978. Specialized in Direct Taxation with experience from Assessment stage till Settlement Commission.',
  },
  {
    name: 'CA P A Aswin Kumaar',
    role: 'Partner',
    qualifications: 'MBA (IIM Bangalore), CFA (USA), IBBI Registered Valuer',
    description: 'Engagement Partner with expertise in valuation, international taxation, and equity funding. Leads the Chennai operations.',
  },
];

const associates = [
  {
    name: 'CA Kaushik Ganesh',
    firm: 'Sparkwood Advisors',
  },
  {
    name: 'Thiagarajan Arumugam',
    firm: 'Spark Consulting',
  },
  {
    name: 'CA Jeevan Kumar',
    firm: 'Jeevan & Associates',
  },
  {
    name: 'CA Gopalakrishnan Natesan',
    firm: 'GN & Co',
  },
];

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-3 mb-6">
            Meet Our{' '}
            <span className="text-gradient-brand">Leadership</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A team of experienced professionals committed to delivering excellence and value to our clients.
          </p>
        </motion.div>

        {/* Partners Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-semibold text-foreground mb-8 text-center"
          >
            Partners
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50 text-center"
              >
                <div className="w-24 h-24 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-brand">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-1">
                  {partner.name}
                </h4>
                <p className="text-accent font-medium mb-2">{partner.role}</p>
                {partner.qualifications && (
                  <p className="text-sm text-muted-foreground mb-3">{partner.qualifications}</p>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Associates Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-display text-2xl font-semibold text-foreground mb-8 text-center"
          >
            Associates
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {associates.map((associate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + 0.1 * index }}
                className="bg-card rounded-xl p-6 shadow-elegant border border-border/50 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                  {associate.name}
                </h4>
                <p className="text-muted-foreground text-sm">{associate.firm}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
