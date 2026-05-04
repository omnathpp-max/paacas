import { motion } from 'framer-motion';
import { Sparkles, User, Briefcase } from 'lucide-react';

const partners = [
  {
    num: '01',
    name: 'CA P K Premnath',
    role: 'Partner',
    description:
      'Second-generation Chartered Accountant practising since 1977. Deep expertise in Statutory Audits, Tax Audits, project reports, and management consultancy.',
  },
  {
    num: '02',
    name: 'CA P K Amarnath',
    role: 'Partner',
    description:
      'Second-generation Chartered Accountant practising since 1978. Specialised in Direct Taxation, from Assessment stage right through to Settlement Commission.',
  },
  {
    num: '03',
    name: 'CA P A Aswin Kumaar',
    role: 'Engagement Partner',
    qualifications: 'MBA (IIM Bangalore) · CFA (USA) · IBBI Registered Valuer',
    description:
      'Leads Chennai operations with expertise in valuation, international taxation, and equity funding.',
  },
];

const associates = [
  { name: 'CA Kaushik Ganesh', firm: 'Sparkwood Advisors' },
  { name: 'Thiagarajan Arumugam', firm: 'Spark Consulting' },
  { name: 'CA Jeevan Kumar', firm: 'Jeevan & Associates' },
  { name: 'CA Gopalakrishnan Natesan', firm: 'GN & Co' },
];

export const Team = () => {
  return (
    <section id="team" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-40 w-[32rem] h-[32rem] rounded-full blur-[140px] bg-[hsl(109_53%_50%/0.06)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-brand-dark bg-[hsl(109_53%_50%/0.1)] border border-[hsl(109_53%_50%/0.25)]">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 leading-[1.05] tracking-tight">
            Meet Our <br className="hidden md:block" />
            <span className="italic font-light text-muted-foreground">Leadership </span>
            <span className="text-brand italic">& People.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl font-light leading-relaxed">
            A small, sharp team of partners and associates committed to delivering advice that
            actually creates value for our clients.
          </p>
        </motion.div>

        {/* Partners — editorial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {partners.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl border border-border bg-card p-8 hover:border-brand/40 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-sm text-muted-foreground tabular-nums">
                  {p.num}
                </span>
                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-brand">
                  <User className="w-5 h-5" strokeWidth={1.75} />
                </div>
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground leading-snug">
                {p.name}
              </h3>
              <p className="text-brand text-sm font-medium mt-1">{p.role}</p>
              {p.qualifications && (
                <p className="text-xs text-muted-foreground mt-3 tracking-wide">
                  {p.qualifications}
                </p>
              )}
              <p className="text-muted-foreground text-base font-light leading-relaxed mt-6">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Associates */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="border-t border-border pt-10"
        >
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Associates
            </h3>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Trusted Network
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {associates.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-brand/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-brand mb-4">
                  <Briefcase className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground leading-tight">
                  {a.name}
                </h4>
                <p className="text-muted-foreground text-sm mt-1 font-light">{a.firm}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};